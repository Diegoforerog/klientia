import Link from 'next/link';
import Logo from './Logo';
import { NAV_LINKS, REGISTER_URL, LOGIN_URL, COUNTRIES } from '@/lib/content';

const COLS = [
  { title: 'Producto', links: NAV_LINKS },
  {
    title: 'Recursos',
    links: [
      { label: 'Blog', href: '/blog/' },
      { label: 'Documentación', href: 'doc/es/' },
      { label: 'Empezar gratis', href: REGISTER_URL },
      { label: 'Iniciar sesión', href: LOGIN_URL },
      { label: 'Soporte', href: 'mailto:info@klientia.app' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Aviso de Privacidad', href: '/legal/aviso-de-privacidad/' },
      { label: 'Términos de Servicio', href: '/legal/terminos-de-servicio/' },
      { label: 'Política de Reembolsos', href: '/legal/politica-de-reembolsos/' },
      { label: 'Eliminación de datos', href: '/legal/eliminacion-de-datos/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="hairline-t bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo className="h-11" />
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink-mute">
              El vendedor con IA para tu WhatsApp. Atiende, vende, cobra y recupera carritos por ti. Hecho para LATAM.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {COUNTRIES.map((c) => (
                <span key={c.name} title={c.name} className="text-[17px] leading-none">
                  {c.flag}
                </span>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-ink-faint">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {/* Rutas internas de Next (empiezan con '/') → <Link>: hornea el basePath
                        correcto en cada build (raíz en la VPS www.klientia.app, /klientia en
                        GitHub Pages). Enlaces externos o relativos (doc/es/) siguen como <a>. */}
                    {l.href.startsWith('/') ? (
                      <Link href={l.href} className="text-[14.5px] text-ink-mute transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="text-[14.5px] text-ink-mute transition-colors hover:text-ink">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 sm:flex-row">
          <p className="text-[13.5px] text-ink-faint">
            © 2026 Klientia. Un producto de Nextgen SAS ·{' '}
            <a href="mailto:info@klientia.app" className="transition-colors hover:text-ink">
              info@klientia.app
            </a>
          </p>
          <p className="text-[13.5px] text-ink-faint">Hecho para emprendedores de LATAM</p>
        </div>
      </div>
    </footer>
  );
}
