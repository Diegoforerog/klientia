import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { INDUSTRIAS } from '@/lib/industrias';

export const metadata: Metadata = {
  title: { absolute: 'Klientia por industria — WhatsApp con IA para tu negocio' },
  description:
    'Cómo Klientia ayuda a vender por WhatsApp con IA según tu negocio: dropshipping y e-commerce, belleza y estética, restaurantes y tiendas Shopify.',
  alternates: { canonical: '/industrias/' },
};

export default function IndustriasIndexPage() {
  return (
    <>
      <Header />
      <main className="bg-surface">
        <section className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
          <p className="eyebrow">Por industria</p>
          <h1 className="mt-3 text-balance text-[2rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.6rem]">
            Klientia, hecho para tu tipo de negocio
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-mute">
            Un vendedor con IA para tu WhatsApp y tus redes, adaptado a cómo vende tu industria. Elige la tuya.
          </p>

          <ul className="mt-10 space-y-4">
            {INDUSTRIAS.map((i) => (
              <li key={i.slug}>
                <Link
                  href={`/industrias/${i.slug}/`}
                  className="group block rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-300"
                >
                  <h2 className="text-[1.2rem] font-bold tracking-tight text-ink group-hover:text-brand-600">
                    {i.h1}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-mute">{i.subtitle}</p>
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
