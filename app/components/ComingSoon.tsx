'use client';

import { motion } from 'framer-motion';

interface ComingSoonProps {
  title: string;
  subtitle?: string;
}

export default function ComingSoon({ title, subtitle = '[in construction...]' }: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400">
          {title}
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl">
          {subtitle}
        </p>
      </motion.div>
    </main>
  );
} 