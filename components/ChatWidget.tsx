'use client';

import { useEffect } from 'react';
import { STICKY_CTA_CHAT_OFFSET_PX } from '@/lib/chat-offset';

// Origen de la API que sirve el widget. Por defecto, la API de producción de Klientia.
const API_ORIGIN = process.env.NEXT_PUBLIC_WEB_CHAT_API_ORIGIN || 'https://api.klientia.app';
// Clave PÚBLICA del sitio (por org, generada en /admin). Sin ella no hay chat que mostrar:
// el widget nunca se inyecta (ni en builds/preview sin la variable configurada).
const SITE_KEY = process.env.NEXT_PUBLIC_WEB_CHAT_SITE_KEY || '';

let widgetInjected = false;

/**
 * Chat web de Klientia (mismo cerebro que WhatsApp — dogfooding, spec
 * feature-canal-web-widget.md §4). Inyecta el script del widget de forma diferida
 * (tras que el navegador esté libre) para no afectar el LCP: el chat no es parte del
 * contenido principal de la página. Mismo patrón imperativo que `SiteTracking`.
 *
 * Offset móvil (hallazgo UX A1): `data-offset-mobile` es solo el RESPALDO estático que
 * lee `widget.js` cuando no encuentra la variable CSS `--klientia-chat-offset` en
 * `documentElement`. La fuente viva es esa variable: `StickyCTA` y `CookieConsent` la
 * fijan/liberan en caliente vía `lib/chat-offset.ts` (suman sus aportes mientras estén
 * realmente visibles), así la burbuja solo sube cuando de verdad hay algo fijo que
 * taparía — no siempre. `STICKY_CTA_CHAT_OFFSET_PX` (112, medido del CSS compilado de
 * `StickyCTA`, no a ojo) es el mismo número que usa `StickyCTA.tsx` para su aporte.
 */
export function ChatWidget() {
  useEffect(() => {
    if (!SITE_KEY) return;
    if (widgetInjected) return;
    if (document.querySelector(`script[src="${API_ORIGIN}/web-chat/widget.js"]`)) {
      widgetInjected = true;
      return;
    }

    const inject = () => {
      if (widgetInjected) return;
      widgetInjected = true;
      const s = document.createElement('script');
      s.src = `${API_ORIGIN}/web-chat/widget.js`;
      s.defer = true;
      s.setAttribute('data-site-key', SITE_KEY);
      s.setAttribute('data-offset-mobile', String(STICKY_CTA_CHAT_OFFSET_PX));
      document.head.appendChild(s);
    };

    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(inject, { timeout: 2500 });
    } else {
      setTimeout(inject, 2500);
    }
  }, []);

  return null;
}
