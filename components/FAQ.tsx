import { Plus } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { FAQS, REGISTER_URL } from '@/lib/content';

export default function FAQ() {
  return (
    <section id="faq" className="hairline-t scroll-mt-24 bg-subtle py-24 sm:py-32">
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
          <div className="mt-12 divide-y divide-line border-y border-line">
            {FAQS.map((item) => (
              <details key={item.q} className="faq-item group [&[open]_.faqi]:rotate-45">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[16.5px] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus className="faqi h-5 w-5 shrink-0 text-ink-faint transition-transform duration-300" strokeWidth={2} />
                </summary>
                <p className="pb-5 text-[15px] leading-relaxed text-ink-mute">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>

        <p className="mt-8 text-center text-[15px] text-ink-mute">
          ¿Otra duda? La mejor forma de verlo es probándolo —{' '}
          <a href={REGISTER_URL} className="font-semibold text-brand-600 underline-offset-2 hover:underline">
            empieza tu prueba gratis
          </a>
          .
        </p>
      </div>
    </section>
  );
}
