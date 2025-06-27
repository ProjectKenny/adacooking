import Link from 'next/link'
import { ChefHat, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="text-center px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10">
          {/* 404 Icon */}
          <div className="mb-8">
            <ChefHat className="w-24 h-24 mx-auto text-orange-500 mb-4" />
            <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recipe Not Found</h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Oops! The recipe you're looking for seems to have been eaten. 
              Let's get you back to cooking something delicious!
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/" className="btn-primary">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <Link href="/recipes" className="btn-secondary">
              <Search className="w-5 h-5 mr-2" />
              Browse Recipes
            </Link>
          </div>
          
          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Popular sections:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/recipes?category=breakfast" className="text-orange-600 hover:text-orange-700 text-sm">
                Breakfast
              </Link>
              <Link href="/recipes?category=lunch" className="text-green-600 hover:text-green-700 text-sm">
                Lunch
              </Link>
              <Link href="/recipes?category=dinner" className="text-red-600 hover:text-red-700 text-sm">
                Dinner
              </Link>
              <Link href="/recipes?category=desserts" className="text-pink-600 hover:text-pink-700 text-sm">
                Desserts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
