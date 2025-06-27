'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  ChefHat,
  Search,
  Menu,
  X,
  User,
  BookOpen,
  PlusCircle,
  Home,
  Grid3X3,
  Coffee,
  Heart
} from 'lucide-react'

function HeaderContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  // Initialize search query from URL params
  useEffect(() => {
    const query = searchParams?.get('search') || ''
    setSearchQuery(query)
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/recipes?search=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push('/recipes')
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const navigationLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/recipes', label: 'Recipes', icon: BookOpen },
    { href: '/categories', label: 'Categories', icon: Grid3X3 },
    { href: '/blog', label: 'Blog', icon: Coffee },
    { href: '/meal-planner', label: 'Meal Planner', icon: Heart },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <ChefHat className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-gradient font-serif">
                Ada.cooking
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Recipe & Food Blog</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 nav-link group"
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2.5 text-sm bg-white/80 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-purple-500 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors duration-200"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/recipes/submit"
              className="btn-secondary text-sm"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Recipe
            </Link>
            <Link
              href="/auth/login"
              className="btn-primary text-sm"
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden menu-button p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 text-sm bg-white/80 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 text-purple-500 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mobile-menu bg-white/95 backdrop-blur-md border-t border-purple-100 shadow-lg">
          <div className="container-wide py-4">
            <nav className="space-y-2">
              {navigationLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                )
              })}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-3 border-t border-purple-100">
                <Link
                  href="/recipes/submit"
                  onClick={closeMenu}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 font-medium"
                >
                  <PlusCircle className="w-5 h-5" />
                  <span>Add Recipe</span>
                </Link>
                <Link
                  href="/auth/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-white bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 rounded-lg transition-all duration-200 font-medium"
                >
                  <User className="w-5 h-5" />
                  <span>Sign In</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default function Header() {
  return (
    <Suspense fallback={
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-gradient font-serif">
                  Ada.cooking
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Recipe & Food Blog</p>
              </div>
            </div>
            <div className="animate-pulse w-8 h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </header>
    }>
      <HeaderContent />
    </Suspense>
  )
}
