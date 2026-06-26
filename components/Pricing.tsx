import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { PLANS, registerWithPlan } from '@/lib/content';

export default function Pricing() {
  return (
    <section id="precios" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Planes y precios"
          title={
            <>
              Elige tu plan y <span className="text-brand-600">empieza gratis 7 días</span>
            </>
          }
          subtitle="Sin tarjeta para empezar. Sin contratos. Cancela cuando quieras. Precios en pesos colombianos (COP)."
        />

        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const pop = plan.popular;
            return (
              <Reveal key={plan.id} delay={i * 90} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 ${
                    pop ? 'bg-ink text-white shadow-lift lg:-mt-3 lg:pb-10 lg:pt-10' : 'border border-line bg-surface'
                  }`}
                >
                  {pop && (
                    <span className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-brand-600 px-3 py-1 text-[11.5px] font-bold uppercase tracking-wide text-white">
                      Más popular
                    </span>
                  )}

                  <div className="flex items-baseline justify-between">
                    <h3 className={`text-[20px] font-bold tracking-tight ${pop ? 'text-white' : 'text-ink'}`}>{plan.name}</h3>
                    <span className={`text-[12px] font-semibold uppercase tracking-wide ${pop ? 'text-brand-300' : 'text-emerald-600'}`}>
                      7 días gratis
                    </span>
                  </div>
                  <p className={`mt-1.5 text-[14px] ${pop ? 'text-white/60' : 'text-ink-mute'}`}>{plan.tagline}</p>

                  <div className="mt-6 flex items-end gap-1">
                    <span className={`text-[15px] font-semibold ${pop ? 'text-white/60' : 'text-ink-faint'}`}>$</span>
                    <span className={`text-[2.75rem] font-bold leading-none tracking-tight ${pop ? 'text-white' : 'text-ink'}`}>
                      {plan.price}
                    </span>
                    <span className={`mb-1 text-[14px] ${pop ? 'text-white/60' : 'text-ink-mute'}`}>/mes</span>
                  </div>

                  <a
                    href={registerWithPlan(plan.id)}
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-px ${
                      pop ? 'bg-white text-ink hover:bg-white/90' : 'border border-ink bg-ink text-white hover:bg-ink/90'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </a>

                  <div className={`mt-7 border-t pt-6 ${pop ? 'border-white/15' : 'border-line'}`}>
                    <ul className="space-y-3.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check
                            className={`mt-0.5 h-[18px] w-[18px] shrink-0 ${pop ? 'text-brand-300' : 'text-emerald-600'}`}
                            strokeWidth={2.5}
                          />
                          <span className={`text-[14.5px] leading-snug ${pop ? 'text-white/80' : 'text-ink-mute'}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[13.5px] text-ink-faint">
          Todos los planes incluyen 7 días de prueba gratis · sin tarjeta para empezar · cancela cuando quieras.
        </p>
      </div>
    </section>
  );
}
