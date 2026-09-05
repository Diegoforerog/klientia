'use client';

import { useId, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import PlanFinder from './PlanFinder';

/**
 * El quiz "¿No sabes cuál elegir?" colapsado en un botón: no suma altura
 * antes del precio; el indeciso lo abre con un clic.
 */
export default function PlanFinderToggle() {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="btn-secondary px-6 py-3 text-[15px]"
        >
          <Sparkles className="h-4 w-4 text-brand-600" strokeWidth={2} />
          ¿No sabes cuál elegir?
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div id={id} hidden={!open} className="mt-6">
        {open && <PlanFinder />}
      </div>
    </div>
  );
}
