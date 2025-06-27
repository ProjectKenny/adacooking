'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="text-center px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10">
          {/* Error Icon */}
          <div className="mb-8">
            <AlertTriangle className="w-24 h-24 mx-auto text-red-500 mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Something went wrong!</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kitchen Error</h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto mb-4">
              Looks like something burned in our digital kitchen. Don't worry, 
              we're working to fix it!
            </p>
            {process.env.NODE_ENV === 'development' && (
              <details className="text-left bg-red-50 p-4 rounded-lg max-w-lg mx-auto">
                <summary className="cursor-pointer text-red-700 font-medium">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 overflow-auto">
                  {error.message}
                </pre>
              </details>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={reset}
              className="btn-primary"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Try Again
            </button>
            <Link href="/" className="btn-secondary">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          {/* Help Text */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If this problem persists, please{' '}
              <Link href="/contact" className="text-orange-600 hover:text-orange-700">
                contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
