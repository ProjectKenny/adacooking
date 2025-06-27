'use client'

import { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, Filter, Clock, Star, ChefHat, Grid, List } from 'lucide-react'

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="spinner w-8 h-8"></div>
    </div>
  )
}

// Search and Filter Component
function RecipeSearchAndFilter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const search = searchParams?.get('search') || ''
    const category = searchParams?.get('category') || ''
    const difficulty = searchParams?.get('difficulty') || ''
    
    setSearchQuery(search)
    setSelectedCategory(category)
    setSelectedDifficulty(difficulty)
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    
    if (searchQuery.trim()) params.set('search', searchQuery.trim())
    if (selectedCategory) params.set('category', selectedCategory)
    if (selectedDifficulty) params.set('difficulty', selectedDifficulty)
    
    router.push(`/recipes?${params.toString()}`)
  }

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'breakfast', label: 'Breakfast' },
    { value: 'lunch', label: 'Lunch' },
    { value: 'dinner', label: 'Dinner' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'appetizers', label: 'Appetizers' },
    { value: 'beverages', label: 'Beverages' },
  ]

  const difficulties = [
    { value: '', label: 'All Levels' },
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ]

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 mb-8">
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search recipes by name, ingredient, or cuisine..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-select"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="form-select"
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty.value} value={difficulty.value}>
                {difficulty.label}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="btn-primary"
          >
            <Filter className="w-5 h-5 mr-2" />
            Search Recipes
          </button>
        </div>
      </form>

      {/* View Mode Toggle */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-purple-100">
        <p className="text-gray-600">
          {searchQuery && (
            <span>Showing results for "<strong>{searchQuery}</strong>"</span>
          )}
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              viewMode === 'grid' 
                ? 'bg-purple-100 text-purple-600' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              viewMode === 'list' 
                ? 'bg-purple-100 text-purple-600' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Recipe Grid Component
function RecipeGrid() {
  const sampleRecipes = [
    {
      id: '1',
      title: 'Classic Margherita Pizza',
      description: 'Authentic Italian pizza with fresh basil and mozzarella',
      prepTime: 30,
      cookTime: 15,
      difficulty: 'medium',
      rating: 4.8,
      reviews: 124,
      category: 'dinner'
    },
    {
      id: '2',
      title: 'Chocolate Chip Cookies',
      description: 'Soft and chewy cookies with premium chocolate chips',
      prepTime: 15,
      cookTime: 12,
      difficulty: 'easy',
      rating: 4.9,
      reviews: 89,
      category: 'desserts'
    },
    {
      id: '3',
      title: 'Thai Green Curry',
      description: 'Aromatic curry with coconut milk and fresh herbs',
      prepTime: 20,
      cookTime: 25,
      difficulty: 'hard',
      rating: 4.7,
      reviews: 156,
      category: 'dinner'
    },
    {
      id: '4',
      title: 'Avocado Toast',
      description: 'Healthy breakfast with perfectly ripe avocados',
      prepTime: 5,
      cookTime: 5,
      difficulty: 'easy',
      rating: 4.5,
      reviews: 67,
      category: 'breakfast'
    },
    {
      id: '5',
      title: 'Beef Tacos',
      description: 'Spicy ground beef tacos with fresh toppings',
      prepTime: 15,
      cookTime: 20,
      difficulty: 'medium',
      rating: 4.6,
      reviews: 98,
      category: 'lunch'
    },
    {
      id: '6',
      title: 'Banana Smoothie',
      description: 'Creamy and nutritious breakfast smoothie',
      prepTime: 5,
      cookTime: 0,
      difficulty: 'easy',
      rating: 4.4,
      reviews: 45,
      category: 'beverages'
    }
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sampleRecipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card group">
          <div className="recipe-card-image">
            <ChefHat className="w-16 h-16 text-purple-600 group-hover:scale-110 transition-transform duration-200" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
          
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
            <span className="text-xs text-purple-600 font-medium uppercase tracking-wide">
              {recipe.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Main Recipes Page Component
function RecipesPageContent() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-4">
            Discover Amazing <span className="text-gradient">Recipes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore thousands of delicious recipes from around the world. 
            Find your next favorite dish and start cooking today!
          </p>
        </div>

        {/* Search and Filters */}
        <RecipeSearchAndFilter />

        {/* Recipe Grid */}
        <RecipeGrid />

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Previous
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">2</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">3</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RecipesPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RecipesPageContent />
    </Suspense>
  )
}
