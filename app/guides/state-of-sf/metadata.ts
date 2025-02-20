import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SF Has Been Back | Winter 2025',
  description: 'A deep dive into San Francisco\'s renaissance - Winter 2025 Edition.',
  openGraph: {
    title: 'SF Has Been Back | Winter 2025',
    description: 'A deep dive into San Francisco\'s renaissance - Winter 2025 Edition.',
    images: [
      {
        url: '/api/og?title=SF Has Been Back',
        width: 1200,
        height: 630,
        alt: 'State of SF Guide',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SF Has Been Back | Winter 2025',
    description: 'A deep dive into San Francisco\'s renaissance - Winter 2025 Edition.',
    images: ['/api/og?title=SF Has Been Back'],
  }
}; 