import { COUNTRIES } from '@/lib/content';

/* Partners oficiales. Logos monocromos (simple-icons) — se ven premium en dark. */
const PARTNERS: { file: string; label: string }[] = [
  { file: 'whatsapp.svg', label: 'WhatsApp Business' },
  { file: 'shopify.svg', label: 'Shopify' },
  { file: 'mercadopago.svg', label: 'MercadoPago' },
  { file: 'stripe.svg', label: 'Stripe' },
  { file: 'googlecalendar.svg', label: 'Google Calendar' },
  { file: 'meta.svg', label: 'Meta Ads' },
];

/* eslint-disable @next/next/no-img-element */

export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-night py-16 text-night-text">
      {/* Continuidad con el hero: mismo fondo dark, sin costura */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-night to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-[12.5px] font-medium uppercase tracking-[0.14em] text-night-mute">
          Integrado con las herramientas que ya usas
        </p>

        {/* Logos oficiales — estáticos en desktop, marquesina en móvil */}
        <div className="mt-8 hidden items-center justify-between gap-8 md:flex">
          {PARTNERS.map((p) => (
            <img
              key={p.file}
              src={`/brand/partners/${p.file}`}
              alt={p.label}
              width={40}
              height={40}
              className="h-8 w-auto opacity-55 transition-opacity duration-300 hover:opacity-90"
              loading="lazy"
            />
          ))}
        </div>

        {/* Móvil: marquesina infinita — nunca se ve cortada */}
        <div className="mt-8 overflow-hidden md:hidden" style={{ maskImage: 'linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)' }}>
          <div className="flex w-max animate-slide-logos items-center gap-10">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <img
                key={`${p.file}-${i}`}
                src={`/brand/partners/${p.file}`}
                alt={p.label}
                width={40}
                height={40}
                className="h-7 w-auto opacity-60"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Países atendidos — pills sutiles en el fondo dark */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {COUNTRIES.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[13px] font-medium text-night-mute backdrop-blur"
            >
              <span className="text-[15px] leading-none">{c.flag}</span> {c.name}
            </span>
          ))}
        </div>
      </div>

      {/* Vignette inferior — funde con la sección light siguiente */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-surface" />
    </section>
  );
}
