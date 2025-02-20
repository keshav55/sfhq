import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NYC in SF | sfhq.xyz',
  description: 'NYC in SF - Experience New York City vibes in San Francisco. A curated guide to the best NYC-style spots in SF.',
  icons: {
    icon: [
      {
        url: '/ny_cog.jpg',
        type: 'image/jpeg',
      }
    ]
  },
  openGraph: {
    type: 'article',
    siteName: 'SF[hq]',
    title: 'NYC in SF | Winter 2025',
    description: 'Experience New York City energy in San Francisco. A curated guide to the best NYC-style spots in SF.',
    url: 'https://sfhq.xyz/nycinsf',
    images: [
      {
        url: '/ny_cog.jpg',
        width: 1200,
        height: 630,
        alt: 'NYC in SF Guide | Winter 2025',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sfhq',
    creator: '@sfhq',
    title: 'NYC in SF | Winter 2025',
    description: 'Experience New York City vibes in San Francisco. A curated guide to the best NYC-style spots in SF.',
    images: ['/ny_cog.jpg'],
  }
}; 