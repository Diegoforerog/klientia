import type { MetadataRoute } from 'next';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.klientia.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    // Dos sitemaps: el de la landing (Next) y el del portal de documentación (MkDocs en /doc/es/).
    sitemap: [`${SITE}/sitemap.xml`, `${SITE}/doc/es/sitemap.xml`],
    host: SITE,
  };
}
