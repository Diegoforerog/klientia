import { ArrowRight } from 'lucide-react';
import { REGISTER_URL } from '@/lib/content';
import { CTA_LABEL } from '@/lib/cta';

type Props = {
  href?: string;
  /** primary = azul de marca · ink = tinta · white = sobre fondos oscuros */
  variant?: 'primary' | 'ink' | 'white';
  size?: 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

const VARIANT: Record<NonNullable<Props['variant']>, string> = {
  primary: 'btn-primary',
  ink: 'btn-ink',
  white:
    'inline-flex items-center justify-center gap-2 rounded-full bg-white font-semibold text-ink transition-all duration-200 hover:-translate-y-px hover:bg-white/90',
};

const SIZE: Record<NonNullable<Props['size']>, string> = {
  md: 'px-5 py-3 text-[15px]',
  lg: 'px-7 py-4 text-[16px]',
};

/** El único botón de acción de la landing: mismo texto en todas partes. */
export default function CtaButton({ href = REGISTER_URL, variant = 'primary', size = 'md', className = '', onClick }: Props) {
  return (
    <a href={href} onClick={onClick} className={`${VARIANT[variant]} ${SIZE[size]} whitespace-nowrap ${className}`}>
      {CTA_LABEL} <ArrowRight className="h-4 w-4" />
    </a>
  );
}
