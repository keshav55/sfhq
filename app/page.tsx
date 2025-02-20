'use client';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden gradient-bg p-6 sm:p-8">
      {/* SF Logo & Edition */}
      <div className="relative z-10">
        <div 
          className="text-[12vw] sm:text-[8vw] font-bold font-sans select-none mix-blend-difference leading-none"
          style={{ 
            color: 'var(--sf-orange)',
            textShadow: '0 0 30px rgba(253, 90, 30, 0.3)'
          }}
        >
          SF
          <div className="flex flex-col gap-1">
            <span className="block text-[3vw] sm:text-[1.5vw] font-light tracking-widest mt-2 opacity-80">
              WINTER 2025
            </span>
            <div className="flex items-center gap-3">
              <span className="text-[2vw] sm:text-[1vw] font-light tracking-widest opacity-60">
                EDITION
              </span>
              <span className="text-[3.2vw] sm:text-[1.8vw] font-medium tracking-wider border-b-2 border-current pb-0.5">
                01
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Magazine Navigation */}
      <div className="mt-24 sm:mt-32 z-10 flex flex-col gap-8 sm:gap-6 max-w-xs sm:max-w-sm">
        <a 
          href="/guide"
          className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300"
        >
          <div className="w-8 sm:w-12 h-[1px] bg-current transform origin-left group-hover:scale-x-150 transition-transform duration-300"/>
          <span className="text-base sm:text-lg font-light tracking-wider">Guide to the City</span>
        </a>
        <a 
          href="/insights"
          className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300"
        >
          <div className="w-8 sm:w-12 h-[1px] bg-current transform origin-left group-hover:scale-x-150 transition-transform duration-300"/>
          <span className="text-base sm:text-lg font-light tracking-wider">Local Insights</span>
        </a>
      </div>
    </main>
  );
}
