import { Metadata } from 'next'
import { getPosts, GhostPost } from '@/lib/ghost'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import PostCard from '@/components/PostCard'
import NewsletterSignup from '@/components/NewsletterSignup'
import InstagramGrid from '@/components/InstagramGrid'

export const metadata: Metadata = {
  title: 'Jonny Scott - Digital Business Growth & Personal Development',
  description: 'Digital business growth consultant, coastal rower, and personal development enthusiast. Helping businesses scale through strategic digital transformation.',
  openGraph: {
    title: 'Jonny Scott - Digital Business Growth & Personal Development',
    description: 'Digital business growth consultant, coastal rower, and personal development enthusiast.',
    type: 'website',
    url: 'https://jonnyscott.com',
  },
}

export default async function HomePage() {
  // Fetch recent posts from Ghost
  let posts: GhostPost[] = []
  try {
    const response = await getPosts(6)
    posts = response.posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    // Continue with empty posts array
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Featured Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Thoughts on digital business growth, personal development, and the occasional coastal rowing adventure
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    featured={index === 0}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    No posts yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Posts will appear here once you publish content to your Ghost CMS.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">
                      To get started:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Set up your Ghost CMS</li>
                      <li>• Configure the environment variables</li>
                      <li>• Publish your first post</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {posts.length > 0 && (
              <div className="text-center mt-12">
                <a href="/blog" className="btn-primary">
                  View All Posts
                </a>
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  About Jonny Scott
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-4">
                  <p>
                    I'm a digital business growth consultant with over a decade of experience 
                    helping businesses scale through strategic digital transformation.
                  </p>
                  <p>
                    When I'm not working with clients, you'll find me on the water with my 
                    coastal rowing team, exploring the beautiful coastline and building 
                    teamwork through adventure.
                  </p>
                  <p>
                    I believe in sharing knowledge and experiences, which is why I write 
                    about business growth, personal development, and the lessons learned 
                    from both professional and personal pursuits.
                  </p>
                </div>
                <div className="mt-8">
                  <a href="/about" className="btn-primary">
                    Learn More About Me
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    What I Do
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Digital Strategy</p>
                        <p className="text-gray-600 text-sm">Help businesses develop and execute digital growth strategies</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Business Consulting</p>
                        <p className="text-gray-600 text-sm">Provide strategic guidance for scaling operations</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Content Creation</p>
                        <p className="text-gray-600 text-sm">Share insights through writing and speaking</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NewsletterSignup />
        <InstagramGrid />
      </main>

      <Footer />
    </div>
  )
}
