import { ArrowDown, Check } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { MONEY_LEAKS } from '@/lib/content';

/**
 * Dónde se va el dinero. Cada tarjeta encodifica causa → remedio: arriba la fuga
 * (con su etiqueta en rojo), abajo lo que hace Klientia. El lector ve el par
 * completo sin cruzar columnas.
 */
export default function ProblemSolution() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Dónde se te va el dinero"
          title={
            <>
              Cada chat sin responder es <span className="text-brand-600">una venta que se va</span>
            </>
          }
          subtitle="Atender el WhatsApp a mano no escala: o creces y colapsas, o respondes tarde y pierdes. Estas son las tres fugas que Klientia cierra."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {MONEY_LEAKS.map((leak, i) => (
            <Reveal key={leak.title} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-surface shadow-sm">
                <div className="flex-1 p-7">
                  <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.1em] text-rose-600">
                    {leak.tag}
                  </span>
                  <h3 className="mt-4 text-[20px] font-bold leading-snug tracking-tight text-ink">{leak.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-mute">{leak.desc}</p>
                </div>
                <div className="relative border-t border-line bg-paper p-7">
                  <span className="absolute -top-3.5 left-7 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface text-ink-faint">
                    <ArrowDown className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-600">Con Klientia</p>
                  <p className="mt-2 flex items-start gap-2 text-[15px] font-medium leading-relaxed text-ink">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.75} />
                    {leak.fix}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
