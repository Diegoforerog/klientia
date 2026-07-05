import { X, Check } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const PROBLEMS = [
  'Respondes tarde y el cliente ya compró en otro lado.',
  'Pierdes las ventas de la noche y los fines de semana.',
  'Los carritos abandonados se quedan ahí, sin recuperar.',
  'Copias y pegas lo mismo cien veces al día.',
];

const SOLUTIONS = [
  'Responde en segundos, todos los días, a toda hora.',
  'Vende de madrugada y en festivos sin que muevas un dedo.',
  'Persigue y recupera cada carrito automáticamente.',
  'Atiende mil chats a la vez con el tono de tu marca.',
];

export default function ProblemSolution() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="El problema"
          title={
            <>
              Cada mensaje sin responder es <span className="text-brand-600">una venta que se va</span>
            </>
          }
          subtitle="Atender el WhatsApp a mano no escala: o creces y colapsas, o respondes tarde y pierdes. Hay una tercera opción."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-line bg-subtle p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Atendiendo a mano</p>
              <ul className="mt-6 space-y-4">
                {PROBLEMS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                      <X className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink-mute">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="relative flex h-full flex-col rounded-3xl border border-brand-200 bg-surface p-8 shadow-md ring-1 ring-brand-100/50">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-600">Con Klientia</p>
              <ul className="mt-6 space-y-4">
                {SOLUTIONS.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium leading-relaxed text-ink">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
