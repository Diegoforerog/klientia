import { PLANS, FAQS, REGISTER_URL } from '@/lib/content';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.klientia.app';

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE}#organization`,
        name: 'Klientia',
        url: SITE,
        description:
          'SaaS de ventas y atención con inteligencia artificial para negocios de LATAM: la IA atiende, vende, cobra y recupera carritos por WhatsApp, Instagram y Messenger; además publica posts en Instagram, Facebook y TikTok, responde comentarios de Instagram y Facebook y gestiona anuncios de Meta.',
        areaServed: ['CO', 'MX', 'CL', 'PE', 'EC', 'AR'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}#website`,
        url: SITE,
        name: 'Klientia',
        inLanguage: 'es',
        publisher: { '@id': `${SITE}#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Klientia',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, WhatsApp, Instagram, Facebook, Messenger',
        inLanguage: 'es',
        description:
          'Vendedor con IA para WhatsApp, Instagram y Messenger: atiende al instante, vende con impulsores (upsell, cross-sell, downsell), cobra (MercadoPago, Stripe, contra entrega) y recupera carritos automáticamente. Además publica y programa posts en Instagram, Facebook y TikTok, responde comentarios de Instagram y Facebook y crea anuncios de Meta. Incluye CRM y automatizaciones.',
        url: SITE,
        featureList: [
          'Vendedor con IA en WhatsApp, Instagram y Messenger',
          'Bandeja unificada de mensajes directos multicanal',
          'Impulsores de venta (upsell, cross-sell, downsell)',
          'Recuperación de carritos y recompra automática',
          'Publicar y programar posts en Instagram, Facebook y TikTok',
          'Responder comentarios de Instagram y Facebook con reglas por palabra clave',
          'Anuncios de Meta (Facebook e Instagram) desde el panel',
          'CRM conversacional y automatizaciones',
          'Cobros con MercadoPago, Stripe y contra entrega (COD)',
        ],
        offers: PLANS.map((p) => ({
          '@type': 'Offer',
          name: `Plan ${p.name}`,
          price: p.priceLaunch,
          priceCurrency: 'USD',
          url: `${REGISTER_URL}?plan=${p.id}`,
          category: 'subscription',
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
