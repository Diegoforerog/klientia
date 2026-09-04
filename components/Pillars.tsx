import Pic from './Pic';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { PILLARS, REGISTER_URL } from '@/lib/content';

/**
 * Los 3 pilares de venta, cada uno con una CAPTURA REAL del panel.
 * No van numerados: no son una secuencia, son tres formas de ganar dinero.
 * La imagen es la prueba de que el producto existe; el texto, el porqué importa.
 */
export default function Pillars() {
  return (
    <section id="caracteristicas" className="hairline-t scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Qué hace por tu negocio"
          title={
            <>
              Tres formas de vender más, <span className="text-brand-600">sin contratar a nadie</span>
            </>
          }
          subtitle="Lo que ves abajo son pantallas reales del panel de Klientia — no maquetas."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          {PILLARS.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.key}>
                <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Texto */}
                  <div className="max-w-lg">
                    <p className="eyebrow">{p.eyebrow}</p>
                    <h3 className="mt-3.5 text-balance text-[1.75rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.2rem]">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-pretty text-[16.5px] leading-relaxed text-ink-mute">{p.desc}</p>
                    <ul className="mt-6 space-y-3">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[15px] leading-snug text-ink-soft">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <a href={REGISTER_URL} className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand-600 hover:text-brand-700">
                      {p.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Captura real */}
                  <div className="shot-frame">
                    <div className="flex items-center gap-1.5 border-b border-line bg-subtle px-3 py-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-line2" />
                      <span className="h-2.5 w-2.5 rounded-full bg-line2" />
                      <span className="h-2.5 w-2.5 rounded-full bg-line2" />
                      <span className="ml-3 truncate font-mono text-[11px] text-ink-faint">app.klientia.app · {p.screen}</span>
                    </div>
                    <div className="relative aspect-[16/10]">
                      <Pic
                        src={p.image}
                        alt={p.alt}
                        width={1280}
                        height={800}
                        sizes="(max-width: 1024px) 100vw, 620px"
                        className="object-cover object-left-top"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
