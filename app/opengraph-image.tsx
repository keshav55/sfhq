import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'SF[hq] Winter 2025';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #A3ADB3, #D8DDE0)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Noise texture overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.2,
            backgroundImage: 'url(data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E)',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Main content */}
        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div style={{ 
            fontSize: 120, 
            fontWeight: 'bold',
            color: '#2C3133',
            textShadow: '0 2px 4px rgba(255, 255, 255, 0.2)',
            lineHeight: 1,
          }}>
            SF
            <span style={{ 
              position: 'absolute',
              fontSize: 24,
              fontWeight: 'light',
              opacity: 0.9,
              color: '#FD5A1E',
              transform: 'translateX(8px)',
            }}>[hq]</span>
          </div>
        </div>

        <div style={{ 
          fontSize: 48,
          fontWeight: 500,
          color: '#FD5A1E',
          letterSpacing: '-0.02em',
          marginBottom: '24px',
        }}>
          Winter 2025
        </div>

        <div style={{ 
          fontSize: 32,
          color: '#2C3133',
          opacity: 0.9,
          letterSpacing: '0.02em',
          paddingLeft: '32px',
        }}>
          Electronic Music<br />
          Restaurants<br />
          SF Has Been Back
        </div>

        {/* Golden Gate Bridge Silhouette */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '256px',
            height: '256px',
            opacity: 0.1,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'256\' height=\'256\' viewBox=\'0 0 256 256\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 256V156C20 156 60 126 128 126C196 126 236 156 236 156V256\' stroke=\'%23FD5A1E\' stroke-width=\'2\'/%3E%3Cpath d=\'M128 126V256M60 156L60 256M196 156V256M90 141V256M166 141V256\' stroke=\'%23FD5A1E\' stroke-opacity=\'0.5\' stroke-width=\'2\'/%3E%3Cpath d=\'M20 156C20 156 74 96 128 96C182 96 236 156 236 156\' stroke=\'%23FD5A1E\' stroke-width=\'2\'/%3E%3C/svg%3E")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
            transform: 'scale(1.2)',
            mixBlendMode: 'soft-light',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
} 