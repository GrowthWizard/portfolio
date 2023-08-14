import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import UnnecessaryConsoleLogStatement from '@/components/UnnecessaryConsoleLog'
import { Analytics } from '@vercel/analytics/react';

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Dominik Stein - Web Development und SEO-Experte.',
    default:
      'Web-Design vom SEO-Experten. 8 Jahre Erfahrung in der Suchmaschinenoptimierung und neueste Technologien helfen dir bei deinem Ranking!',
  },
  description:
    'Web-Design vom SEO-Experten. 8 Jahre Erfahrung in der Suchmaschinenoptimierung und neueste Technologien helfen dir bei deinem Ranking!',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de_DE" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <UnnecessaryConsoleLogStatement />
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
