import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import ImpulsoresShowcase from '@/components/ImpulsoresShowcase';
import HowItWorks from '@/components/HowItWorks';
import QuickStartBots from '@/components/QuickStartBots';
import ResultsBand from '@/components/ResultsBand';
import Pricing from '@/components/Pricing';
import Differentiators from '@/components/Differentiators';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import StickyCTA from '@/components/StickyCTA';

export default function Page() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <Features />
        <ImpulsoresShowcase />
        <HowItWorks />
        <QuickStartBots />
        <ResultsBand />
        <Pricing />
        <Differentiators />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <div aria-hidden className="h-20 lg:hidden" />
      <StickyCTA />
    </>
  );
}
