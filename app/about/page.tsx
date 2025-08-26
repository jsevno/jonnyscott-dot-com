import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About - Jonny Scott',
  description: 'Learn more about Jonny Scott - digital business growth consultant, coastal rower, and personal development enthusiast.',
  openGraph: {
    title: 'About - Jonny Scott',
    description: 'Digital business growth consultant, coastal rower, and personal development enthusiast.',
    type: 'website',
    url: 'https://jonnyscott.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Jonny Scott
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Digital business growth consultant, coastal rower, and personal development enthusiast. 
                Helping businesses scale through strategic digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="relative">
                    <Image
                      src="/images/jonny-scott-profile.jpg"
                      alt="Jonny Scott"
                      width={400}
                      height={500}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white rounded-lg p-4 shadow-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold">10+</div>
                        <div className="text-sm">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Introduction */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Who I Am
                  </h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      I'm a digital business growth consultant with over a decade of experience 
                      helping businesses scale through strategic digital transformation. My passion 
                      lies in bridging the gap between traditional business practices and modern 
                      digital solutions.
                    </p>
                    <p>
                      When I'm not working with clients to optimize their digital presence and 
                      growth strategies, you'll find me on the water with my coastal rowing team. 
                      The discipline, teamwork, and adventure of rowing have taught me valuable 
                      lessons that I bring to my consulting work.
                    </p>
                    <p>
                      I believe in sharing knowledge and experiences openly, which is why I write 
                      about business growth, personal development, and the lessons learned from 
                      both professional and personal pursuits.
                    </p>
                  </div>
                </div>

                {/* What I Do */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What I Do
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Digital Strategy
                      </h3>
                      <p className="text-gray-600">
                        Develop comprehensive digital growth strategies that align with business 
                        objectives and market opportunities.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Business Consulting
                      </h3>
                      <p className="text-gray-600">
                        Provide strategic guidance for scaling operations, optimizing processes, 
                        and improving overall business performance.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Content Creation
                      </h3>
                      <p className="text-gray-600">
                        Share insights through writing, speaking, and thought leadership to help 
                        others grow and develop.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Performance Optimization
                      </h3>
                      <p className="text-gray-600">
                        Analyze and optimize digital performance, user experience, and conversion 
                        rates for maximum impact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coastal Rowing */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Coastal Rowing & Life Lessons
                  </h2>
                  <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          Teamwork on the Water
                        </h3>
                        <div className="prose text-gray-600 space-y-4">
                          <p>
                            Coastal rowing has taught me invaluable lessons about teamwork, 
                            communication, and perseverance. When you're out on the water, 
                            every team member's contribution is essential for success.
                          </p>
                          <p>
                            The same principles apply to business - clear communication, 
                            trust in your team, and the ability to adapt to changing 
                            conditions are crucial for achieving your goals.
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src="/images/coastal-rowing.jpg"
                          alt="Coastal rowing team"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Values */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    My Values
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Authenticity
                        </h3>
                        <p className="text-gray-600">
                          I believe in being genuine in all interactions and sharing real 
                          experiences, both successes and failures.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Continuous Learning
                        </h3>
                        <p className="text-gray-600">
                          The digital landscape is constantly evolving, and I'm committed 
                          to staying current and sharing new insights.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Results-Driven
                        </h3>
                        <p className="text-gray-600">
                          I focus on delivering measurable outcomes and helping businesses 
                          achieve their growth objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-primary-600 text-white rounded-2xl p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    Ready to Work Together?
                  </h2>
                  <p className="text-primary-100 mb-6">
                    Let's discuss how I can help your business grow and scale through 
                    strategic digital transformation.
                  </p>
                  <a href="/contact" className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
