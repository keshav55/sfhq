'use client';

import { useState } from 'react';
import HomeButton from '@/app/components/HomeButton';

export default function SubmitEvent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // TODO: Send to API endpoint
    console.log(Object.fromEntries(formData));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 text-gray-100 p-8">
        <HomeButton />
        <div className="max-w-md mx-auto mt-32 text-center">
          <h1 className="text-2xl font-light mb-4">Thank you</h1>
          <p className="text-gray-400">We'll review your submission.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100 p-8">
      <HomeButton />
      
      <div className="max-w-md mx-auto mt-20">
        <h1 className="text-3xl font-light mb-12">Submit Event</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Event name"
              required
              className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-gray-400 outline-none transition-colors"
            />
          </div>
          
          <div>
            <input
              type="date"
              name="date"
              required
              className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-gray-400 outline-none transition-colors text-gray-400"
            />
          </div>
          
          <div>
            <input
              type="time"
              name="time"
              placeholder="Start time"
              required
              className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-gray-400 outline-none transition-colors text-gray-400"
            />
          </div>
          
          <div>
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              required
              className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-gray-400 outline-none transition-colors"
            />
          </div>
          
          <div>
            <input
              type="text"
              name="genre"
              placeholder="Genre (e.g., Tech House, Ambient)"
              required
              className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-gray-400 outline-none transition-colors"
            />
          </div>
          
          <div>
            <input
              type="url"
              name="link"
              placeholder="Event link (optional)"
              className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-gray-400 outline-none transition-colors"
            />
          </div>
          
          <div>
            <textarea
              name="description"
              placeholder="Brief description (optional)"
              rows={3}
              className="w-full bg-transparent border-b border-gray-800 pb-2 focus:border-gray-400 outline-none transition-colors resize-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 mt-8 bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm text-sm tracking-wider"
          >
            SUBMIT FOR REVIEW
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-8 text-center">
          Only high-quality electronic music events will be approved.
        </p>
      </div>
    </div>
  );
}