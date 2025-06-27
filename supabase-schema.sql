-- Ada.cooking Database Schema
-- Run this in your Supabase SQL Editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table for recipe organization
CREATE TABLE categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    icon_name VARCHAR(50), -- For SVG food icons (e.g., 'breakfast', 'lunch', 'dinner')
    color_theme VARCHAR(50), -- CSS color classes (e.g., 'orange', 'green', 'red')
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Recipes table - core recipe content
CREATE TABLE recipes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    ingredients JSONB NOT NULL, -- Array of ingredient objects
    instructions JSONB NOT NULL, -- Array of instruction step objects
    prep_time INTEGER, -- minutes
    cook_time INTEGER, -- minutes
    servings INTEGER,
    difficulty VARCHAR(20) CHECK (difficulty IN ('easy', 'medium', 'hard')),
    cuisine_type VARCHAR(100), -- Italian, Mexican, Asian, etc.
    dietary_tags TEXT[], -- vegetarian, vegan, gluten-free, dairy-free, etc.
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'featured')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Profiles table (extends auth.users)
CREATE TABLE profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    display_name VARCHAR(100),
    bio TEXT,
    avatar_url TEXT,
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'chef', 'admin')),
    favorite_cuisine VARCHAR(100),
    cooking_level VARCHAR(20) CHECK (cooking_level IN ('beginner', 'intermediate', 'expert')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ratings table for recipe reviews
CREATE TABLE ratings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(recipe_id, user_id) -- One rating per user per recipe
);

-- Blog posts table for cooking articles and tips
CREATE TABLE blog_posts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    category VARCHAR(100) NOT NULL, -- cooking-tips, nutrition, kitchen-tools, etc.
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Recipe collections for meal planning
CREATE TABLE recipe_collections (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Junction table for recipes in collections
CREATE TABLE collection_recipes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    collection_id UUID REFERENCES recipe_collections(id) ON DELETE CASCADE,
    recipe_id UUID REFERENCES recipes(id) ON DELETE CASCADE,
    added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(collection_id, recipe_id)
);

-- Indexes for better performance
CREATE INDEX idx_recipes_status ON recipes(status);
CREATE INDEX idx_recipes_category ON recipes(category_id);
CREATE INDEX idx_recipes_created_by ON recipes(created_by);
CREATE INDEX idx_recipes_created_at ON recipes(created_at);
CREATE INDEX idx_recipes_difficulty ON recipes(difficulty);
CREATE INDEX idx_recipes_cuisine_type ON recipes(cuisine_type);
CREATE INDEX idx_recipes_dietary_tags ON recipes USING GIN(dietary_tags);
CREATE INDEX idx_ratings_recipe_id ON ratings(recipe_id);
CREATE INDEX idx_ratings_user_id ON ratings(user_id);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_author ON blog_posts(author_id);

-- Full-text search indexes
CREATE INDEX idx_recipes_search ON recipes USING GIN(to_tsvector('english', title || ' ' || description));
CREATE INDEX idx_blog_posts_search ON blog_posts USING GIN(to_tsvector('english', title || ' ' || content));

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE collection_recipes ENABLE ROW LEVEL SECURITY;

-- Categories: Public read access
CREATE POLICY "Categories are viewable by everyone" ON categories
    FOR SELECT USING (true);

CREATE POLICY "Only admins can modify categories" ON categories
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.role = 'admin'
        )
    );

-- Recipes: Public read for published, owner/admin for all operations
CREATE POLICY "Published recipes are viewable by everyone" ON recipes
    FOR SELECT USING (status IN ('published', 'featured') OR created_by = auth.uid());

CREATE POLICY "Users can insert their own recipes" ON recipes
    FOR INSERT WITH CHECK (created_by = auth.uid());

CREATE POLICY "Users can update their own recipes" ON recipes
    FOR UPDATE USING (created_by = auth.uid());

CREATE POLICY "Users can delete their own recipes" ON recipes
    FOR DELETE USING (created_by = auth.uid());

CREATE POLICY "Admins can manage all recipes" ON recipes
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.role = 'admin'
        )
    );

-- Profiles: Users can view all profiles, but only update their own
CREATE POLICY "Profiles are viewable by everyone" ON profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON profiles
    FOR INSERT WITH CHECK (id = auth.uid());

CREATE POLICY "Users can update their own profile" ON profiles
    FOR UPDATE USING (id = auth.uid());

-- Ratings: Public read, authenticated users can rate
CREATE POLICY "Ratings are viewable by everyone" ON ratings
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert ratings" ON ratings
    FOR INSERT WITH CHECK (auth.uid() IS NOT NULL AND user_id = auth.uid());

CREATE POLICY "Users can update their own ratings" ON ratings
    FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own ratings" ON ratings
    FOR DELETE USING (user_id = auth.uid());

-- Blog posts: Public read for published, author/admin for management
CREATE POLICY "Published blog posts are viewable by everyone" ON blog_posts
    FOR SELECT USING (status = 'published' OR author_id = auth.uid());

CREATE POLICY "Authenticated users can insert blog posts" ON blog_posts
    FOR INSERT WITH CHECK (auth.uid() IS NOT NULL AND author_id = auth.uid());

CREATE POLICY "Authors can update their own blog posts" ON blog_posts
    FOR UPDATE USING (author_id = auth.uid());

CREATE POLICY "Authors can delete their own blog posts" ON blog_posts
    FOR DELETE USING (author_id = auth.uid());

CREATE POLICY "Admins can manage all blog posts" ON blog_posts
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.role = 'admin'
        )
    );

-- Recipe collections: Private by default, public if marked
CREATE POLICY "Public collections are viewable by everyone" ON recipe_collections
    FOR SELECT USING (is_public = true OR user_id = auth.uid());

CREATE POLICY "Users can manage their own collections" ON recipe_collections
    FOR ALL USING (user_id = auth.uid());

-- Collection recipes: Follow collection permissions
CREATE POLICY "Collection recipes follow collection permissions" ON collection_recipes
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM recipe_collections 
            WHERE recipe_collections.id = collection_id 
            AND (recipe_collections.is_public = true OR recipe_collections.user_id = auth.uid())
        )
    );

CREATE POLICY "Users can manage their own collection recipes" ON collection_recipes
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM recipe_collections 
            WHERE recipe_collections.id = collection_id 
            AND recipe_collections.user_id = auth.uid()
        )
    );

-- Functions for automatic profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
    INSERT INTO public.profiles (id, display_name, role)
    VALUES (new.id, new.raw_user_meta_data->>'display_name', 'user');
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile on user signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_recipes_updated_at BEFORE UPDATE ON recipes
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_recipe_collections_updated_at BEFORE UPDATE ON recipe_collections
    FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
