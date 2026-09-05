import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { MONEY_LEAKS } from '@/lib/content';

/**
 * Dónde se va el dinero. Solo el dolor: la fuga con su etiqueta en rojo.
 * El remedio ya no se cuenta aquí (lo cuenta, una sola vez, la demo que
 * viene justo debajo): así el contraste problema → solución se siente.
 */
export default function ProblemSolution() {
  return (
    <section className="py-20 sm:py-28">
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

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {MONEY_LEAKS.map((leak, i) => (
            <Reveal key={leak.title} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-sm">
                <span className="inline-flex w-fit items-center rounded-full bg-rose-50 px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.1em] text-rose-600">
                  {leak.tag}
                </span>
                <h3 className="mt-4 text-[20px] font-bold leading-snug tracking-tight text-ink">{leak.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-mute">{leak.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
