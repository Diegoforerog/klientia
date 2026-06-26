import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: Props) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={70}>
        <h2 className="mt-3.5 text-balance text-[2rem] font-bold leading-[1.08] tracking-tighter text-ink sm:text-[2.7rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={140}>
          <p className={`mt-4 text-pretty text-[17px] leading-relaxed text-ink-mute ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
