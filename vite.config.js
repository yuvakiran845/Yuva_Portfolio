import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { site, socials } from './src/data/portfolio.js'

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

// Fills the __SITE_*__ placeholders in index.html from src/data/portfolio.js,
// so the page title, description and link-preview tags come from the same file
// as the rest of the content.
function siteMeta() {
  const url = site.url.replace(/\/$/, '')
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url,
    email: `mailto:${site.email}`,
    jobTitle: site.jobTitle,
    address: { '@type': 'PostalAddress', addressLocality: site.location },
    alumniOf: site.school,
    sameAs: Object.values(socials).map((s) => s.href),
  }
  const values = {
    SITE_TITLE: escapeHtml(site.title),
    SITE_DESCRIPTION: escapeHtml(site.description),
    SITE_NAME: escapeHtml(site.name),
    SITE_URL: escapeHtml(url),
    SITE_JSONLD: JSON.stringify(person).replace(/</g, '\\u003c'),
  }
  return {
    name: 'site-meta',
    transformIndexHtml: (html) =>
      html.replace(/__([A-Z_]+)__/g, (match, key) => (key in values ? values[key] : match)),
    // robots.txt and sitemap.xml for search engines, built with the same URL
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${escapeHtml(url)}/</loc></url>\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteMeta()],
})
