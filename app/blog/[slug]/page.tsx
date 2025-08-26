import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPost, getPosts, formatDate } from '@/lib/ghost'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface PostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const response = await getPosts()
    return response.posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Jonny Scott',
    }
  }

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.custom_excerpt || post.excerpt,
    openGraph: {
      title: post.og_title || post.title,
      description: post.og_description || post.custom_excerpt || post.excerpt,
      type: 'article',
      url: `https://jonnyscott.com/blog/${post.slug}`,
      images: post.og_image ? [post.og_image] : post.feature_image ? [post.feature_image] : [],
      publishedTime: post.published_at,
      modifiedTime: post.updated_at,
      authors: [post.primary_author.name],
      tags: post.tags.map(tag => tag.name),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.twitter_title || post.title,
      description: post.twitter_description || post.custom_excerpt || post.excerpt,
      images: post.twitter_image ? [post.twitter_image] : post.feature_image ? [post.feature_image] : [],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative">
          {post.feature_image && (
            <div className="relative h-64 md:h-96 lg:h-[500px]">
              <Image
                src={post.feature_image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          )}
          
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center space-x-4 text-gray-600 mb-4">
                  <time dateTime={post.published_at}>
                    {formatDate(post.published_at)}
                  </time>
                  <span>•</span>
                  <span>{post.reading_time} min read</span>
                  {post.primary_tag && (
                    <>
                      <span>•</span>
                      <span className="text-primary-600 font-medium">
                        {post.primary_tag.name}
                      </span>
                    </>
                  )}
                </div>
                {post.custom_excerpt && (
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {post.custom_excerpt}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg prose-custom max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: post.html }}
                className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary-600 prose-blockquote:bg-primary-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
              />
            </article>

            {/* Author Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                {post.primary_author.profile_image && (
                  <Image
                    src={post.primary_author.profile_image}
                    alt={post.primary_author.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {post.primary_author.name}
                  </h3>
                  {post.primary_author.bio && (
                    <p className="text-gray-600 mt-1">
                      {post.primary_author.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Share this post:</h4>
              <div className="flex space-x-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://jonnyscott.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://jonnyscott.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-700 transition-colors duration-200"
                >
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(`https://jonnyscott.com/blog/${post.slug}`)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <span className="sr-only">Copy link</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enjoyed this post?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get more insights delivered to your inbox. No spam, just value.
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
