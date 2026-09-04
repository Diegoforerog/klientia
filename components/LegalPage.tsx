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

      {/* Espaciado del contenido legal vía utilidades Tailwind en el wrapper (no depende de globals.css).
          Arregla el "todo pegado": da ritmo vertical a h2/h3/p/listas/tablas y estiliza enlaces y tablas. */}
      <div
        className="legal-prose mt-10 text-[15.5px] leading-relaxed text-ink-mute
          [&>*:first-child]:mt-0
          [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:scroll-mt-28 [&_h2]:text-[1.4rem] [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink
          [&_h3]:mt-7 [&_h3]:mb-2 [&_h3]:text-[1.05rem] [&_h3]:font-semibold [&_h3]:text-ink
          [&_p]:mt-4
          [&_ul]:mt-4 [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
          [&_li]:pl-1
          [&_a]:font-medium [&_a]:text-brand-600 hover:[&_a]:underline
          [&_.table-wrap]:mt-5 [&_.table-wrap]:overflow-x-auto [&_.table-wrap]:rounded-2xl [&_.table-wrap]:border [&_.table-wrap]:border-line
          [&_table]:w-full [&_table]:border-collapse [&_table]:text-[14px]
          [&_th]:bg-subtle [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-ink
          [&_td]:border-t [&_td]:border-line [&_td]:p-3 [&_td]:align-top"
      >
        {children}
      </div>
    </article>
  );
}
