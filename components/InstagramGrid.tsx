'use client'

import { useState, useEffect } from 'react'

interface InstagramPost {
  id: string
  caption: string
  media_url: string
  permalink: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  thumbnail_url?: string
}

export default function InstagramGrid() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Option A: Smash Balloon embed (recommended for simplicity)
    // This would be an iframe embed from Smash Balloon
    // For now, we'll show a placeholder with instructions
    
    // Option B: Instagram Basic Display API
    // Uncomment the following to use the API approach
    /*
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch('/api/instagram')
        if (response.ok) {
          const data = await response.json()
          setPosts(data.posts)
        } else {
          throw new Error('Failed to fetch Instagram posts')
        }
      } catch (err) {
        setError('Unable to load Instagram feed')
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
    */
    
    // For now, simulate loading completion
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Follow My Adventures
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Follow My Adventures
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 mb-4">{error}</p>
            <a
              href="https://instagram.com/jonnyscott"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    )
  }

  // Smash Balloon embed approach (recommended)
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Follow My Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Coastal rowing, business insights, and life updates from my Instagram feed
          </p>
        </div>

        {/* Smash Balloon Embed */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center">
            <div className="mb-6">
              <svg className="w-12 h-12 text-pink-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instagram Feed
              </h3>
              <p className="text-gray-600 mb-6">
                To display your Instagram feed, you'll need to:
              </p>
            </div>
            
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium text-gray-900">Install Smash Balloon</p>
                  <p className="text-gray-600 text-sm">
                    Add the Smash Balloon Instagram Feeds plugin to your WordPress site
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium text-gray-900">Configure Feed</p>
                  <p className="text-gray-600 text-sm">
                    Connect your Instagram account and customize the feed display
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium text-gray-900">Embed in Next.js</p>
                  <p className="text-gray-600 text-sm">
                    Copy the embed code and replace this placeholder component
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <a
                href="https://instagram.com/jonnyscott"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Follow on Instagram
              </a>
              <p className="text-sm text-gray-500">
                Or use the Instagram Basic Display API for full control
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
