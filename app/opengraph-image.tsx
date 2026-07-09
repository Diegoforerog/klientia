import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

const ICON = `data:image/png;base64,${readFileSync(join(process.cwd(), 'public/brand/klientia-icon.png')).toString('base64')}`;

export const alt = 'Klientia — Tu vendedor con IA en WhatsApp, 24/7';
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
          borderTop: '8px solid #2563eb',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Marca */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ICON} width={58} height={58} alt="" />
          <div style={{ fontSize: 30, fontWeight: 700, color: '#0f172a' }}>Klientia</div>
        </div>

        {/* Titular */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 72, fontWeight: 800, letterSpacing: -2, lineHeight: 1.04, color: '#0f172a', maxWidth: 960 }}>
            Tu&nbsp;<span style={{ color: '#2563eb' }}>vendedor con IA</span>&nbsp;en WhatsApp, 24/7
          </div>
          <div style={{ fontSize: 30, color: '#475569', maxWidth: 860 }}>
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
          <div style={{ fontSize: 24, color: '#94a3b8' }}>www.klientia.app</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
