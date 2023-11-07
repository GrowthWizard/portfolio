import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import UnnecessaryConsoleLogStatement from '@/components/UnnecessaryConsoleLog'
import ContactButton from '@/components/contact-button';
//import ContactButton from '@/components/ContactButton/ContactButton';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/tailwind.css'

export const metadata = {
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <UnnecessaryConsoleLogStatement />
            <Layout>{children}</Layout>
          </div>
        </Providers>
       {/* <ContactButton /> */}
       <ContactButton />
        <Analytics />
      </body>
    </html>
  )
}
