import { Smartphone, UploadCloud, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { STEPS, INDUSTRIES } from '@/lib/content';

const ICONS = [Smartphone, UploadCloud, Sparkles];

/**
 * Cómo empezar, justo después de la demo. El paso 02 absorbe lo que antes
 * era la sección "Un bot experto de tu industria, listo en 1 clic": las
 * industrias con plantilla lista van como chips dentro del paso. Sin CTA
 * propio (el único CTA vive en la demo, precios y cierre).
 */
export default function HowItWorks() {
  return (
    <section id="como-funciona" className="hairline-t scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Listo en minutos"
          title={
            <>
              Empieza a vender con IA en <span className="text-brand-600">3 pasos</span>
            </>
          }
          subtitle="Sin instalar nada, sin programar y sin cambiar tu número. Si sabes usar WhatsApp, sabes usar esto."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = ICONS[i];
            const withIndustries = step.n === '02';
            return (
              <Reveal key={step.n} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col bg-surface p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line2 bg-subtle text-ink">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span className="text-[15px] font-semibold tabular-nums text-ink-faint">{step.n}</span>
                  </div>
                  <h3 className="mt-6 text-[19px] font-semibold tracking-tight text-ink">{step.title}</h3>
                  {step.time && (
                    <span className="mt-2.5 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[12px] font-semibold text-brand-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                      {step.time}
                    </span>
                  )}
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-mute">{step.desc}</p>

                  {withIndustries && (
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="mr-1 text-[13px] font-medium text-ink-mute">Plantillas listas para</span>
                      {INDUSTRIES.map((ind) => (
                        <span key={ind.name} className="pill">
                          <span className="text-[15px] leading-none">{ind.emoji}</span> {ind.name}
                        </span>
                      ))}
                      <span className="pill border-dashed text-ink-faint">y más</span>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
