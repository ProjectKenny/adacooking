const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🧪 Testing Ada.cooking Application...')
console.log('📡 Supabase URL:', supabaseUrl)
console.log('🔑 Anon Key:', supabaseAnonKey ? 'Present' : 'Missing')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables!')
  console.log('Please ensure your .env.local file contains:')
  console.log('- NEXT_PUBLIC_SUPABASE_URL')
  console.log('- NEXT_PUBLIC_SUPABASE_ANON_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  try {
    console.log('\n🔍 Testing database connection...')
    
    // Test basic connection
    const { data, error } = await supabase
      .from('categories')
      .select('count(*)')
      .limit(1)
    
    if (error) {
      console.error('❌ Database connection failed:', error.message)
      return false
    }
    
    console.log('✅ Database connection successful!')
    
    // Test categories table
    console.log('\n📋 Testing categories table...')
    const { data: categories, error: categoriesError } = await supabase
      .from('categories')
      .select('*')
      .limit(5)
    
    if (categoriesError) {
      console.error('❌ Categories table error:', categoriesError.message)
      return false
    }
    
    console.log(`✅ Categories table working! Found ${categories.length} categories`)
    if (categories.length > 0) {
      console.log('   Sample categories:', categories.map(c => c.name).join(', '))
    }
    
    // Test recipes table
    console.log('\n🍳 Testing recipes table...')
    const { data: recipes, error: recipesError } = await supabase
      .from('recipes')
      .select('count(*)')
      .limit(1)
    
    if (recipesError) {
      console.error('❌ Recipes table error:', recipesError.message)
      return false
    }
    
    console.log('✅ Recipes table working!')
    
    // Test profiles table
    console.log('\n👤 Testing profiles table...')
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('count(*)')
      .limit(1)
    
    if (profilesError) {
      console.error('❌ Profiles table error:', profilesError.message)
      return false
    }
    
    console.log('✅ Profiles table working!')
    
    // Test authentication
    console.log('\n🔐 Testing authentication...')
    const { data: authData, error: authError } = await supabase.auth.getSession()
    
    if (authError) {
      console.error('❌ Auth test failed:', authError.message)
      return false
    }
    
    console.log('✅ Authentication system working!')
    
    return true
    
  } catch (error) {
    console.error('❌ Connection test failed:', error.message)
    return false
  }
}

async function runTests() {
  const success = await testConnection()
  
  if (success) {
    console.log('\n🎉 All tests passed!')
    console.log('\n🚀 Your Ada.cooking application is ready!')
    console.log('Next steps:')
    console.log('1. Run: npm run dev')
    console.log('2. Visit: http://localhost:3000')
    console.log('3. Test user registration')
    console.log('4. Create your first recipe')
  } else {
    console.log('\n❌ Some tests failed!')
    console.log('Please check your Supabase configuration and try again.')
    process.exit(1)
  }
}

runTests()
