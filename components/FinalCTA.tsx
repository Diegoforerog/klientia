import Pic from './Pic';
import { BadgeCheck, CreditCard, XCircle } from 'lucide-react';
import Reveal from './Reveal';
import CtaButton from './CtaButton';

export default function FinalCTA() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink">
          {/* La foto solo en pantallas medianas y grandes: en móvil pesaba
              medio scroll sin aportar. */}
          <div className="absolute inset-0 hidden sm:block">
            <Pic
              src="/images/lifestyle-shop.jpg"
              alt="Dueña de tienda preparando pedidos para envío"
              width={1536}
              height={1024}
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
          </div>

          <div className="relative max-w-xl px-7 py-14 text-white sm:px-14 sm:py-24">
            <h2 className="text-balance text-[2rem] font-bold leading-[1.08] tracking-tighter sm:text-[2.9rem]">
              Tu próximo vendedor estrella no pide sueldo, no se cansa y trabaja 24/7
            </h2>
            <p className="mt-5 max-w-md text-pretty text-[17px] leading-relaxed text-white/75">
              Conéctalo a tu WhatsApp hoy y míralo vender, cobrar y recuperar carritos esta misma semana.
            </p>

            <CtaButton variant="white" size="lg" className="mt-8" />

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4" /> 7 días gratis
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CreditCard className="h-4 w-4" /> Sin tarjeta
              </span>
              <span className="inline-flex items-center gap-1.5">
                <XCircle className="h-4 w-4" /> Cancela cuando quieras
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
