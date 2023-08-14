
export default function sitemap() {

    let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

    let sitemapUrls = [
        {
            url: siteUrl,
            lastModified: new Date(),
        },
    ]

    let pages = require
    .context('./', true, /\/page\.(js|jsx)$/)
    .keys()
    .filter((key) => key.startsWith('./') && key !== './page.jsx')
    .map((key) => key.slice(2).replace(/\/page\.(js|jsx)$/, ''))

    let articleIds = require
    .context('./blog', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''))

    for (let page of pages) {
        sitemapUrls.push({
            url: `${siteUrl}/${page}`,
            lastModified: new Date(),
        })
    }

    for (let id of articleIds) {
        sitemapUrls.push({
            url: `${siteUrl}/blog/${id}`,
            lastModified: new Date(),
        })
    }

    return sitemapUrls;
  }