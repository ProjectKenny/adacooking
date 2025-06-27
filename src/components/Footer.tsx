import Link from 'next/link'
import { 
  ChefHat, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Heart,
  BookOpen,
  Users,
  Award
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/recipes', label: 'Browse Recipes' },
    { href: '/categories', label: 'Categories' },
    { href: '/blog', label: 'Food Blog' },
    { href: '/meal-planner', label: 'Meal Planner' },
    { href: '/recipes/submit', label: 'Submit Recipe' },
  ]

  const supportLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/help', label: 'Help Center' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ]

  const categories = [
    { href: '/recipes?category=breakfast', label: 'Breakfast' },
    { href: '/recipes?category=lunch', label: 'Lunch' },
    { href: '/recipes?category=dinner', label: 'Dinner' },
    { href: '/recipes?category=desserts', label: 'Desserts' },
    { href: '/recipes?category=snacks', label: 'Snacks' },
  ]

  const socialLinks = [
    { href: 'https://facebook.com/adacooking', icon: Facebook, label: 'Facebook' },
    { href: 'https://twitter.com/adacooking', icon: Twitter, label: 'Twitter' },
    { href: 'https://instagram.com/adacooking', icon: Instagram, label: 'Instagram' },
    { href: 'https://youtube.com/adacooking', icon: Youtube, label: 'YouTube' },
  ]

  const stats = [
    { icon: BookOpen, value: '2,847', label: 'Recipes' },
    { icon: Users, value: '18,293', label: 'Home Cooks' },
    { icon: Award, value: '4.7★', label: 'Average Rating' },
    { icon: Heart, value: '47,582', label: 'Recipe Saves' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Stats Section */}
      <div className="border-b border-purple-800/50">
        <div className="container-wide section-padding-small">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-3">
                    <Icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <ChefHat className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Ada Cooking</h3>
                <p className="text-sm text-purple-200">Recipe & Food Blog</p>
              </div>
            </Link>
            
            <p className="text-purple-200 mb-6 leading-relaxed">
              Discover, create, and share amazing recipes. From quick weeknight dinners 
              to elaborate weekend projects, find your next culinary adventure with our 
              community of passionate home cooks.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-200">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">hello@ada.cooking</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+65 (8268) 7400</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Downtown Core, SG</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-purple-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link 
                    href={category.href}
                    className="text-purple-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support & Legal</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-purple-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-purple-800/50">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-purple-200 mb-6 text-sm">
              Get the latest recipes, cooking tips, and culinary inspiration delivered to your inbox.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-purple-700 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 rounded-xl font-medium transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800/50 bg-black/20">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-purple-200 text-sm">
                © {currentYear} Ada.cooking. All rights reserved.
              </p>
              <p className="text-purple-300 text-xs mt-1">
                Made with <Heart className="w-3 h-3 inline text-red-400" /> by <a href="https://kennytan.net" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">KennyTan.net</a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors duration-200" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
