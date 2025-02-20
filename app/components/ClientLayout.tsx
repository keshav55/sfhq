'use client';

import { usePathname } from 'next/navigation';
import HomeButton from "./HomeButton";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <body className="antialiased">
      {!isHomePage && <HomeButton />}
      {children}
    </body>
  );
} 