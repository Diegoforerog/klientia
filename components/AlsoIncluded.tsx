import Link from 'next/link';
import { ArrowRight, CalendarCheck, Rss, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { FEATURE_GROUPS } from '@/lib/content';
import { INTEGRATIONS } from './Integrations';
import { AGENDA_INTRO } from './AgendaShowcase';
import { REDES_INTRO } from './RedesSection';

/**
 * "También incluido": lo que antes eran cuatro secciones (Agenda, Redes,
 * Lo demás, Integraciones) en una sola, corta. Agenda y Redes son dos
 * tarjetas con enlace a su subpágina; el resto de funciones va resumido en
 * 5 grupos (FEATURE_GROUPS, de Marca), cada uno con enlace a su solución;
 * el detalle de las 18 funciones vive en /funciones. Integraciones: logos.
 */
type Product = { id: string; icon: LucideIcon; eyebrow: string; title: string; desc: string; href: string };

const PRODUCTS: Product[] = [
  { id: 'agenda', icon: CalendarCheck, href: '/soluciones/agendar-citas-por-whatsapp/', ...AGENDA_INTRO },
  { id: 'redes', icon: Rss, href: '/soluciones/redes-sociales-con-ia/', ...REDES_INTRO },
];

export default function AlsoIncluded() {
  return (
    <section id="todo-incluido" className="hairline-t scroll-mt-24 bg-subtle py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Y además, todo esto"
          title={
            <>
              Lo demás que necesitas para vender, <span className="text-brand-600">ya incluido</span>
            </>
          }
          subtitle="No son extras: vienen en tu plan. Campañas, redes, CRM, automatizaciones, agenda, cobros e integraciones — sin pagar cinco herramientas distintas."
        />

        {/* Agenda + Redes: dos productos, dos tarjetas, un enlace cada una */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.id} delay={i * 80} className="h-full">
                <Link
                  id={p.id}
                  href={p.href}
                  className="group flex h-full scroll-mt-28 flex-col rounded-3xl border border-line bg-surface p-7 shadow-sm transition-colors hover:border-brand-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <p className="eyebrow">{p.eyebrow}</p>
                  </div>
                  <h3 className="mt-4 text-balance text-[1.35rem] font-bold leading-[1.15] tracking-tighter text-ink sm:text-[1.5rem]">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-mute">{p.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">
                    Ver más <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* 5 grupos de funciones (el detalle vive en /funciones). Retícula sin
            huecos en cada tamaño: 1 col (móvil) · 2 cols con la última a lo ancho
            (sm) · 3 + 2 (lg: retícula de 6, las dos últimas ocupan 3 cada una)
            · 5 en fila (xl). */}
        <Reveal delay={120}>
          <div className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5">
            {FEATURE_GROUPS.map((g, i, arr) => {
              const Icon = g.icon;
              const last = i === arr.length - 1;
              const lastRowLg = i >= arr.length - 2;
              return (
                <Link
                  key={g.title}
                  href={g.href}
                  className={`group relative flex flex-col bg-surface p-6 xl:p-5 2xl:p-6 ${last ? 'sm:col-span-2' : ''} ${
                    lastRowLg ? 'lg:col-span-3' : 'lg:col-span-2'
                  } xl:col-span-1`}
                >
                  <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line2 bg-subtle text-ink transition-[color,background-color,border-color,transform] duration-300 ease-out group-hover:scale-[1.06] group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-600">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="relative z-10 mt-5 text-balance text-[16px] font-semibold leading-snug tracking-tight text-ink">{g.title}</h3>
                  <p className="relative z-10 mt-2 flex-1 text-[14px] leading-relaxed text-ink-mute">{g.desc}</p>
                  <span className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">
                    Ver más <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span aria-hidden className="pointer-events-none absolute inset-0 bg-brand-50/70 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </Reveal>

        {/* Integraciones: logo + nombre, sin frase */}
        <Reveal delay={160}>
          <ul id="integraciones" className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 scroll-mt-28" aria-label="Se conecta con lo que ya usas">
            {INTEGRATIONS.map((it) => (
              <li key={it.slug} className="group flex items-center gap-2.5 text-[14px] font-semibold text-ink-soft">
                <span
                  aria-hidden
                  className="logo-mask h-5 w-5 text-ink-soft transition-colors duration-300 group-hover:text-brand-600"
                  style={{ WebkitMaskImage: `url(/logos/${it.slug}.svg)`, maskImage: `url(/logos/${it.slug}.svg)` }}
                />
                {it.name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <Link href="/funciones/" className="btn-secondary px-6 py-3 text-[15px]">
              Ver todo lo incluido <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
