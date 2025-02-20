import EventList from './EventList';

export default function SFElectronicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-zinc-100">
      <div className="container mx-auto">
        <header className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Electronic in SF</h1>
          <p className="text-zinc-400">From House to Afrohouse, Deep to Progressive.</p>
        </header>
        <EventList />
      </div>
    </main>
  );
} 