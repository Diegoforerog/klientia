'use client';

import { useEffect } from 'react';
import { CONSENT_EVENT, getConsent } from '@/lib/consent';
import { forwardTrackingToAppLinks } from '@/lib/tracking';

// IDs de pixel públicos (aparecen en el HTML de todos modos). Deben coincidir con los
// del backend (KLIENTIA_*): así GA4 comparte la sesión del clic entre www. y app.
const META = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';
const TIKTOK = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || '';
// GA4: el env puede sobreescribirlo, pero por defecto usamos el ID real (público, aparece en el HTML
// igual). Así el tag se dispara sí o sí en el build estático aunque el env no esté configurado.
const GA4 = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-KHX7VGFMMV';

type AnyWin = Record<string, any>;

let pixelsLoaded = false;

/**
 * Pixel propio de Klientia en la LANDING (medir nuestra pauta). Reenvía el clic del
 * anuncio a los enlaces de registro (siempre, no fija cookies) y carga los scripts de
 * Meta/TikTok/GA4 solo tras el consentimiento. La "Compra" la manda el servidor cuando
 * Paddle confirma; aquí solo medimos PageView y el clic hacia el registro.
 */
export function SiteTracking() {
  useEffect(() => {
    // 1) Reenviar el clic a los enlaces del app (no requiere consentimiento: sin cookies).
    forwardTrackingToAppLinks();
    // Reintento por si algún enlace se monta un poco después.
    const t = setTimeout(forwardTrackingToAppLinks, 800);

    // 2) GA4 con MODO DE CONSENTIMIENTO (v2): carga SIEMPRE con el consentimiento en
    //    'denied' por defecto → Google envía mediciones SIN cookies (datos modelados) antes
    //    de aceptar, y completas al aceptar. Así GA4 recibe datos y deja de avisar "sin datos"
    //    sin fijar cookies sin permiso. Meta/TikTok (que sí fijan cookies) siguen SOLO con granted.
    if (GA4) initGa4ConsentMode(GA4);

    const onConsent = () => {
      const c = getConsent();
      const w = window as unknown as AnyWin;
      // Actualiza la señal de consentimiento de GA4 (granted = cookies completas).
      if (GA4 && typeof w.gtag === 'function') {
        w.gtag('consent', 'update', consentSignals(c === 'granted'));
      }
      // Meta/TikTok solo tras aceptar.
      if (c === 'granted' && !pixelsLoaded) {
        pixelsLoaded = true;
        if (META) injectMeta(META);
        if (TIKTOK) injectTikTok(TIKTOK);
      }
    };
    onConsent(); // aplica el estado inicial (si ya había elección guardada)
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => {
      clearTimeout(t);
      window.removeEventListener(CONSENT_EVENT, onConsent);
    };
  }, []);

  return null;
}

function injectMeta(id: string) {
  const w = window as unknown as AnyWin;
  if (w.fbq) return;
  const n: any = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod.apply(n, args);
    else n.queue.push(args);
  };
  w.fbq = n;
  if (!w._fbq) w._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(s);
  w.fbq('init', id);
  w.fbq('track', 'PageView');
}

/** Señales de consentimiento de GA4 (Consent Mode v2). granted = cookies completas. */
function consentSignals(granted: boolean) {
  const v = granted ? 'granted' : 'denied';
  return {
    ad_storage: v,
    analytics_storage: v,
    ad_user_data: v,
    ad_personalization: v,
  } as const;
}

/**
 * Inicializa GA4 con Modo de Consentimiento v2: default 'denied' ANTES de cargar gtag.js →
 * mediciones sin cookies hasta que el usuario acepte (luego se hace `consent update`).
 * cookie_domain 'auto' → la cookie _ga (cuando haya consentimiento) se comparte con app.
 */
function initGa4ConsentMode(id: string) {
  const w = window as unknown as AnyWin;
  if (w.__ga4ConsentInit) return;
  w.__ga4ConsentInit = true;
  w.dataLayer = w.dataLayer || [];
  // gtag canónico: empuja el objeto `arguments` (no un array) — GA lo procesa así.
  w.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  // Default DENEGADO antes de cargar la librería (clave del Consent Mode).
  w.gtag('consent', 'default', { ...consentSignals(false), wait_for_update: 500 });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
  w.gtag('js', new Date());
  w.gtag('config', id, { cookie_domain: 'auto' });
}

function injectTikTok(id: string) {
  const w = window as unknown as AnyWin;
  if (w.ttq) return;
  w.TiktokAnalyticsObject = 'ttq';
  const ttq: any = (w.ttq = w.ttq || []);
  ttq.methods = [
    'page',
    'track',
    'identify',
    'instances',
    'debug',
    'on',
    'off',
    'once',
    'ready',
    'alias',
    'group',
    'enableCookie',
    'disableCookie',
    'holdConsent',
    'revokeConsent',
    'grantConsent',
  ];
  ttq.setAndDefer = function (t: any, e: any) {
    t[e] = function (...args: unknown[]) {
      t.push([e].concat(args));
    };
  };
  for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
  ttq.load = function (e: string) {
    const u = 'https://analytics.tiktok.com/i18n/pixel/events.js';
    ttq._i = ttq._i || {};
    ttq._i[e] = [];
    ttq._i[e]._u = u;
    ttq._t = ttq._t || {};
    ttq._t[e] = +new Date();
    ttq._o = ttq._o || {};
    ttq._o[e] = {};
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = `${u}?sdkid=${e}&lib=ttq`;
    const first = document.getElementsByTagName('script')[0];
    first.parentNode?.insertBefore(s, first);
  };
  ttq.load(id);
  ttq.page();
}
