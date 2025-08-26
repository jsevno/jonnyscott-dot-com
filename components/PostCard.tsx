import Link from 'next/link'
import Image from 'next/image'
import { GhostPost, formatDate } from '@/lib/ghost'

interface PostCardProps {
  post: GhostPost
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article className={`group ${featured ? 'lg:col-span-2' : ''}`}>
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="card-gradient overflow-hidden transition-all duration-500 hover:shadow-large hover:-translate-y-2">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-t-2xl">
            {post.feature_image ? (
              <Image
                src={post.feature_image}
                alt={post.title}
                width={featured ? 800 : 400}
                height={featured ? 400 : 200}
                className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-primary-100 via-accent-100 to-purple-100 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center shadow-soft">
                  <span className="text-white font-bold text-2xl">JS</span>
                </div>
              </div>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-soft">
                Featured
              </div>
            )}
            
            {/* Reading Time Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium shadow-soft">
              {post.reading_time} min read
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <time dateTime={post.published_at} className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.published_at)}
              </time>
              {post.primary_tag && (
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="text-primary-600 font-medium">
                    {post.primary_tag.name}
                  </span>
                </span>
              )}
            </div>
            
            {/* Title */}
            <h2 className={`font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-4 leading-tight ${
              featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
            }`}>
              {post.title}
            </h2>
            
            {/* Excerpt */}
            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {post.custom_excerpt || post.excerpt}
            </p>
            
            {/* Author */}
            <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
              {post.primary_author.profile_image ? (
                <Image
                  src={post.primary_author.profile_image}
                  alt={post.primary_author.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full ring-2 ring-white shadow-soft"
                />
              ) : (
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-soft">
                  <span className="text-white font-semibold text-sm">
                    {post.primary_author.name.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <span className="text-sm font-medium text-gray-900">
                  {post.primary_author.name}
                </span>
                <div className="text-xs text-gray-500">Author</div>
              </div>
              
              {/* Arrow Icon */}
              <div className="ml-auto">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
