'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeButton() {
  return (
    <Link href="/">
      <motion.button
        className="fixed top-6 left-6 z-50 p-3 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 text-white/80 hover:text-white transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </motion.button>
    </Link>
  );
} 