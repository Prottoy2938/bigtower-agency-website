import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import GoogleAnalytics from './GoogleAnalytics';

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Bigtower Studio',
    default: 'Bigtower Studio -  We Help Online Couches Get More Leads, Close Sales and Keep Clients',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <GoogleAnalytics />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
