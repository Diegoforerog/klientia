'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Cuenta ascendente cuando el elemento entra en vista.
 *
 * Motion-design intent: los números que "crecen" transmiten crecimiento (más ventas,
 * mayor ticket). Con solo mostrar "+23%" el usuario LEE un dato; con la cuenta
 * ascendente lo SIENTE. Curva ease-out para que arranque rápido y aterrice suave.
 * Respeta prefers-reduced-motion (muestra el valor final sin animación).
 */
export default function CountUp({
  to,
  duration = 1400,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(to);
      return;
    }

    const runAnimation = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        // ease-out cubic — arranca rápido, aterriza suave
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(to * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setValue(to);
      };
      requestAnimationFrame(tick);
    };

    // ── Chequeo inmediato: si YA está visible al montar, arrancar sin esperar
    //    al IntersectionObserver. Cubre el caso donde el usuario recarga con
    //    la sección ya en pantalla (o el nav trae la ancla). ─────────────
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      runAnimation();
      return;
    }

    // ── Fallback anti-fallo: si IntersectionObserver no existe o no dispara,
    //    usar un listener de scroll con la misma lógica. ─────────────────
    const hasIO = typeof IntersectionObserver !== 'undefined';
    if (!hasIO) {
      const onScroll = () => {
        const r = el.getBoundingClientRect();
        const h = window.innerHeight || document.documentElement.clientHeight;
        if (r.top < h * 0.9 && r.bottom > 0) {
          window.removeEventListener('scroll', onScroll);
          runAnimation();
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener('scroll', onScroll);
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            obs.unobserve(entry.target);
            runAnimation();
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' },
    );
    obs.observe(el);

    // ── Cinturón + tirantes: si por algún motivo el observer no dispara en
    //    los primeros 2s, chequear por scroll manual. En navegadores raros o
    //    en motores sin soporte real de IO, esto evita que el número quede en 0. ─
    const fallbackTimer = window.setTimeout(() => {
      if (started.current) return;
      const onScroll = () => {
        const r = el.getBoundingClientRect();
        const h = window.innerHeight || document.documentElement.clientHeight;
        if (r.top < h * 0.9 && r.bottom > 0) {
          window.removeEventListener('scroll', onScroll);
          obs.disconnect();
          runAnimation();
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }, 2000);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, [to, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
