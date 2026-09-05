'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { Check } from 'lucide-react';
import { PILLARS } from '@/lib/content';
import { WaPhone } from './WhatsAppChat';
import { PILLAR_CHATS } from './demo-chats';
import ScreenShot from './ScreenShot';
import SectionHeading from './SectionHeading';
import CtaButton from './CtaButton';
import Reveal from './Reveal';

/**
 * Etiqueta corta de cada pestaña hasta `lg` (≤ 2 palabras): el kicker completo
 * de `PILLARS` se parte en varias líneas en móvil y tablet. El texto de Marca
 * no se toca; en pantallas ≥ lg se muestra el kicker tal cual. El nombre
 * accesible del botón es siempre el kicker completo (aria-label).
 */
const SHORT_TAB: Record<string, string> = {
  responde: 'Responde',
  'vende-mas': 'Vende más',
  recupera: 'Recupera',
};

/**
 * UNA sola demo: los tres pilares (responde · sube el ticket · recupera) en
 * pestañas. Cada pestaña = el texto del pilar + su captura real del panel +
 * la conversación de ejemplo que lo dramatiza. Fusiona lo que antes eran dos
 * secciones (pilares + showcase de impulsores) y deja un solo CTA.
 *
 * Accesibilidad: patrón tabs de WAI-ARIA con activación automática —
 * flechas ←/→ mueven foco y selección, Inicio/Fin saltan a los extremos.
 */
export default function DemoTabs() {
  const [active, setActive] = useState(0);
  const [chatIdx, setChatIdx] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const select = (i: number) => {
    setActive(i);
    setChatIdx(0);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = PILLARS.length;
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = (active + 1) % n;
    else if (e.key === 'ArrowLeft') next = (active - 1 + n) % n;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = n - 1;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="caracteristicas" className="hairline-t scroll-mt-24 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          size="lg"
          eyebrow="Así vende tu IA"
          title={
            <>
              Mira cómo la IA <span className="text-brand-600">cierra cada venta</span>
            </>
          }
        />

        <Reveal delay={120}>
          <div id="impulsores" className="mt-10 scroll-mt-28 sm:mt-12">
            {/* Pestañas */}
            <div
              role="tablist"
              aria-label="Así vende tu IA"
              onKeyDown={onKeyDown}
              className="mx-auto grid max-w-4xl grid-cols-3 gap-1 rounded-2xl border border-line bg-surface p-1 shadow-sm"
            >
              {PILLARS.map((p, i) => {
                const on = i === active;
                return (
                  <button
                    key={p.key}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`${baseId}-tab-${p.key}`}
                    aria-selected={on}
                    aria-controls={`${baseId}-panel-${p.key}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => select(i)}
                    aria-label={p.eyebrow}
                    className={`whitespace-nowrap rounded-xl px-2 py-2.5 text-center text-[13px] font-semibold leading-tight transition-colors duration-200 sm:px-4 sm:py-3 sm:text-[15px] lg:px-3 lg:text-[14px] xl:px-4 xl:text-[15px] ${
                      on ? 'bg-ink text-white shadow-sm' : 'text-ink-soft hover:bg-subtle hover:text-ink'
                    }`}
                  >
                    {/* Dos textos según tamaño; ambos aria-hidden: el nombre accesible lo da aria-label (sin duplicar). */}
                    <span aria-hidden className="lg:hidden">
                      {SHORT_TAB[p.key] ?? p.eyebrow}
                    </span>
                    <span aria-hidden className="hidden lg:inline">
                      {p.eyebrow}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Paneles */}
            {PILLARS.map((p, i) => {
              const chats = PILLAR_CHATS[p.key] ?? [];
              const chat = chats[Math.min(chatIdx, chats.length - 1)];
              const on = i === active;
              return (
                <div
                  key={p.key}
                  role="tabpanel"
                  id={`${baseId}-panel-${p.key}`}
                  aria-labelledby={`${baseId}-tab-${p.key}`}
                  hidden={!on}
                  tabIndex={0}
                  /* La clase `grid` pisaría al atributo hidden (misma especificidad): se alterna la clase. */
                  className={`${on ? 'grid' : 'hidden'} mt-10 items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14`}
                >
                  {/* Texto del pilar */}
                  <div className="max-w-lg">
                    <h3 className="text-balance text-[1.6rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2rem]">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-pretty text-[16px] leading-relaxed text-ink-mute">{p.desc}</p>
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

                    {/* Si el pilar tiene varias conversaciones, chips para alternarlas */}
                    {chats.length > 1 && (
                      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={p.eyebrow}>
                        {chats.map((c, ci) => {
                          const Icon = c.icon;
                          const sel = ci === Math.min(chatIdx, chats.length - 1);
                          return (
                            <button
                              key={c.key}
                              type="button"
                              aria-pressed={sel}
                              onClick={() => setChatIdx(ci)}
                              className={`pill gap-2 py-1.5 transition-colors duration-200 ${
                                sel ? 'border-brand-600 bg-brand-50 text-brand-700' : 'hover:border-ink/30 hover:text-ink'
                              }`}
                            >
                              <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                              {c.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Escenario: captura real detrás, teléfono con la conversación delante */}
                  <div className="relative lg:pl-44 lg:pt-20">
                    <ScreenShot
                      src={p.image}
                      alt={p.alt}
                      screen={p.screen}
                      sizes="(max-width: 1024px) 100vw, 620px"
                      className="hidden lg:block"
                    />
                    {on && chat && (
                      <div className="lg:absolute lg:bottom-0 lg:left-0 lg:w-[300px] lg:origin-bottom-left lg:scale-[0.68]">
                        <WaPhone key={`${p.key}-${chat.key}`} messages={chat.chat} statusTime={chat.clock} animate className="shadow-phone" />
                      </div>
                    )}
                    <p className="mt-5 text-center text-[12.5px] leading-snug text-ink-mute lg:absolute lg:bottom-[-1.75rem] lg:left-0 lg:mt-0 lg:w-[300px] lg:origin-bottom-left lg:scale-[0.68]">
                      Conversación de ejemplo.
                    </p>
                    <ScreenShot
                      src={p.image}
                      alt={p.alt}
                      screen={p.screen}
                      sizes="(max-width: 1024px) 100vw, 620px"
                      className="mt-8 lg:hidden"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Un solo CTA para toda la demo */}
        <div className="mt-14 flex justify-center lg:mt-20">
          <CtaButton size="lg" />
        </div>
      </div>
    </section>
  );
}
