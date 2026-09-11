import type { MetadataRoute } from 'next';

// Manifest PWA de la landing. Identidad Klientia: azul de marca #4375E5, papel frío #F3F6FB.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Klientia',
    short_name: 'Klientia',
    description: 'Tu vendedor con IA para WhatsApp: responde, cierra y cobra 24/7.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F6FB',
    theme_color: '#4375E5',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
