'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, Bug } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Handle success/error states here
      alert('Thank you for your message! We\'ll get back to you within 24 hours.')
      setFormData({ name: '', email: '', subject: '', category: 'general', message: '' })
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'hello@ada.cooking',
      action: 'mailto:hello@ada.cooking'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team during business hours',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come visit our test kitchen and studio',
      contact: '123 Culinary Street, San Francisco, CA 94102',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
      contact: 'Weekend: 10:00 AM - 4:00 PM PST',
      action: null
    }
  ]

  const categories = [
    { value: 'general', label: 'General Inquiry', icon: MessageCircle },
    { value: 'recipe', label: 'Recipe Question', icon: HelpCircle },
    { value: 'technical', label: 'Technical Support', icon: Bug },
    { value: 'partnership', label: 'Partnership', icon: Mail },
    { value: 'feedback', label: 'Feedback', icon: MessageCircle }
  ]

  const faqs = [
    {
      question: 'How can I submit my own recipe?',
      answer: 'You can submit recipes through our recipe submission form. All recipes are reviewed by our team before publication.'
    },
    {
      question: 'Can I modify the recipes?',
      answer: 'Absolutely! We encourage experimentation. Feel free to adapt recipes to your taste and dietary needs.'
    },
    {
      question: 'Do you offer cooking classes?',
      answer: 'We offer virtual cooking classes and workshops. Check our events page for upcoming sessions.'
    },
    {
      question: 'How do I report an issue with a recipe?',
      answer: 'Please use the contact form below or email us directly with the recipe name and the issue you encountered.'
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you. 
            Our team is here to help with anything you need.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <div key={index} className="card text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                {method.action ? (
                  <a 
                    href={method.action}
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium text-sm">{method.contact}</p>
                )}
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="form-label">Category *</label>
                  <select
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="form-select"
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="form-input"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="form-textarea"
                    placeholder="Please provide as much detail as possible..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="spinner w-5 h-5 mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* FAQ and Additional Info */}
          <div className="space-y-8">
            {/* FAQ */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="card bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="/help" className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help Center
                </a>
                <a href="/recipes/submit" className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200">
                  <Send className="w-4 h-4 mr-2" />
                  Submit a Recipe
                </a>
                <a href="/blog" className="flex items-center text-purple-600 hover:text-purple-700 transition-colors duration-200">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Read Our Blog
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Response Times</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">General Inquiries:</span>
                  <span className="font-medium text-gray-900">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Technical Support:</span>
                  <span className="font-medium text-gray-900">Within 12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recipe Questions:</span>
                  <span className="font-medium text-gray-900">Within 48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Partnership Inquiries:</span>
                  <span className="font-medium text-gray-900">Within 3-5 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
