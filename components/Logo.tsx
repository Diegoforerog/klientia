// Logo de marca Klientia = isotipo (burbuja + doble check) + wordmark "Klientia".
// Identidad: el wordmark es Bricolage Bold (700) con la "K" en azul de marca; el resto
// hereda el color del contexto (ink en fondo claro, blanco si el contenedor pone text-white),
// así el logo funciona en fondo claro y oscuro sin cambiar de asset.
export default function Logo({ className = 'h-9' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="Klientia" role="img">
      <svg
        viewBox="0 0 256 256"
        className="h-full w-auto shrink-0 text-brand-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="28.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18.25 18.25H193.5A44 44 0 0 1 237.5 62.25V142.5A44 44 0 0 1 193.5 186.5H84L32.75 237.75V186.5" />
        <path d="M69.25 105.75L98.25 135.25L157 62" />
      </svg>
      <span className="font-heading text-[1.55em] font-bold leading-none tracking-tight">
        <span className="text-brand-600">K</span>lientia
      </span>
    </span>
  );
}
