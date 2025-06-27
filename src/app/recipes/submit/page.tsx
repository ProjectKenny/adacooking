'use client'

import { useState } from 'react'
import { Plus, Minus, Upload, Clock, Users, ChefHat, Save, Eye } from 'lucide-react'

export default function SubmitRecipePage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'easy',
    category: '',
    cuisine: '',
    dietaryTags: [] as string[],
    ingredients: [{ amount: '', unit: '', name: '', notes: '' }],
    instructions: [{ step: '', time: '', notes: '' }]
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { amount: '', unit: '', name: '', notes: '' }]
    }))
  }

  const removeIngredient = (index: number) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }))
  }

  const addInstruction = () => {
    setFormData(prev => ({
      ...prev,
      instructions: [...prev.instructions, { step: '', time: '', notes: '' }]
    }))
  }

  const removeInstruction = (index: number) => {
    setFormData(prev => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index)
    }))
  }

  const categories = [
    'Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Appetizers', 
    'Beverages', 'Salads', 'Soups', 'Snacks', 'Baking'
  ]

  const cuisines = [
    'American', 'Italian', 'Mexican', 'Asian', 'Mediterranean', 
    'French', 'Indian', 'Thai', 'Chinese', 'Japanese'
  ]

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Keto', 
    'Paleo', 'Low-Carb', 'High-Protein', 'Nut-Free', 'Soy-Free'
  ]

  const units = [
    'cups', 'tbsp', 'tsp', 'oz', 'lbs', 'grams', 'kg', 'ml', 'liters', 'pieces', 'cloves', 'slices'
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
            
            <div>
              <label className="form-label">Recipe Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="form-input"
                placeholder="Enter a descriptive recipe title"
                required
              />
            </div>

            <div>
              <label className="form-label">Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="form-textarea h-32"
                placeholder="Describe your recipe, what makes it special, and any background story"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="form-label">Prep Time (minutes) *</label>
                <input
                  type="number"
                  value={formData.prepTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, prepTime: e.target.value }))}
                  className="form-input"
                  placeholder="15"
                  required
                />
              </div>
              <div>
                <label className="form-label">Cook Time (minutes) *</label>
                <input
                  type="number"
                  value={formData.cookTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, cookTime: e.target.value }))}
                  className="form-input"
                  placeholder="30"
                  required
                />
              </div>
              <div>
                <label className="form-label">Servings *</label>
                <input
                  type="number"
                  value={formData.servings}
                  onChange={(e) => setFormData(prev => ({ ...prev, servings: e.target.value }))}
                  className="form-input"
                  placeholder="4"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="form-label">Difficulty Level *</label>
                <select
                  value={formData.difficulty}
                  onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value }))}
                  className="form-select"
                  required
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="form-label">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                  className="form-select"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Cuisine Type</label>
                <select
                  value={formData.cuisine}
                  onChange={(e) => setFormData(prev => ({ ...prev, cuisine: e.target.value }))}
                  className="form-select"
                >
                  <option value="">Select Cuisine</option>
                  {cuisines.map(cuisine => (
                    <option key={cuisine} value={cuisine.toLowerCase()}>{cuisine}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="form-label">Dietary Tags</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {dietaryOptions.map(option => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.dietaryTags.includes(option.toLowerCase())}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData(prev => ({
                            ...prev,
                            dietaryTags: [...prev.dietaryTags, option.toLowerCase()]
                          }))
                        } else {
                          setFormData(prev => ({
                            ...prev,
                            dietaryTags: prev.dietaryTags.filter(tag => tag !== option.toLowerCase())
                          }))
                        }
                      }}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Ingredients</h2>
              <button
                type="button"
                onClick={addIngredient}
                className="btn-secondary text-sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Ingredient
              </button>
            </div>

            <div className="space-y-4">
              {formData.ingredients.map((ingredient, index) => (
                <div key={index} className="grid grid-cols-12 gap-3 items-end">
                  <div className="col-span-2">
                    <label className="form-label text-xs">Amount</label>
                    <input
                      type="text"
                      value={ingredient.amount}
                      onChange={(e) => {
                        const newIngredients = [...formData.ingredients]
                        newIngredients[index].amount = e.target.value
                        setFormData(prev => ({ ...prev, ingredients: newIngredients }))
                      }}
                      className="form-input text-sm"
                      placeholder="1"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="form-label text-xs">Unit</label>
                    <select
                      value={ingredient.unit}
                      onChange={(e) => {
                        const newIngredients = [...formData.ingredients]
                        newIngredients[index].unit = e.target.value
                        setFormData(prev => ({ ...prev, ingredients: newIngredients }))
                      }}
                      className="form-select text-sm"
                    >
                      <option value="">Unit</option>
                      {units.map(unit => (
                        <option key={unit} value={unit}>{unit}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-4">
                    <label className="form-label text-xs">Ingredient</label>
                    <input
                      type="text"
                      value={ingredient.name}
                      onChange={(e) => {
                        const newIngredients = [...formData.ingredients]
                        newIngredients[index].name = e.target.value
                        setFormData(prev => ({ ...prev, ingredients: newIngredients }))
                      }}
                      className="form-input text-sm"
                      placeholder="flour, all-purpose"
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="form-label text-xs">Notes (optional)</label>
                    <input
                      type="text"
                      value={ingredient.notes}
                      onChange={(e) => {
                        const newIngredients = [...formData.ingredients]
                        newIngredients[index].notes = e.target.value
                        setFormData(prev => ({ ...prev, ingredients: newIngredients }))
                      }}
                      className="form-input text-sm"
                      placeholder="sifted, room temp"
                    />
                  </div>
                  <div className="col-span-1">
                    {formData.ingredients.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeIngredient(index)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Instructions</h2>
              <button
                type="button"
                onClick={addInstruction}
                className="btn-secondary text-sm"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Step
              </button>
            </div>

            <div className="space-y-6">
              {formData.instructions.map((instruction, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">Step {index + 1}</h3>
                    {formData.instructions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeInstruction(index)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="form-label">Instruction *</label>
                      <textarea
                        value={instruction.step}
                        onChange={(e) => {
                          const newInstructions = [...formData.instructions]
                          newInstructions[index].step = e.target.value
                          setFormData(prev => ({ ...prev, instructions: newInstructions }))
                        }}
                        className="form-textarea h-24"
                        placeholder="Describe this step in detail..."
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Time (optional)</label>
                        <input
                          type="text"
                          value={instruction.time}
                          onChange={(e) => {
                            const newInstructions = [...formData.instructions]
                            newInstructions[index].time = e.target.value
                            setFormData(prev => ({ ...prev, instructions: newInstructions }))
                          }}
                          className="form-input"
                          placeholder="5 minutes"
                        />
                      </div>
                      <div>
                        <label className="form-label">Notes (optional)</label>
                        <input
                          type="text"
                          value={instruction.notes}
                          onChange={(e) => {
                            const newInstructions = [...formData.instructions]
                            newInstructions[index].notes = e.target.value
                            setFormData(prev => ({ ...prev, instructions: newInstructions }))
                          }}
                          className="form-input"
                          placeholder="Tips or alternatives"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review & Submit</h2>
            
            <div className="card bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{formData.title || 'Recipe Title'}</h3>
              <p className="text-gray-600 mb-4">{formData.description || 'Recipe description will appear here...'}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-600">
                    {(parseInt(formData.prepTime) + parseInt(formData.cookTime)) || 0} min total
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-600">{formData.servings || 0} servings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChefHat className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-gray-600 capitalize">{formData.difficulty}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 capitalize">{formData.category}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Ingredients ({formData.ingredients.length})</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {formData.ingredients.slice(0, 3).map((ing, index) => (
                    <li key={index}>
                      {ing.amount} {ing.unit} {ing.name} {ing.notes && `(${ing.notes})`}
                    </li>
                  ))}
                  {formData.ingredients.length > 3 && (
                    <li className="text-purple-600">... and {formData.ingredients.length - 3} more</li>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Instructions ({formData.instructions.length} steps)</h4>
                <div className="text-sm text-gray-600">
                  {formData.instructions[0]?.step ? 
                    `${formData.instructions[0].step.substring(0, 100)}...` : 
                    'Instructions will appear here...'
                  }
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Before You Submit</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Double-check all measurements and cooking times</li>
                <li>• Ensure instructions are clear and easy to follow</li>
                <li>• Your recipe will be reviewed before being published</li>
                <li>• You can save as draft and continue editing later</li>
              </ul>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="section-padding">
      <div className="container-narrow">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
            Submit Your <span className="text-gradient">Recipe</span>
          </h1>
          <p className="text-xl text-gray-600">
            Share your culinary creation with our community of food lovers
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-violet-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <form className="card">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex items-center space-x-3">
              <button type="button" className="btn-secondary">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </button>
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                  className="btn-primary"
                >
                  Next Step
                </button>
              ) : (
                <button type="submit" className="btn-primary">
                  <Eye className="w-4 h-4 mr-2" />
                  Submit Recipe
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
