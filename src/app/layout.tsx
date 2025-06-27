import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ada.cooking - Comprehensive Recipe & Food Blog',
    template: '%s | Ada.cooking'
  },
  description: 'Discover, create, and share amazing recipes. From quick weeknight dinners to elaborate weekend projects, find your next culinary adventure.',
  keywords: ['recipes', 'cooking', 'food', 'blog', 'meal planning', 'ingredients', 'cuisine'],
  authors: [{ name: 'Ada.cooking Team' }],
  creator: 'Ada.cooking',
  publisher: 'Ada.cooking',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ada.cooking'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ada.cooking',
    title: 'Ada.cooking - Comprehensive Recipe & Food Blog',
    description: 'Discover, create, and share amazing recipes. From quick weeknight dinners to elaborate weekend projects, find your next culinary adventure.',
    siteName: 'Ada.cooking',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ada.cooking - Recipe & Food Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ada.cooking - Comprehensive Recipe & Food Blog',
    description: 'Discover, create, and share amazing recipes. From quick weeknight dinners to elaborate weekend projects, find your next culinary adventure.',
    images: ['/images/og-image.jpg'],
    creator: '@adacooking',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-orange-50 via-white to-red-50 min-h-screen`}>
        <div className="relative">
          {/* Animated background elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-200/25 to-amber-200/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
