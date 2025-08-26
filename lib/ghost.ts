import axios from 'axios'

const GHOST_URL = process.env.GHOST_URL || 'https://your-ghost-site.ghost.io'
const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY
const GHOST_ADMIN_API_KEY = process.env.GHOST_ADMIN_API_KEY

export interface GhostPost {
  id: string
  uuid: string
  title: string
  slug: string
  html: string
  comment_id: string
  feature_image: string | null
  featured: boolean
  visibility: string
  created_at: string
  updated_at: string
  published_at: string
  custom_excerpt: string | null
  codeinjection_head: string | null
  codeinjection_foot: string | null
  custom_template: string | null
  canonical_url: string | null
  tags: GhostTag[]
  authors: GhostAuthor[]
  primary_author: GhostAuthor
  primary_tag: GhostTag | null
  url: string
  excerpt: string
  reading_time: number
  access: boolean
  comments: boolean
  og_image: string | null
  og_title: string | null
  og_description: string | null
  twitter_image: string | null
  twitter_title: string | null
  twitter_description: string | null
  meta_title: string | null
  meta_description: string | null
  email_subject: string | null
}

export interface GhostTag {
  id: string
  name: string
  slug: string
  description: string | null
  feature_image: string | null
  visibility: string
  meta_title: string | null
  meta_description: string | null
  url: string
}

export interface GhostAuthor {
  id: string
  name: string
  slug: string
  profile_image: string | null
  cover_image: string | null
  bio: string | null
  website: string | null
  location: string | null
  facebook: string | null
  twitter: string | null
  meta_title: string | null
  meta_description: string | null
  url: string
}

export interface GhostResponse<T> {
  posts: T[]
  meta: {
    pagination: {
      page: number
      limit: number
      pages: number
      total: number
      next: number | null
      prev: number | null
    }
  }
}

// Content API (public, read-only)
export async function getPosts(limit = 10, page = 1): Promise<GhostResponse<GhostPost>> {
  try {
    const response = await axios.get(`${GHOST_URL}/ghost/api/content/posts/`, {
      params: {
        key: GHOST_CONTENT_API_KEY,
        include: 'tags,authors',
        limit,
        page,
        order: 'published_at DESC',
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export async function getPost(slug: string): Promise<GhostPost | null> {
  try {
    const response = await axios.get(`${GHOST_URL}/ghost/api/content/posts/slug/${slug}/`, {
      params: {
        key: GHOST_CONTENT_API_KEY,
        include: 'tags,authors',
      },
    })
    return response.data.posts[0] || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getTags(): Promise<GhostTag[]> {
  try {
    const response = await axios.get(`${GHOST_URL}/ghost/api/content/tags/`, {
      params: {
        key: GHOST_CONTENT_API_KEY,
        limit: 'all',
      },
    })
    return response.data.tags
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

// Admin API (for publishing - use with caution)
export async function createPost(postData: {
  title: string
  html: string
  status?: 'draft' | 'published'
  tags?: string[]
  custom_excerpt?: string
  feature_image?: string
  published_at?: string
}): Promise<GhostPost | null> {
  if (!GHOST_ADMIN_API_KEY) {
    throw new Error('Ghost Admin API key not configured')
  }

  try {
    const response = await axios.post(
      `${GHOST_URL}/ghost/api/admin/posts/`,
      {
        posts: [postData],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Ghost ${GHOST_ADMIN_API_KEY}`,
        },
      }
    )
    return response.data.posts[0] || null
  } catch (error) {
    console.error('Error creating post:', error)
    throw error
  }
}

export async function updatePost(
  id: string,
  postData: Partial<{
    title: string
    html: string
    status: 'draft' | 'published'
    tags: string[]
    custom_excerpt: string
    feature_image: string
    published_at: string
  }>
): Promise<GhostPost | null> {
  if (!GHOST_ADMIN_API_KEY) {
    throw new Error('Ghost Admin API key not configured')
  }

  try {
    const response = await axios.put(
      `${GHOST_URL}/ghost/api/admin/posts/${id}/`,
      {
        posts: [postData],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Ghost ${GHOST_ADMIN_API_KEY}`,
        },
      }
    )
    return response.data.posts[0] || null
  } catch (error) {
    console.error('Error updating post:', error)
    throw error
  }
}

// Utility functions
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '')
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / 200) // Average reading speed
}
