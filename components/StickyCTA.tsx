'use client';

import { useEffect, useRef, useState } from 'react';
import CtaButton from './CtaButton';
import { STICKY_CTA_CHAT_OFFSET_PX, STICKY_CTA_OFFSET_ID, setChatOffsetContributor } from '@/lib/chat-offset';

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
  const barRef = useRef<HTMLDivElement>(null);

  // Barra oculta = fuera del orden de tabulación y del árbol accesible.
  // `inert` se fija como propiedad (React 18 no lo serializa como atributo).
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    if (show) el.removeAttribute('inert');
    else el.setAttribute('inert', '');
  }, [show]);

  // ¿La barra puede estar en pantalla ahora mismo? Es `lg:hidden` (CSS, sin tocar): en
  // escritorio `show` igual puede ser true por el scroll aunque la barra sea display:none.
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobileViewport(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Le "debe" espacio al chat SOLO mientras está de verdad visible: `show` Y viewport
  // móvil (hallazgo UX A1: antes subía 112px siempre, incluso oculta o en escritorio,
  // donde la barra ni se ve). Esta barra solo vive en `app/page.tsx` → al navegar a otra
  // ruta se desmonta; el cleanup libera el cupo para que no quede huérfano en otras rutas.
  useEffect(() => {
    const active = show && isMobileViewport;
    setChatOffsetContributor(STICKY_CTA_OFFSET_ID, active ? STICKY_CTA_CHAT_OFFSET_PX : null);
    return () => setChatOffsetContributor(STICKY_CTA_OFFSET_ID, null);
  }, [show, isMobileViewport]);

  return (
    <div
      ref={barRef}
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-[400ms] ease-drawer lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div
        className="border-t border-line bg-surface/95 px-4 py-3 backdrop-blur-xl"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <CtaButton className="w-full py-3.5 text-[15px]" tabIndex={show ? 0 : -1} />
        <p className="mt-1.5 text-center text-[12px] text-ink-mute">Sin tarjeta · Cancela cuando quieras</p>
      </div>
    </div>
  );
}
