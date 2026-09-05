'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import CtaButton from './CtaButton';
import Logo from './Logo';
import { NAV_LINKS, LOGIN_URL } from '@/lib/content';

/**
 * Enlace del menú: en la home las anclas (#precios…) son nativas; en cualquier
 * subpágina (/funciones/, /soluciones/…) se prefijan con '/' vía <Link> (que
 * hornea el basePath) para que lleven a la sección de la home.
 */
type NavLinkProps = { href: string; onClick?: () => void; className: string; children: React.ReactNode; 'aria-label'?: string };

function NavLink({ href, onClick, className, children, ...rest }: NavLinkProps) {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  if (href.startsWith('#') && !isHome) {
    return (
      <Link href={`/${href}`} onClick={onClick} className={className} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          scrolled ? 'border-b border-line bg-surface/80 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <NavLink href="#top" className="inline-flex" aria-label="Klientia — inicio">
            <Logo className="h-11 sm:h-12" />
          </NavLink>

          <div className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="group/nav relative whitespace-nowrap text-[14px] font-medium text-ink-mute transition-colors hover:text-ink [&::after]:pointer-events-none [&::after]:absolute [&::after]:-bottom-1 [&::after]:left-1/2 [&::after]:h-[1.5px] [&::after]:w-0 [&::after]:-translate-x-1/2 [&::after]:rounded-full [&::after]:bg-brand-600 [&::after]:transition-[width] [&::after]:duration-300 [&::after]:ease-out [&::after]:content-[''] hover:[&::after]:w-full"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="doc/es/"
              className="group/nav relative whitespace-nowrap text-[14px] font-medium text-ink-mute transition-colors hover:text-ink [&::after]:pointer-events-none [&::after]:absolute [&::after]:-bottom-1 [&::after]:left-1/2 [&::after]:h-[1.5px] [&::after]:w-0 [&::after]:-translate-x-1/2 [&::after]:rounded-full [&::after]:bg-brand-600 [&::after]:transition-[width] [&::after]:duration-300 [&::after]:ease-out [&::after]:content-[''] hover:[&::after]:w-full"
            >
              Documentación
            </a>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={LOGIN_URL} className="whitespace-nowrap text-[14px] font-semibold text-ink transition-colors hover:text-brand-600">
              Ingresar
            </a>
            <CtaButton />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line2 bg-surface text-ink lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-line bg-surface px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-subtle"
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="doc/es/"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-subtle"
              >
                Documentación
              </a>
              <CtaButton className="mt-2 w-full" onClick={() => setOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
