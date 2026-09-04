import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Minus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.klientia.app';
const REGISTER_URL = 'https://app.klientia.app/register';

export const metadata: Metadata = {
  title: { absolute: 'Klientia vs Kommo: alternativa para vender por WhatsApp | Klientia' },
  description:
    'Comparación honesta: Klientia (vendedor con IA por tienda, contra entrega y redes) vs Kommo (CRM global por usuario). Descubre cuál conviene a tu negocio en LATAM.',
  alternates: { canonical: '/klientia-vs-kommo/' },
  openGraph: {
    type: 'article',
    url: '/klientia-vs-kommo/',
    title: 'Klientia vs Kommo: ¿cuál conviene para vender por WhatsApp?',
    description:
      'Klientia (por tienda, contra entrega, redes con IA) vs Kommo (CRM global por usuario). Comparación honesta para LATAM.',
  },
};

type Row = { label: string; klientia: string; kommo: string; kOk?: boolean; klOk?: boolean };

const ROWS: Row[] = [
  { label: 'Modelo de precio', klientia: 'Por tienda / negocio (plan fijo)', kommo: 'Por usuario al mes' },
  { label: 'Enfoque', klientia: 'Vender por WhatsApp y redes con IA', kommo: 'CRM de ventas global' },
  { label: 'Vendedor con IA que ofrece, cierra y cobra', klientia: 'Sí', kommo: 'Enfoque CRM + automatizaciones', klOk: true },
  { label: 'Contra entrega (COD) y confirmación de pedidos', klientia: 'Sí, pensado para LATAM', kommo: 'No es su enfoque', klOk: true },
  { label: 'Publicar posts + responder comentarios (IG/FB) + anuncios de Meta', klientia: 'Sí, desde el panel', kommo: 'No', klOk: true },
  { label: 'Catálogo de Shopify como vendedor', klientia: 'Sí', kommo: 'Vía integraciones', klOk: true },
  { label: 'Agenda de citas', klientia: 'Sí', kommo: 'Sí', klOk: true, kOk: true },
  { label: 'Bandeja multicanal (WhatsApp/IG/Messenger)', klientia: 'Sí', kommo: 'Sí (+ más canales)', klOk: true, kOk: true },
  { label: 'Ecosistema de integraciones', klientia: 'Enfocado (Shopify, MercadoPago, Meta, Google)', kommo: 'Muy amplio', kOk: true },
  { label: 'Idioma y soporte', klientia: 'Español, hecho para LATAM', kommo: 'Global, varios idiomas', kOk: true, klOk: true },
];

const FAQS = [
  {
    q: '¿Klientia es una buena alternativa a Kommo?',
    a: 'Depende de tu negocio. Si vendes por WhatsApp y redes en LATAM, con contra entrega y un equipo pequeño, Klientia suele encajar mejor por su modelo por tienda y su vendedor con IA que cobra. Si necesitas un CRM de ventas global y maduro con muchas integraciones, Kommo es una opción sólida.',
  },
  {
    q: '¿En qué se diferencia el precio?',
    a: 'Kommo cobra por usuario al mes (consulta kommo.com para los precios vigentes), así que el costo crece con cada persona de tu equipo. Klientia cobra un plan por tienda, lo que suele ser más predecible para comercios pequeños que atienden con pocas personas.',
  },
  {
    q: '¿Kommo sirve para vender contra entrega (COD)?',
    a: 'Kommo es un CRM de ventas; el flujo de contra entrega (confirmar el pedido en el chat, reducir devoluciones) no es su enfoque. Klientia está pensado para COD, común en LATAM.',
  },
  {
    q: '¿Puedo pasarme de Kommo a Klientia?',
    a: 'Sí. Conectas tu WhatsApp y tus redes, subes tu catálogo (o lo sincronizas desde Shopify) y activas tu vendedor con IA. Puedes empezar con la prueba gratis de 7 días sin tarjeta para compararlo con tu operación actual.',
  },
];

export default function KlientiaVsKommoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Klientia vs Kommo', item: `${SITE}/klientia-vs-kommo/` },
        ],
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="bg-surface">
        <section className="hairline-b bg-aura">
          <div className="mx-auto max-w-3xl px-5 pb-14 pt-28 sm:px-8 sm:pt-36">
            <nav aria-label="Migas" className="text-[13px] text-ink-faint">
              <Link href="/" className="hover:text-ink">
                Inicio
              </Link>
              <span className="mx-1.5">›</span>
              <span className="text-ink-mute">Klientia vs Kommo</span>
            </nav>
            <h1 className="mt-4 text-balance text-[2rem] font-bold leading-[1.1] tracking-tighter text-ink sm:text-[2.8rem]">
              Klientia vs Kommo: ¿cuál conviene para vender por WhatsApp?
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-mute">
              <strong className="text-ink">En resumen:</strong> Klientia es un vendedor con IA hecho para vender por
              WhatsApp, Instagram y Messenger en LATAM —con contra entrega, publicaciones y anuncios en redes— y cobra
              por tienda. Kommo es un CRM de ventas global y maduro que cobra por usuario. Si eres una tienda o negocio
              de dropshipping que vende por chat, Klientia suele encajar mejor; si buscas un CRM global con un equipo
              grande, Kommo es una opción sólida.
            </p>
            <div className="mt-7">
              <a href={REGISTER_URL} className="btn-primary px-6 py-3.5 text-base">
                Prueba Klientia gratis 7 días <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="text-[1.5rem] font-bold tracking-tight text-ink">Comparación rápida</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="bg-subtle">
                  <th className="p-3 text-left font-semibold text-ink">&nbsp;</th>
                  <th className="p-3 text-left font-semibold text-brand-600">Klientia</th>
                  <th className="p-3 text-left font-semibold text-ink">Kommo</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label}>
                    <td className="border-t border-line p-3 align-top font-medium text-ink">{r.label}</td>
                    <td className="border-t border-line p-3 align-top text-ink-mute">
                      <span className="mr-1.5 inline-flex align-middle text-brand-600">
                        {r.klOk ? <Check className="h-4 w-4" /> : <Minus className="h-4 w-4 text-ink-faint" />}
                      </span>
                      {r.klientia}
                    </td>
                    <td className="border-t border-line p-3 align-top text-ink-mute">
                      <span className="mr-1.5 inline-flex align-middle text-ink-faint">
                        {r.kOk ? <Check className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
                      </span>
                      {r.kommo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[12.5px] text-ink-faint">
            Datos de Kommo según su información pública (kommo.com) a septiembre de 2026. Verifica precios y funciones
            vigentes en su sitio, ya que pueden cambiar.
          </p>

          <h2 className="mt-14 text-[1.5rem] font-bold tracking-tight text-ink">Precio: por tienda vs por usuario</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink-mute">
            La diferencia de fondo es el modelo. Kommo cobra <strong className="text-ink">por usuario al mes</strong>:
            mientras más personas de tu equipo usen el CRM, más pagas. Klientia cobra un{' '}
            <strong className="text-ink">plan por tienda</strong>, lo que suele ser más predecible para un comercio
            pequeño que atiende con una o pocas personas y quiere que la IA haga el trabajo repetitivo.
          </p>

          <h2 className="mt-12 text-[1.5rem] font-bold tracking-tight text-ink">Contra entrega (COD): el hueco de LATAM</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink-mute">
            La mayoría de las herramientas globales no atienden bien el <strong className="text-ink">pago contra
            entrega</strong>, que en LATAM es clave. Klientia está pensado para eso: toma el pedido, confirma los datos
            en el chat para reducir devoluciones y, si prefieres pago anticipado, conecta MercadoPago. Es un
            diferenciador real frente a un CRM de ventas tradicional.
          </p>

          <h2 className="mt-12 text-[1.5rem] font-bold tracking-tight text-ink">Redes con IA: publicar, comentarios y anuncios</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink-mute">
            Además de atender, Klientia publica y programa tus posts (Instagram, Facebook y TikTok), responde los
            comentarios de Instagram y Facebook con reglas, y crea anuncios de Meta —todo desde el mismo panel—. Un CRM
            como Kommo se centra en el pipeline de ventas y la conversación, no en gestionar tus redes.
          </p>

          <h2 className="mt-14 text-[1.5rem] font-bold tracking-tight text-ink">Para quién es cada uno</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-5">
              <h3 className="text-[16px] font-semibold text-brand-600">Elige Klientia si…</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-ink-mute">
                <li>Vendes por WhatsApp y redes en LATAM, muchas veces contra entrega.</li>
                <li>Eres una tienda o dropshipper con equipo pequeño y quieres precio por tienda.</li>
                <li>Quieres que la IA venda, cobre y también gestione tus redes y anuncios.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5">
              <h3 className="text-[16px] font-semibold text-ink">Elige Kommo si…</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-ink-mute">
                <li>Necesitas un CRM de ventas global y maduro, con pipeline detallado.</li>
                <li>Tienes un equipo grande y muchas integraciones que conectar.</li>
                <li>Operas en varios idiomas y mercados fuera de LATAM.</li>
              </ul>
            </div>
          </div>

          <h2 className="mt-14 text-[1.5rem] font-bold tracking-tight text-ink">Preguntas frecuentes</h2>
          <div className="mt-5 divide-y divide-line border-y border-line">
            {FAQS.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="text-[15.5px] font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-mute">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-line bg-aura p-8 text-center sm:p-10">
            <p className="mx-auto max-w-lg text-[18px] font-semibold text-ink">
              Compruébalo con tu propio negocio: prueba Klientia gratis 7 días, sin tarjeta
            </p>
            <div className="mt-6">
              <a href={REGISTER_URL} className="btn-primary px-6 py-3.5 text-base">
                Empezar ahora <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
