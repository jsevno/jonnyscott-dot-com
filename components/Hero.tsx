import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-soft mb-8">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium text-gray-700">Digital Business Growth Consultant</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Digital Business
            <br />
            <span className="gradient-text">Growth &</span>
            <br />
            <span className="text-gray-900">Personal Development</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Helping businesses scale through strategic digital transformation. 
            <br className="hidden md:block" />
            Sharing insights on growth, coastal rowing, and personal development.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/blog" className="btn-primary text-lg px-8 py-4 group">
              <span className="flex items-center">
                Read the Blog
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4 group">
              <span className="flex items-center">
                Learn More
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-glass text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="card-glass text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600">Businesses Helped</div>
            </div>
            <div className="card-glass text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
