import Reveal from './Reveal';
import LiveSale from './LiveSale';
import CtaButton from './CtaButton';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-aura">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:pb-28 lg:pt-40">
        {/* Copy */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="pill">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
              </span>
              Ventas por WhatsApp con IA
            </span>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="mt-6 text-balance text-[2.9rem] font-extrabold leading-[0.98] tracking-tightest text-ink sm:text-[4.4rem] lg:text-[4.9rem]">
              Deja de perder ventas <span className="text-brand-600">en WhatsApp.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 max-w-xl text-pretty text-[18px] leading-relaxed text-ink-mute sm:text-[19px]">
              Klientia es el <span className="font-semibold text-ink">vendedor con IA</span> que responde en segundos,
              ofrece la versión mejor, cierra y cobra por ti — 24/7, incluso contra entrega.{' '}
              <span className="font-medium text-ink-soft">Tú solo ves entrar los pedidos.</span>
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton size="lg" />
              <a href="#impulsores" className="btn-secondary px-7 py-4 text-[16px]">
                Ver cómo vende
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-4 text-[13.5px] text-ink-faint">
              Sin tarjeta · Listo en 15 minutos · Cancela cuando quieras
            </p>
          </Reveal>
        </div>

        {/* La venta en vivo */}
        <Reveal delay={180} className="relative">
          <LiveSale />
        </Reveal>
      </div>
    </section>
  );
}
