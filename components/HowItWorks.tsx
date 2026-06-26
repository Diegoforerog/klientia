import { Smartphone, UploadCloud, Sparkles, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { STEPS, REGISTER_URL } from '@/lib/content';

const ICONS = [Smartphone, UploadCloud, Sparkles];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="hairline-t scroll-mt-24 bg-subtle py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Listo en minutos"
          title={
            <>
              Empieza a vender con IA en <span className="text-brand-600">3 pasos</span>
            </>
          }
          subtitle="Sin instalar nada, sin programar y sin cambiar tu número. Si sabes usar WhatsApp, sabes usar esto."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={step.n} delay={i * 90}>
                <div className="h-full bg-surface p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line2 bg-subtle text-ink">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <span className="text-[15px] font-semibold tabular-nums text-ink-faint">{step.n}</span>
                  </div>
                  <h3 className="mt-6 text-[19px] font-semibold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-mute">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <a href={REGISTER_URL} className="btn-ink px-6 py-3.5 text-base">
              Conectar mi WhatsApp gratis <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
