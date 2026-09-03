'use client';

import { useEffect, useState } from 'react';
import { CheckCheck } from 'lucide-react';
import { WaPhone, type WaMsg } from './WhatsAppChat';

/**
 * La venta en vivo — elemento firma del hero.
 * Una conversación de EJEMPLO que se reproduce sola: el cliente escribe a las
 * 11 de la noche, la IA responde, sube el ticket, manda el pago y cae el sello
 * "Pago recibido". Dramatiza la tesis de la página (vende mientras duermes)
 * sin inventar cifras: es una demo, y se etiqueta como tal.
 */

type Beat = { msg: WaMsg; wait: number };

// Cada paso = mensaje + lo que tarda en aparecer el SIGUIENTE (ms).
// Los "typing" simulan a la IA redactando antes de responder.
const SCRIPT: Beat[] = [
  { msg: { kind: 'date', label: 'Hoy · 11:46 p. m.' }, wait: 500 },
  { msg: { from: 'in', text: 'Hola, ¿aún tienen el serum de vitamina C? 🙏', time: '11:46' }, wait: 900 },
  { msg: { kind: 'typing' }, wait: 1400 },
  {
    msg: {
      from: 'out',
      text: '¡Hola! 😊 Sí, $79.900 con envío gratis. Y por $20.000 más te llevas el XL, que rinde el doble. ¿Te lo dejo así?',
      time: '11:46',
      read: true,
    },
    wait: 1500,
  },
  { msg: { from: 'in', text: 'Dale, el XL 🙌', time: '11:47' }, wait: 800 },
  { msg: { kind: 'typing' }, wait: 1100 },
  { msg: { from: 'out', text: '¡Perfecto! Serum XL en $99.900. Aquí tu pago seguro 👇', time: '11:47', read: true }, wait: 700 },
  { msg: { kind: 'pay', amount: '$99.900', time: '11:47' }, wait: 1300 },
];

const TOTAL = SCRIPT.length;

export default function LiveSale() {
  // step = cuántos beats se muestran. TOTAL+1 = además cae el sello.
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setStep(TOTAL + 1);
      return;
    }
    let cancelled = false;
    const timers: number[] = [];
    let acc = 350; // respiro inicial tras cargar
    for (let i = 0; i < TOTAL; i++) {
      timers.push(window.setTimeout(() => !cancelled && setStep(i + 1), acc));
      acc += SCRIPT[i].wait;
    }
    timers.push(window.setTimeout(() => !cancelled && setStep(TOTAL + 1), acc));
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  // Los "typing" solo viven mientras son el último beat visible: al llegar la
  // respuesta, desaparecen (como en WhatsApp real).
  const visible = SCRIPT.slice(0, Math.min(step, TOTAL))
    .map((b) => b.msg)
    .filter((m, i, arr) => m.kind !== 'typing' || i === arr.length - 1);

  const stamped = step > TOTAL;

  return (
    <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
      <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-[320px] translate-y-6 scale-95 rounded-full bg-brand-500/20 blur-3xl" />

      <WaPhone messages={visible} statusTime="11:47" animate baseDelay={0} stagger={0} />

      {/* Sello de pago: cae fuera del teléfono, como un recibo. Verde WhatsApp =
          único uso de ese color fuera del chat: aquí significa DINERO. */}
      <div
        aria-live="polite"
        className={`pointer-events-none absolute -left-3 top-[60%] sm:-left-8 lg:-left-14 ${stamped ? 'animate-stamp' : 'opacity-0'}`}
      >
        <div className="rotate-[-1.5deg] rounded-xl border-2 border-wa-green bg-white px-4 py-3 shadow-lift">
          <p className="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-wa-deep">
            <CheckCheck className="h-3.5 w-3.5 text-wa-green" strokeWidth={2.5} /> Pago recibido
          </p>
          <p className="mt-0.5 font-mono text-[22px] font-semibold leading-none tracking-tight text-ink">$99.900</p>
          <p className="mt-1 font-mono text-[11px] text-ink-mute">11:47 p. m. · contra entrega OK</p>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[300px] text-center text-[12.5px] leading-snug text-ink-faint lg:mt-8">
        Conversación de ejemplo. Así cierra una venta a las 11 de la noche —{' '}
        <span className="text-ink-mute">sin que nadie esté despierto.</span>
      </p>
    </div>
  );
}
