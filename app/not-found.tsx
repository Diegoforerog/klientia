import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  description: 'La página que buscas no existe o cambió de dirección.',
  robots: { index: false, follow: false },
  // Sin canonical: una 404 no debe apuntar a la home.
  alternates: { canonical: null },
};

const LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones', href: '/soluciones/' },
  { label: 'Blog', href: '/blog/' },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 pb-24 pt-40 text-center sm:px-8">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3.5 text-balance text-[2rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.6rem]">
          Página no encontrada
        </h1>
        <p className="mt-4 max-w-md text-pretty text-[16.5px] leading-relaxed text-ink-mute">
          La página que buscas no existe o cambió de dirección. Revisa el enlace o vuelve por aquí:
        </p>
        <nav aria-label="Enlaces útiles" className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="btn-secondary px-6 py-3 text-[15px]">
              {l.label}
            </Link>
          ))}
          <a href="https://www.klientia.app/doc/es/" className="btn-secondary px-6 py-3 text-[15px]">
            Documentación
          </a>
        </nav>
      </main>
      <Footer />
    </>
  );
}
