/** @type {import('next').NextConfig} */

// Para GitHub Pages: exportación estática + basePath del repo.
// Solo se activa en el build de Pages (GITHUB_PAGES=true); en local sigue normal.
const repo = 'klientia';
const isPages = process.env.GITHUB_PAGES === 'true';
// Export estático servido en la RAÍZ de un dominio propio (VPS www.klientia.app).
const isStatic = process.env.STATIC_EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  images: {
    // Imágenes ya optimizadas (JPEG): sin servidor de optimización → portable y compatible con export.
    unoptimized: true,
  },
  // Dominio propio: export en la raíz, sin basePath.
  ...(isStatic && {
    output: 'export',
    trailingSlash: true,
  }),
  // GitHub Pages: export bajo /klientia.
  ...(isPages && {
    output: 'export',
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    trailingSlash: true,
  }),
};

export default nextConfig;
