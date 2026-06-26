import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { FEATURES } from '@/lib/content';

export default function Features() {
  return (
    <section id="caracteristicas" className="hairline-t scroll-mt-24 bg-subtle py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Todo en un solo lugar"
          title={
            <>
              Un equipo de ventas completo, <span className="text-brand-600">dentro de tu WhatsApp</span>
            </>
          }
          subtitle="No es un chatbot más. Es la IA que atiende, vende, cobra y organiza tu negocio mientras tú creces."
        />

        <Reveal delay={120}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group bg-surface p-7 transition-colors hover:bg-subtle/60">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                      f.accent ? 'border-brand-200 bg-brand-50 text-brand-600' : 'border-line2 bg-subtle text-ink'
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-[16px] font-semibold tracking-tight text-ink">{f.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-mute">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
