import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sfhq.xyz'),
  title: "SF[hq] | Winter 2025",
  description: "Your essential guide to San Francisco - Edition 01, Winter 2025. Featuring local insights and city guides.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ]
  },
  openGraph: {
    type: 'website',
    siteName: 'SF[hq]',
    title: "SF[hq] | Winter 2025",
    description: "Your essential guide to San Francisco - Edition 01, Winter 2025. Featuring local insights and city guides.",
    url: 'https://sfhq.xyz',
    images: [
      {
        url: "/og2.jpg",
        width: 1200,
        height: 630,
        alt: "SF[hq] Winter 2025",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SF[hq] | Winter 2025",
    description: "Your essential guide to San Francisco - Edition 01, Winter 2025. Featuring local insights and city guides.",
    site: "@sfhq",
    creator: "@sfhq",
    images: ["/og2.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
