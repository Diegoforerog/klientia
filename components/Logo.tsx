// Sistema de logo Klientia (guía §1.2). Tres variantes × tres tonos, armado desde el
// isotipo vectorial (burbuja + doble check) + wordmark "Klientia" en Bricolage Bold.
//   variant: 'horizontal' (isotipo + wordmark al lado) · 'vertical' (isotipo ARRIBA, apilado)
//            · 'isotipo' (solo la marca)
//   tone:    'brand' (azul, fondo claro) · 'white' (fondo oscuro/color) · 'ink' (monocromo)
// Regla de color: fondo claro → brand · fondo oscuro/color → white · monocromo → ink.
// Tamaño: horizontal/isotipo se escalan con la ALTURA (className h-*); vertical con el
// tamaño de fuente (className text-*).
type Variant = 'horizontal' | 'vertical' | 'isotipo';
type Tone = 'brand' | 'white' | 'ink';

const TONES: Record<Tone, { iso: string; word: string; k: string }> = {
  brand: { iso: '#4375E5', word: '#0B1220', k: '#4375E5' },
  white: { iso: '#FFFFFF', word: '#FFFFFF', k: '#FFFFFF' },
  ink: { iso: '#0B1220', word: '#0B1220', k: '#0B1220' },
};

function Iso({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="28.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18.25 18.25H193.5A44 44 0 0 1 237.5 62.25V142.5A44 44 0 0 1 193.5 186.5H84L32.75 237.75V186.5" />
      <path d="M69.25 105.75L98.25 135.25L157 62" />
    </svg>
  );
}

function Word({ word, k, className = '' }: { word: string; k: string; className?: string }) {
  return (
    <span className={`font-heading font-bold leading-none tracking-tight ${className}`} style={{ color: word }}>
      <span style={{ color: k }}>K</span>lientia
    </span>
  );
}

export default function Logo({
  variant = 'horizontal',
  tone = 'brand',
  className = 'h-9',
}: {
  variant?: Variant;
  tone?: Tone;
  className?: string;
}) {
  const t = TONES[tone];
  if (variant === 'isotipo') {
    return (
      <span className={`inline-flex ${className}`} role="img" aria-label="Klientia">
        <Iso color={t.iso} className="h-full w-auto" />
      </span>
    );
  }
  if (variant === 'vertical') {
    return (
      <span className={`inline-flex flex-col items-center gap-3 ${className}`} role="img" aria-label="Klientia">
        <Iso color={t.iso} className="h-[1.7em] w-auto" />
        <Word word={t.word} k={t.k} className="text-[1em]" />
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} role="img" aria-label="Klientia">
      <Iso color={t.iso} className="h-full w-auto shrink-0" />
      <Word word={t.word} k={t.k} className="text-[1.55em]" />
    </span>
  );
}
