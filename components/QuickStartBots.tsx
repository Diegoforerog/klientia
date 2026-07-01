import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { BOT_TYPES, INDUSTRIES, REGISTER_URL } from '@/lib/content';

export default function QuickStartBots() {
  return (
    <section className="hairline-t bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Empieza en minutos"
          title={
            <>
              Un bot experto de tu industria, <span className="text-brand-600">listo en 1 clic</span>
            </>
          }
          subtitle="Elige un bot ya entrenado para tu rubro — sabe cómo vender, responder y agendar en tu negocio. Ajústalo a tu gusto y actívalo. Sin empezar de cero."
        />

        {/* Tipos de bot listos */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {BOT_TYPES.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.name} delay={i * 90}>
                <div className="h-full rounded-3xl border border-line bg-surface p-7 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink">{b.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-mute">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Industrias */}
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            <span className="mr-1 text-[14px] font-medium text-ink-mute">Plantillas listas para</span>
            {INDUSTRIES.map((ind) => (
              <span key={ind.name} className="pill">
                <span className="text-[15px] leading-none">{ind.emoji}</span> {ind.name}
              </span>
            ))}
            <span className="pill border-dashed text-ink-faint">y más</span>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex justify-center">
            <a href={REGISTER_URL} className="btn-primary px-6 py-3.5 text-base">
              Activar mi bot gratis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
