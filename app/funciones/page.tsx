import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaButton from '@/components/CtaButton';
import { FeatureGrid } from '@/components/Features';
import { FEATURES } from '@/lib/content';

/**
 * Catálogo completo de funciones. La home solo destaca algunas; aquí están
 * las 18 con la misma tarjeta. Página estática (export), canónica propia.
 *
 * TODO(Marca): revisar título/descripción SEO de esta página; el H1 reutiliza
 * el título de la antigua sección "Lo demás que necesitas…" tal cual.
 */
export const metadata: Metadata = {
  title: { absolute: 'Todo lo incluido en Klientia — funciones del vendedor con IA' },
  description:
    'Todas las funciones que vienen en tu plan de Klientia: vendedor con IA, impulsores de venta, recuperación de carritos, campañas, CRM, automatizaciones, agenda, cobros, Shopify y más.',
  alternates: { canonical: '/funciones/' },
};

export default function FuncionesPage() {
  return (
    <>
      <Header />
      <main className="bg-subtle">
        <section className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
          <div className="max-w-3xl">
            <p className="eyebrow">Y además, todo esto</p>
            <h1 className="mt-3 text-balance text-[2rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.6rem]">
              Lo demás que necesitas para vender, <span className="text-brand-600">ya incluido</span>
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-mute">
              No son extras: vienen en tu plan. Campañas, redes, CRM, automatizaciones, agenda, cobros e integraciones — sin
              pagar cinco herramientas distintas.
            </p>
          </div>

          <FeatureGrid features={FEATURES} className="mt-12" />

          <div className="mt-12 flex flex-col items-center gap-3">
            <CtaButton size="lg" />
            <p className="text-[13.5px] text-ink-faint">Sin tarjeta · Listo en 15 minutos · Cancela cuando quieras</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
