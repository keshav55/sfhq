'use client';

import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { Components } from 'react-markdown';
import type { HTMLMotionProps } from 'framer-motion';

interface EventListProps {
  content: string;
}

interface MusicPlayerProps {
  url: string;
  onClose: () => void;
}

function MusicPlayer({ url, onClose }: MusicPlayerProps) {
  const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');
  const isSpotify = url.includes('spotify.com');
  
  let embedUrl = '';
  if (isYoutube) {
    const videoId = url.split('v=')[1] || url.split('/').pop();
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (isSpotify) {
    const trackId = url.split('/').pop();
    embedUrl = `https://open.spotify.com/embed/track/${trackId}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-2xl" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white"
        >
          Close
        </button>
        <div className="bg-zinc-900 rounded-xl overflow-hidden aspect-video">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function EventList({ content }: EventListProps) {
  const [musicUrl, setMusicUrl] = useState<string | null>(null);

  const components: Partial<Components> = {
    h2: ({ ...props }) => (
      <div className="sticky top-0 bg-black/90 backdrop-blur-sm z-10 -mx-6 px-6 py-3">
        <h2 className="text-xl font-medium text-zinc-200" {...props} />
      </div>
    ),
    ul: ({ ...props }) => (
      <ul className="space-y-4 mt-4 mb-8" {...props} />
    ),
    li: ({ children }) => {
      const motionProps: HTMLMotionProps<"li"> = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        className: "flex flex-col sm:flex-row sm:items-center gap-2 text-zinc-300 hover:text-white transition-colors"
      };

      return (
        <motion.li {...motionProps}>
          {children}
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
        return (
          <button 
            onClick={() => setMusicUrl(href || null)}
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
            type="button"
          >
            <span className="mr-1">▶ Listen</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </button>
        );
      }

      if (isDirectionsLink) {
        return (
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            {...props}
          >
            <span className="mr-1">📍 Map</span>
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
    <>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl"
        >
          <ReactMarkdown components={components}>
            {content}
          </ReactMarkdown>
        </motion.div>
      </div>

      <AnimatePresence>
        {musicUrl && (
          <MusicPlayer url={musicUrl} onClose={() => setMusicUrl(null)} />
        )}
      </AnimatePresence>
    </>
  );
} 