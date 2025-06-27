import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Recipe {
  id: string
  title: string
  description: string
  ingredients: Ingredient[]
  instructions: Instruction[]
  prep_time: number | null
  cook_time: number | null
  servings: number | null
  difficulty: 'easy' | 'medium' | 'hard'
  cuisine_type: string | null
  dietary_tags: string[]
  category_id: string | null
  created_by: string | null
  status: 'draft' | 'published' | 'featured'
  created_at: string
  updated_at: string
  categories?: Category
  profiles?: Profile
  ratings?: Rating[]
  average_rating?: number
  total_ratings?: number
}

export interface Ingredient {
  id: string
  name: string
  amount: string
  unit: string
  notes?: string
}

export interface Instruction {
  id: string
  step_number: number
  description: string
  time_minutes?: number
  temperature?: string
  notes?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  icon_name: string | null
  color_theme: string | null
  created_at: string
}

export interface Profile {
  id: string
  display_name: string | null
  bio: string | null
  avatar_url: string | null
  role: 'user' | 'chef' | 'admin'
  favorite_cuisine: string | null
  cooking_level: 'beginner' | 'intermediate' | 'expert' | null
  created_at: string
  updated_at: string
}

export interface Rating {
  id: string
  recipe_id: string
  user_id: string
  rating: number
  review: string | null
  created_at: string
  profiles?: Profile
}

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string | null
  author_id: string
  category: string
  status: 'draft' | 'published'
  featured: boolean
  created_at: string
  updated_at: string
  profiles?: Profile
}

// Helper functions for common database operations
export const recipeHelpers = {
  async getPublishedRecipes(limit = 10, offset = 0) {
    const { data, error } = await supabase
      .from('recipes')
      .select(`
        *,
        categories(name, slug, icon_name, color_theme),
        profiles(display_name, avatar_url)
      `)
      .eq('status', 'published')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) throw error
    return data
  },

  async getFeaturedRecipes(limit = 6) {
    const { data, error } = await supabase
      .from('recipes')
      .select(`
        *,
        categories(name, slug, icon_name, color_theme),
        profiles(display_name, avatar_url)
      `)
      .eq('status', 'featured')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) throw error
    return data
  },

  async getRecipeById(id: string) {
    const { data, error } = await supabase
      .from('recipes')
      .select(`
        *,
        categories(name, slug, icon_name, color_theme),
        profiles(display_name, avatar_url, bio),
        ratings(rating, review, created_at, profiles(display_name, avatar_url))
      `)
      .eq('id', id)
      .single()

    if (error) throw error
    return data
  },

  async searchRecipes(query: string, filters: {
    category?: string
    difficulty?: string
    cuisine?: string
    dietary?: string[]
  } = {}) {
    let queryBuilder = supabase
      .from('recipes')
      .select(`
        *,
        categories(name, slug, icon_name, color_theme),
        profiles(display_name, avatar_url)
      `)
      .eq('status', 'published')

    if (query) {
      queryBuilder = queryBuilder.textSearch('title', query)
    }

    if (filters.category) {
      queryBuilder = queryBuilder.eq('category_id', filters.category)
    }

    if (filters.difficulty) {
      queryBuilder = queryBuilder.eq('difficulty', filters.difficulty)
    }

    if (filters.cuisine) {
      queryBuilder = queryBuilder.eq('cuisine_type', filters.cuisine)
    }

    if (filters.dietary && filters.dietary.length > 0) {
      queryBuilder = queryBuilder.overlaps('dietary_tags', filters.dietary)
    }

    const { data, error } = await queryBuilder
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }
}

export const categoryHelpers = {
  async getAllCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name')

    if (error) throw error
    return data
  },

  async getCategoryBySlug(slug: string) {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw error
    return data
  }
}

export const profileHelpers = {
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) throw error
    return data
  },

  async updateProfile(userId: string, updates: Partial<Profile>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()

    if (error) throw error
    return data
  }
}
