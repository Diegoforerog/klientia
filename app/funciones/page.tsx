import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaButton from '@/components/CtaButton';
import { FeatureGrid } from '@/components/Features';
import { FEATURES } from '@/lib/content';

/**
 * Catálogo completo de funciones. La home resume en 5 grupos (FEATURE_GROUPS);
 * aquí está el detalle, una tarjeta por función. Página estática (export),
 * canónica propia.
 */
export const metadata: Metadata = {
  title: { absolute: 'Todo lo que incluye Klientia — funciones del vendedor con IA para WhatsApp' },
  description:
    'Todas las funciones que vienen en tu plan de Klientia: vendedor con IA para WhatsApp, impulsores de venta, recuperación de carritos, campañas, CRM, automatizaciones, agenda de citas, cobros, Shopify e integraciones.',
  alternates: { canonical: '/funciones/' },
};

export default function FuncionesPage() {
  return (
    <>
      <Header />
      <main className="bg-subtle">
        <section className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
          <div className="max-w-3xl">
            <p className="eyebrow">Funciones</p>
            <h1 className="mt-3 text-balance text-[2rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.6rem]">
              Todo lo que incluye <span className="text-brand-600">Klientia</span>
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-mute">
              Nada es un extra: cada función viene en tu plan. Vendedor con IA, impulsores, recuperación, campañas, CRM,
              automatizaciones, agenda, cobros e integraciones, en un solo lugar.
            </p>
          </div>

          <FeatureGrid features={FEATURES} className="mt-12" />

          <div className="mt-12 flex flex-col items-center gap-3">
            <CtaButton size="lg" />
            <p className="text-[13.5px] text-ink-mute">Sin tarjeta · Listo en 15 minutos · Cancela cuando quieras</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
