import { Clock, Users, ChefHat, Star, Heart, Share2, Print, Bookmark } from 'lucide-react'

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  // Sample recipe data - in real app, this would come from database
  const recipe = {
    id: params.id,
    title: 'Classic Chocolate Chip Cookies',
    description: 'These soft and chewy chocolate chip cookies are the perfect treat for any occasion. Made with brown butter and a touch of sea salt, they have the perfect balance of sweet and savory flavors.',
    author: 'Sarah Chen',
    authorAvatar: '/images/avatars/sarah.jpg',
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 24,
    difficulty: 'easy',
    rating: 4.8,
    reviewCount: 127,
    category: 'Desserts',
    cuisine: 'American',
    dietaryTags: ['Vegetarian'],
    ingredients: [
      { amount: '2¼', unit: 'cups', name: 'all-purpose flour' },
      { amount: '1', unit: 'tsp', name: 'baking soda' },
      { amount: '1', unit: 'tsp', name: 'salt' },
      { amount: '1', unit: 'cup', name: 'butter, softened' },
      { amount: '¾', unit: 'cup', name: 'granulated sugar' },
      { amount: '¾', unit: 'cup', name: 'packed brown sugar' },
      { amount: '2', unit: 'large', name: 'eggs' },
      { amount: '2', unit: 'tsp', name: 'vanilla extract' },
      { amount: '2', unit: 'cups', name: 'chocolate chips' }
    ],
    instructions: [
      {
        step: 1,
        description: 'Preheat your oven to 375°F (190°C). Line baking sheets with parchment paper.',
        time: '5 minutes'
      },
      {
        step: 2,
        description: 'In a medium bowl, whisk together flour, baking soda, and salt. Set aside.',
        time: '2 minutes'
      },
      {
        step: 3,
        description: 'In a large bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy, about 3-4 minutes.',
        time: '4 minutes'
      },
      {
        step: 4,
        description: 'Beat in eggs one at a time, then add vanilla extract. Mix until well combined.',
        time: '2 minutes'
      },
      {
        step: 5,
        description: 'Gradually add the flour mixture to the butter mixture, mixing until just combined. Don\'t overmix.',
        time: '2 minutes'
      },
      {
        step: 6,
        description: 'Fold in the chocolate chips until evenly distributed throughout the dough.',
        time: '1 minute'
      },
      {
        step: 7,
        description: 'Drop rounded tablespoons of dough onto prepared baking sheets, spacing them about 2 inches apart.',
        time: '5 minutes'
      },
      {
        step: 8,
        description: 'Bake for 9-11 minutes, or until the edges are golden brown but centers still look slightly underbaked.',
        time: '11 minutes'
      },
      {
        step: 9,
        description: 'Let cool on baking sheet for 5 minutes, then transfer to a wire rack to cool completely.',
        time: '5 minutes'
      }
    ],
    notes: 'For extra flavor, try browning the butter before mixing. Let it cool slightly before using. Store cookies in an airtight container for up to one week.',
    nutrition: {
      calories: 185,
      fat: 8,
      carbs: 28,
      protein: 2,
      fiber: 1,
      sugar: 18
    }
  }

  return (
    <div className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="badge badge-primary">{recipe.category}</span>
                {recipe.dietaryTags.map((tag, index) => (
                  <span key={index} className="badge badge-secondary">{tag}</span>
                ))}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900 leading-tight mb-4">
                {recipe.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {recipe.description}
              </p>

              {/* Author and Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-violet-200 rounded-full flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{recipe.author}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{recipe.rating}</span>
                      <span>({recipe.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-purple-500 hover:bg-purple-50 rounded-lg transition-colors duration-200">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    <Print className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Recipe Image */}
            <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl flex items-center justify-center mb-8">
              <ChefHat className="w-24 h-24 text-amber-600" />
            </div>

            {/* Ingredients */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
              <div className="card">
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                      <span className="text-gray-900">
                        <strong>{ingredient.amount} {ingredient.unit}</strong> {ingredient.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
              <div className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="card">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {instruction.step}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 leading-relaxed mb-2">{instruction.description}</p>
                        {instruction.time && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {instruction.time}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            {recipe.notes && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Chef's Notes</h2>
                <div className="card bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
                  <p className="text-gray-700 leading-relaxed">{recipe.notes}</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Recipe Stats */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recipe Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-600">Prep Time</span>
                    </div>
                    <span className="font-medium">{recipe.prepTime} min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span className="text-gray-600">Cook Time</span>
                    </div>
                    <span className="font-medium">{recipe.cookTime} min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">Total Time</span>
                    </div>
                    <span className="font-medium">{recipe.totalTime} min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-600">Servings</span>
                    </div>
                    <span className="font-medium">{recipe.servings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ChefHat className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-600">Difficulty</span>
                    </div>
                    <span className={`badge difficulty-${recipe.difficulty} capitalize`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Nutrition */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Nutrition (per serving)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Calories</span>
                    <span className="font-medium">{recipe.nutrition.calories}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fat</span>
                    <span className="font-medium">{recipe.nutrition.fat}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carbs</span>
                    <span className="font-medium">{recipe.nutrition.carbs}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Protein</span>
                    <span className="font-medium">{recipe.nutrition.protein}g</span>
                  </div>
                </div>
              </div>

              {/* Save Recipe */}
              <div className="card bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Save This Recipe</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Add this recipe to your collection and access it anytime.
                </p>
                <button className="btn-primary w-full">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
