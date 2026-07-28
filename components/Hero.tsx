import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import Reveal from './Reveal';
import { WaPhone, type WaMsg } from './WhatsAppChat';
import { REGISTER_URL, AVATARS } from '@/lib/content';

/* Chat demo del hero — muestra los 3 roles del bot en secuencia:
 * responde, agenda y vende. Cuenta la historia del headline. */
const CHAT: WaMsg[] = [
  { kind: 'date', label: 'Hoy' },
  { from: 'in', text: 'Hola 👋 ¿tienen el serum vitamina C?', time: '9:01' },
  { from: 'out', text: '¡Hola! 😊 Sí, $79.900 con envío gratis. Y por $20.000 más te llevas el XL, que rinde el doble.', time: '9:02', read: true },
  { from: 'in', text: 'Dale el XL 🙌 ¿me puedes agendar mi cita también?', time: '9:03' },
  { from: 'out', text: 'Perfecto. Mañana tengo 10:00 y 3:00 p. m. ¿Cuál te queda?', time: '9:03', read: true },
  { from: 'in', text: '10:00 ✅', time: '9:03' },
  { from: 'out', text: '¡Listo! Cita reservada 📅 Aquí el link de tu pago 👇', time: '9:04', read: true },
  { kind: 'pay', amount: '$99.900', time: '9:04' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night text-night-text">
      {/* ── Fondo dark: gradiente radial + grid + curvas SVG ─────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Halo de color detrás del titular — respira con glow-pulse */}
        <div className="absolute left-1/2 top-24 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-neon-blue/25 blur-[120px] motion-safe:animate-glow-pulse" />
        <div className="absolute right-[8%] top-[38%] h-[24rem] w-[24rem] rounded-full bg-neon-cyan/20 blur-[100px]" />
        {/* Grid sutilísimo — como Vercel/Linear */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(60rem 40rem at 50% 20%, #000 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(60rem 40rem at 50% 20%, #000 40%, transparent 80%)',
          }}
        />
        {/* Curvas SVG que atraviesan — como ai-chat */}
        <svg
          className="absolute inset-x-0 top-0 h-full w-full opacity-[0.22]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="curve-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="curve-b" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M -80 620 Q 300 380 720 520 T 1520 340"
            stroke="url(#curve-a)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M 1520 780 Q 1100 560 720 700 T -80 460"
            stroke="url(#curve-b)"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
        {/* Vignette inferior — funde con la siguiente sección */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-32 lg:pt-40">
        {/* ── Copy ────────────────────────────────────────────────────── */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-[12.5px] font-medium text-night-text backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
              </span>
              Ventas por WhatsApp con IA · LATAM
            </span>
          </Reveal>

          <Reveal delay={80}>
            {/* Titular MASIVO. Cuenta los 3 roles: responde, agenda, vende. */}
            <h1 className="mt-7 text-[2.9rem] font-bold leading-[1.02] tracking-tightest text-white sm:text-[4.4rem] lg:text-[5rem]">
              Un vendedor con{' '}
              <span className="relative inline-block bg-gradient-to-r from-neon-glow via-neon-blue to-neon-cyan bg-clip-text text-transparent drop-shadow-neon">
                IA
              </span>{' '}
              que{' '}
              <span className="text-white/95">atiende, agenda y vende</span>{' '}
              <span className="whitespace-nowrap text-white">24/7</span>
              <span className="ml-1 inline-block w-[3px] translate-y-[-0.05em] bg-neon-cyan align-middle motion-safe:animate-blink" style={{ height: '0.9em' }} />
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-pretty text-[17px] leading-relaxed text-night-mute sm:text-[18.5px]">
              Conecta tu WhatsApp, sube tu catálogo o tus servicios, y deja que la IA{' '}
              <span className="font-medium text-white">responda, agende citas, venda, cobre y recupere carritos</span> por ti.
              Sin código, en español, listo en minutos.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={REGISTER_URL}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-4 text-[16px] font-semibold text-night transition-all duration-200 hover:-translate-y-px active:scale-[0.97]"
                style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.15), 0 20px 40px -14px rgba(59,130,246,0.55), 0 0 60px -12px rgba(34,211,238,0.35)' }}
              >
                Empieza gratis 7 días <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#impulsores"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-[16px] font-semibold text-white backdrop-blur transition-all duration-200 hover:border-white/30 hover:bg-white/[0.08]"
              >
                Ver la IA en acción
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-4 text-[13.5px] text-night-mute">Sin tarjeta para empezar · Cancela cuando quieras</p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <span
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-night"
                    style={{ zIndex: 10 - i }}
                  >
                    <Image src={src} alt="" fill sizes="36px" className="object-cover" />
                  </span>
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[10px] font-bold text-night ring-2 ring-night">
                  +2k
                </span>
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-0.5 text-[13.5px] text-night-mute">Tiendas de toda LATAM venden con su vendedor IA</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Teléfono con el chat que cuenta la historia ────────────── */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
          {/* Glow detrás del teléfono */}
          <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-[320px] translate-y-8 scale-95 rounded-full bg-neon-blue/30 blur-3xl" />
          <div className="pointer-events-none absolute right-[10%] top-[-6%] -z-10 h-32 w-32 rounded-full bg-neon-cyan/25 blur-2xl" />
          <WaPhone messages={CHAT} statusTime="9:04" animate />
        </Reveal>
      </div>
    </section>
  );
}
