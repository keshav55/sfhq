import { NextResponse } from 'next/server';

// Temporary in-memory storage for MVP
// TODO: Replace with database
const pendingEvents: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    const required = ['name', 'date', 'time', 'venue', 'genre'];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Add submission metadata
    const event = {
      ...body,
      id: Date.now().toString(),
      status: 'pending',
      submittedAt: new Date().toISOString(),
    };
    
    pendingEvents.push(event);
    
    // TODO: Send notification to curator
    // TODO: Save to database
    
    return NextResponse.json({ success: true, id: event.id });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit event' },
      { status: 500 }
    );
  }
}

// Admin endpoint to get pending events
export async function GET(request: Request) {
  // TODO: Add authentication
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || 'pending';
  
  const events = pendingEvents.filter(e => e.status === status);
  return NextResponse.json({ events });
}