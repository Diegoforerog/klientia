import Image from 'next/image';
import Reveal from './Reveal';

const STATS = [
  { v: '< 1 s', k: 'en responder' },
  { v: '+23%', k: 'ticket promedio' },
  { v: '1 de 4', k: 'carritos recuperados' },
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
                    <p className="text-[1.5rem] font-bold tracking-tight text-ink">{s.v}</p>
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
