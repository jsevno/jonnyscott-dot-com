import { Metadata } from 'next'
import { getPosts, getTags, GhostPost, GhostTag } from '@/lib/ghost'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {
  title: 'Blog - Jonny Scott',
  description: 'Insights on digital business growth, personal development, and coastal rowing adventures.',
  openGraph: {
    title: 'Blog - Jonny Scott',
    description: 'Insights on digital business growth, personal development, and coastal rowing adventures.',
    type: 'website',
    url: 'https://jonnyscott.com/blog',
  },
}

export default async function BlogPage() {
  // Fetch posts and tags from Ghost
  let posts: GhostPost[] = []
  let tags: GhostTag[] = []
  
  try {
    const [postsResponse, tagsResponse] = await Promise.all([
      getPosts(20), // Get more posts for the blog page
      getTags()
    ])
    posts = postsResponse.posts
    tags = tagsResponse
  } catch (error) {
    console.error('Error fetching blog data:', error)
    // Continue with empty arrays
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights on digital business growth, personal development, and the occasional 
                coastal rowing adventure. Practical advice and lessons learned from real experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tags Filter */}
            {tags.length > 0 && (
              <div className="mb-12">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by topic:</h2>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
                    All Posts
                  </button>
                  {tags.slice(0, 8).map((tag) => (
                    <button
                      key={tag.id}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Posts Grid */}
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="bg-gray-50 rounded-lg p-12 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    No posts yet
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Posts will appear here once you publish content to your Ghost CMS.
                  </p>
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Getting Started:
                    </h4>
                    <ol className="text-sm text-gray-600 space-y-2 text-left">
                      <li>1. Set up your Ghost CMS (ghost.org)</li>
                      <li>2. Configure environment variables in your deployment</li>
                      <li>3. Create and publish your first post</li>
                      <li>4. Posts will automatically appear here</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {/* Load More Button */}
            {posts.length > 0 && posts.length >= 20 && (
              <div className="text-center mt-12">
                <button className="btn-secondary">
                  Load More Posts
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get new posts delivered to your inbox. No spam, just insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
