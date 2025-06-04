'use client';

import { useState } from 'react';
import HomeButton from '@/app/components/HomeButton';
import electronicEvents from '@/app/guides/sf-electronic/events.json';

interface Event {
  artist: string;
  genre: string;
  venue: string;
  address: string;
  musicUrl?: string;
  mapUrl?: string;
  type?: string;
}

interface DayEvents {
  date: string;
  events: Event[];
}

// Combine all event sources
const getAllEvents = (): DayEvents[] => {
  // Add type to electronic events
  const typedElectronicEvents = electronicEvents.events.map(day => ({
    ...day,
    events: day.events.map(event => ({
      ...event,
      type: 'electronic'
    }))
  }));

  // Add more event types here as they come
  // const foodEvents = [...];
  // const artEvents = [...];

  return typedElectronicEvents;
};

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const allEvents = getAllEvents();
  
  const eventTypes = ['all', 'electronic']; // Add more as we get more event types
  
  const filteredEvents = selectedType === 'all' 
    ? allEvents 
    : allEvents.map(day => ({
        ...day,
        events: day.events.filter(event => event.type === selectedType)
      })).filter(day => day.events.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-zinc-100">
      <HomeButton />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-light mb-4">Events</h1>
          <p className="text-zinc-400">Everything happening in SF</p>
        </header>

        {/* Event Type Filter */}
        <div className="flex justify-center gap-2 mb-12">
          {eventTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedType === type
                  ? 'bg-zinc-100 text-zinc-900'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {type === 'all' ? 'All Events' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-24 text-center">
          <p className="text-2xl font-light text-zinc-500">Coming Soon</p>
          <p className="text-sm text-zinc-600 mt-4">Summer 2025</p>
        </div>

        <footer className="mt-16 text-center text-sm text-zinc-600">
          <p>SF[hq] · Updated weekly</p>
        </footer>
      </div>
    </div>
  );
}