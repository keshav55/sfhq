'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import eventsData from './events.json';

interface Event {
  artist: string;
  genre: string;
  venue: string;
  address: string;
  musicUrl: string;
  mapUrl: string;
}

interface EventGroup {
  date: string;
  events: Event[];
}

interface EventListProps {
  content?: string; // Making it optional since we're not using it
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
      <div className="rounded-xl overflow-hidden aspect-video shadow-lg sm:w-[calc(100%+2rem)] sm:-ml-4 md:w-[calc(100%+4rem)] md:-ml-8">
        <iframe
          src={cleanUrl}
          className="w-full h-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}

export default function EventList({ content }: EventListProps) {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const { events: eventGroups } = eventsData;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-peach-50 backdrop-blur-lg rounded-2xl p-6 shadow-xl relative overflow-hidden"
      >
        {eventGroups.map((group, groupIndex) => (
          <div key={group.date}>
            <motion.div 
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="sticky top-0 bg-peach-100/90 backdrop-blur-sm z-10 -mx-6 px-6 py-6 border-b border-amber-200/50 mt-12 first:mt-0"
            >
              <h2 className="text-3xl font-medium text-coral-700 tracking-tight">
                {group.date}
              </h2>
            </motion.div>

            <ul className="space-y-8 mt-6 mb-12">
              {group.events.map((event, eventIndex) => (
                <motion.li
                  key={`${event.artist}-${event.venue}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: (groupIndex * group.events.length + eventIndex) * 0.05,
                    duration: 0.3
                  }}
                  className="flex flex-col gap-4 text-amber-700 hover:text-coral-600 transition-colors p-4 -mx-4 rounded-xl hover:bg-peach-100/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 leading-relaxed">
                    <div className="flex-1">
                      <strong className="font-semibold text-xl text-coral-700">
                        {event.artist} ({event.genre})
                      </strong>
                      <div className="text-amber-600 text-lg mt-1">
                        <a 
                          href={event.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-coral-600 transition-colors inline-flex items-center gap-1"
                        >
                          📍 {event.venue}, {event.address}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <motion.button 
                        onClick={() => setExpandedEvent(
                          expandedEvent === event.musicUrl ? null : event.musicUrl
                        )}
                        className="inline-flex items-center px-4 py-2 bg-mustard-600/10 text-mustard-600 hover:text-coral-600 hover:bg-coral-600/10 transition-all focus:outline-none focus:ring-2 focus:ring-coral-500/20 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                      >
                        <span className="flex items-center gap-2">
                          {expandedEvent === event.musicUrl ? '✕ Close' : '▶ Listen'}
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                          </svg>
                        </span>
                      </motion.button>
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedEvent === event.musicUrl && (
                      <InlinePlayer url={event.musicUrl} />
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
}