import { COUNTRIES } from '@/lib/content';

// Categorías de negocio para las que está pensado el producto (no son clientes reales).
const SECTORS = ['Moda', 'Cosmética', 'Tecnología', 'Restaurantes', 'Belleza', 'Servicios', 'Dropshipping', 'Accesorios'];

export default function TrustStrip() {
  return (
    <section className="hairline-b bg-subtle py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-[12.5px] font-medium uppercase tracking-[0.14em] text-ink-faint">
          Hecho para negocios de toda LATAM
        </p>

        <div className="mask-fade-x mt-7 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {[...SECTORS, ...SECTORS].map((name, i) => (
              <span key={i} className="whitespace-nowrap text-xl font-semibold tracking-tight text-ink/20">
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {COUNTRIES.map((c) => (
            <span key={c.name} className="pill">
              <span className="text-[15px] leading-none">{c.flag}</span> {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
