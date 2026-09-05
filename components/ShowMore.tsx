'use client';

import { useId, useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

type Props = {
  /** Texto del botón que despliega el contenido. */
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * Contenido colapsado tras un botón. El botón desaparece al abrir; lo que
 * estaba oculto queda en su sitio (sin recarga ni salto).
 */
export default function ShowMore({ label, children, className = '' }: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <>
      <div id={id} hidden={!open} className={className}>
        {children}
      </div>
      {!open && (
        <div className="mt-6 flex justify-center">
          <button type="button" aria-expanded={false} aria-controls={id} onClick={() => setOpen(true)} className="btn-secondary px-6 py-3 text-[15px]">
            {label} <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      )}
    </>
  );
}
