import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SF Restaurants | Winter 2025',
  description: 'Best food to try in San Francisco - Winter 2025 Edition.',
  openGraph: {
    title: 'SF Restaurants | Winter 2025',
    description: 'Best food to try in San Francisco - Winter 2025 Edition.',
    images: [
      {
        url: '/api/og?title=SF Restaurants',
        width: 1200,
        height: 630,
        alt: 'SF Restaurant Guide',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SF Restaurants | Winter 2025',
    description: 'Best food to try in San Francisco - Winter 2025 Edition.',
    images: ['/api/og?title=SF Restaurants'],
  }
}; 