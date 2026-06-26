import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { DIFFERENTIATORS, REGISTER_URL } from '@/lib/content';

export default function Differentiators() {
  return (
    <section className="hairline-t bg-subtle py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Por qué ConversaCommerce"
          title={
            <>
              No es otro chatbot. Es el que <span className="text-brand-600">de verdad vende</span>
            </>
          }
        />

        <Reveal delay={120}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {DIFFERENTIATORS.map((d, i) => (
              <div key={d.title} className="bg-surface p-8">
                <span className="text-[15px] font-semibold tabular-nums text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-ink">{d.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-mute">{d.desc}</p>
              </div>
            ))}

            {/* Celda CTA para completar el grid */}
            <a href={REGISTER_URL} className="group flex flex-col justify-between bg-ink p-8 text-white transition-colors hover:bg-ink/90">
              <span className="text-[17px] font-semibold leading-snug tracking-tight">
                Pon a tu vendedor IA a trabajar hoy.
              </span>
              <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-300">
                Empieza gratis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
