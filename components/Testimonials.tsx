import Image from 'next/image';
import { Star } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '@/lib/content';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Historias reales"
          title={
            <>
              Dueños de tienda que <span className="text-brand-600">venden más y trabajan menos</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-sm">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15.5px] leading-relaxed text-ink-soft">“{t.quote}”</blockquote>

                <span className="mt-5 inline-flex w-fit items-center rounded-full bg-emerald-50 px-3 py-1 text-[12.5px] font-semibold text-emerald-700">
                  {t.metric}
                </span>

                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-line2">
                    <Image src={t.image} alt={`${t.name}, ${t.role}`} fill sizes="44px" className="object-cover" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[15px] font-semibold text-ink">{t.name}</p>
                    <p className="text-[13px] text-ink-mute">
                      {t.role} · {t.location} {t.flag}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
