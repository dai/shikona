import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dai.github.io/shikona/'),
  title: 'Shikona Dictionary',
  description: 'Google Japanese Input and Microsoft IME dictionaries for sumo wrestler shikona.',
  generator: 'Next.js',
  openGraph: {
    title: 'Shikona Dictionary',
    description: 'Google Japanese Input and Microsoft IME dictionaries for sumo wrestler shikona.',
    url: 'https://dai.github.io/shikona/',
    siteName: 'Shikona Dictionary',
    images: [
      {
        url: 'eyecatch.png',
        width: 400,
        height: 300,
        alt: 'Shikona Dictionary eyecatch',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shikona Dictionary',
    description: 'Google Japanese Input and Microsoft IME dictionaries for sumo wrestler shikona.',
    images: ['eyecatch.png'],
  },
  icons: {
    icon: [
      {
        url: 'https://dai.github.io/shikona/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://dai.github.io/shikona/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://dai.github.io/shikona/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: 'https://dai.github.io/shikona/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
