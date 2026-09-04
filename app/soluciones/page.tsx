import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SOLUCIONES } from '@/lib/soluciones';

export const metadata: Metadata = {
  title: { absolute: 'Soluciones de Klientia — vender y atender por WhatsApp y redes con IA' },
  description:
    'Todo lo que Klientia hace por tu negocio: vender por WhatsApp con IA, responder comentarios de Instagram y Facebook, crear anuncios de Meta y unificar tus mensajes en una bandeja.',
  alternates: { canonical: '/soluciones/' },
};

export default function SolucionesIndexPage() {
  return (
    <>
      <Header />
      <main className="bg-surface">
        <section className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
          <p className="eyebrow">Soluciones</p>
          <h1 className="mt-3 text-balance text-[2rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.6rem]">
            Todo lo que Klientia hace por tu negocio
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-mute">
            Un vendedor con IA para tu WhatsApp, Instagram y Messenger — que además publica en tus redes, responde
            comentarios y crea tus anuncios de Meta. Estas son las soluciones, una por una.
          </p>

          <ul className="mt-10 space-y-4">
            {SOLUCIONES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/soluciones/${s.slug}/`}
                  className="group block rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-300"
                >
                  <h2 className="text-[1.2rem] font-bold tracking-tight text-ink group-hover:text-brand-600">
                    {s.h1}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-mute">{s.subtitle}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-600">
                    Ver más <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
