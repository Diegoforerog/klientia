import { ImageResponse } from 'next/og';

export const alt = 'ConversaCommerce — Tu vendedor con IA en WhatsApp, 24/7';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#ffffff',
          borderTop: '8px solid #4f46e5',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Marca */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              width: 52,
              height: 52,
              borderRadius: 14,
              background: '#0a0a0b',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
            }}
          >
            💬
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: '#0a0a0b' }}>ConversaCommerce</div>
        </div>

        {/* Titular */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 72, fontWeight: 800, letterSpacing: -2, lineHeight: 1.04, color: '#0a0a0b', maxWidth: 960 }}>
            Tu&nbsp;<span style={{ color: '#4f46e5' }}>vendedor con IA</span>&nbsp;en WhatsApp, 24/7
          </div>
          <div style={{ fontSize: 30, color: '#52525b', maxWidth: 860 }}>
            Atiende, vende, cobra y recupera carritos por ti. Sin código, en español, para LATAM.
          </div>
        </div>

        {/* Pie */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#25d366',
              color: '#04331c',
              fontSize: 24,
              fontWeight: 700,
              padding: '12px 22px',
              borderRadius: 999,
            }}
          >
            7 días gratis · sin tarjeta
          </div>
          <div style={{ fontSize: 24, color: '#a1a1aa' }}>conversa.nextgencol.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
