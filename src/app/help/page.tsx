import { Search, Book, Users, MessageCircle, Mail, Phone } from 'lucide-react'

export default function HelpPage() {
  const helpCategories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of using Ada.cooking',
      articles: [
        'How to create an account',
        'Navigating the recipe collection',
        'Setting up your profile',
        'Understanding recipe ratings'
      ]
    },
    {
      icon: Users,
      title: 'Recipe Management',
      description: 'Everything about creating and managing recipes',
      articles: [
        'How to submit a recipe',
        'Recipe formatting guidelines',
        'Adding photos to recipes',
        'Editing published recipes'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Community',
      description: 'Connect with other home cooks',
      articles: [
        'Leaving recipe reviews',
        'Following other cooks',
        'Sharing recipes on social media',
        'Community guidelines'
      ]
    },
    {
      icon: Search,
      title: 'Search & Discovery',
      description: 'Find the perfect recipe for any occasion',
      articles: [
        'Advanced search tips',
        'Using dietary filters',
        'Saving favorite recipes',
        'Meal planning features'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How do I submit my own recipe?',
      answer: 'Click on "Submit Recipe" in the navigation menu or visit /recipes/submit. Fill out the form with your recipe details, ingredients, and step-by-step instructions.'
    },
    {
      question: 'Can I modify recipes to suit my dietary needs?',
      answer: 'Absolutely! We encourage adapting recipes. Many recipes include substitution suggestions, and you can leave comments about your modifications to help others.'
    },
    {
      question: 'How are recipes tested and verified?',
      answer: 'Our team tests all submitted recipes before publication. We also rely on community feedback and ratings to ensure recipe quality.'
    },
    {
      question: 'Is Ada.cooking free to use?',
      answer: 'Yes! Creating an account and accessing recipes is completely free. We may offer premium features in the future, but core functionality will always be free.'
    },
    {
      question: 'How do I report a problem with a recipe?',
      answer: 'You can leave a comment on the recipe page or contact us directly through our contact form. Please include specific details about the issue.'
    },
    {
      question: 'Can I print recipes?',
      answer: 'Yes! Each recipe page has a print-friendly format. Click the print button on any recipe to get a clean, formatted version.'
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
            Help <span className="text-gradient">Center</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions and learn how to make the most of Ada.cooking
          </p>
        </div>

        {/* Search Help */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search help articles..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {helpCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{category.title}</h3>
                <p className="text-gray-600 text-center mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-sm text-purple-600 hover:text-purple-700 transition-colors duration-200">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Still Need Help?</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="space-y-3">
                  <a 
                    href="/contact" 
                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send us a message
                  </a>
                  <a 
                    href="tel:+15551234567" 
                    className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call us: +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Use specific keywords when searching for recipes</li>
                  <li>• Check the comments section for helpful tips from other cooks</li>
                  <li>• Save recipes to your favorites for easy access later</li>
                  <li>• Rate recipes to help other users find the best ones</li>
                  <li>• Follow your favorite recipe creators for updates</li>
                </ul>
              </div>

              <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Response Times</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email Support:</span>
                    <span className="font-medium text-gray-900">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone Support:</span>
                    <span className="font-medium text-gray-900">Mon-Fri 9AM-6PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Live Chat:</span>
                    <span className="font-medium text-gray-900">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Help Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#" className="card group hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                How to Submit Your First Recipe
              </h3>
              <p className="text-gray-600 text-sm">
                Step-by-step guide to sharing your favorite recipes with the community.
              </p>
            </a>
            <a href="#" className="card group hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                Understanding Recipe Ratings
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how our rating system works and how to leave helpful reviews.
              </p>
            </a>
            <a href="#" className="card group hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                Meal Planning Made Easy
              </h3>
              <p className="text-gray-600 text-sm">
                Discover how to use our meal planning tools to organize your weekly cooking.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
