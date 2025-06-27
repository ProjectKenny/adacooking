import Link from 'next/link'
import { Calendar, Clock, User, TrendingUp, Coffee, Utensils, Heart } from 'lucide-react'

export default function BlogPage() {
  const featuredPost = {
    id: 'mastering-knife-skills',
    title: 'Mastering Essential Knife Skills: A Complete Guide for Home Cooks',
    excerpt: 'Learn the fundamental knife techniques that will transform your cooking. From basic cuts to advanced skills, discover how proper knife work can elevate every dish you create.',
    author: 'Chef Maria Rodriguez',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Cooking Tips',
    image: '/images/blog/knife-skills.jpg',
    featured: true
  }

  const blogPosts = [
    {
      id: 'seasonal-winter-vegetables',
      title: 'Cooking with Seasonal Winter Vegetables: Comfort Food Reimagined',
      excerpt: 'Discover how to transform winter vegetables into warming, nutritious meals that celebrate the season.',
      author: 'Sarah Chen',
      publishDate: '2024-01-12',
      readTime: '6 min read',
      category: 'Seasonal Cooking',
      featured: false
    },
    {
      id: 'fermentation-basics',
      title: 'The Art of Fermentation: Getting Started with Homemade Kimchi',
      excerpt: 'Explore the ancient art of fermentation and learn to make your own probiotic-rich kimchi at home.',
      author: 'David Kim',
      publishDate: '2024-01-10',
      readTime: '10 min read',
      category: 'Fermentation',
      featured: false
    },
    {
      id: 'plant-based-proteins',
      title: 'Complete Guide to Plant-Based Proteins for Vegetarian Cooking',
      excerpt: 'Everything you need to know about incorporating diverse plant proteins into your vegetarian meals.',
      author: 'Emma Thompson',
      publishDate: '2024-01-08',
      readTime: '7 min read',
      category: 'Nutrition',
      featured: false
    },
    {
      id: 'sourdough-troubleshooting',
      title: 'Sourdough Troubleshooting: Common Problems and Solutions',
      excerpt: 'Solve the most common sourdough baking issues and achieve perfect loaves every time.',
      author: 'Michael Baker',
      publishDate: '2024-01-05',
      readTime: '12 min read',
      category: 'Baking',
      featured: false
    },
    {
      id: 'spice-blending',
      title: 'Creating Custom Spice Blends: Elevate Your Flavor Game',
      excerpt: 'Learn the art of blending spices to create signature flavors that will make your dishes unforgettable.',
      author: 'Priya Patel',
      publishDate: '2024-01-03',
      readTime: '5 min read',
      category: 'Spices & Herbs',
      featured: false
    },
    {
      id: 'kitchen-organization',
      title: 'The Well-Organized Kitchen: Tips for Efficient Meal Prep',
      excerpt: 'Transform your kitchen workflow with smart organization strategies that save time and reduce stress.',
      author: 'Lisa Johnson',
      publishDate: '2024-01-01',
      readTime: '9 min read',
      category: 'Kitchen Tips',
      featured: false
    }
  ]

  const categories = [
    { name: 'Cooking Tips', count: 24, icon: Utensils },
    { name: 'Nutrition', count: 18, icon: Heart },
    { name: 'Baking', count: 15, icon: Coffee },
    { name: 'Seasonal Cooking', count: 12, icon: TrendingUp },
    { name: 'Kitchen Tips', count: 10, icon: Utensils },
    { name: 'Spices & Herbs', count: 8, icon: Coffee }
  ]

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
            Food <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cooking tips, techniques, and culinary inspiration from our community of passionate chefs and home cooks.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-8 text-white mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Featured Article</span>
            </div>
            <Link href={`/blog/${featuredPost.id}`} className="group">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-purple-100 transition-colors duration-200">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-6 text-sm text-purple-200">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <div className="flex items-center space-x-4">
                <select className="form-select text-sm">
                  <option value="">All Categories</option>
                  <option value="cooking-tips">Cooking Tips</option>
                  <option value="nutrition">Nutrition</option>
                  <option value="baking">Baking</option>
                  <option value="seasonal">Seasonal Cooking</option>
                </select>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="card group hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-violet-200 rounded-xl flex items-center justify-center">
                        <Coffee className="w-16 h-16 text-purple-600" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="mb-3">
                        <span className="badge badge-primary text-xs">
                          {post.category}
                        </span>
                      </div>
                      <Link href={`/blog/${post.id}`} className="group">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <Link
                        key={category.name}
                        href={`/blog?category=${category.name.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className="w-4 h-4 text-purple-500" />
                          <span className="text-gray-700 group-hover:text-purple-600">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{category.count}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Newsletter */}
              <div className="card bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest cooking tips and recipes delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="form-input text-sm"
                  />
                  <button type="submit" className="btn-primary w-full text-sm">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
