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

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            obs.unobserve(entry.target);
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
          }
        });
      },
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
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
