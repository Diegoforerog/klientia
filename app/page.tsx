import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import ImpulsoresShowcase from '@/components/ImpulsoresShowcase';
import HowItWorks from '@/components/HowItWorks';
import ResultsBand from '@/components/ResultsBand';
import Pricing from '@/components/Pricing';
import Differentiators from '@/components/Differentiators';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

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
        <ResultsBand />
        <Pricing />
        <Differentiators />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
