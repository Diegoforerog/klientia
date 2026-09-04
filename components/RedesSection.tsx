import Link from 'next/link';
import { Rss, MessageSquare, Megaphone, ArrowRight, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Card = { icon: LucideIcon; title: string; desc: string; href: string };

const CARDS: Card[] = [
  {
    icon: Rss,
    title: 'Publica y programa tus posts',
    desc: 'Crea y agenda contenido para Instagram, Facebook y TikTok desde el mismo panel, con calendario y estados.',
    href: '/soluciones/redes-sociales-con-ia/',
  },
  {
    icon: MessageSquare,
    title: 'Comentarios que se responden solos',
    desc: 'La IA responde los comentarios de tus posts de Instagram y Facebook con reglas por palabra clave, y lleva al comprador al chat.',
    href: '/soluciones/responder-comentarios-instagram-facebook/',
  },
  {
    icon: Megaphone,
    title: 'Anuncios de Meta con control',
    desc: 'Crea campañas de Facebook e Instagram con tu presupuesto validado, pausa cuando quieras y sigue tus resultados.',
    href: '/soluciones/crear-anuncios-meta-facebook-instagram/',
  },
];

export default function RedesSection() {
  return (
    <section id="redes" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Redes sociales con IA"
          title="Vende y atiende también en tus redes sociales"
          subtitle="No solo WhatsApp: Klientia publica tu contenido, responde tus comentarios y crea tus anuncios de Meta — todo desde el mismo panel donde vendes."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[17px] font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-mute">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-600">
                  Ver más <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <div className="mt-10 text-center">
            <Link href="/soluciones/redes-sociales-con-ia/" className="btn-secondary px-6 py-3.5 text-base">
              Ver todo lo que hace en tus redes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
