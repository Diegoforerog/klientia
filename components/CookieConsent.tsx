'use client';

import { useEffect, useRef, useState } from 'react';
import { getConsent, setConsent } from '@/lib/consent';
import { COOKIE_CONSENT_OFFSET_ID, setChatOffsetContributor } from '@/lib/chat-offset';

// Solo tiene sentido pedir consentimiento si hay algún pixel configurado.
const HAS_PIXELS = !!(
  process.env.NEXT_PUBLIC_META_PIXEL_ID ||
  process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ||
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID
);

// Aire entre el banner y la burbuja del chat cuando este le suma su altura al offset.
const OFFSET_GAP_PX = 12;

/**
 * Banner de consentimiento de cookies de marketing. Opt-in explícito: los pixeles solo
 * cargan si el usuario acepta. Se muestra una vez; la elección queda guardada.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (HAS_PIXELS && getConsent() === null) setVisible(true);
  }, []);

  // Por debajo de 640px (`sm`) el banner va "a lo ancho" (mismo umbral que su propio
  // `sm:left-4`): de ahí para arriba ya vive abajo-izquierda, lejos de la burbuja
  // (abajo-derecha), así que no hace falta empujarla (hallazgo QA #7 — antes sumaba su
  // altura siempre, incluso en ≥640px donde no hay solape real). Mismo patrón que
  // `StickyCTA` (matchMedia + `change`).
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobileViewport(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Mientras está visible Y en viewport móvil, le suma al chat su altura REAL (no una
  // constante: cambia con el contenido/ancho) + 12px de aire (hallazgo UX A1: la burbuja
  // lo tapaba). Al ocultarse, pasar a escritorio o desmontar, libera el espacio —
  // `ResizeObserver`/`resize` porque la altura puede cambiar sin cruzar el umbral móvil
  // (p. ej. al rotar el teléfono).
  useEffect(() => {
    if (!visible || !isMobileViewport) {
      setChatOffsetContributor(COOKIE_CONSENT_OFFSET_ID, null);
      return;
    }
    const el = bannerRef.current;
    if (!el) return;

    const measure = () => {
      setChatOffsetContributor(COOKIE_CONSENT_OFFSET_ID, el.getBoundingClientRect().height + OFFSET_GAP_PX);
    };
    measure();

    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    observer?.observe(el);
    window.addEventListener('resize', measure);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', measure);
      setChatOffsetContributor(COOKIE_CONSENT_OFFSET_ID, null);
    };
  }, [visible, isMobileViewport]);

  if (!visible) return null;

  function choose(choice: 'granted' | 'denied') {
    setConsent(choice);
    setVisible(false);
  }

  return (
    <div
      ref={bannerRef}
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-brand-200 bg-white p-4 shadow-lg sm:inset-x-auto sm:left-4 sm:right-auto"
    >
      <p className="text-sm text-ink-mute">
        Usamos cookies para medir de dónde llegan nuestros visitantes y mejorar la
        publicidad. Puedes aceptarlas o seguir sin ellas.
      </p>
      <div className="mt-3 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => choose('denied')}
          className="rounded-xl border border-brand-200 px-3 py-1.5 text-sm font-medium text-ink-mute transition hover:bg-brand-50"
        >
          Seguir sin cookies
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className="rounded-xl bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-700"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
