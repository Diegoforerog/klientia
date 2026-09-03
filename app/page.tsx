import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ProblemSolution from '@/components/ProblemSolution';
import Pillars from '@/components/Pillars';
import ImpulsoresShowcase from '@/components/ImpulsoresShowcase';
import InsideProduct from '@/components/InsideProduct';
import AgendaShowcase from '@/components/AgendaShowcase';
import HowItWorks from '@/components/HowItWorks';
import QuickStartBots from '@/components/QuickStartBots';
import Features from '@/components/Features';
import Integrations from '@/components/Integrations';
import Pricing from '@/components/Pricing';
// Sección de testimonios oculta: los testimonios actuales eran de ejemplo (no reales).
// Restaurar con <Testimonials /> cuando haya testimonios verificados de clientes.
// import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import StickyCTA from '@/components/StickyCTA';

/**
 * Orden de venta: promesa (Hero) → condiciones claras (TrustStrip) → la fuga de
 * dinero (Problem) → cómo la cierra, con pantallas reales (Pillars) → la IA
 * vendiendo en vivo (Impulsores) → prueba de producto (Inside) → agenda → cómo
 * empezar → arranque rápido → todo lo demás (Features, demotado) → precios → FAQ → CTA.
 * ResultsBand y Differentiators salen: repetían lo que ya dicen Pillars/Inside.
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
        <Pillars />
        <ImpulsoresShowcase />
        <InsideProduct />
        <AgendaShowcase />
        <HowItWorks />
        <QuickStartBots />
        <Features />
        <Integrations />
        <Pricing />
        {/* <Testimonials /> — oculto hasta tener testimonios reales (ver import) */}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <div aria-hidden className="h-20 lg:hidden" />
      <StickyCTA />
    </>
  );
}
