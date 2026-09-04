import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { INDUSTRIAS, getIndustria } from '@/lib/industrias';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.klientia.app';
const REGISTER_URL = 'https://app.klientia.app/register';

export function generateStaticParams() {
  return INDUSTRIAS.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ind = getIndustria(params.slug);
  if (!ind) return {};
  const path = `/industrias/${ind.slug}/`;
  return {
    title: { absolute: ind.metaTitle },
    description: ind.metaDescription,
    alternates: { canonical: path },
    openGraph: { type: 'article', url: path, title: ind.metaTitle, description: ind.metaDescription },
    twitter: { card: 'summary_large_image', title: ind.metaTitle, description: ind.metaDescription },
  };
}

export default function IndustriaPage({ params }: { params: { slug: string } }) {
  const ind = getIndustria(params.slug);
  if (!ind) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Industrias', item: `${SITE}/industrias/` },
          { '@type': 'ListItem', position: 3, name: ind.h1, item: `${SITE}/industrias/${ind.slug}/` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: ind.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="bg-surface">
        <section className="hairline-b bg-aura">
          <div className="mx-auto max-w-3xl px-5 pb-14 pt-28 sm:px-8 sm:pt-36">
            <Reveal>
              <nav aria-label="Migas" className="text-[13px] text-ink-faint">
                <Link href="/" className="hover:text-ink">
                  Inicio
                </Link>
                <span className="mx-1.5">›</span>
                <Link href="/industrias/" className="hover:text-ink">
                  Industrias
                </Link>
              </nav>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="mt-4 text-[2.1rem] font-bold leading-[1.08] tracking-tighter text-ink sm:text-[3rem]">
                {ind.h1}
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-mute">{ind.subtitle}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7">
                <a href={REGISTER_URL} className="btn-primary px-6 py-3.5 text-base">
                  Empieza gratis 7 días <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-[13px] text-ink-faint">Sin tarjeta para empezar · Cancela cuando quieras</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <div className="space-y-10">
            {ind.sections.map((s) => (
              <Reveal key={s.h2}>
                <div>
                  <h2 className="text-[1.4rem] font-bold tracking-tight text-ink">{s.h2}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-mute">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16">
              <h2 className="text-[1.4rem] font-bold tracking-tight text-ink">Cómo funciona, en 3 pasos</h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-3">
                {ind.steps.map((step, i) => (
                  <li key={step.title} className="rounded-2xl border border-line bg-subtle p-5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-[13px] font-bold text-white">
                      {i + 1}
                    </div>
                    <h3 className="mt-3 text-[15px] font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-mute">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16">
              <h2 className="text-[1.4rem] font-bold tracking-tight text-ink">Preguntas frecuentes</h2>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {ind.faqs.map((f) => (
                  <div key={f.q} className="py-5">
                    <h3 className="text-[15.5px] font-semibold text-ink">{f.q}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-mute">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16">
              <h2 className="text-[1.4rem] font-bold tracking-tight text-ink">Otras industrias</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {INDUSTRIAS.filter((o) => o.slug !== ind.slug).map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/industrias/${o.slug}/`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3 transition-colors hover:border-brand-300"
                    >
                      <span className="text-[14.5px] font-medium text-ink group-hover:text-brand-600">{o.h1}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-brand-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 rounded-3xl border border-line bg-aura p-8 text-center sm:p-10">
              <p className="mx-auto max-w-lg text-[18px] font-semibold text-ink">{ind.ctaText}</p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={REGISTER_URL} className="btn-primary px-6 py-3.5 text-base">
                  Empezar ahora <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/soluciones/" className="btn-secondary px-6 py-3.5 text-base">
                  Ver todas las soluciones
                </Link>
              </div>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-[13px] text-ink-faint">
                <Check className="h-3.5 w-3.5 text-brand-600" /> Prueba gratis 7 días, sin tarjeta
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
