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
      <main className="relative min-h-screen w-full overflow-hidden bg-[#3D1D14]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-md px-8">
            <div className="text-center mb-16">
              <h1 className="text-[15vw] sm:text-[120px] font-bold text-[#FD5A1E] opacity-90">
                SF
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 bg-transparent border-0 border-b border-[#FD5A1E]/30
                          text-[#FD5A1E] placeholder-[#FD5A1E]/50 focus:outline-none focus:border-[#FD5A1E]
                          transition-all duration-300 text-lg"
                placeholder="Enter password"
                autoFocus
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#FD5A1E] text-white rounded-lg
                          hover:bg-[#FD5A1E]/90 transition-all duration-300
                          text-lg font-normal mt-8"
              >
                Enter
              </button>
              {error && (
                <p className="text-[#FD5A1E] text-center mt-4 text-sm">
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
      <div className="relative z-10 pt-16 pb-12 px-6 sm:px-8">
        <h1 className="text-center">
          <span className="block text-[12vw] sm:text-8xl font-bold text-[#FD5A1E] mb-4 hover:text-white/90 transition-colors duration-500">
            NYC in SF
          </span>
        </h1>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        <article className="prose prose-lg prose-invert mx-auto">
          <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/90 mb-12">
            NYC energy is a mix of effortless nightlife, an electric atmosphere, and food that sets the scene. 
            It's always a combination of being well-dressed, classy cocktails, a great Italian meal, and walking through the night with energy. 
            That's the formula. And San Francisco is so back—if you know where to look.
          </p>

          <h2 className="text-2xl font-medium text-white mt-16 mb-8">The Itinerary: A Perfect NYC-Inspired Night in SF</h2>

          {/* Verjus Section */}
          <div className="space-y-6 mb-16">
            <h3 className="text-xl font-medium text-[#FD5A1E]">1. SF Is So Back – Verjus</h3>
            <p className="text-white/80">
              This spot was shut down for a few years, but it's back, and the energy is real. Originally started by the all-star crew behind Quince, 
              Verjus was the spot for intern season 2019, and yeah—great skin-contact wine. It feels like a natural wine bar straight out of West Village—small plates, 
              great pours, and the kind of place where you start the night and forget to leave.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="https://www.instagram.com/verjus_sf/?hl=en" target="_blank" rel="noopener noreferrer" 
                className="text-[#FD5A1E] hover:text-white transition-colors">@verjus_sf</a>
              <a href="https://www.theinfatuation.com/san-francisco/reviews/verjus" target="_blank" rel="noopener noreferrer"
                className="text-[#FD5A1E] hover:text-white transition-colors">Read Review</a>
            </div>
            <div className="text-sm text-white/60">
              <p>🗽 NYC Equivalent: Stafilli Wine (West Village), Sauced (East Village)</p>
              <p>🌉 SF Alternative: Bar Sprezzatura</p>
            </div>
          </div>

          {/* Cotogna Section */}
          <div className="space-y-6 mb-16">
            <h3 className="text-xl font-medium text-[#FD5A1E]">2. Italian Forever – Cotogna</h3>
            <p className="text-white/80">
              Italian food is non-negotiable for a perfect night. Cotogna is the Rezdora-Torrisi crossover SF needed—warm lighting, 
              handmade pastas, crispy focaccia, and fire-kissed meats. If you're debating what to order, get the agnolotti and wood-grilled steak. 
              It's got that old-school Italian magic with a modern SF touch.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="https://www.instagram.com/cotogna_sf/?hl=en" target="_blank" rel="noopener noreferrer"
                className="text-[#FD5A1E] hover:text-white transition-colors">@cotogna_sf</a>
              <a href="https://www.theinfatuation.com/san-francisco/reviews/cotogna" target="_blank" rel="noopener noreferrer"
                className="text-[#FD5A1E] hover:text-white transition-colors">Read Review</a>
            </div>
            <div className="text-sm text-white/60">
              <p>🗽 NYC Equivalent: Rezdora (Midtown), Torrisi (Little Italy)</p>
              <p>🌉 SF Alternative: Tony's Pizza Napoletana (#2 in the US)—and yeah, it's that good.</p>
            </div>
          </div>

          {/* Cold Drinks Bar Section */}
          <div className="space-y-6 mb-16">
            <h3 className="text-xl font-medium text-[#FD5A1E]">3. A Classy Speakeasy – Cold Drinks Bar</h3>
            <p className="text-white/80">
              You need a late-night spot with mystery, a little Chinatown intrigue, and upscale cocktail energy. Cold Drinks Bar delivers on all fronts. 
              It's giving slight Chinatown, but with that polished cocktail fusion, straight out of a movie. You walk in, and suddenly it's La La Land 
              with a Blade Runner twist. This is why you gotta dress up—velvet booths, moody lighting, and a cocktail in hand? Flawless.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="https://www.instagram.com/colddrinksbar/" target="_blank" rel="noopener noreferrer"
                className="text-[#FD5A1E] hover:text-white transition-colors">@colddrinksbar</a>
              <a href="https://www.theinfatuation.com/san-francisco/reviews/cold-drinks-bar" target="_blank" rel="noopener noreferrer"
                className="text-[#FD5A1E] hover:text-white transition-colors">Read Review</a>
            </div>
            <div className="text-sm text-white/60">
              <p>🗽 NYC Equivalent: Attaboy (Lower East Side), Ye's Apothecary (Williamsburg)</p>
              <p>🌉 SF Alternative: Moongate Lounge (Sleek, upstairs Chinatown vibes)</p>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="space-y-6 mb-16">
            <h3 className="text-xl font-medium text-white">Bonus NYC Moves</h3>
            <p className="text-white/80">Want to go deeper into the energy? Add one (or all) of these:</p>
            <ul className="list-none space-y-3 text-white/80">
              <li>🎤 Comedy Night → Cobb's or Punch Line for a classic NYC-style stand-up set.</li>
              <li>🌆 Views at Top of the Mark → A skyline moment, just like an NYC rooftop.</li>
              <li>💃 Dance at Bar Part Time → House music, dim lights, late-night movement.</li>
              <li>🛤️ Stroll North Beach → SF's Greenwich Village moment.</li>
            </ul>
          </div>

          {/* Verdict Section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-xl font-medium text-white mb-4">The Verdict?</h3>
            <p className="text-white/80">
              The NYC formula works anywhere—all you need is a good wine bar, a great Italian meal, and a proper speakeasy. 
              San Francisco delivers its own version, and if you hit the right spots, you feel that pulse.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
} 