import type { ReactNode } from 'react';

export type LegalTocItem = {
  id: string;
  label: string;
};

type Props = {
  title: string;
  updated: string;
  summary?: ReactNode;
  toc?: LegalTocItem[];
  children: ReactNode;
};

/** Envoltorio visual compartido por las páginas legales (Términos, Privacidad, Reembolsos). */
export default function LegalPage({ title, updated, summary, toc, children }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
      <header className="border-b border-line pb-8">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3.5 text-balance text-[2rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.6rem]">
          {title}
        </h1>
        <p className="mt-3 text-[14px] font-medium text-ink-faint">Última actualización: {updated}</p>
        {summary && (
          <p className="mt-6 rounded-2xl border border-line bg-subtle px-5 py-4 text-[15px] leading-relaxed text-ink-soft">
            {summary}
          </p>
        )}
      </header>

      {toc && toc.length > 0 && (
        <nav aria-label="Índice de contenido" className="mt-8 rounded-2xl border border-line bg-surface p-5 shadow-sm">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ink-faint">Índice</p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-[14.5px] text-brand-600 hover:text-brand-700 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="legal-prose mt-10">{children}</div>
    </article>
  );
}
