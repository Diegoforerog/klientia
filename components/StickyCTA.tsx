'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { REGISTER_URL } from '@/lib/content';

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-[400ms] ease-drawer lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div
        className="border-t border-line bg-surface/95 px-4 py-3 backdrop-blur-xl"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <a href={REGISTER_URL} className="btn-primary w-full py-3.5 text-[15px]">
          Empieza gratis 7 días <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-1.5 text-center text-[12px] text-ink-faint">Sin tarjeta · Cancela cuando quieras</p>
      </div>
    </div>
  );
}
