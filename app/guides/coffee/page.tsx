'use client';

import { useState } from 'react';
import HomeButton from '@/app/components/HomeButton';

interface CoffeeSpot {
  name: string;
  neighborhood: string;
  vibe: string;
  specialty: string;
  bestTime: string;
  insider?: string;
}

const coffeeSpots: CoffeeSpot[] = [
  {
    name: "Saint Frank Coffee",
    neighborhood: "Russian Hill",
    vibe: "Minimalist design",
    specialty: "Single origin pour-overs",
    bestTime: "Early mornings",
    insider: "They focus on direct relationships with coffee farmers"
  },
  {
    name: "Sightglass Coffee",
    neighborhood: "SoMa",
    vibe: "Industrial roastery",
    specialty: "In-house roasting",
    bestTime: "Weekday afternoons",
    insider: "Watch the roasting process in their open production space"
  },
  {
    name: "Réveille Coffee",
    neighborhood: "Lower Haight",
    vibe: "Neighborhood cafe",
    specialty: "House-roasted coffee & breakfast",
    bestTime: "Weekend mornings",
    insider: "Multiple locations across SF - check their Berkeley spot too"
  },
  {
    name: "Flywheel Coffee",
    neighborhood: "Haight-Ashbury",
    vibe: "Local roaster",
    specialty: "Small batch roasting",
    bestTime: "Morning coffee run",
    insider: "Independent roaster with a focus on quality"
  },
  {
    name: "Coffee Movement",
    neighborhood: "Nob Hill",
    vibe: "Specialty coffee bar",
    specialty: "Coffee tasting experiences",
    bestTime: "Afternoon visits",
    insider: "Book their weekly coffee experience for an omakase-style tasting"
  },
  {
    name: "Four Barrel Coffee",
    neighborhood: "Mission",
    vibe: "Valencia Street staple",
    specialty: "Artisanal coffee program",
    bestTime: "Mid-morning",
    insider: "Check out their rotating art exhibitions"
  }
];

export default function CoffeePage() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  
  const neighborhoods = ['all', ...new Set(coffeeSpots.map(spot => spot.neighborhood))];
  const filteredSpots = selectedNeighborhood === 'all' 
    ? coffeeSpots 
    : coffeeSpots.filter(spot => spot.neighborhood === selectedNeighborhood);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50 text-stone-900">
      <HomeButton />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-light mb-4">Coffee</h1>
          <p className="text-stone-600">Summer mornings done right</p>
        </header>

        {/* Neighborhood Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {neighborhoods.map(hood => (
            <button
              key={hood}
              onClick={() => setSelectedNeighborhood(hood)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedNeighborhood === hood
                  ? 'bg-stone-800 text-stone-50'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {hood === 'all' ? 'All Neighborhoods' : hood}
            </button>
          ))}
        </div>

        {/* Coffee Spots */}
        <div className="grid gap-6">
          {filteredSpots.map((spot, index) => (
            <div
              key={spot.name}
              className="border-l-4 border-stone-300 pl-6 py-4 hover:border-stone-500 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-light mb-1">{spot.name}</h2>
                  <p className="text-stone-600 text-sm mb-3">{spot.neighborhood} · {spot.vibe}</p>
                  
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Known for:</span> {spot.specialty}</p>
                    <p><span className="font-medium">Best time:</span> {spot.bestTime}</p>
                    {spot.insider && (
                      <p className="text-stone-500 italic">Insider tip: {spot.insider}</p>
                    )}
                  </div>
                </div>
                
                <div className="text-4xl font-light text-stone-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-stone-500">
          <p>SF[hq] Summer 2025</p>
        </footer>
      </div>
    </div>
  );
}