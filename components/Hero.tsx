import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import Reveal from './Reveal';
import { WaPhone, type WaMsg } from './WhatsAppChat';
import { REGISTER_URL, AVATARS } from '@/lib/content';

const CHAT: WaMsg[] = [
  { kind: 'date', label: 'Hoy' },
  { from: 'in', text: 'Hola 😊 ¿tienen el serum vitamina C?', time: '9:01' },
  { from: 'out', text: '¡Hola! 👋 Sí, $79.900 con envío gratis. Y por $20.000 más te llevas el XL, que rinde el doble. ¿Te lo dejo así?', time: '9:02', read: true },
  { from: 'in', text: 'Dale, el XL 🙌', time: '9:02' },
  { from: 'out', text: '¡Genial! Serum XL en $99.900. Aquí tu pago seguro 👇', time: '9:03', read: true },
  { kind: 'pay', amount: '$99.900', time: '9:03' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-aura">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-40">
        {/* Copy */}
        <div className="max-w-xl">
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
            <h1 className="mt-6 text-[2.7rem] font-bold leading-[1.03] tracking-tightest text-ink sm:text-[4.1rem]">
              Tu <span className="text-brand-600">vendedor con IA</span> en WhatsApp, 24/7
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-lg text-pretty text-[18px] leading-relaxed text-ink-mute">
              Conecta tu WhatsApp, sube tu catálogo y deja que la IA{' '}
              <span className="font-medium text-ink-soft">atienda, venda, cobre y recupere carritos</span> por ti.
              Sin código, en español, listo en minutos.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={REGISTER_URL} className="btn-primary px-6 py-3.5 text-base">
                Empieza gratis 7 días <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#impulsores" className="btn-secondary px-6 py-3.5 text-base">
                Ver cómo vende
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-4 text-[13.5px] text-ink-faint">Sin tarjeta para empezar · Cancela cuando quieras</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-4 border-t border-line pt-6">
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <span
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-surface"
                    style={{ zIndex: 10 - i }}
                  >
                    <Image src={src} alt="" fill sizes="36px" className="object-cover" />
                  </span>
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white ring-2 ring-surface">
                  +2k
                </span>
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5 text-[13.5px] text-ink-mute">Tiendas de toda LATAM venden con su vendedor IA</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Teléfono */}
        <Reveal delay={180} className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
          <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-[320px] translate-y-6 scale-95 rounded-full bg-brand-500/15 blur-3xl" />
          <WaPhone messages={CHAT} statusTime="9:03" animate />
        </Reveal>
      </div>
    </section>
  );
}
