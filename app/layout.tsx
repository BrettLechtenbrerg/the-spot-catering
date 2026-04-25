import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Spot Catering | Denver Corporate Catering Queen',
  description: 'We know how to hit the spot! Premium corporate catering in Denver by Mandy Smith. Themed events, breakfast, lunch, happy hours & more. Woman-owned, certified MWBE.',
  keywords: 'Denver catering, corporate catering, themed events, breakfast catering, lunch catering, happy hour catering, woman-owned business, MWBE, Denver events',
  authors: [{ name: 'The Spot Catering' }],
  openGraph: {
    title: 'The Spot Catering | Denver Corporate Catering Queen',
    description: 'We know how to hit the spot! Premium corporate catering in Denver. Themed events, corporate meetings, team appreciation & more.',
    url: 'https://denversbestcaterer.com',
    siteName: 'The Spot Catering',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Spot Catering | Denver Corporate Catering Queen',
    description: 'We know how to hit the spot! Premium corporate catering in Denver.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
