import Image from 'next/image';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

/**
 * Así se ve por dentro. Prueba de producto real: capturas del panel tal cual.
 * Reemplaza la prueba social que aún no tenemos (no hay testimonios reales) por
 * algo que sí podemos mostrar con honestidad: el software funcionando.
 */
const SHOTS = [
  {
    src: '/images/product/06-dashboard.jpg',
    alt: 'Inicio del panel de Klientia: conversaciones del mes, ventas cerradas, tasa de cierre y carritos recuperados',
    caption: 'Tu inicio: ventas cerradas, tasa de cierre y carritos recuperados, de un vistazo.',
    wide: true,
  },
  {
    src: '/images/product/15-conversaciones.jpg',
    alt: 'Bandeja de conversaciones con la IA atendiendo y un asistente para tu equipo',
    caption: 'La bandeja: la IA atiende, tú tomas el control cuando quieras.',
  },
  {
    src: '/images/product/17-crm.jpg',
    alt: 'CRM de Klientia con las oportunidades de venta organizadas',
    caption: 'El CRM se llena solo con cada chat.',
  },
  {
    src: '/images/product/59-metricas.jpg',
    alt: 'Métricas de ventas y conversaciones en Klientia',
    caption: 'Métricas claras: qué se vendió y qué se quedó en el camino.',
  },
];

export default function InsideProduct() {
  return (
    <section id="producto" className="hairline-t scroll-mt-24 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Así se ve por dentro"
          title={
            <>
              Un panel simple para <span className="text-brand-600">ver entrar los pedidos</span>
            </>
          }
          subtitle="Capturas reales del panel. Todo en español, sin manuales técnicos: si sabes usar WhatsApp, sabes usar esto."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SHOTS.map((s, i) => (
            <Reveal key={s.src} delay={i * 80} className={s.wide ? 'md:col-span-3' : ''}>
              <figure>
                <div className="shot-frame">
                  <div className={`relative ${s.wide ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes={s.wide ? '(max-width: 1280px) 100vw, 1200px' : '(max-width: 768px) 100vw, 400px'}
                      className="object-cover object-left-top"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-[14px] leading-snug text-ink-mute">{s.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
