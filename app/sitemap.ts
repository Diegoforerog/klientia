import type { MetadataRoute } from 'next';
import { SOLUCIONES } from '@/lib/soluciones';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.klientia.app';

const LEGAL_PATHS = [
  '/legal/aviso-de-privacidad/',
  '/legal/terminos-de-servicio/',
  '/legal/politica-de-reembolsos/',
  '/legal/eliminacion-de-datos/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...SOLUCIONES.map((s) => ({
      url: `${SITE}/soluciones/${s.slug}/`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...LEGAL_PATHS.map((path) => ({
      url: `${SITE}${path}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
