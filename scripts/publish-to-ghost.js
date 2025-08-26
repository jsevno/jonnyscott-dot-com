#!/usr/bin/env node

/**
 * Publish to Ghost CMS
 * 
 * This script helps publish markdown posts to Ghost CMS using the Admin API.
 * 
 * Usage:
 * node scripts/publish-to-ghost.js <markdown-file>
 * 
 * Example:
 * node scripts/publish-to-ghost.js content/posts/coastal-rowing.md
 */

const fs = require('fs');
const path = require('path');
const GhostAdminAPI = require('@tryghost/admin-api');
require('dotenv').config({ path: '.env.local' });

// Configuration
const GHOST_URL = process.env.GHOST_URL;
const GHOST_ADMIN_API_KEY = process.env.GHOST_ADMIN_API_KEY;

if (!GHOST_URL || !GHOST_ADMIN_API_KEY) {
  console.error('❌ Missing required environment variables:');
  console.error('   - GHOST_URL');
  console.error('   - GHOST_ADMIN_API_KEY');
  console.error('\nPlease check your .env.local file.');
  process.exit(1);
}

// Initialize Ghost Admin API client
const api = new GhostAdminAPI({
  url: GHOST_URL,
  key: GHOST_ADMIN_API_KEY,
  version: 'v6.0'
});

// Parse frontmatter from markdown
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    throw new Error('No frontmatter found in markdown file');
  }
  
  const frontmatterStr = match[1];
  const markdownContent = match[2];
  
  // Parse YAML frontmatter
  const frontmatter = {};
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim().replace(/"/g, ''));
      }
      
      frontmatter[key] = value;
    }
  });
  
  return { frontmatter, markdownContent };
}

// Convert markdown to HTML (basic conversion)
function markdownToHtml(markdown) {
  let html = markdown;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';
  
  return html;
}

// Publish post to Ghost using official client
async function publishToGhost(postData) {
  try {
    console.log('📤 Publishing to Ghost CMS...');
    const publishedPost = await api.posts.add(postData);
    return publishedPost;
  } catch (error) {
    console.error('❌ Error publishing to Ghost:', error.message);
    if (error.context) {
      console.error('Context:', error.context);
    }
    throw error;
  }
}

// Main function
async function main() {
  const markdownFile = process.argv[2];
  
  if (!markdownFile) {
    console.error('❌ Please provide a markdown file path');
    console.error('Usage: node scripts/publish-to-ghost.js <markdown-file>');
    process.exit(1);
  }
  
  if (!fs.existsSync(markdownFile)) {
    console.error(`❌ File not found: ${markdownFile}`);
    process.exit(1);
  }
  
  try {
    console.log(`📖 Reading markdown file: ${markdownFile}`);
    const content = fs.readFileSync(markdownFile, 'utf8');
    
    console.log('🔍 Parsing frontmatter...');
    const { frontmatter, markdownContent } = parseFrontmatter(content);
    
    console.log('🔄 Converting markdown to HTML...');
    const html = markdownToHtml(markdownContent);
    
    // Prepare post data for Ghost
    const postData = {
      title: frontmatter.title,
      html: html,
      status: frontmatter.draft === 'true' ? 'draft' : 'published',
      custom_excerpt: frontmatter.excerpt,
      feature_image: frontmatter.cover_image,
      published_at: frontmatter.date,
      tags: frontmatter.tags || [],
      meta_title: frontmatter.og_title,
      meta_description: frontmatter.og_description
    };
    
    const publishedPost = await publishToGhost(postData);
    
    console.log('✅ Post published successfully!');
    console.log(`📝 Title: ${publishedPost.title}`);
    console.log(`🔗 URL: ${publishedPost.url}`);
    console.log(`📊 Status: ${publishedPost.status}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { parseFrontmatter, markdownToHtml, publishToGhost };
