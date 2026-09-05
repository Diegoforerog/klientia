import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ProblemSolution from '@/components/ProblemSolution';
import DemoTabs from '@/components/DemoTabs';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import AlsoIncluded from '@/components/AlsoIncluded';
// Sección de testimonios oculta: los testimonios actuales eran de ejemplo (no reales).
// Restaurar con <Testimonials /> cuando haya testimonios verificados de clientes.
// import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import StickyCTA from '@/components/StickyCTA';

/**
 * Landing ligera (revisión UX 2026-09-04): la historia se cuenta UNA vez.
 * Promesa (Hero) → condiciones claras (TrustStrip) → la fuga de dinero, solo
 * el dolor (Problem) → UNA demo con los tres pilares en pestañas (DemoTabs) →
 * cómo empezar (HowItWorks, absorbe "bot en 1 clic") → precios (quiz colapsado)
 * → también incluido (Agenda · Redes · funciones destacadas · integraciones)
 * → FAQ (6 visibles) → CTA final. Un solo texto de CTA en toda la página.
 * El catálogo completo de funciones vive en /funciones.
 */
export default function Page() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <DemoTabs />
        <HowItWorks />
        <Pricing />
        <AlsoIncluded />
        {/* <Testimonials /> — oculto hasta tener testimonios reales (ver import) */}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
