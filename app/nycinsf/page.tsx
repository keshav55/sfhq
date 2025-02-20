'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Secure password hash (this is just for demo, in production would use proper auth)
const CORRECT_PASSWORD = 'fremontyards';

export default function NYCinSFPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    setIsLoading(true);
    try {
      const auth = localStorage.getItem('nyc_auth');
      const timestamp = localStorage.getItem('nyc_auth_timestamp');
      
      // Check if auth exists and is not expired (24 hours)
      if (auth && timestamp) {
        const now = new Date().getTime();
        const authTime = parseInt(timestamp);
        const hoursSinceAuth = (now - authTime) / (1000 * 60 * 60);
        
        if (hoursSinceAuth < 24) {
          setIsAuthenticated(true);
          setIsLoading(false);
          return;
        }
      }
      
      // If we get here, auth is invalid or expired
      localStorage.removeItem('nyc_auth');
      localStorage.removeItem('nyc_auth_timestamp');
      setIsAuthenticated(false);
    } catch (err) {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      const now = new Date().getTime();
      localStorage.setItem('nyc_auth', 'true');
      localStorage.setItem('nyc_auth_timestamp', now.toString());
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
      setTimeout(() => {
        router.push('/');
      }, 1500);
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <main className="relative min-h-screen w-full overflow-hidden gradient-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/50">Loading...</div>
        </div>
      </main>
    );
  }

  // Show password screen if not authenticated
  if (!isAuthenticated) {
    return (
      <main className="relative min-h-screen w-full overflow-hidden gradient-bg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-md p-8">
            <div className="text-center mb-12">
              <h1 className="text-[8vw] sm:text-7xl font-bold text-[#FD5A1E] mix-blend-difference mb-2">
                SF
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/20 backdrop-blur-sm border border-white/10 
                          rounded-lg text-white placeholder-white/50 focus:outline-none 
                          focus:border-[#FD5A1E] transition-all duration-300"
                placeholder="Enter password"
                autoFocus
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#FD5A1E] text-white rounded-lg
                          hover:bg-[#FD5A1E]/90 transition-all duration-300
                          font-medium"
              >
                Enter
              </button>
              {error && (
                <p className="text-red-500 text-center mt-2 text-sm">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Subtle background with better readability */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#0D0D0D]">
        <div className="absolute inset-0 noise-texture" />
        {/* Subtle accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FD5A1E]/20" />
      </div>

      {/* Title Section */}
      <div className="relative z-10 pt-16 pb-24 px-6 sm:px-8">
        <h1 className="text-center">
          <span className="block text-[12vw] sm:text-8xl font-bold text-[#FD5A1E] mb-4 hover:text-white/90 transition-colors duration-500">
            NYC in SF
          </span>
          <span className="block text-2xl sm:text-3xl font-light text-white/80 tracking-wider">
            A TALE OF TWO CITIES
          </span>
        </h1>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
        {/* Intro Section */}
        <section className="prose prose-lg prose-invert mx-auto">
          <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/90">
            Where East Coast energy meets West Coast innovation. Discover the unexpected parallels 
            and beautiful contrasts between these iconic cities, curated through a San Franciscan lens.
          </p>
        </section>

        {/* Image Left + Text Right Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] bg-black/30 rounded-lg overflow-hidden">
            {/* Image placeholder - we'll add actual images later */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD5A1E]/10 to-black/30" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Cultural Fusion</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              From the bustling streets of Manhattan to the hills of San Francisco, 
              discover how these cities blend their unique characteristics into something entirely new.
            </p>
          </div>
        </section>

        {/* Text Left + Image Right Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Urban Rhythms</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Experience the parallel pulses of two cities that never sleep, 
              each with its own tempo but moving to a similarly energetic beat.
            </p>
          </div>
          <div className="relative aspect-[4/3] bg-black/30 order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD5A1E]/20 to-black/30" />
          </div>
        </section>

        {/* Image Left + Text Right Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] bg-black/30">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FD5A1E]/20 to-black/30" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Future Forward</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Two cities at the forefront of innovation, each charting the course 
              for what urban life will look like in the decades to come.
            </p>
          </div>
        </section>

        {/* Spotify Embed Section */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-light text-white/80 text-center mb-8">
              THE SOUNDS OF TWO CITIES
            </h2>
            <div className="aspect-[16/9] bg-black/20 rounded-lg">
              {/* Spotify embed placeholder - we'll add the actual embed later */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 