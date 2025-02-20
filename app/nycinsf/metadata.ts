import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Winter 2025 | sfhq.xyz',
  description: 'Delivered Quietly',
  openGraph: {
    title: 'Winter 2025 | sfhq.xyz',
    description: 'Delivered Quietly',
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