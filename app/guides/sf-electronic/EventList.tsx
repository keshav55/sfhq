'use client';

import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { Components } from 'react-markdown';
import type { HTMLMotionProps } from 'framer-motion';

interface EventListProps {
  content: string;
}

function InlinePlayer({ url }: { url: string }) {
  const cleanUrl = url.split('&')[0].replace('watch?v=', 'embed/');
  
  return (
    <motion.div
      initial={{ opacity: 0, height: 0, margin: 0 }}
      animate={{ opacity: 1, height: 'auto', margin: '2rem 0' }}
      exit={{ opacity: 0, height: 0, margin: 0 }}
      className="w-full overflow-hidden -mx-2 sm:mx-0"
    >
      <div className="bg-zinc-900 rounded-xl overflow-hidden aspect-video shadow-lg sm:w-[calc(100%+2rem)] sm:-ml-4 md:w-[calc(100%+4rem)] md:-ml-8">
        <iframe
          src={cleanUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}

export default function EventList({ content }: EventListProps) {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const components: Partial<Components> = {
    h2: ({ ...props }) => (
      <motion.div 
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 1 }}
        className="sticky top-0 bg-black/90 backdrop-blur-sm z-10 -mx-6 px-6 py-4 border-b border-white/10"
      >
        <h2 className="text-2xl font-medium text-zinc-100 tracking-tight" {...props} />
      </motion.div>
    ),
    ul: ({ ...props }) => (
      <ul className="space-y-8 mt-6 mb-10" {...props} />
    ),
    li: ({ children }) => {
      const motionProps: HTMLMotionProps<"li"> = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        className: "flex flex-col gap-3 text-zinc-300 hover:text-white transition-colors p-3 -mx-3 rounded-xl hover:bg-white/5"
      };

      return (
        <motion.li {...motionProps}>
          <div className="flex flex-wrap items-center gap-3 leading-relaxed">
            {children}
          </div>
        </motion.li>
      );
    },
    strong: ({ ...props }) => (
      <strong className="font-semibold text-white" {...props} />
    ),
    a: ({ children, href, ...props }) => {
      const childrenString = String(children);
      const isMusicLink = childrenString === 'Music Link' && href;
      const isDirectionsLink = childrenString === 'Get Directions' && href;

      if (isMusicLink) {
        const isExpanded = expandedEvent === href;
        return (
          <>
            <motion.button 
              onClick={() => setExpandedEvent(isExpanded ? null : href)}
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-all"
              whileHover={{ scale: 1.05 }}
              type="button"
            >
              <span className="mr-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-emerald-400/50 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
                {isExpanded ? '✕ Close' : '▶ Listen'}
              </span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </motion.button>
            <AnimatePresence>
              {isExpanded && <InlinePlayer url={href} />}
            </AnimatePresence>
          </>
        );
      }

      if (isDirectionsLink) {
        return (
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all transform hover:scale-105"
            {...props}
          >
            <span className="mr-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-blue-400/50 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform">📍 Map</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>
        );
      }

      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          {...props}
        >
          <span className="mr-1">{children}</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      );
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl relative overflow-hidden"
      >
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </motion.div>
    </div>
  );
} 