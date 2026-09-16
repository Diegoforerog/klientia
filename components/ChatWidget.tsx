'use client';

import { useEffect } from 'react';

// Origen de la API que sirve el widget. Por defecto, la API de producción de Klientia.
const API_ORIGIN = process.env.NEXT_PUBLIC_WEB_CHAT_API_ORIGIN || 'https://api.klientia.app';
// Clave PÚBLICA del sitio (por org, generada en /admin). Sin ella no hay chat que mostrar:
// el widget nunca se inyecta (ni en builds/preview sin la variable configurada).
const SITE_KEY = process.env.NEXT_PUBLIC_WEB_CHAT_SITE_KEY || '';
// La barra `StickyCTA` (móvil, < lg) es fija abajo; el widget se eleva esto en píxeles
// para no chocar con ella. Mismo número que lee `widget.js` vía `data-offset-mobile`.
// Medido del CSS compilado (no es un valor a ojo): borde 1px + padding 12px + botón
// ~51px (padding 14+14 que gana `py-3.5` sobre `py-3`, línea de texto 15px×1.5) +
// separación 6px + leyenda ~18px (12px×1.5) + padding inferior 12px ≈ 100px reales
// (StickyCTA.tsx no se tocó). 80px la tapaba parcialmente; sumamos ~12px de aire.
// OJO: en iPhone con home indicator, `env(safe-area-inset-bottom)` agranda la barra
// varios px más — pendiente confirmar con Backend si `widget.js` también lo respeta.
const MOBILE_OFFSET_PX = 112;

let widgetInjected = false;

/**
 * Chat web de Klientia (mismo cerebro que WhatsApp — dogfooding, spec
 * feature-canal-web-widget.md §4). Inyecta el script del widget de forma diferida
 * (tras que el navegador esté libre) para no afectar el LCP: el chat no es parte del
 * contenido principal de la página. Mismo patrón imperativo que `SiteTracking`.
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
      s.setAttribute('data-offset-mobile', String(MOBILE_OFFSET_PX));
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
