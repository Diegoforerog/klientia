import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { POSTS } from '@/lib/blog';

export const metadata: Metadata = {
  title: { absolute: 'Blog de Klientia — vender por WhatsApp y redes con IA' },
  description:
    'Guías prácticas para vender más por WhatsApp e Instagram: contra entrega, agenda de citas, productos ganadores de dropshipping y más.',
  alternates: { canonical: '/blog/' },
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="bg-surface">
        <section className="mx-auto max-w-3xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 text-balance text-[2rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.6rem]">
            Guías para vender más por WhatsApp y redes
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-mute">
            Ideas prácticas para comerciantes de LATAM: automatizar tus ventas, recuperar clientes y sacarle
            provecho a WhatsApp, Instagram y tus anuncios.
          </p>

          <ul className="mt-10 space-y-4">
            {POSTS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}/`}
                  className="group block rounded-2xl border border-line bg-white p-6 transition-colors hover:border-brand-300"
                >
                  <h2 className="text-[1.2rem] font-bold tracking-tight text-ink group-hover:text-brand-600">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-mute">{p.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-600">
                    Leer <ArrowRight className="h-4 w-4" />
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
