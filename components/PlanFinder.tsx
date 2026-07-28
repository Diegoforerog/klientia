'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, MessageCircle, CalendarCheck, TrendingUp, Sparkles } from 'lucide-react';
import { PLANS, registerWithPlan, type Plan } from '@/lib/content';

/**
 * Investigador de UX: usuarios indecisos frente a 3 planes se van sin comprar.
 * 2 preguntas simples resuelven la duda y bajan la fricción al CTA.
 *
 *  - Sin citas ni ventas  → Responde
 *  - Con citas, sin ventas → Agenda
 *  - Con ventas (con o sin citas) → Vende
 *
 * Diseñador de interacciones: respuestas por chip toggleable (una a la vez, sin
 * botón "siguiente"). Al elegir la segunda, la recomendación aparece con
 * transición suave — sin recarga, sin saltos, sin obligar a hacer clic extra.
 */

type Answer = 'si' | 'no';

const PLAN_META: Record<Plan['id'], { icon: typeof MessageCircle; blurb: string }> = {
  BRONCE: {
    icon: MessageCircle,
    blurb: 'Perfecto: solo necesitas que responda por ti 24/7. Empieza por lo esencial.',
  },
  PLATA: {
    icon: CalendarCheck,
    blurb: 'Ideal: responde y agenda tus citas dentro del chat, con tu calendario sincronizado.',
  },
  ORO: {
    icon: TrendingUp,
    blurb: 'El plan completo: vende, cobra, agenda y recupera carritos por ti.',
  },
};

function recommend(citas: Answer | null, ventas: Answer | null): Plan['id'] | null {
  if (!citas || !ventas) return null;
  if (ventas === 'si') return 'ORO';
  if (citas === 'si') return 'PLATA';
  return 'BRONCE';
}

function ChoiceRow({
  label,
  value,
  onChange,
  ariaLabel,
}: {
  label: string;
  value: Answer | null;
  onChange: (v: Answer) => void;
  ariaLabel: string;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <p className="text-[15px] font-medium text-ink">{label}</p>
      <div role="radiogroup" aria-label={ariaLabel} className="flex gap-2">
        {(['si', 'no'] as const).map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(opt)}
              className={`min-w-[72px] rounded-full border px-4 py-2 text-[14px] font-semibold transition-all duration-200 ease-out ${
                active
                  ? 'border-brand-600 bg-brand-600 text-white shadow-[0_4px_14px_-6px_rgba(37,99,235,0.55)]'
                  : 'border-line2 bg-surface text-ink-soft hover:border-ink/30 hover:text-ink'
              }`}
            >
              {opt === 'si' ? 'Sí' : 'No'}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PlanFinder() {
  const [citas, setCitas] = useState<Answer | null>(null);
  const [ventas, setVentas] = useState<Answer | null>(null);

  const recId = useMemo(() => recommend(citas, ventas), [citas, ventas]);
  const plan = recId ? PLANS.find((p) => p.id === recId)! : null;
  const meta = recId ? PLAN_META[recId] : null;

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-surface p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600">
          <Sparkles className="h-5 w-5" strokeWidth={2} />
        </span>
        <div>
          <p className="text-[12.5px] font-semibold uppercase tracking-wide text-brand-600">
            ¿No sabes cuál elegir?
          </p>
          <h3 className="mt-0.5 text-[19px] font-bold tracking-tight text-ink sm:text-[21px]">
            Responde 2 preguntas y te decimos.
          </h3>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <ChoiceRow
          label="¿Manejas citas o servicios con horario?"
          value={citas}
          onChange={setCitas}
          ariaLabel="Manejas citas"
        />
        <div className="h-px w-full bg-line" />
        <ChoiceRow
          label="¿Vendes productos con catálogo?"
          value={ventas}
          onChange={setVentas}
          ariaLabel="Vendes productos"
        />
      </div>

      {/* Resultado — aparece cuando ambas respuestas están dadas. transición
        suave desde 0px de alto → auto, y opacidad. */}
      <div
        aria-live="polite"
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          plan ? 'mt-6 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          {plan && meta && (
            <div className="rounded-2xl border border-brand-200 bg-brand-50 p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                    <meta.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[12.5px] font-semibold uppercase tracking-wide text-brand-700">
                      Tu plan ideal
                    </p>
                    <p className="mt-0.5 text-[19px] font-bold tracking-tight text-ink">
                      Klientia {plan.name}
                    </p>
                    <p className="mt-1 max-w-md text-[14px] leading-relaxed text-ink-soft">{meta.blurb}</p>
                  </div>
                </div>
                <a
                  href={registerWithPlan(plan.id)}
                  className="btn-primary shrink-0 px-5 py-3 text-[15px]"
                >
                  Empezar con {plan.name} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
