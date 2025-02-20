import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Insights | SF Winter 2025',
  description: 'Insider knowledge and local perspectives on San Francisco. Discover the city through the eyes of locals.',
  openGraph: {
    title: 'Local Insights | SF Winter 2025',
    description: 'Insider knowledge and local perspectives on San Francisco. Discover the city through the eyes of locals.',
    images: [
      {
        url: '/api/og?title=Local Insights',
        width: 1200,
        height: 630,
        alt: 'SF Local Insights Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Insights | SF Winter 2025',
    description: 'Insider knowledge and local perspectives on San Francisco. Discover the city through the eyes of locals.',
    images: ['/api/og?title=Local Insights'],
  }
}; 