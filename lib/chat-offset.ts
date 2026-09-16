// Offset dinámico del chat web (hallazgo UX A1: la burbuja tapaba el banner de cookies, y
// en móvil subía siempre aunque `StickyCTA` estuviera oculta). El widget (`widget.js`,
// fuera de este repo) lee la variable CSS `--klientia-chat-offset` en `documentElement`;
// si no existe, cae al respaldo estático `data-offset-mobile` (ver `ChatWidget.tsx`).
//
// Varios elementos fijos pueden estar visibles a la vez (p. ej. `StickyCTA` + el banner de
// cookies, en la primera visita en móvil): sus aportes se SUMAN para que la burbuja se
// corra lo suficiente para no tapar a ninguno. `StickyCTA`/`CookieConsent` registran (o
// quitan) su aporte cuando cambian de visible↔oculto; sin aportes activos, se quita la
// variable del todo y el widget vuelve a su posición por defecto.

const CSS_VAR = '--klientia-chat-offset';

/** Altura fija que le "debe" `StickyCTA` al offset mientras está visible (móvil, < 1024px). */
export const STICKY_CTA_CHAT_OFFSET_PX = 112;
export const STICKY_CTA_OFFSET_ID = 'sticky-cta';
export const COOKIE_CONSENT_OFFSET_ID = 'cookie-consent';

const contributors = new Map<string, number>();

/**
 * Registra cuánto le debe `id` al offset del chat (o lo quita, con `px` nulo/≤0).
 * Recalcula `--klientia-chat-offset` como la suma de los aportes activos; sin ninguno,
 * quita la variable (no un `0px` — así el widget usa su propio valor por defecto).
 */
export function setChatOffsetContributor(id: string, px: number | null): void {
  if (px && px > 0) {
    contributors.set(id, px);
  } else {
    contributors.delete(id);
  }
  if (typeof document === 'undefined') return;
  let total = 0;
  contributors.forEach((v) => {
    total += v;
  });
  const root = document.documentElement;
  if (total > 0) {
    root.style.setProperty(CSS_VAR, `${Math.round(total)}px`);
  } else {
    root.style.removeProperty(CSS_VAR);
  }
}
