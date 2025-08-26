# Jonny Scott - Personal Website

A modern, fast, and SEO-optimized personal website built with Next.js, Tailwind CSS, and Ghost CMS. Features a blog, newsletter signup, contact form, and Instagram integration.

## 🚀 Features

- **Modern Design**: Clean, professional design with responsive layout
- **Ghost CMS Integration**: Headless CMS for content management
- **Blog System**: Full-featured blog with categories, tags, and search
- **Newsletter Signup**: Email subscription functionality
- **Contact Form**: Professional contact page with form handling
- **Instagram Integration**: Social media feed display
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Fast loading with Next.js optimizations
- **Mobile Responsive**: Works perfectly on all devices

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Ghost (Headless)
- **Deployment**: Vercel (recommended)
- **Language**: TypeScript
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A Ghost CMS instance (hosted or self-hosted)
- Vercel account (for deployment)
- Domain name (optional)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/jonnyscott-dot-com.git
cd jonnyscott-dot-com
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Ghost CMS Configuration
GHOST_URL=https://your-ghost-site.ghost.io
GHOST_CONTENT_API_KEY=your_content_api_key_here
GHOST_ADMIN_API_KEY=your_admin_api_key_here

# Optional: Instagram Integration
INSTAGRAM_TOKEN=your_instagram_token_here

# Optional: Newsletter Service
NEWSLETTER_API_KEY=your_newsletter_service_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Content Management

### Ghost CMS Setup

1. **Create Ghost Account**: Sign up at [ghost.org](https://ghost.org)
2. **Get API Keys**:
   - Content API Key: For reading posts (public)
   - Admin API Key: For publishing posts (private)
3. **Configure Environment Variables**: Add your Ghost URL and API keys

### Publishing Content

#### Option A: Ghost Admin Interface
- Use the Ghost admin panel to create and publish posts
- Posts automatically appear on your site

#### Option B: Cursor Integration
Use the provided Cursor prompts to create and publish content:

```bash
# Example Cursor prompt for creating a post
"Draft a personal essay titled 'Coastal Rowing: Connection, Teamwork, and Adventure' in Jonny Scott's voice..."
```

## 🎨 Customization

### Colors and Branding

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... customize your brand colors
      }
    }
  }
}
```

### Content Updates

- **Profile Information**: Update `app/about/page.tsx`
- **Contact Details**: Update `app/contact/page.tsx`
- **Social Links**: Update `components/Footer.tsx` and `components/Header.tsx`
- **Meta Information**: Update `app/layout.tsx`

### Images

Place images in the `public/images/` directory:
- `hero-image.jpg` - Homepage hero image
- `jonny-scott-profile.jpg` - About page profile image
- `coastal-rowing.jpg` - About page coastal rowing image
- `og-default.jpg` - Default Open Graph image

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Environment Variables**: Add all environment variables in Vercel dashboard
3. **Deploy**: Vercel automatically deploys on push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Environment Variables for Production

Ensure these are set in your deployment platform:

```env
GHOST_URL=https://your-ghost-site.ghost.io
GHOST_CONTENT_API_KEY=your_content_api_key_here
GHOST_ADMIN_API_KEY=your_admin_api_key_here
```

## 📱 Instagram Integration

### Option A: Smash Balloon (Recommended)

1. Install Smash Balloon plugin on WordPress
2. Configure Instagram feed
3. Copy embed code to `components/InstagramGrid.tsx`

### Option B: Instagram Basic Display API

1. Create Facebook Developer app
2. Configure Instagram Basic Display
3. Get access token
4. Update `INSTAGRAM_TOKEN` environment variable

## 📧 Newsletter Integration

The newsletter signup is ready to integrate with services like:

- ConvertKit
- Mailchimp
- Substack
- Custom email service

Update the API endpoint in `components/NewsletterSignup.tsx` to connect to your preferred service.

## 🔧 API Routes

### `/api/newsletter`
Handles newsletter subscriptions. Update to integrate with your email service.

### `/api/contact`
Handles contact form submissions. Update to integrate with your preferred form handler.

### `/api/instagram` (Optional)
Fetches Instagram posts using the Basic Display API.

## 📊 Analytics

Add Google Analytics by updating `app/layout.tsx`:

```javascript
// Add Google Analytics script
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
```

## 🐛 Troubleshooting

### Common Issues

1. **Posts not appearing**: Check Ghost API keys and URL
2. **Build errors**: Ensure all environment variables are set
3. **Styling issues**: Clear browser cache and restart dev server
4. **Image loading**: Verify image paths in `public/images/`

### Debug Mode

Enable debug logging by adding to `.env.local`:

```env
DEBUG=true
```

## 📚 Cursor Integration

This project includes Cursor prompt templates for content creation. See the build pack for detailed prompts covering:

- Blog post drafting
- SEO optimization
- Social media content
- Image optimization
- Ghost CMS publishing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Email: hello@jonnyscott.com
- Twitter: [@jonnyscott](https://twitter.com/jonnyscott)
- LinkedIn: [jonnyscott](https://linkedin.com/in/jonnyscott)

## 🎯 Roadmap

- [ ] Search functionality
- [ ] Comment system
- [ ] Related posts
- [ ] Email newsletter templates
- [ ] Podcast integration
- [ ] Video content support
- [ ] Multi-language support

---

Built with ❤️ by Jonny Scott
# Force fresh deployment
