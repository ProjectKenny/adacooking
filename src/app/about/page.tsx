import { ChefHat, Heart, Users, Award, Target, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Ada Chen',
      role: 'Founder & Head Chef',
      bio: 'Culinary school graduate with 15 years of experience in fine dining and home cooking education.',
      image: '/images/team/ada.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Recipe Developer',
      bio: 'Former restaurant chef specializing in fusion cuisine and innovative cooking techniques.',
      image: '/images/team/marcus.jpg'
    },
    {
      name: 'Sarah Kim',
      role: 'Nutrition Expert',
      bio: 'Registered dietitian passionate about making healthy eating accessible and delicious.',
      image: '/images/team/sarah.jpg'
    },
    {
      name: 'David Thompson',
      role: 'Community Manager',
      bio: 'Food blogger and cookbook author dedicated to building inclusive cooking communities.',
      image: '/images/team/david.jpg'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Passion for Food',
      description: 'We believe cooking is an act of love - for yourself, your family, and your community.'
    },
    {
      icon: Users,
      title: 'Inclusive Community',
      description: 'Everyone belongs in the kitchen, regardless of skill level, background, or dietary needs.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We encourage experimentation, learning from mistakes, and sharing knowledge.'
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'Every recipe is tested, every tip is verified, and every article is carefully crafted.'
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Active Home Cooks' },
    { number: '10,000+', label: 'Tested Recipes' },
    { number: '500+', label: 'Expert Contributors' },
    { number: '4.8★', label: 'Average Recipe Rating' }
  ]

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
            About <span className="text-gradient">Ada.cooking</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make cooking accessible, enjoyable, and rewarding for everyone. 
            From beginner-friendly recipes to advanced techniques, we're here to support your culinary journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ada.cooking was born from a simple belief: everyone deserves to experience the joy of creating 
                delicious food. Founded in 2020 by chef Ada Chen, our platform started as a small collection 
                of family recipes shared with friends.
              </p>
              <p>
                What began as a passion project quickly grew into a thriving community of home cooks, 
                professional chefs, and food enthusiasts from around the world. Today, we're proud to be 
                one of the most trusted sources for reliable recipes and cooking guidance.
              </p>
              <p>
                Our team of culinary experts, nutritionists, and food writers work tirelessly to ensure 
                every recipe is tested, every technique is explained clearly, and every piece of content 
                adds value to your cooking experience.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-200 to-violet-200 rounded-2xl p-12 flex items-center justify-center">
            <ChefHat className="w-32 h-32 text-purple-600" />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="card text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-8 lg:p-12 text-white mb-20">
          <div className="text-center">
            <Target className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              To democratize cooking by providing accessible, reliable, and inspiring culinary content 
              that empowers people to create meaningful connections through food. We believe that cooking 
              is not just about nutrition—it's about culture, creativity, and community.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people behind Ada.cooking
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-violet-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl p-12 flex items-center justify-center">
            <Award className="w-32 h-32 text-blue-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <ChefHat className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Triple-Tested Recipes</h3>
                  <p className="text-gray-600">Every recipe is tested by our team, community members, and independent testers before publication.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community-Driven</h3>
                  <p className="text-gray-600">Our content is shaped by real feedback from home cooks who actually make these recipes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Inclusive Approach</h3>
                  <p className="text-gray-600">We provide alternatives for different dietary needs, skill levels, and kitchen equipment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center">
          <div className="card bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">
              Ready to start your culinary journey with us? Join thousands of home cooks who are 
              discovering new recipes, sharing their creations, and learning together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/auth/signup" className="btn-primary">
                Get Started Today
              </a>
              <a href="/contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
