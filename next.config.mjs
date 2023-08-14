import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  async redirects() {
    return [
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/suchmaschinenoptimierung",
        destination: "/seo",
        permanent: true,
      },
      {
        source: "/wordpress",
        destination: "/webdesign",
        permanent: true,
      },
      {
        source: "/yoast-seo-tutorial",
        destination: "/blog/yoast-seo-tutorial",
        permanent: true,
      },
      {
        source: "/richtige-seo-agentur-finden",
        destination: "/blog/richtige-seo-agentur-finden",
        permanent: true,
      },
      {
        source: "/wp-rocket-einstellungen",
        destination: "/blog/wp-rocket-einstellungen",
        permanent: true,
      },
    ]
    }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
