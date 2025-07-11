'use client';

import { useState } from 'react';
import HomeButton from '@/app/components/HomeButton';

interface Restaurant {
  name: string;
  neighborhood: string;
  vibe: string;
  specialty: string;
  bestTime: string;
}

const restaurants: Restaurant[] = [
  {
    name: "Tiya",
    neighborhood: "Marina",
    vibe: "Modern Indian energy",
    specialty: "Tandoori lamb chops & cocktails",
    bestTime: "8pm dinner"
  },
  {
    name: "Chisai Sushi Club",
    neighborhood: "Noe Valley",
    vibe: "8-seat speakeasy",
    specialty: "Omakase only",
    bestTime: "Early or late seating"
  },
  {
    name: "El Buen Comer",
    neighborhood: "Mission",
    vibe: "No-frills authenticity",
    specialty: "Carnitas & fresh bolillos",
    bestTime: "Weekend mornings"
  },
  {
    name: "Deli Board",
    neighborhood: "SOMA",
    vibe: "Punk rock sandwiches",
    specialty: "Daily special board",
    bestTime: "Before noon"
  },
  {
    name: "Cotogna",
    neighborhood: "Jackson Square",
    vibe: "Rustic Italian warmth",
    specialty: "Wood-fired everything",
    bestTime: "Late lunch"
  },
  {
    name: "Verjus",
    neighborhood: "Japantown",
    vibe: "Wine cave intimacy",
    specialty: "Natural wines & small plates",
    bestTime: "Happy hour"
  },
  {
    name: "State Bird Provisions",
    neighborhood: "Fillmore",
    vibe: "Dim sum meets California",
    specialty: "The state bird with provisions",
    bestTime: "5:30pm sharp"
  },
  {
    name: "Rich Table",
    neighborhood: "Hayes Valley",
    vibe: "Playful fine dining",
    specialty: "Sardine chips & porcini donuts",
    bestTime: "Weeknight reservations"
  },
  {
    name: "Rintaro",
    neighborhood: "Mission",
    vibe: "Izakaya perfection",
    specialty: "Yakitori & seasonal small plates",
    bestTime: "Early evening"
  }
];

export default function RestaurantsPage() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  
  const neighborhoods = ['all', ...new Set(restaurants.map(spot => spot.neighborhood))];
  const filteredSpots = selectedNeighborhood === 'all' 
    ? restaurants 
    : restaurants.filter(spot => spot.neighborhood === selectedNeighborhood);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50 text-stone-900">
      <HomeButton />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-light mb-4">Restaurants</h1>
          <p className="text-stone-600">Where to eat this summer</p>
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

        {/* Restaurant List */}
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
                    <p><span className="font-medium">Go for:</span> {spot.specialty}</p>
                    <p><span className="font-medium">Best time:</span> {spot.bestTime}</p>
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