'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-medium border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">JS</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
              Jonny Scott
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/newsletter" className="btn-accent text-sm">
              Subscribe
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-all duration-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200/50 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-medium">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="nav-link px-4 py-2 rounded-xl hover:bg-gray-50/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className="nav-link px-4 py-2 rounded-xl hover:bg-gray-50/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="nav-link px-4 py-2 rounded-xl hover:bg-gray-50/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="nav-link px-4 py-2 rounded-xl hover:bg-gray-50/50 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-2">
                <Link 
                  href="/newsletter" 
                  className="btn-accent w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Subscribe
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
