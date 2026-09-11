// Logo Klientia = WORDMARK "Klientia" (sin isotipo, decisión de Diego 2026-09-11). Se sirve el
// wordmark OFICIAL recortado de los archivos de marca (K en azul + "lientia"); no se reconstruye.
//   tone: 'brand' (azul/ink, fondo claro) · 'white' (fondo oscuro/color) · 'ink' (monocromo negro)
// La prop `variant` se mantiene por compatibilidad de API pero ya no cambia el arte (no hay isotipo).
// Tamaño por ALTURA: className h-* (p. ej. h-11 en header, h-10 en login).
type Variant = 'horizontal' | 'vertical' | 'isotipo';
type Tone = 'brand' | 'white' | 'ink';

const SUFFIX: Record<Tone, string> = { brand: '', white: '-white', ink: '-ink' };

export default function Logo({
  tone = 'brand',
  className = 'h-9',
}: {
  variant?: Variant;
  tone?: Tone;
  className?: string;
}) {
  const src = `/brand/klientia-word${SUFFIX[tone]}.png`;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="Klientia" className={`w-auto ${className}`} />;
}
