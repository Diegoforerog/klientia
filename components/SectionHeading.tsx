import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  /**
   * Jerarquía: solo la demo y los precios llevan `lg`; el resto va en `md`.
   * Así el ojo sabe dónde parar debajo del hero.
   */
  size?: 'md' | 'lg';
};

const TITLE: Record<NonNullable<Props['size']>, string> = {
  md: 'text-[1.7rem] sm:text-[2.2rem]',
  lg: 'text-[2.2rem] sm:text-[3rem]',
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', size = 'md' }: Props) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={70}>
        <h2 className={`mt-3.5 text-balance font-bold leading-[1.08] tracking-tighter text-ink ${TITLE[size]}`}>{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={140}>
          <p
            className={`mt-4 text-pretty leading-relaxed text-ink-mute ${size === 'lg' ? 'text-[17px]' : 'text-[16px]'} ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
