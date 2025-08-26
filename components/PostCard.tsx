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
        <div className="relative overflow-hidden rounded-lg mb-4">
          {post.feature_image ? (
            <Image
              src={post.feature_image}
              alt={post.title}
              width={featured ? 800 : 400}
              height={featured ? 400 : 200}
              className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-48 lg:h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
            </div>
          )}
          {post.featured && (
            <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded text-sm font-medium">
              Featured
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
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
          
          <h2 className={`font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 ${
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}>
            {post.title}
          </h2>
          
          <p className="text-gray-600 line-clamp-3">
            {post.custom_excerpt || post.excerpt}
          </p>
          
          <div className="flex items-center space-x-2 pt-2">
            {post.primary_author.profile_image && (
              <Image
                src={post.primary_author.profile_image}
                alt={post.primary_author.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full"
              />
            )}
            <span className="text-sm text-gray-600">
              {post.primary_author.name}
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
