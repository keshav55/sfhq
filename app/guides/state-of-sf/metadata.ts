import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SF Has Been Back | Winter 2025',
  description: 'A deep dive into San Francisco\'s renaissance - Winter 2025 Edition.',
  openGraph: {
    type: 'article',
    siteName: 'SF[hq]',
    title: 'SF Has Been Back | Winter 2025',
    description: 'A deep dive into San Francisco\'s renaissance - Winter 2025 Edition.',
    url: 'https://sfhq.xyz/guides/state-of-sf',
    images: [
      {
        url: 'https://sfhq.xyz/og2.jpg',
        width: 1200,
        height: 630,
        alt: 'State of SF Guide',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sfhq',
    creator: '@sfhq',
    title: 'SF Has Been Back | Winter 2025',
    description: 'A deep dive into San Francisco\'s renaissance - Winter 2025 Edition.',
    images: ['https://sfhq.xyz/og2.jpg'],
  }
}; 