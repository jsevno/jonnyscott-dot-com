'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Welcome to the newsletter! Check your email for confirmation.')
        setEmail('')
      } else {
        throw new Error('Subscription failed')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join the Newsletter
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get weekly insights on digital business growth, personal development, 
              and the occasional coastal rowing adventure. No spam, just value.
            </p>
          </div>
        </section>

        {/* Newsletter Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* What You'll Get */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  What You'll Get
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Weekly Insights
                      </h3>
                      <p className="text-gray-600">
                        Practical advice on digital business growth, strategy, and optimization 
                        based on real experiences and case studies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Personal Development
                      </h3>
                      <p className="text-gray-600">
                        Lessons learned from coastal rowing, teamwork, and personal growth 
                        that apply to business and life.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Exclusive Content
                      </h3>
                      <p className="text-gray-600">
                        Early access to new blog posts, behind-the-scenes insights, and 
                        subscriber-only resources.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Community Access
                      </h3>
                      <p className="text-gray-600">
                        Connect with like-minded professionals and entrepreneurs who are 
                        focused on growth and development.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Newsletter Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">500+</div>
                      <div className="text-sm text-gray-600">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">95%</div>
                      <div className="text-sm text-gray-600">Open Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">Weekly</div>
                      <div className="text-sm text-gray-600">Frequency</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">0</div>
                      <div className="text-sm text-gray-600">Spam</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signup Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Subscribe Now
                </h2>
                
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                        disabled={status === 'loading'}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full btn-primary py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? 'Subscribing...' : 'Subscribe to Newsletter'}
                    </button>

                    {message && (
                      <div className={`p-4 rounded-lg ${
                        status === 'success' 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}>
                        {message}
                      </div>
                    )}
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      By subscribing, you agree to receive emails from Jonny Scott. 
                      You can unsubscribe at any time.
                    </p>
                  </div>
                </div>

                {/* Recent Issues */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Issues
                  </h3>
                  <div className="space-y-3">
                    <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors duration-200">
                      <div className="text-sm text-gray-500 mb-1">Issue #42 - December 11, 2024</div>
                      <div className="font-medium text-gray-900">The Power of Teamwork in Business</div>
                    </a>
                    <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors duration-200">
                      <div className="text-sm text-gray-500 mb-1">Issue #41 - December 4, 2024</div>
                      <div className="font-medium text-gray-900">Digital Transformation Strategies That Work</div>
                    </a>
                    <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors duration-200">
                      <div className="text-sm text-gray-500 mb-1">Issue #40 - November 27, 2024</div>
                      <div className="font-medium text-gray-900">Lessons from Coastal Rowing</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What Subscribers Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                    <div className="text-sm text-gray-600">Marketing Director</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Jonny's insights on digital transformation have been invaluable for our 
                  company. His practical advice is always actionable and relevant."
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">DJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">David Johnson</div>
                    <div className="text-sm text-gray-600">Startup Founder</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The combination of business insights and personal development content 
                  makes this newsletter unique. Highly recommend!"
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
