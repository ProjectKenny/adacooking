# 🍳 Ada.cooking

A comprehensive recipe and food blog website built with modern web technologies. Discover, create, and share amazing recipes with a vibrant community of home cooks and professional chefs.

## ✨ Features

### 🔍 **Recipe Discovery**
- Browse thousands of recipes by category, cuisine, and dietary preferences
- Advanced search with filters for difficulty, cooking time, and ingredients
- Featured recipes and trending dishes
- Recipe recommendations based on your preferences

### 👨‍🍳 **Recipe Management**
- Create and publish your own recipes with step-by-step instructions
- Rich ingredient management with quantities and units
- Visual recipe cards with food-themed illustrations
- Draft and published recipe states

### 👥 **Community Features**
- User profiles with cooking preferences and achievements
- Recipe ratings and reviews system
- Follow your favorite chefs and home cooks
- Share recipes on social media

### 📝 **Food Blog**
- Cooking tips and techniques articles
- Nutrition and health information
- Kitchen equipment reviews
- Seasonal cooking guides

### 🍽️ **Meal Planning**
- Create custom meal plans and collections
- Generate shopping lists from recipes
- Weekly meal planning calendar
- Nutritional information tracking

### 🛡️ **Admin Features**
- Content moderation and approval workflow
- User management and role assignment
- Analytics dashboard
- Recipe and blog post management

## 🛠 **Tech Stack**

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons

### **Backend**
- **Supabase** - PostgreSQL database with real-time features
- **Supabase Auth** - Authentication with social login
- **Supabase Storage** - File storage for images
- **Row Level Security** - Database-level security

### **Deployment**
- **Vercel** - Automatic deployments from GitHub
- **Custom Domain** - ada.cooking with SSL
- **CDN** - Global content delivery

### **Design**
- **Glass Morphism** - Modern translucent design
- **Food-Themed Colors** - Warm oranges, fresh greens, golden yellows
- **Responsive Design** - Mobile-first approach
- **Visual Illustrations** - SVG graphics instead of photography

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18.17.0 or higher
- npm or yarn package manager
- Supabase account
- Vercel account (for deployment)

### **1. Clone and Install**
```bash
git clone https://github.com/ProjectKenny/adacooking.git
cd adacooking
npm install
```

### **2. Environment Setup**
```bash
# Copy environment template
cp .env.local.example .env.local

# Edit .env.local with your Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### **3. Database Setup**
```bash
# Automatic setup (recommended)
npm run setup:database

# Test connection
npm run test:db
```

### **4. Development**
```bash
# Start development server
npm run dev

# Visit http://localhost:3000
```

## 📊 **Database Schema**

### **Core Tables**
- **recipes** - Recipe content, ingredients, instructions
- **categories** - Recipe categories (Breakfast, Lunch, Dinner, etc.)
- **profiles** - User profiles extending Supabase auth
- **ratings** - Recipe ratings and reviews
- **blog_posts** - Blog articles and cooking tips

### **Advanced Tables**
- **recipe_collections** - Meal planning and recipe collections
- **collection_recipes** - Junction table for collections

### **Key Features**
- **JSONB Storage** - Flexible ingredient and instruction storage
- **Full-text Search** - PostgreSQL search across recipes and blog posts
- **Row Level Security** - Secure data access policies
- **Automatic Triggers** - Profile creation and timestamp updates

## 🎨 **Design System**

### **Color Palette**
- **Primary**: Orange-500 to Red-500 (food warmth)
- **Secondary**: Green-400 to Emerald-500 (fresh ingredients)
- **Accent**: Yellow-400 to Amber-500 (cooking warmth)
- **Neutral**: Warm grays with orange tint

### **Typography**
- **Headers**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)
- **Code**: JetBrains Mono

### **Components**
- **Glass Cards** - Translucent recipe cards with backdrop blur
- **Gradient Buttons** - Food-themed gradient backgrounds
- **Animated Elements** - Floating background shapes
- **Responsive Grid** - Mobile-first layout system

## 📱 **Pages Structure**

```
/                    # Homepage with hero and featured content
/recipes             # Recipe directory with search and filters
/recipes/[id]        # Individual recipe pages
/recipes/submit      # Recipe submission form
/blog                # Food blog articles
/blog/[slug]         # Individual blog posts
/categories          # Recipe categories overview
/categories/[slug]   # Category-specific recipe listings
/profile             # User profile and dashboard
/meal-planner        # Meal planning interface
/admin               # Admin dashboard (admin users only)
/auth/login          # User authentication
/auth/signup         # User registration
/privacy             # Privacy policy
/terms               # Terms of service
/contact             # Contact form
```

## 🔧 **Development Scripts**

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking

# Database
npm run setup:database   # Setup database schema
npm run test:db          # Test database connection
npm run seed:data        # Insert sample data
```

## 🚀 **Deployment**

### **Automatic Deployment**
1. Push to GitHub main branch
2. Vercel automatically deploys
3. Visit ada.cooking

### **Manual Deployment**
```bash
# Build and deploy
npm run build
vercel --prod
```

### **Environment Variables (Vercel)**
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_NAME=Ada.cooking
NEXT_PUBLIC_APP_DESCRIPTION=Comprehensive Recipe & Food Blog Website
```

## 📈 **Performance**

### **Optimization Features**
- **Next.js Image Optimization** - Automatic image optimization
- **Server-Side Rendering** - SEO-friendly recipe pages
- **Static Generation** - Fast loading for static content
- **Code Splitting** - Optimized bundle sizes
- **CDN Delivery** - Global content distribution

### **Expected Metrics**
- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 **Security**

### **Authentication**
- **Supabase Auth** - Secure user authentication
- **Social Login** - Google, GitHub, and other providers
- **JWT Tokens** - Secure session management
- **Password Requirements** - Strong password enforcement

### **Database Security**
- **Row Level Security** - Database-level access control
- **SQL Injection Protection** - Parameterized queries
- **Data Validation** - Input sanitization and validation
- **Audit Logging** - Track data changes

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Supabase** - Backend infrastructure
- **Vercel** - Deployment platform
- **Tailwind CSS** - Styling framework
- **Lucide** - Icon library
- **Next.js** - React framework

---

**🍳 Happy Cooking with Ada.cooking!**

For support or questions, please open an issue on GitHub or contact us at hello@ada.cooking
