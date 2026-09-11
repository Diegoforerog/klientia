// Sistema de logo Klientia (guía §1.2) — usa los ARCHIVOS OFICIALES de marca (isotipo = bolsa
// con doble check + cola de chat + wordmark). NO se reconstruye el logo; se sirven las piezas
// entregadas (en /public/brand, reescaladas a peso web sin alterar el diseño).
//   variant: 'horizontal' (isotipo + wordmark) · 'vertical' (isotipo sobre wordmark) · 'isotipo'
//   tone:    'brand' (azul, fondo claro) · 'white' (fondo oscuro/color) · 'ink' (monocromo negro)
// Regla de color: fondo claro → brand · fondo oscuro/color → white · monocromo → ink.
// Tamaño por ALTURA: className h-* (p. ej. h-11 en header, h-16 en login vertical).
type Variant = 'horizontal' | 'vertical' | 'isotipo';
type Tone = 'brand' | 'white' | 'ink';

const BASE: Record<Variant, string> = { horizontal: 'logo-h', vertical: 'logo-v', isotipo: 'iso' };
const SUFFIX: Record<Tone, string> = { brand: '', white: '-white', ink: '-ink' };

export default function Logo({
  variant = 'horizontal',
  tone = 'brand',
  className = 'h-9',
}: {
  variant?: Variant;
  tone?: Tone;
  className?: string;
}) {
  const src = `/brand/klientia-${BASE[variant]}${SUFFIX[tone]}.png`;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="Klientia" className={`w-auto ${className}`} />;
}
