import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NYC in SF | sfhq.xyz',
  description: 'NYC in SF',
  openGraph: {
    title: 'NYC in SF',
    description: 'An evening in SF',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Winter 2025 | sfhq.xyz',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winter 2025 | sfhq.xyz',
    description: 'Delivered Quietly',
    images: ['/api/og'],
  }
}; 