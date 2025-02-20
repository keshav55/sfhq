import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SF Restaurants | Winter 2025',
  description: 'Best food to try in San Francisco - Winter 2025 Edition.',
  openGraph: {
    type: 'article',
    siteName: 'SF[hq]',
    title: 'SF Restaurants | Winter 2025',
    description: 'Best food to try in San Francisco - Winter 2025 Edition.',
    url: 'https://sfhq.xyz/guides/restaurants',
    images: [
      {
        url: 'https://sfhq.xyz/venues/cotogna/cotogna1.webp',
        width: 1200,
        height: 630,
        alt: 'SF Restaurant Guide',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sfhq',
    creator: '@sfhq',
    title: 'SF Restaurants | Winter 2025',
    description: 'Best food to try in San Francisco - Winter 2025 Edition.',
    images: ['https://sfhq.xyz/venues/cotogna/cotogna1.webp'],
  }
};

export default function RestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 