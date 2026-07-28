import Image from 'next/image';
import Reveal from './Reveal';
import CountUp from './CountUp';
import type { ReactNode } from 'react';

/**
 * Motion-design intent: los números "crecen" al entrar en vista. El primero
 * ("< 1 s") no anima porque es un umbral, no una cantidad — leerlo instantáneo
 * lo hace más contundente. Los otros dos (+23%, 1 de 4) SÍ cuentan hacia arriba
 * porque el mensaje es de crecimiento.
 */
const STATS: { v: ReactNode; k: string }[] = [
  {
    v: (
      <>
        &lt; 1<span className="ml-0.5 text-[1.1rem] font-semibold text-ink-mute">s</span>
      </>
    ),
    k: 'en responder',
  },
  {
    v: <CountUp to={23} prefix="+" suffix="%" duration={1400} />,
    k: 'ticket promedio',
  },
  {
    v: (
      <>
        <CountUp to={1} duration={900} />
        <span className="ml-1.5 text-[1rem] font-medium text-ink-mute">de 4</span>
      </>
    ),
    k: 'carritos recuperados',
  },
];

export default function ResultsBand() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="grid items-center gap-8 rounded-[2rem] border border-line bg-subtle p-5 sm:p-7 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
              <Image
                src="/images/lifestyle-hands.jpg"
                alt="Emprendedor atendiendo su WhatsApp desde el celular"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="lg:pr-8">
              <h2 className="text-balance text-[1.9rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.4rem]">
                Menos trabajo manual. <span className="text-brand-600">Más ventas cerradas.</span>
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-mute">
                Tu vendedor con IA responde, ofrece y cobra mientras tú produces, despachas o descansas.
                Tú defines las reglas; la IA hace el trabajo repetitivo.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                {STATS.map((s) => (
                  <div key={s.k} className="bg-surface px-3 py-5 text-center">
                    <p className="text-[1.5rem] font-bold tracking-tight text-ink tabular-nums">{s.v}</p>
                    <p className="mt-1 text-[12.5px] leading-tight text-ink-mute">{s.k}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
