import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'SF City Guide';

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
            backgroundColor: 'black',
            background: 'linear-gradient(45deg, #FD5A1E, black)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ 
              fontSize: 120, 
              color: '#FD5A1E',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
              SF
            </span>
            <span style={{ 
              fontSize: 60, 
              color: 'white',
              fontWeight: 'normal',
            }}>
              {title}
            </span>
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