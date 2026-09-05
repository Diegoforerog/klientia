import { Plus } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ShowMore from './ShowMore';
import { FAQS } from '@/lib/content';

/** Cuántas preguntas se ven de entrada; el resto, tras "Ver más preguntas". */
const VISIBLE = 6;

function Item({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item group [&[open]_.faqi]:rotate-45">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[16.5px] font-medium text-ink [&::-webkit-details-marker]:hidden">
        {q}
        <Plus className="faqi h-5 w-5 shrink-0 text-ink-faint transition-transform duration-300" strokeWidth={2} />
      </summary>
      <p className="pb-5 text-[15px] leading-relaxed text-ink-mute">{a}</p>
    </details>
  );
}

export default function FAQ() {
  const first = FAQS.slice(0, VISIBLE);
  const rest = FAQS.slice(VISIBLE);
  return (
    <section id="faq" className="hairline-t scroll-mt-24 bg-subtle py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title={
            <>
              Resolvemos tus dudas <span className="text-brand-600">antes de empezar</span>
            </>
          }
        />

        <Reveal delay={120}>
          <div className="mt-10">
            <div className="divide-y divide-line border-y border-line">
              {first.map((item) => (
                <Item key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
            {rest.length > 0 && (
              <ShowMore label="Ver más preguntas" className="divide-y divide-line border-b border-line">
                {rest.map((item) => (
                  <Item key={item.q} q={item.q} a={item.a} />
                ))}
              </ShowMore>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
