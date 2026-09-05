'use client';

import { useEffect, useState } from 'react';
import CtaButton from './CtaButton';

/**
 * Barra inferior fija SOLO en móvil con el CTA único. Aparece cuando el hero
 * (#top) sale de pantalla y se esconde cuando el pie entra en pantalla, para
 * no taparlo.
 */
export default function StickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    const footer = document.querySelector('footer');
    const observers: IntersectionObserver[] = [];

    if (hero) {
      const obs = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0 });
      obs.observe(hero);
      observers.push(obs);
    } else {
      const onScroll = () => setPastHero(window.scrollY > 700);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
    if (footer) {
      const obs = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0 });
      obs.observe(footer);
      observers.push(obs);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const show = pastHero && !footerVisible;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-[400ms] ease-drawer lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div
        className="border-t border-line bg-surface/95 px-4 py-3 backdrop-blur-xl"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <CtaButton className="w-full py-3.5 text-[15px]" />
        <p className="mt-1.5 text-center text-[12px] text-ink-faint">Sin tarjeta · Cancela cuando quieras</p>
      </div>
    </div>
  );
}
