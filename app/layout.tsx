import type { Metadata, Viewport } from 'next';
import { DM_Sans, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SiteTracking } from '@/components/SiteTracking';
import { CookieConsent } from '@/components/CookieConsent';

// Identidad Klientia (pairing oficial): DM Sans para el CUERPO (legible en textos largos),
// Bricolage Grotesque para TITULARES/logo, JetBrains Mono para transaccional.
const sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

// Display: Bricolage Grotesque — titulares, logo y etiquetas. Pesos 600/700/800.
const heading = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

// Utilidad transaccional: JetBrains Mono — recibos, precios, códigos y sellos de pago.
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.klientia.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Klientia — Deja de perder ventas en WhatsApp: tu vendedor con IA 24/7',
    template: '%s · Klientia',
  },
  description:
    'El vendedor con IA que responde en segundos, ofrece la versión mejor, cierra y cobra en tu WhatsApp — 24/7, incluso contra entrega. También Instagram y Messenger. Sin código, para LATAM. Prueba gratis 7 días, sin tarjeta.',
  applicationName: 'Klientia',
  keywords: [
    'ventas por WhatsApp con IA',
    'agente de ventas IA WhatsApp',
    'chatbot de ventas WhatsApp',
    'gestionar redes sociales con IA',
    'responder comentarios de Instagram automático',
    'bandeja unificada WhatsApp Instagram Messenger',
    'publicar posts Instagram Facebook TikTok',
    'anuncios de Meta desde el panel',
    'recuperación de carritos',
    'CRM WhatsApp',
    'dropshipping LATAM',
    'contra entrega COD',
    'WhatsApp Business IA',
  ],
  authors: [{ name: 'Klientia' }],
  creator: 'Klientia',
  alternates: { canonical: SITE },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITE,
    siteName: 'Klientia',
    title: 'Deja de perder ventas en WhatsApp — Klientia, tu vendedor con IA 24/7',
    description:
      'Responde en segundos, ofrece la versión mejor, cierra y cobra por ti — incluso contra entrega. WhatsApp, Instagram y Messenger en un panel. Para LATAM. 7 días gratis, sin tarjeta.',
    images: [
      { url: '/og-klientia.png', width: 1200, height: 630, alt: 'Klientia — tu vendedor con IA para WhatsApp' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deja de perder ventas en WhatsApp — Klientia',
    description: 'El vendedor con IA que responde, cierra y cobra en tu WhatsApp 24/7, incluso contra entrega. 7 días gratis, sin tarjeta.',
    images: ['/og-klientia.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // Verificación de Google Search Control: el código lo pone Diego vía env (secret del repo).
  // Vacío/ausente = no renderiza el <meta google-site-verification> → seguro, sin código real en el repo.
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined },
};

export const viewport: Viewport = {
  themeColor: '#4375E5',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${heading.variable} ${mono.variable}`}>
      <body>
        {children}
        {/* Pixel propio de Klientia (medir nuestra pauta) + consentimiento de cookies. */}
        <SiteTracking />
        <CookieConsent />
      </body>
    </html>
  );
}
