import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-surface pt-28 sm:pt-36">{children}</main>
      <Footer />
    </>
  );
}
