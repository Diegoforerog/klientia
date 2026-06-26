export default function Logo({ className = '', invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-8 w-8 items-center justify-center rounded-[9px] bg-ink">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
          <path
            d="M5 6.8A2.8 2.8 0 0 1 7.8 4h8.4A2.8 2.8 0 0 1 19 6.8v5.4a2.8 2.8 0 0 1-2.8 2.8H10l-3.7 2.9A.7.7 0 0 1 5.2 17.3V6.8Z"
            fill="white"
          />
          <circle cx="12" cy="9.4" r="2.4" fill="#4f46e5" />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 h-[9px] w-[9px] rounded-full bg-brand-600 ring-[2.5px] ring-surface" />
      </span>
      <span className={`text-[17px] font-bold tracking-tight ${invert ? 'text-white' : 'text-ink'}`}>
        Conversa<span className="font-medium text-ink-mute">Commerce</span>
      </span>
    </span>
  );
}
