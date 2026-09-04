/**
 * Imagen responsive de la home (export estático, sin servidor de optimización):
 * <picture> con variantes WebP (640w / 1280w) y el JPG original como fallback.
 * Se usa dentro de un contenedor `relative` con aspect-ratio fijo (misma maqueta
 * que `<Image fill>`): el <img> llena el contenedor y no cambia el diseño.
 * Las variantes `-640.webp` y `-1280.webp` viven junto al JPG en /public.
 */
type PicProps = {
  src: string; // ruta del JPG en /public, p. ej. /images/product/06-dashboard.jpg
  alt: string;
  width: number; // dimensiones reales del JPG (evitan saltos de maqueta)
  height: number;
  sizes: string;
  className?: string;
};

export default function Pic({ src, alt, width, height, sizes, className = '' }: PicProps) {
  const base = src.replace(/\.jpe?g$/i, '');
  return (
    <picture className="contents">
      <source type="image/webp" srcSet={`${base}-640.webp 640w, ${base}-1280.webp 1280w`} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full ${className}`}
      />
    </picture>
  );
}
