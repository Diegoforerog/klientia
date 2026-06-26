'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingUp, PlusCircle, TicketPercent, RotateCcw, ArrowRight, type LucideIcon } from 'lucide-react';
import { WaPhone, type WaMsg } from './WhatsAppChat';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { REGISTER_URL } from '@/lib/content';

type Step = { key: string; icon: LucideIcon; title: string; desc: string; clock: string; chat: WaMsg[] };

const STEPS: Step[] = [
  {
    key: 'upsell',
    icon: TrendingUp,
    title: 'Ofrece la versión mejor',
    desc: 'Cuando el cliente ya va a comprar, la IA propone el tamaño o la versión superior con un motivo de valor. Sube el ticket sin sonar insistente.',
    clock: '9:43',
    chat: [
      { from: 'in', text: 'Hola 🙌 ¿cuánto está la crema hidratante?', time: '9:41' },
      {
        from: 'out',
        text: '¡Hola! 😊 La de 30 ml está en $39.900. Y por $15.000 más te llevas la de 60 ml, que rinde el doble. ¿Te la dejo en 60?',
        time: '9:42',
        read: true,
      },
      { from: 'in', text: 'Mmm, tienes razón… dale la de 60 🙌', time: '9:43' },
      { from: 'out', text: '¡Excelente elección! 🎉 Crema 60 ml en $54.900 con envío gratis. Te dejo el pago seguro 👇', time: '9:43', read: true },
      { kind: 'pay', amount: '$54.900', time: '9:43' },
    ],
  },
  {
    key: 'crosssell',
    icon: PlusCircle,
    title: 'Suma el complemento ideal',
    desc: 'La IA detecta el producto que combina y lo ofrece en el momento justo, antes de cerrar. Más productos por pedido, sin que muevas un dedo.',
    clock: '16:22',
    chat: [
      { from: 'in', text: 'Listo, me llevo los audífonos inalámbricos 🎧', time: '16:20' },
      {
        from: 'out',
        text: '¡Buena elección! 🎧 $77.900 a contra entrega. ¿Le sumas el estuche protector? Por $12.000 más no se rayan. ¿Te lo agrego?',
        time: '16:21',
        read: true,
      },
      { from: 'in', text: 'Dale, agrégalo 👍', time: '16:22' },
      { from: 'out', text: '¡Genial! Audífonos + estuche = $89.900, contra entrega. Aquí tu confirmación 👇', time: '16:22', read: true },
      { kind: 'pay', amount: '$89.900', time: '16:22' },
    ],
  },
  {
    key: 'downsell',
    icon: TicketPercent,
    title: 'Rescata al que duda',
    desc: 'Si el cliente frena por el precio, la IA ofrece una alternativa más accesible o un descuento — y salva la venta en vez de perderla.',
    clock: '20:07',
    chat: [
      { from: 'in', text: 'Uy, $89.900 está caro para mí ahorita 😅', time: '20:05' },
      {
        from: 'out',
        text: 'Te entiendo 🙌 El mismo combo con 15% de descuento te queda en $76.400, o solo los audífonos por $49.900. ¿Cuál prefieres?',
        time: '20:06',
        read: true,
      },
      { from: 'in', text: 'El del descuento porfa 🙏', time: '20:06' },
      { from: 'out', text: '¡Hecho! 🎉 Combo en $76.400, precio solo por hoy. Aquí tu pago 👇', time: '20:07', read: true },
      { kind: 'pay', amount: '$76.400', time: '20:07' },
    ],
  },
  {
    key: 'recovery',
    icon: RotateCcw,
    title: 'Recupera el carrito solo',
    desc: 'Si el cliente se queda en visto, la IA le escribe sola más tarde (1h, 6h, 24h) con tu mensaje y rescata la venta. Recuperas ventas que dabas por perdidas.',
    clock: '10:16',
    chat: [
      { kind: 'date', label: 'Ayer · 6:30 p. m.' },
      { from: 'in', text: 'Me interesa el set de skincare ✨ ¿cuánto?', time: '18:30' },
      { from: 'out', text: '¡Hola! El set está en $119.900 con envío gratis 😊 ¿Te lo aparto?', time: '18:31', read: true },
      { kind: 'date', label: 'Hoy · 10:15 a. m.' },
      { from: 'out', text: '¡Hola de nuevo! 👋 Te quedó pendiente tu set de skincare ✨ ¿Lo dejamos a contra entrega y te llega esta semana?', time: '10:15', read: true },
      { from: 'in', text: 'Ay sí, se me pasó 🙈 dale', time: '10:16' },
      { kind: 'pay', amount: '$119.900', time: '10:16' },
    ],
  },
];

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
