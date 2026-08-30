import type { Metadata, Viewport } from 'next';
import { Nunito_Sans, Rubik } from 'next/font/google';
import './globals.css';
import { SiteTracking } from '@/components/SiteTracking';
import { CookieConsent } from '@/components/CookieConsent';

const sans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const heading = Rubik({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://conversa.nextgencol.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Klientia — Tu vendedor con IA en WhatsApp, 24/7',
    template: '%s · Klientia',
  },
  description:
    'Tu vendedor con IA en WhatsApp, Instagram y Messenger: atiende, vende, cobra y recupera carritos 24/7. Publica en redes, responde comentarios y crea anuncios de Meta desde un panel. Sin código, para LATAM y contra entrega. Prueba gratis 7 días.',
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
    title: 'Tu vendedor con IA en WhatsApp, Instagram y Messenger',
    description:
      'La IA atiende, vende, cobra y recupera carritos en tus chats. Publica en redes, responde comentarios y pauta en Meta desde un panel. Para LATAM. Prueba gratis 7 días.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klientia — Tu vendedor con IA para WhatsApp y redes',
    description: 'La IA que atiende, vende y cobra en WhatsApp, Instagram y Messenger. Publica, responde comentarios y pauta desde un panel. 7 días gratis, sin tarjeta.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${heading.variable}`}>
      <body>
        {children}
        {/* Pixel propio de Klientia (medir nuestra pauta) + consentimiento de cookies. */}
        <SiteTracking />
        <CookieConsent />
      </body>
    </html>
  );
}
