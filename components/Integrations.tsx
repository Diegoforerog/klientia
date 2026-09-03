import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/**
 * Se conecta con lo que ya usas. Logos de marca (simple-icons, CC0) pintados con
 * CSS mask en un tono uniforme que sube a azul en hover. Cada tarjeta dice para
 * QUÉ sirve la integración — el logo da confianza, el texto da la razón.
 */
type Integration = {
  slug: string; // archivo en /logos/<slug>.svg
  name: string;
  category: string;
  desc: string;
  /** Ancho relativo del logo (algunas marcas son más anchas/altas). */
  size?: string;
};

const INTEGRATIONS: Integration[] = [
  { slug: 'whatsapp', name: 'WhatsApp', category: 'Canal principal', desc: 'Tu mismo número, sin cambiar de app', size: 'h-7' },
  { slug: 'meta', name: 'Meta', category: 'Instagram · Messenger', desc: 'Atiende tus DMs de Instagram y Messenger', size: 'h-6' },
  { slug: 'shopify', name: 'Shopify', category: 'Catálogo', desc: 'Importa productos y sincroniza pedidos', size: 'h-7' },
  { slug: 'mercadopago', name: 'Mercado Pago', category: 'Pagos', desc: 'Cobra en línea con un clic', size: 'h-6' },
  { slug: 'stripe', name: 'Stripe', category: 'Pagos', desc: 'Cobra con tarjeta, también internacional', size: 'h-7' },
  { slug: 'googlecalendar', name: 'Google Calendar', category: 'Agenda', desc: 'Reserva citas en tus huecos libres', size: 'h-6' },
  { slug: 'calendly', name: 'Calendly', category: 'Agenda', desc: 'Comparte tu enlace de reservas', size: 'h-6' },
];

export default function Integrations() {
  return (
    <section id="integraciones" className="hairline-t scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Se conecta con lo que ya usas"
          title={
            <>
              Enchúfalo a tus <span className="text-brand-600">herramientas de siempre</span>
            </>
          }
          subtitle="Klientia no te obliga a cambiar tu forma de trabajar: se conecta con tu tienda, tus pasarelas de pago, tus redes y tu calendario."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INTEGRATIONS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 70} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-brand-200">
                <span
                  aria-hidden
                  className={`logo-mask ${it.size ?? 'h-6'} w-auto text-ink-soft transition-colors duration-300 group-hover:text-brand-600`}
                  style={{
                    aspectRatio: '1 / 1',
                    WebkitMaskImage: `url(/logos/${it.slug}.svg)`,
                    maskImage: `url(/logos/${it.slug}.svg)`,
                  }}
                />
                <p className="mt-5 text-[15.5px] font-semibold tracking-tight text-ink">{it.name}</p>
                <p className="mt-0.5 text-[12px] font-medium uppercase tracking-[0.08em] text-brand-600">{it.category}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-mute">{it.desc}</p>
              </div>
            </Reveal>
          ))}

          {/* Celda de cierre: hay más */}
          <Reveal delay={210} className="h-full">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-line2 bg-transparent p-6">
              <p className="text-[15.5px] font-semibold tracking-tight text-ink">y más</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-mute">
                Seguimos sumando integraciones. ¿Te falta alguna?{' '}
                <a href="mailto:info@klientia.app" className="font-medium text-brand-600 hover:text-brand-700">
                  Escríbenos
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
