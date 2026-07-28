import { COUNTRIES } from '@/lib/content';

const STORES = ['Bella Piel', 'TecnoExpress', 'Moda Viva', 'NutriShop', 'CasaDeco', 'FitGear', 'Glow Cosmética', 'UrbanKids'];

export default function TrustStrip() {
  return (
    <section className="hairline-b bg-subtle py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-[12.5px] font-medium uppercase tracking-[0.14em] text-ink-faint">
          Negocios de toda LATAM ya venden con su vendedor IA
        </p>

        <div className="mask-fade-x mt-7 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {[...STORES, ...STORES].map((name, i) => (
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
