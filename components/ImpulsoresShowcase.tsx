'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WaPhone } from './WhatsAppChat';
import { IMPULSORES_STEPS } from './demo-chats';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { REGISTER_URL } from '@/lib/content';

const STEPS = IMPULSORES_STEPS;

export default function ImpulsoresShowcase() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) return;
      const progress = (window.innerHeight / 2 - rect.top) / rect.height;
      const idx = Math.max(0, Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length)));
      setActive((prev) => (prev === idx ? prev : idx));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollToStep = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const absTop = rect.top + window.scrollY;
    window.scrollTo({ top: absTop + ((i + 0.5) / STEPS.length) * rect.height - window.innerHeight / 2, behavior: 'smooth' });
  };

  const step = STEPS[active];

  return (
    <section id="impulsores" className="hairline-t scroll-mt-24 bg-surface">
      {/* Desktop: escenario fijo guiado por scroll */}
      <div ref={trackRef} className="relative mx-auto hidden max-w-7xl lg:block" style={{ height: `${STEPS.length * 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-center px-8">
          <div className="grid w-full grid-cols-[1fr_auto] items-center gap-16 xl:gap-24">
            <div className="max-w-lg">
              <p className="eyebrow">Así vende tu IA</p>
              <h2 className="mt-3.5 text-balance text-[2.5rem] font-bold leading-[1.06] tracking-tighter text-ink">
                Mira cómo la IA <span className="text-brand-600">cierra cada venta</span>
              </h2>
              <p className="mt-3 text-[15px] text-ink-mute">
                Sube el ticket, suma productos, rescata al que duda y recupera carritos — siempre con tu mensaje.
              </p>

              <ul className="mt-8">
                {STEPS.map((s, i) => {
                  const on = active === i;
                  const Icon = s.icon;
                  const last = i === STEPS.length - 1;
                  return (
                    <li key={s.key}>
                      <button type="button" onClick={() => scrollToStep(i)} className="flex w-full gap-4 text-left">
                        <div className="flex flex-col items-center pt-0.5">
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                              on ? 'border-brand-200 bg-brand-50 text-brand-600' : 'border-line bg-surface text-ink-faint'
                            }`}
                          >
                            <Icon className="h-5 w-5" strokeWidth={2} />
                          </span>
                          {!last && (
                            <span
                              className={`my-1.5 w-px flex-1 transition-colors duration-300 ${on ? 'bg-brand-200' : 'bg-line'}`}
                              style={{ minHeight: on ? 64 : 22 }}
                            />
                          )}
                        </div>
                        <div className="pb-4">
                          <span
                            className={`block text-[21px] font-semibold tracking-tight transition-colors duration-300 ${
                              on ? 'text-ink' : 'text-ink-faint'
                            }`}
                          >
                            {s.title}
                          </span>
                          {on && <p className="mt-2 max-w-sm text-[14.5px] leading-relaxed text-ink-mute">{s.desc}</p>}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <a href={REGISTER_URL} className="btn-primary mt-4 px-6 py-3.5 text-base">
                Quiero esto en mi WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <WaPhone key={active} messages={step.chat} statusTime={step.clock} animate />
          </div>
        </div>
      </div>

      {/* Móvil: apilado */}
      <div className="px-5 py-24 sm:px-8 lg:hidden">
        <SectionHeading
          eyebrow="Así vende tu IA"
          title={
            <>
              Mira cómo la IA <span className="text-brand-600">cierra cada venta</span>
            </>
          }
          subtitle="Sube el ticket, suma productos, rescata al que duda y recupera carritos — siempre con tu mensaje."
        />
        <div className="mt-12 space-y-16">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.key}>
                <div>
                  <div className="mb-5 flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="text-[19px] font-semibold tracking-tight text-ink">{s.title}</h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-ink-mute">{s.desc}</p>
                    </div>
                  </div>
                  <WaPhone messages={s.chat} statusTime={s.clock} />
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <a href={REGISTER_URL} className="btn-primary px-6 py-3.5 text-base">
            Quiero esto en mi WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
