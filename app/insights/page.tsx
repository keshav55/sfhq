'use client';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Insights | SF Winter 2025',
  description: 'Insider knowledge and local perspectives on San Francisco. Discover the city through the eyes of locals.',
  openGraph: {
    title: 'Local Insights | SF Winter 2025',
    description: 'Insider knowledge and local perspectives on San Francisco. Discover the city through the eyes of locals.',
    images: [
      {
        url: '/insights-preview.jpg',
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
    images: ['/insights-preview.jpg'],
  }
};

export default function InsightsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden gradient-bg p-6 sm:p-8">
      {/* Insights content will go here */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-[8vw] sm:text-6xl font-bold text-white mb-8">
          Local Insights
        </h1>
        {/* Insights content placeholder */}
      </div>
    </main>
  );
} 