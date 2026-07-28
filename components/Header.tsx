'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, REGISTER_URL, LOGIN_URL } from '@/lib/content';

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
      {/* Hero es dark, resto light → nav se ADAPTA al fondo con scroll.
        Antes de scroll: texto blanco/traslúcido sobre el hero dark.
        Con scroll: fondo claro con blur + texto oscuro (light mode). */}
      <div
        data-scrolled={scrolled}
        className={`transition-colors duration-300 [&_[data-nav-link]]:transition-colors ${
          scrolled
            ? 'border-b border-line bg-surface/85 backdrop-blur-xl [&_[data-nav-link]]:text-ink-mute hover:[&_[data-nav-link]]:text-ink [&_[data-login]]:text-ink hover:[&_[data-login]]:text-brand-600'
            : 'border-b border-transparent [&_[data-nav-link]]:text-white/70 hover:[&_[data-nav-link]]:text-white [&_[data-login]]:text-white hover:[&_[data-login]]:text-neon-cyan'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a
            href="#top"
            aria-label="Klientia — inicio"
            className={scrolled ? '' : '[&_img]:brightness-0 [&_img]:invert'}
          >
            <Logo className="h-11 sm:h-12" />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-nav-link
                className="group/nav relative text-[15px] font-medium [&::after]:pointer-events-none [&::after]:absolute [&::after]:-bottom-1 [&::after]:left-1/2 [&::after]:h-[1.5px] [&::after]:w-0 [&::after]:-translate-x-1/2 [&::after]:rounded-full [&::after]:bg-brand-600 [&::after]:transition-[width] [&::after]:duration-300 [&::after]:ease-out [&::after]:content-[''] hover:[&::after]:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="doc/es/"
              data-nav-link
                className="group/nav relative text-[15px] font-medium [&::after]:pointer-events-none [&::after]:absolute [&::after]:-bottom-1 [&::after]:left-1/2 [&::after]:h-[1.5px] [&::after]:w-0 [&::after]:-translate-x-1/2 [&::after]:rounded-full [&::after]:bg-brand-600 [&::after]:transition-[width] [&::after]:duration-300 [&::after]:ease-out [&::after]:content-[''] hover:[&::after]:w-full"
            >
              Documentación
            </a>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={LOGIN_URL} data-login className="text-[15px] font-semibold transition-colors">
              Ingresar
            </a>
            <a href={REGISTER_URL} className="btn-primary">
              Prueba gratis <ArrowRight className="h-4 w-4" />
            </a>
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
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-subtle"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="doc/es/"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-subtle"
              >
                Documentación
              </a>
              <a href={REGISTER_URL} className="btn-primary mt-2 w-full" onClick={() => setOpen(false)}>
                Prueba gratis 7 días <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
