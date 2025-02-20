import { promises as fs } from 'fs';
import path from 'path';
import EventList from './EventList';

export default async function SFElectronicPage() {
  const filePath = path.join(process.cwd(), 'content', 'guides', 'sf-electronic.md');
  const content = await fs.readFile(filePath, 'utf8');

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="container mx-auto">
        <header className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Electronic Music in SF</h1>
          <p className="text-zinc-400">Your guide to electronic music events in San Francisco</p>
        </header>
        <EventList content={content} />
      </div>
    </main>
  );
} 