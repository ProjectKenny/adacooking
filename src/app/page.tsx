import { Suspense } from 'react'
import { ChefHat, Clock, Users, Star, Search, TrendingUp } from 'lucide-react'
import Link from 'next/link'

// Loading component for suspense boundaries
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="spinner w-8 h-8"></div>
    </div>
  )
}

// Hero section component
function HeroSection() {
  return (
    <section className="relative section-padding">
      <div className="container-wide">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="heading-1 mb-6">
            Welcome to{' '}
            <span className="text-gradient font-serif">Ada.cooking</span>
          </h1>
          
          {/* Subtitle */}
          <p className="body-large max-w-3xl mx-auto mb-8">
            Discover, create, and share amazing recipes. From quick weeknight dinners 
            to elaborate weekend projects, find your next culinary adventure.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/recipes" className="btn-primary">
              <Search className="w-5 h-5 mr-2" />
              Explore Recipes
            </Link>
            <Link href="/auth/signup" className="btn-secondary">
              <ChefHat className="w-5 h-5 mr-2" />
              Start Cooking
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1,000+</div>
              <div className="text-sm text-gray-600">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Cuisines</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Home Cooks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Featured categories component
function FeaturedCategories() {
  const categories = [
    {
      name: 'Breakfast',
      slug: 'breakfast',
      icon: '🍳',
      color: 'from-yellow-400 to-orange-400',
      count: 150
    },
    {
      name: 'Lunch',
      slug: 'lunch',
      icon: '🥗',
      color: 'from-green-400 to-emerald-400',
      count: 200
    },
    {
      name: 'Dinner',
      slug: 'dinner',
      icon: '🍽️',
      color: 'from-orange-400 to-red-400',
      count: 300
    },
    {
      name: 'Desserts',
      slug: 'desserts',
      icon: '🍰',
      color: 'from-pink-400 to-purple-400',
      count: 180
    },
    {
      name: 'Appetizers',
      slug: 'appetizers',
      icon: '🥨',
      color: 'from-amber-400 to-yellow-400',
      count: 120
    },
    {
      name: 'Beverages',
      slug: 'beverages',
      icon: '🥤',
      color: 'from-blue-400 to-cyan-400',
      count: 80
    }
  ]

  return (
    <section className="section-padding bg-white/50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Explore by Category</h2>
          <p className="body-large text-gray-600">
            Find the perfect recipe for any meal or occasion
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/recipes?category=${category.slug}`}
              className="group"
            >
              <div className="card card-hover text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} recipes</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured recipes component (placeholder)
function FeaturedRecipes() {
  const recipes = [
    {
      id: '1',
      title: 'Classic Margherita Pizza',
      description: 'Authentic Italian pizza with fresh basil and mozzarella',
      prepTime: 30,
      cookTime: 15,
      difficulty: 'medium',
      rating: 4.8,
      reviews: 124
    },
    {
      id: '2',
      title: 'Chocolate Chip Cookies',
      description: 'Soft and chewy cookies with premium chocolate chips',
      prepTime: 15,
      cookTime: 12,
      difficulty: 'easy',
      rating: 4.9,
      reviews: 89
    },
    {
      id: '3',
      title: 'Thai Green Curry',
      description: 'Aromatic curry with coconut milk and fresh herbs',
      prepTime: 20,
      cookTime: 25,
      difficulty: 'hard',
      rating: 4.7,
      reviews: 156
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="heading-2 mb-4">Featured Recipes</h2>
            <p className="body-large text-gray-600">
              Hand-picked favorites from our community
            </p>
          </div>
          <Link href="/recipes" className="btn-ghost">
            <TrendingUp className="w-4 h-4 mr-2" />
            View All
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
              <div className="recipe-card">
                <div className="recipe-card-image">
                  <ChefHat className="w-16 h-16 text-orange-600" />
                </div>
                
                <h3 className="heading-4 mb-2">{recipe.title}</h3>
                <p className="body-normal mb-4">{recipe.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {recipe.prepTime + recipe.cookTime} min
                    </span>
                    <span className={`badge difficulty-${recipe.difficulty}`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{recipe.rating}</span>
                    <span className="text-gray-500 ml-1">({recipe.reviews})</span>
                  </div>
                  <Users className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Newsletter signup component
function NewsletterSignup() {
  return (
    <section className="section-padding bg-gradient-to-r from-orange-500 to-red-500">
      <div className="container-narrow">
        <div className="text-center text-white">
          <h2 className="heading-2 mb-4">Stay Updated</h2>
          <p className="body-large mb-8 opacity-90">
            Get the latest recipes, cooking tips, and culinary inspiration delivered to your inbox
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-orange-600 font-medium rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

// Main page component
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedCategories />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedRecipes />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <NewsletterSignup />
      </Suspense>
    </main>
  )
}
