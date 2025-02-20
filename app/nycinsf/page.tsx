'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Secure password hash (this is just for demo; in production, use proper auth)
const CORRECT_PASSWORD = 'fremontyards';

function PageBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 50% 50%, #2C2420 0%, #1A1614 50%, #0D0B0A 100%),
            linear-gradient(45deg, rgba(226, 186, 149, 0.05) 0%, transparent 100%)
          `,
          backgroundBlendMode: 'normal'
        }} 
      />
      <div className="absolute inset-0 bg-[#E2BA95]/[0.02]" />
    </div>
  );
}

function VenueSection({
  title,
  description,
  instagramHandle,
  reviewUrl,
  nycEquivalent,
  sfAlternative,
  timestamp,
  imagePath,
  isImageRight = false,
}: {
  title: string;
  description: string;
  instagramHandle: string;
  reviewUrl: string;
  nycEquivalent: string;
  sfAlternative: string;
  timestamp?: string;
  imagePath: string;
  isImageRight?: boolean;
}) {
  return (
    <div className="relative mb-32 p-8 border border-[#E2BA95]/10 rounded-xl">
      {/* Timestamp for mobile */}
      {timestamp && (
        <div className="lg:hidden mb-6">
          <div className="text-[#E2BA95]/40 font-light tracking-wider text-sm">{timestamp}</div>
        </div>
      )}

      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${isImageRight ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section - updated shadows and overlay */}
        <div className="relative lg:w-[45%] aspect-[4/5] rounded-2xl overflow-hidden bg-[#1A1614]/50 shadow-xl">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
            priority={title.includes('1.')}
          />
          {/* Updated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0A]/70 to-transparent pointer-events-none" />
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
            <div className="text-center">
              <div className="text-[#E2BA95]/40 text-sm tracking-widest uppercase mb-4">{timestamp}</div>
              <div className="text-[#E2BA95] text-xl font-light">{title.split('–')[1]}</div>
            </div>
          </div>
        </div>

        {/* Content - updated text colors */}
        <div className="lg:w-[55%] space-y-6">
          {/* Timestamp for desktop */}
          {timestamp && (
            <div className="hidden lg:block">
              <div className="text-[#E2BA95]/40 font-light tracking-wider text-sm">{timestamp}</div>
            </div>
          )}
          <h3 className="text-2xl font-light font-sans text-[#E2BA95] tracking-wide">{title}</h3>
          {/* Mood Description */}
          {/* <p className="text-[#E2BA95]/60 italic text-lg leading-relaxed font-light">
            You walk in. The lighting is perfect—not too bright, not too dark. The energy is immediate.
          </p> */}
          <p className="text-[#E2BA95]/80 text-lg leading-relaxed font-light">{description}</p>
          {/* Links Section */}
          <div className="flex gap-6 text-sm items-center pt-4">
            <a
              href={instagramHandle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E2BA95]/70 hover:text-[#E2BA95] transition-colors"
            >
              @{instagramHandle.split('com/')[1].replace('/?hl=en', '')}
            </a>
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E2BA95]/70 hover:text-[#E2BA95] transition-colors"
            >
              Read Review
            </a>
          </div>
          {/* NYC/SF Comparisons */}
          <div className="text-sm text-[#E2BA95]/60 space-y-1 pt-4">
            <p className="flex items-center gap-2">
              <span className="text-lg">🗽</span> NYC Equivalent:{' '}
              <span className="text-[#E2BA95]/80">{nycEquivalent}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-lg">🌉</span> SF Alternative:{' '}
              <span className="text-[#E2BA95]/80">{sfAlternative}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaylistSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group mx-auto flex items-center gap-4 px-6 py-3 bg-[#E2BA95]/5 hover:bg-[#E2BA95]/10 rounded-full transition-all border border-[#E2BA95]/10 hover:border-[#E2BA95]/20"
      >
        <div className="relative w-8 h-8 flex-shrink-0">
          <div className="relative w-full h-full flex items-center justify-center bg-[#E2BA95]/20 rounded-full">
            <span className="text-[#E2BA95] text-lg translate-x-0.5">{isExpanded ? '✕' : '▶'}</span>
          </div>
        </div>
        <span className="text-[#E2BA95]/80 group-hover:text-[#E2BA95] transition-colors text-sm font-light">
          {isExpanded ? 'Close Player' : 'Click for an immersive experience'}
        </span>
      </button>

      {isExpanded && (
        <div className="mt-8">
          <iframe
            src="https://open.spotify.com/embed/playlist/4700QDRGx6eU5ivex5rKPQ?utm_source=generator&theme=0"
            className="w-full h-[352px] rounded-xl bg-[#1A1614]/50 shadow-xl"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

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
      setTimeout(() => router.push('/'), 1500);
    }
  };

  return (
    <main className="relative min-h-screen w-full">
      <PageBackground />
      
      <div className="relative z-10 min-h-screen">
        {isLoading ? (
          <div className="h-screen flex items-center justify-center">
            <div className="text-[#E2BA95]/50 font-light">Loading...</div>
          </div>
        ) : isAuthenticated ? (
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-24">
            {/* Title Section */}
            <header>
              <h1 className="text-center">
                <span className="block text-[12vw] sm:text-[8.5rem] font-light font-sans text-[#E2BA95] tracking-tight leading-none">
                  NYC in SF
                </span>
              </h1>
              
              {/* Editorial intro */}
              <div className="mt-16 max-w-2xl mx-auto space-y-8">
                <p className="text-2xl sm:text-3xl font-light leading-relaxed text-[#E2BA95]/90 tracking-wide">
                  Everyone wants to feel like they're in New York City.
                </p>
                <p className="text-xl sm:text-2xl font-light leading-relaxed text-[#E2BA95]/80">
                  It's that perfect blend of{' '}
                  <em className="text-[#E2BA95] not-italic">wearing a classy outfit</em>,{' '}
                  <em className="text-[#E2BA95] not-italic">sipping perfectly balanced negronis</em>,{' '}
                  <em className="text-[#E2BA95] not-italic">indulging in cacio e pepe</em>, and{' '}
                  <em className="text-[#E2BA95] not-italic">flaneuring your way around town</em>.
                </p>
                <p className="text-xl sm:text-2xl font-light leading-relaxed text-[#E2BA95]/80">
                  Guess what. <span className="text-[#E2BA95]">If you know where to look</span>, you'll 
                  also find it in the city by the bay.
                </p>
              </div>

              {/* Playlist Embed */}
              <div className="mt-12 max-w-2xl mx-auto">
                <PlaylistSection />
              </div>
            </header>

            {/* Content Container */}
            <article className="mt-16">
              {/* Start the Night Button */}
              <button
                onClick={() =>
                  document.querySelector('#venues')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
                className="w-full max-w-sm mx-auto mb-16 px-8 py-4 bg-[#E2BA95]/10 hover:bg-[#E2BA95]/20 rounded-full text-[#E2BA95] font-light text-lg tracking-wide shadow-lg shadow-[#E2BA95]/5 hover:shadow-xl hover:shadow-[#E2BA95]/10 transition-all border border-[#E2BA95]/20 hover:border-[#E2BA95]/30 flex items-center justify-center gap-3"
              >
                <span>The Night</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              <div id="venues" className="space-y-24">
                <VenueSection
                  title="Verjus - SF is (actually) back"
                  description="This spot was shut down for a few years but it's back and the energy is real. Originally started by the all-star crew behind Quince, Verjus was the spot for intern season 2019. Oh great skin contact wine. It feels like a natural wine bar straight out of West Village—small plates, great pours, and the kind of place where you start the night."
                  instagramHandle="https://www.instagram.com/verjus_sf/?hl=en"
                  reviewUrl="https://www.theinfatuation.com/san-francisco/reviews/verjus"
                  nycEquivalent="Stafilli Wine (West Village), Sauced (East Village)"
                  sfAlternative="Bar Sprezzatura"
                  timestamp="The Start"
                  imagePath="/venues/verjus/verjus1.jpg"
                  isImageRight={false}
                />
                <VenueSection
                  title="Cotogna does not miss"
                  description="Italian food. Feeling NYC? Cmon now. Cotogna is the Rezdora-Torrisi crossover SF needed. Warm lighting, handmade pastas, crispy focaccia, and a great selection of wine. Consensus rec: agnolotti and focaccia. It's got that old school Italian magic with a modern SF touch."
                  instagramHandle="https://www.instagram.com/cotogna_sf/?hl=en"
                  reviewUrl="https://www.theinfatuation.com/san-francisco/reviews/cotogna"
                  nycEquivalent="Rezdora (Midtown), Torrisi (Little Italy)"
                  sfAlternative="Tony's Pizza Napoletana (#2 in the US)—and yeah, it's that good."
                  timestamp="9 PM"
                  imagePath="/venues/cotogna/cotogna1.webp"
                  isImageRight={true}
                />
                <VenueSection
                  title="3. A Classy Speakeasy - Cold Drinks Bar"
                  description="A little Chinatown intrigue with North Beach influence. Cold Drinks Bar delivers on all fronts. You walk in, and suddenly it's La La Land with a Blade Runner twist (supposedly the intention). Main Character energy, just like NYC."
                  instagramHandle="https://www.instagram.com/colddrinksbar/"
                  reviewUrl="https://www.theinfatuation.com/san-francisco/reviews/cold-drinks-bar"
                  nycEquivalent="Attaboy (Lower East Side), Ye's Apothecary (Williamsburg)"
                  sfAlternative="Moongate Lounge (Sleek, upstairs Chinatown vibes)"
                  timestamp="Midnight"
                  imagePath="/venues/colddrinks/colddrinks1.jpg"
                  isImageRight={false}
                />
              </div>

              {/* Bonus Section */}
              <div className="space-y-8 mt-24 p-8 border border-[#E2BA95]/10 rounded-xl">
                <h3 className="text-2xl font-light font-sans text-[#E2BA95]">What else? </h3>
                <p className="text-[#E2BA95]/80">Feeling really NYC? Some more ideas:</p>
                <ul className="list-none space-y-4 text-[#E2BA95]/80">
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">🎤</span>
                    <div>
                      <span className="text-[#E2BA95]/90">Comedy Night</span> →{' '}
                      <span className="text-[#E2BA95]/70">Cobb's or Punch Line for a classic NYC style stand up set (well, maybe). Unhinged humor is slowly coming back.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">🌆</span>
                    <div>
                      <span className="text-[#E2BA95]/90">Views at Top of the Mark</span> →{' '}
                      <span className="text-[#E2BA95]/70">Your skyline bar here in SF at the top of some hotel.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">💃</span>
                    <div>
                      <span className="text-[#E2BA95]/90">Groovy House at Bar Part Time</span> →{' '}
                      <span className="text-[#E2BA95]/70">Da fonk.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-1">🛤️</span>
                    <div>
                      <span className="text-[#E2BA95]/90">Stroll North Beach</span> →{' '}
                      <span className="text-[#E2BA95]/70">Greenwich Village but SF.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Verdict Section */}
              <div className="mt-24 pt-8 border-t border-[#E2BA95]/10">
                <h3 className="text-2xl font-light font-sans text-[#E2BA95] mb-6">The Verdict?</h3>
                <p className="text-[#E2BA95]/90 text-lg leading-relaxed font-light">
                  All you need is a good wine bar, a great Italian meal, and a proper
                  speakeasy. San Francisco delivers its own version, and if you hit the right spots, you feel it. 
                  However, Golden Gate Park takes the thrown over Central Park.
                </p>
              </div>
            </article>
          </div>
        ) : (
          <div className="h-screen flex items-center justify-center">
            <div className="w-full max-w-md px-8">
              <div className="text-center mb-20">
                <h1 className="text-[15vw] sm:text-[120px] font-light font-sans text-[#E2BA95] opacity-95 inline-flex items-baseline tracking-tight">
                  SF<span className="text-[4vw] sm:text-[30px] font-extralight ml-2 tracking-wider">[hq]</span>
                </h1>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-8 bg-[#1A1614]/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#E2BA95]/10"
              >
                <div className="relative">
                  <label htmlFor="password" className="block text-[#E2BA95]/90 text-lg font-light mb-3">
                    Enter password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-6 py-4 bg-[#E2BA95]/5 rounded-lg text-[#E2BA95] placeholder-[#E2BA95]/40 border border-[#E2BA95]/20 focus:outline-none focus:border-[#E2BA95]/40 focus:ring-2 focus:ring-[#E2BA95]/20 transition-colors text-lg shadow-inner"
                    placeholder="••••••••"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#E2BA95]/10 hover:bg-[#E2BA95]/20 text-[#E2BA95] rounded-lg font-light text-lg shadow-lg transition-all border border-[#E2BA95]/20 hover:border-[#E2BA95]/30"
                >
                  <span className="relative z-10 tracking-wide">Enter</span>
                </button>
                {error && <p className="text-[#E2BA95] text-center mt-4 text-sm font-light">{error}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}