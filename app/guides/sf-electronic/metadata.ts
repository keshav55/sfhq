import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SF Electronic | Winter 2025',
  description: 'Your guide to electronic music events in San Francisco - Winter 2025 Edition.',
  openGraph: {
    title: 'SF Electronic | Winter 2025',
    description: 'Your guide to electronic music events in San Francisco - Winter 2025 Edition.',
    images: [
      {
        url: '/api/og?title=SF Electronic',
        width: 1200,
        height: 630,
        alt: 'SF Electronic Music Guide',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SF Electronic | Winter 2025',
    description: 'Your guide to electronic music events in San Francisco - Winter 2025 Edition.',
    images: ['/api/og?title=SF Electronic'],
  }
}; 