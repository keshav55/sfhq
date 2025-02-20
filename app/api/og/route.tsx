import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Winter 2025';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3D1D14',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <div style={{ 
              fontSize: 120, 
              color: '#FD5A1E',
              fontWeight: 'bold',
              opacity: 0.9,
            }}>
              SF
            </div>
            <div style={{ 
              fontSize: 32, 
              color: '#FD5A1E',
              opacity: 0.6,
              letterSpacing: '0.1em',
            }}>
              {title}
            </div>
            <div style={{ 
              fontSize: 24, 
              color: '#FD5A1E',
              opacity: 0.4,
              marginTop: '10px',
            }}>
              sfhq.xyz
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error: any) {
    console.log(error.message || 'Failed to generate image');
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
} 