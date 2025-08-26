import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Jonny Scott - Digital Business Growth & Personal Development',
    template: '%s | Jonny Scott'
  },
  description: 'Digital business growth consultant, coastal rower, and personal development enthusiast. Helping businesses scale through strategic digital transformation.',
  keywords: ['digital business', 'growth consultant', 'coastal rowing', 'personal development', 'business strategy'],
  authors: [{ name: 'Jonny Scott' }],
  creator: 'Jonny Scott',
  publisher: 'Jonny Scott',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jonnyscott.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://jonnyscott.com',
    title: 'Jonny Scott - Digital Business Growth & Personal Development',
    description: 'Digital business growth consultant, coastal rower, and personal development enthusiast.',
    siteName: 'Jonny Scott',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Jonny Scott - Digital Business Growth Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonny Scott - Digital Business Growth & Personal Development',
    description: 'Digital business growth consultant, coastal rower, and personal development enthusiast.',
    images: ['/images/og-default.jpg'],
    creator: '@jonnyscott',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
