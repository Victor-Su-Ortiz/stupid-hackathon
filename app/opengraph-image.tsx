import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'The Dumb Hackathon - In collaboration with AI Valley'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #FFD93D 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: '72px', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
          The Dumb Hackathon
        </div>
        <div style={{ fontSize: '36px', color: 'white', marginBottom: '40px' }}>
          Build the dumbest thing you can imagine
        </div>
        <div style={{ 
          position: 'absolute', 
          bottom: '40px', 
          fontSize: '24px', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span>In collaboration with AI Valley</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
