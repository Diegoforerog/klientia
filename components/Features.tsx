import type { Feature } from '@/lib/content';

/** Tarjeta de función (la misma en la home y en /funciones). */
export function FeatureCard({ f }: { f: Feature }) {
  const Icon = f.icon;
  return (
    <div className="group relative bg-surface p-7 transition-[background-color] duration-300 ease-out hover:bg-surface">
      {/* Motion-design: hover fondo azul MUY sutil que aparece con ease-out,
        + ícono que toma color de marca. El card no se levanta (viven en grid
        con bordes hairline; levantarlos rompe la retícula). El feedback lo
        da el fondo + icono. */}
      <span
        className={`relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-[color,background-color,border-color,transform] duration-300 ease-out group-hover:scale-[1.06] ${
          f.accent
            ? 'border-brand-200 bg-brand-50 text-brand-600'
            : 'border-line2 bg-subtle text-ink group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-600'
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <h3 className="relative z-10 mt-5 text-[16px] font-semibold tracking-tight text-ink">{f.title}</h3>
      <p className="relative z-10 mt-2 text-[14px] leading-relaxed text-ink-mute">{f.desc}</p>
      {/* Halo azul muy tenue como fondo del hover — se activa con opacidad, no
        con cambio de background (no repinta al vecino). */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-brand-50/70 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />
    </div>
  );
}

/** Retícula hairline de tarjetas. `cols` = columnas en pantallas grandes. */
export function FeatureGrid({ features, cols = 4, className = '' }: { features: Feature[]; cols?: 3 | 4; className?: string }) {
  return (
    <div
      className={`grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 ${
        cols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
      } ${className}`}
    >
      {features.map((f) => (
        <FeatureCard key={f.title} f={f} />
      ))}
    </div>
  );
}
