import { CalendarClock, Users, RefreshCw, Lock, ArrowRight, type LucideIcon } from 'lucide-react';
import { WaPhone, type WaMsg } from './WhatsAppChat';
import Reveal from './Reveal';
import { REGISTER_URL } from '@/lib/content';

/* Demo del agente agendador reservando una cita dentro del chat.
 * Motion-design: los "escribiendo…" antes de los mensajes largos dan tempo
 * humano — el bot NO escupe párrafos de golpe, "piensa" un instante. Los
 * mensajes cortos (de una línea) van directos para no aburrir. */
const CHAT: WaMsg[] = [
  { kind: 'date', label: 'Hoy' },
  { from: 'in', text: 'Hola 👋 quiero agendar una cita', time: '10:01' },
  { kind: 'typing' },
  {
    from: 'out',
    text: '¡Hola! 😊 ¿Qué servicio te gustaría? Tengo Corte (30 min) y Corte + barba (45 min).',
    time: '10:01',
    read: true,
  },
  { from: 'in', text: 'Corte + barba', time: '10:02' },
  { kind: 'typing' },
  {
    from: 'out',
    text: 'Perfecto. Para mañana tengo libre a las 10:00, 11:30 o 3:00 p. m. ¿Cuál te queda mejor?',
    time: '10:02',
    read: true,
  },
  { from: 'in', text: '11:30 🙌', time: '10:03' },
  { from: 'out', text: '¿Con Laura o Andrés, o te asigno al primero disponible?', time: '10:03', read: true },
  { from: 'in', text: 'El primero disponible', time: '10:03' },
  { kind: 'typing' },
  {
    from: 'out',
    text: '¡Listo! ✅ Cita confirmada: Corte + barba, mañana 11:30 a. m. con Laura. Ya quedó en tu calendario 📅',
    time: '10:04',
    read: true,
  },
];

const POINTS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: CalendarClock,
    title: 'Ofrece solo horarios libres',
    desc: 'Consulta tu disponibilidad real por servicio y duración; nunca propone un horario ocupado.',
  },
  {
    icon: Users,
    title: 'Reparte entre tus asesores',
    desc: 'Asigna al asesor menos ocupado (balanceado) o deja que el cliente elija con quién.',
  },
  {
    icon: RefreshCw,
    title: 'Sincroniza tu calendario',
    desc: 'La cita queda en el chat y en Google Calendar o Calendly. Reprogramar o cancelar se refleja solo.',
  },
  {
    icon: Lock,
    title: 'Respeta tus bloqueos',
    desc: 'Marca vacaciones o un rato ocupado y la IA no agenda encima. Tu agenda, bajo control.',
  },
];

export default function AgendaShowcase() {
  return (
    <section id="agenda" className="hairline-t scroll-mt-24 bg-subtle py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow">Agente agendador</p>
            <h2 className="mt-3.5 text-balance text-[2.1rem] font-bold leading-[1.08] tracking-tighter text-ink sm:text-[2.6rem]">
              Llena tu agenda <span className="text-brand-600">sin mover un dedo</span>
            </h2>
            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-ink-mute">
              El cliente pide una cita por WhatsApp y la IA la agenda sola: consulta tu disponibilidad,
              ofrece los horarios libres, elige o asigna asesor y confirma — todo dentro del chat.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-5">
            {POINTS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal as="li" key={p.title} delay={i * 80}>
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="text-[16px] font-semibold tracking-tight text-ink">{p.title}</h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-ink-mute">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={120}>
            <a href={REGISTER_URL} className="btn-primary mt-9 px-6 py-3.5 text-base">
              Activar mi agente agendador <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={100} className="order-1 flex justify-center lg:order-2">
          <WaPhone contact="Estética Bella" initials="EB" messages={CHAT} statusTime="10:04" animate />
        </Reveal>
      </div>
    </section>
  );
}
