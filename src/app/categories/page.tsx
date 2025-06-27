import Link from 'next/link'
import { ChefHat, Clock, TrendingUp } from 'lucide-react'

export default function CategoriesPage() {
  const categories = [
    {
      name: 'Breakfast',
      slug: 'breakfast',
      description: 'Start your day with delicious morning meals and energizing breakfast recipes',
      icon: '🍳',
      color: 'from-yellow-400 to-amber-400',
      recipeCount: 150,
      avgTime: '15 min',
      trending: true
    },
    {
      name: 'Lunch',
      slug: 'lunch',
      description: 'Satisfying midday meals, light bites, and quick lunch solutions',
      icon: '🥗',
      color: 'from-blue-400 to-cyan-400',
      recipeCount: 200,
      avgTime: '25 min',
      trending: false
    },
    {
      name: 'Dinner',
      slug: 'dinner',
      description: 'Hearty evening meals, family dinners, and special occasion dishes',
      icon: '🍽️',
      color: 'from-purple-400 to-violet-400',
      recipeCount: 300,
      avgTime: '45 min',
      trending: true
    },
    {
      name: 'Desserts',
      slug: 'desserts',
      description: 'Sweet treats, indulgent desserts, and delightful confections',
      icon: '🍰',
      color: 'from-pink-400 to-purple-400',
      recipeCount: 180,
      avgTime: '30 min',
      trending: true
    },
    {
      name: 'Appetizers',
      slug: 'appetizers',
      description: 'Perfect starters, party snacks, and elegant hors d\'oeuvres',
      icon: '🥨',
      color: 'from-amber-400 to-yellow-400',
      recipeCount: 120,
      avgTime: '20 min',
      trending: false
    },
    {
      name: 'Beverages',
      slug: 'beverages',
      description: 'Refreshing drinks, cocktails, smoothies, and hot beverages',
      icon: '🥤',
      color: 'from-indigo-400 to-blue-400',
      recipeCount: 80,
      avgTime: '10 min',
      trending: false
    },
    {
      name: 'Salads',
      slug: 'salads',
      description: 'Fresh and healthy salad recipes for every season',
      icon: '🥬',
      color: 'from-green-400 to-emerald-400',
      recipeCount: 95,
      avgTime: '15 min',
      trending: false
    },
    {
      name: 'Soups',
      slug: 'soups',
      description: 'Warming soups, broths, and comforting liquid meals',
      icon: '🍲',
      color: 'from-red-400 to-orange-400',
      recipeCount: 110,
      avgTime: '35 min',
      trending: false
    },
    {
      name: 'Snacks',
      slug: 'snacks',
      description: 'Quick bites, healthy snacks, and on-the-go treats',
      icon: '🍿',
      color: 'from-purple-400 to-pink-400',
      recipeCount: 75,
      avgTime: '12 min',
      trending: true
    },
    {
      name: 'Baking',
      slug: 'baking',
      description: 'Breads, pastries, baked goods, and artisan creations',
      icon: '🥖',
      color: 'from-orange-400 to-red-400',
      recipeCount: 140,
      avgTime: '60 min',
      trending: false
    },
    {
      name: 'Vegetarian',
      slug: 'vegetarian',
      description: 'Plant-based recipes and vegetarian-friendly dishes',
      icon: '🥕',
      color: 'from-green-400 to-teal-400',
      recipeCount: 220,
      avgTime: '25 min',
      trending: true
    },
    {
      name: 'International',
      slug: 'international',
      description: 'Global cuisines and authentic international flavors',
      icon: '🌍',
      color: 'from-blue-400 to-purple-400',
      recipeCount: 185,
      avgTime: '40 min',
      trending: true
    }
  ]

  const totalRecipes = categories.reduce((sum, cat) => sum + cat.recipeCount, 0)
  const trendingCategories = categories.filter(cat => cat.trending)

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
            Recipe <span className="text-gradient">Categories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our carefully curated recipe categories. From quick breakfast ideas 
            to elaborate dinner parties, find exactly what you're craving.
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <ChefHat className="w-4 h-4 text-purple-500" />
              <span>{totalRecipes.toLocaleString()} Total Recipes</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-purple-500" />
              <span>{trendingCategories.length} Trending Categories</span>
            </div>
          </div>
        </div>

        {/* Trending Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🔥 Trending Now
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/recipes?category=${category.slug}`}
                className="group relative overflow-hidden"
              >
                <div className="card card-hover relative">
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Trending
                    </div>
                  </div>
                  
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span className="flex items-center">
                      <ChefHat className="w-4 h-4 mr-1" />
                      {category.recipeCount} recipes
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {category.avgTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Categories */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            All Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/recipes?category=${category.slug}`}
                className="group"
              >
                <div className="card card-hover text-center relative">
                  {category.trending && (
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{category.recipeCount} recipes</p>
                  
                  <div className="text-xs text-gray-400 flex items-center justify-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Avg {category.avgTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-purple-100 mb-6">
              Use our advanced search to find recipes by ingredients, dietary restrictions, 
              cooking time, and more!
            </p>
            <Link href="/recipes" className="btn-secondary bg-white text-purple-600 hover:bg-gray-50">
              Advanced Recipe Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
