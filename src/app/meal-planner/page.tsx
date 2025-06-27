'use client'

import { useState } from 'react'
import { Calendar, Plus, ShoppingCart, Clock, Users, ChefHat, Download, Share2 } from 'lucide-react'

export default function MealPlannerPage() {
  const [selectedWeek, setSelectedWeek] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState(new Date())

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks']

  const sampleMealPlan = {
    'Monday': {
      'Breakfast': { name: 'Overnight Oats with Berries', time: '15 min', servings: 2 },
      'Lunch': { name: 'Mediterranean Quinoa Bowl', time: '25 min', servings: 2 },
      'Dinner': { name: 'Grilled Salmon with Vegetables', time: '30 min', servings: 2 },
      'Snacks': { name: 'Greek Yogurt with Nuts', time: '5 min', servings: 1 }
    },
    'Tuesday': {
      'Breakfast': { name: 'Avocado Toast with Eggs', time: '10 min', servings: 2 },
      'Lunch': { name: 'Chicken Caesar Salad', time: '20 min', servings: 2 },
      'Dinner': { name: 'Vegetable Stir Fry', time: '25 min', servings: 2 },
      'Snacks': { name: 'Apple with Peanut Butter', time: '2 min', servings: 1 }
    },
    'Wednesday': {
      'Breakfast': { name: 'Smoothie Bowl', time: '10 min', servings: 1 },
      'Lunch': { name: 'Turkey and Hummus Wrap', time: '15 min', servings: 1 },
      'Dinner': { name: 'Pasta with Marinara', time: '35 min', servings: 3 },
      'Snacks': { name: 'Mixed Berries', time: '1 min', servings: 1 }
    }
  }

  const weeklyStats = {
    totalMeals: 21,
    avgPrepTime: '18 min',
    totalServings: 42,
    plannedDays: 7
  }

  const shoppingList = [
    { category: 'Proteins', items: ['Salmon fillets (2 lbs)', 'Chicken breast (1 lb)', 'Eggs (1 dozen)', 'Greek yogurt (32 oz)'] },
    { category: 'Vegetables', items: ['Mixed greens (2 bags)', 'Avocados (4)', 'Bell peppers (3)', 'Broccoli (2 heads)'] },
    { category: 'Grains & Pantry', items: ['Quinoa (1 lb)', 'Rolled oats (1 container)', 'Whole grain bread (1 loaf)', 'Pasta (1 lb)'] },
    { category: 'Fruits', items: ['Mixed berries (2 containers)', 'Bananas (6)', 'Apples (4)', 'Lemons (3)'] }
  ]

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
            Meal <span className="text-gradient">Planner</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your weekly meals, generate shopping lists, and stay organized with your cooking schedule.
          </p>
        </div>

        {/* Weekly Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="card text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <ChefHat className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{weeklyStats.totalMeals}</div>
            <div className="text-sm text-gray-500">Planned Meals</div>
          </div>
          <div className="card text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{weeklyStats.avgPrepTime}</div>
            <div className="text-sm text-gray-500">Avg Prep Time</div>
          </div>
          <div className="card text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{weeklyStats.totalServings}</div>
            <div className="text-sm text-gray-500">Total Servings</div>
          </div>
          <div className="card text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{weeklyStats.plannedDays}</div>
            <div className="text-sm text-gray-500">Days Planned</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Meal Planning Calendar */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Weekly Meal Plan</h2>
                <div className="flex items-center space-x-3">
                  <button className="btn-secondary text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </button>
                  <button className="btn-secondary text-sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                  <select className="form-select text-sm">
                    <option>This Week</option>
                    <option>Next Week</option>
                    <option>Custom Range</option>
                  </select>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="space-y-4">
                {daysOfWeek.map((day) => (
                  <div key={day} className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{day}</h3>
                      <span className="text-sm text-gray-500">
                        {new Date(Date.now() + daysOfWeek.indexOf(day) * 24 * 60 * 60 * 1000).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {mealTypes.map((mealType) => {
                        const meal = sampleMealPlan[day as keyof typeof sampleMealPlan]?.[mealType as keyof typeof sampleMealPlan.Monday]
                        
                        return (
                          <div key={mealType} className="border border-gray-100 rounded-lg p-3 hover:border-purple-200 transition-colors duration-200">
                            <div className="text-xs font-medium text-purple-600 mb-2 uppercase tracking-wide">
                              {mealType}
                            </div>
                            {meal ? (
                              <div>
                                <div className="text-sm font-medium text-gray-900 mb-1">{meal.name}</div>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span className="flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {meal.time}
                                  </span>
                                  <span className="flex items-center">
                                    <Users className="w-3 h-3 mr-1" />
                                    {meal.servings}
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <button className="w-full h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:border-purple-300 hover:text-purple-500 transition-colors duration-200">
                                <Plus className="w-4 h-4 mr-1" />
                                <span className="text-xs">Add Meal</span>
                              </button>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shopping List Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="btn-primary w-full text-sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Recipe to Plan
                  </button>
                  <button className="btn-secondary w-full text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Generate Weekly Plan
                  </button>
                  <button className="btn-secondary w-full text-sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Create Shopping List
                  </button>
                </div>
              </div>

              {/* Shopping List */}
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Shopping List</h3>
                  <button className="text-sm text-purple-600 hover:text-purple-700">
                    Clear All
                  </button>
                </div>
                
                <div className="space-y-4">
                  {shoppingList.map((category) => (
                    <div key={category.category}>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">{category.category}</h4>
                      <div className="space-y-2">
                        {category.items.map((item, index) => (
                          <label key={index} className="flex items-center space-x-3 text-sm">
                            <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                            <span className="text-gray-600">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="btn-primary w-full text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export Shopping List
                  </button>
                </div>
              </div>

              {/* Meal Planning Tips */}
              <div className="card bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Planning Tips</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>• Plan meals around seasonal ingredients for better flavor and value</p>
                  <p>• Prep ingredients on Sunday for easier weekday cooking</p>
                  <p>• Include one-pot meals for busy weeknights</p>
                  <p>• Plan for leftovers to reduce food waste</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
