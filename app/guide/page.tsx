'use client';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guide to the City | SF Winter 2025',
  description: 'Discover the hidden gems and must-visit spots in San Francisco. Your complete city guide for Winter 2025.',
  openGraph: {
    title: 'Guide to the City | SF Winter 2025',
    description: 'Discover the hidden gems and must-visit spots in San Francisco. Your complete city guide for Winter 2025.',
    images: [
      {
        url: '/guide-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'SF City Guide Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide to the City | SF Winter 2025',
    description: 'Discover the hidden gems and must-visit spots in San Francisco. Your complete city guide for Winter 2025.',
    images: ['/guide-preview.jpg'],
  }
};

export default function GuidePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden gradient-bg p-6 sm:p-8">
      {/* Guide content will go here */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-[8vw] sm:text-6xl font-bold text-white mb-8">
          Guide to the City
        </h1>
        {/* Guide content placeholder */}
      </div>
    </main>
  );
} 