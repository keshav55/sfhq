import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SF Electronic | Winter 2025',
  description: 'Your guide to electronic music events in San Francisco - Winter 2025 Edition.',
  openGraph: {
    type: 'article',
    siteName: 'SF[hq]',
    title: 'SF Electronic | Winter 2025',
    description: 'Your guide to electronic music events in San Francisco - Winter 2025 Edition.',
    url: 'https://sfhq.xyz/guides/sf-electronic',
    images: [
      {
        url: 'https://sfhq.xyz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SF Electronic Music Guide',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sfhq',
    creator: '@sfhq',
    title: 'SF Electronic | Winter 2025',
    description: 'Your guide to electronic music events in San Francisco - Winter 2025 Edition.',
    images: ['https://sfhq.xyz/og-image.jpg'],
  }
}; 