'use client';

import { MeshGradient } from '@paper-design/shaders-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden p-6 sm:p-8">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <MeshGradient
          color1="#A3ADB3" // Darker fog gray
          color2="#D8DDE0" // Less bright light fog
          color3="#FD5A1E" // International Orange (Golden Gate)
          color4="#7A8589" // Deeper misty gray
          speed={0.08}
          style={{ width: '100%', height: '100%' }}
        />
        {/* Additional fog texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent mix-blend-soft-light" />
        <div className="absolute inset-0 noise-texture" />
      </div>

      {/* Initial fog reveal animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#D8DDE0] to-transparent"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Golden Gate Bridge Silhouette */}
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 2 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='256' height='256' viewBox='0 0 256 256' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 256V156C20 156 60 126 128 126C196 126 236 156 236 156V256' stroke='%23FD5A1E' stroke-width='2'/%3E%3Cpath d='M128 126V256M60 156L60 256M196 156V256M90 141V256M166 141V256' stroke='%23FD5A1E' stroke-opacity='0.5' stroke-width='2'/%3E%3Cpath d='M20 156C20 156 74 96 128 96C182 96 236 156 236 156' stroke='%23FD5A1E' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          transform: 'scale(1.2)',
          mixBlendMode: 'soft-light'
        }}
      />

      {/* SF Logo */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div 
          className="text-[12vw] sm:text-[8vw] font-bold font-sans select-none leading-none"
          style={{ 
            color: '#2C3133',
            textShadow: '0 1px 2px rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex items-end">
            <div className="relative">
              SF
              <span className="absolute bottom-0 right-0 text-[2vw] sm:text-[1.2vw] font-light opacity-90 translate-x-1/4 text-[#FD5A1E]">[hq]</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Magazine Navigation */}
      <motion.div 
        className="mt-20 sm:mt-28 z-10 flex flex-col gap-8 sm:gap-6 max-w-xs sm:max-w-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ marginLeft: 'calc(2vw + 1rem)' }}
      >
        <div className="flex items-baseline gap-3">
          <span className="text-[3.2vw] sm:text-[1.8vw] font-medium tracking-wider text-[#FD5A1E]">
            Winter 2025
          </span>
        </div>

        <div className="flex flex-col gap-8 sm:gap-6 pl-8">
          <a 
            href="/guides/sf-electronic"
            className="group text-[#2C3133] hover:text-[#1a1d1f] transition-all duration-300 text-lg sm:text-xl font-medium tracking-wider hover:translate-x-2"
          >
            <span className="relative inline-block">
              Electronic
              <span className="absolute inset-0 bg-white/20 blur-sm -z-10" />
            </span>
          </a>
          <a 
            href="/guides/restaurants"
            className="group text-[#2C3133] hover:text-[#1a1d1f] transition-all duration-300 text-lg sm:text-xl font-medium tracking-wider hover:translate-x-2"
          >
            <span className="relative inline-block">
              Restaurants
              <span className="absolute inset-0 bg-white/20 blur-sm -z-10" />
            </span>
          </a>
          <a 
            href="/guides/state-of-sf"
            className="group text-[#2C3133] hover:text-[#1a1d1f] transition-all duration-300 text-lg sm:text-xl font-medium tracking-wider hover:translate-x-2"
          >
            <span className="relative inline-block">
              SF Has Been Back
              <span className="absolute inset-0 bg-white/20 blur-sm -z-10" />
            </span>
          </a>
        </div>
      </motion.div>
    </main>
  );
}
