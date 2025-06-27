const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables')
  console.log('Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function setupDatabase() {
  console.log('🍳 Setting up Ada.cooking database...')
  console.log('📡 Supabase URL:', supabaseUrl)
  
  try {
    // Read the schema file
    const schemaPath = path.join(process.cwd(), 'supabase-schema.sql')
    const schema = fs.readFileSync(schemaPath, 'utf8')
    
    console.log('📋 Executing database schema...')
    
    // Split the schema into individual statements
    const statements = schema
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'))
    
    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i] + ';'
      
      try {
        const { error } = await supabase.rpc('exec_sql', {
          sql: statement
        })
        
        if (error) {
          console.warn(`⚠️  Warning executing statement ${i + 1}:`, error.message)
        } else {
          console.log(`✅ Executed statement ${i + 1}/${statements.length}`)
        }
      } catch (err) {
        console.warn(`⚠️  Warning executing statement ${i + 1}:`, err.message)
      }
    }
    
    console.log('🎉 Database schema setup completed!')
    
    // Insert sample categories
    console.log('📝 Inserting sample categories...')
    await insertSampleCategories()
    
    console.log('✅ Database setup completed successfully!')
    console.log('\n🚀 Next steps:')
    console.log('1. Run: npm run dev')
    console.log('2. Visit: http://localhost:3000')
    console.log('3. Test user registration and recipe creation')
    
  } catch (error) {
    console.error('❌ Database setup failed:', error.message)
    process.exit(1)
  }
}

async function insertSampleCategories() {
  const categories = [
    {
      name: 'Breakfast',
      slug: 'breakfast',
      description: 'Start your day with delicious morning meals',
      icon_name: 'breakfast',
      color_theme: 'yellow'
    },
    {
      name: 'Lunch',
      slug: 'lunch',
      description: 'Satisfying midday meals and light bites',
      icon_name: 'lunch',
      color_theme: 'green'
    },
    {
      name: 'Dinner',
      slug: 'dinner',
      description: 'Hearty evening meals for the whole family',
      icon_name: 'dinner',
      color_theme: 'orange'
    },
    {
      name: 'Desserts',
      slug: 'desserts',
      description: 'Sweet treats and indulgent desserts',
      icon_name: 'dessert',
      color_theme: 'pink'
    },
    {
      name: 'Appetizers',
      slug: 'appetizers',
      description: 'Perfect starters and party snacks',
      icon_name: 'appetizer',
      color_theme: 'amber'
    },
    {
      name: 'Beverages',
      slug: 'beverages',
      description: 'Refreshing drinks and cocktails',
      icon_name: 'beverage',
      color_theme: 'blue'
    },
    {
      name: 'Salads',
      slug: 'salads',
      description: 'Fresh and healthy salad recipes',
      icon_name: 'salad',
      color_theme: 'emerald'
    },
    {
      name: 'Soups',
      slug: 'soups',
      description: 'Warming soups and broths',
      icon_name: 'soup',
      color_theme: 'red'
    },
    {
      name: 'Snacks',
      slug: 'snacks',
      description: 'Quick bites and healthy snacks',
      icon_name: 'snack',
      color_theme: 'purple'
    },
    {
      name: 'Baking',
      slug: 'baking',
      description: 'Breads, pastries, and baked goods',
      icon_name: 'baking',
      color_theme: 'brown'
    }
  ]
  
  for (const category of categories) {
    try {
      const { error } = await supabase
        .from('categories')
        .insert(category)
      
      if (error && !error.message.includes('duplicate key')) {
        console.warn(`⚠️  Warning inserting category ${category.name}:`, error.message)
      } else {
        console.log(`✅ Inserted category: ${category.name}`)
      }
    } catch (err) {
      console.warn(`⚠️  Warning inserting category ${category.name}:`, err.message)
    }
  }
}

// Run the setup
setupDatabase()
