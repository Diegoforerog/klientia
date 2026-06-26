/** @type {import('next').NextConfig} */

// Para GitHub Pages: exportación estática + basePath del repo.
// Solo se activa en el build de Pages (GITHUB_PAGES=true); en local sigue normal.
const repo = 'conversacommerce-landing';
const isPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  images: {
    // Imágenes ya optimizadas (JPEG): sin servidor de optimización → portable y compatible con export.
    unoptimized: true,
  },
  ...(isPages && {
    output: 'export',
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    trailingSlash: true,
  }),
};

export default nextConfig;
