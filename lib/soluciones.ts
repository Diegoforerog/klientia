// Páginas SEO de feature (programáticas). Copy honesto — sin cifras ni testimonios inventados.
// Matiz real: en TikTok se PUBLICA contenido, pero NO hay respuesta automática de comentarios.
// Fuente del copy: docs/marca/seo-feature-pages.md (SaasEcommerce).

export const REGISTER_URL = 'https://app.klientia.app/register';

export type Solucion = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  sections: { h2: string; body: string }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  ctaText: string;
};

export const SOLUCIONES: Solucion[] = [
  {
    slug: 'redes-sociales-con-ia',
    metaTitle: 'Gestiona tus redes sociales con IA | Klientia',
    metaDescription:
      'Publica, responde comentarios y crea anuncios de Meta desde un solo panel. Gestiona tus redes sociales con IA y no pierdas ni una venta. Prueba gratis 7 días.',
    h1: 'Gestiona tus redes sociales con IA, sin perder ni una conversación',
    subtitle:
      'Un solo panel para publicar contenido, responder comentarios y mensajes, y lanzar anuncios de Meta — para que tu tienda no dependa de estar pegado al celular todo el día.',
    sections: [
      {
        h2: 'Todo tu negocio en redes, en un solo lugar',
        body: 'Klientia junta en un panel lo que hoy manejas repartido entre varias apps: publicar en tus redes, responder comentarios de Instagram y Facebook, atender mensajes de WhatsApp, Instagram y Messenger y crear anuncios de Meta. La idea es simple: menos pestañas abiertas, menos mensajes perdidos.',
      },
      {
        h2: 'Publica contenido sin salir del panel',
        body: 'Programa y publica posts para tus redes conectadas directamente desde Klientia. Así mantienes tu perfil activo sin tener que entrar app por app cada vez que quieres compartir un producto o una promoción.',
      },
      {
        h2: 'La IA responde comentarios de Instagram y Facebook',
        body: 'Cuando alguien comenta en tus publicaciones de Instagram o Facebook, la IA puede responder con la información de tu negocio (precios, disponibilidad, cómo comprar), guiando al comprador hacia el chat cuando hace falta. Esta función de comentarios aplica a Instagram y Facebook; en TikTok puedes publicar contenido, pero no responder comentarios de forma automática, porque su plataforma no lo habilita.',
      },
      {
        h2: 'Anuncios de Meta desde el mismo panel',
        body: 'Puedes crear campañas de anuncios para Facebook e Instagram sin salir de Klientia, conectando el mismo catálogo y la misma cuenta que ya usas para vender. Todo queda centralizado: contenido, conversación y anuncio.',
      },
      {
        h2: 'Para quién es',
        body: 'Pensado para comerciantes y tiendas que venden por WhatsApp y redes sociales (incluye negocios de dropshipping o con logística contra entrega) y que hoy pierden tiempo saltando entre el gestor de anuncios, Instagram, Facebook y WhatsApp Business por separado.',
      },
    ],
    steps: [
      { title: 'Conecta tus cuentas', body: 'Vinculas tu WhatsApp Business, Instagram, Facebook (y TikTok si quieres publicar) a Klientia.' },
      { title: 'Configura tu IA y tu contenido', body: 'Defines cómo responde tu asistente y qué vas a publicar.' },
      { title: 'Klientia atiende y gestiona', body: 'La IA responde comentarios y mensajes; tú programas publicaciones y anuncios desde el mismo panel.' },
    ],
    faqs: [
      { q: '¿Klientia reemplaza mi cuenta de Instagram o Facebook?', a: 'No. Klientia se conecta a tus cuentas existentes; no crea cuentas nuevas ni te hace mover tu comunidad a otro lugar.' },
      { q: '¿Puedo publicar en TikTok también?', a: 'Sí, puedes publicar contenido en TikTok, pero TikTok no tiene función de respuesta automática de comentarios porque esa plataforma no lo permite.' },
      { q: '¿Necesito tarjeta para probarlo?', a: 'No. La prueba gratis de 7 días no pide tarjeta.' },
      { q: '¿Sirve si ya uso WhatsApp Business normal?', a: 'Sí, Klientia conecta con tu número de WhatsApp Business y suma IA, redes y anuncios en el mismo panel.' },
    ],
    ctaText: 'Prueba Klientia gratis por 7 días, sin tarjeta',
  },
  {
    slug: 'responder-comentarios-instagram-facebook',
    metaTitle: 'Responder comentarios de Instagram y Facebook con IA',
    metaDescription:
      'La IA de Klientia responde automático los comentarios de tus publicaciones en Instagram y Facebook, y lleva al comprador al chat. Prueba gratis 7 días.',
    h1: 'Responde los comentarios de Instagram y Facebook automático, con IA',
    subtitle:
      'No dejes comentarios sin contestar. La IA de Klientia responde con la información de tu negocio y ayuda a mover la conversación hacia la venta.',
    sections: [
      {
        h2: 'Qué hace esta función',
        body: 'Cuando alguien comenta en una publicación de tu Instagram o Facebook (por ejemplo "¿cuánto cuesta?" o "¿tienen en talla M?"), la IA de Klientia puede responder ese comentario usando la información que configuraste de tu negocio: precios, disponibilidad, formas de pago, cómo comprar.',
      },
      {
        h2: 'Cómo funciona',
        body: 'La IA lee el comentario, lo entiende en el contexto de tu catálogo y tu negocio, y responde directamente en el hilo del post. Si la conversación necesita más detalle (por ejemplo, coordinar una compra), puede invitar a la persona a seguir por mensaje directo, donde Klientia también atiende.',
      },
      {
        h2: 'Solo Instagram y Facebook (no TikTok)',
        body: 'Esta función trabaja en Instagram y Facebook porque son las plataformas donde Meta permite gestionar comentarios de forma automática con IA. TikTok no ofrece esta capacidad de respuesta a comentarios, así que en TikTok Klientia se usa solo para publicar contenido, no para responder comentarios.',
      },
      {
        h2: 'Para quién es',
        body: 'Para negocios que reciben comentarios frecuentes en sus publicaciones (preguntas de precio, tallas, disponibilidad) y hoy los responden a mano, con el riesgo de dejar clientes esperando o perder la venta por demora.',
      },
    ],
    steps: [
      { title: 'Conecta tu Instagram y/o Facebook', body: 'Vinculas tus cuentas a Klientia.' },
      { title: 'Configura tu IA', body: 'Cargas la información de tu negocio (catálogo, precios, políticas).' },
      { title: 'La IA responde los comentarios', body: 'Contesta las publicaciones automáticamente, con la opción de escalar a un humano cuando haga falta.' },
    ],
    faqs: [
      { q: '¿La IA responde cualquier comentario?', a: 'Responde según la configuración que tú definas; los comentarios fuera de ese alcance pueden pasar a revisión de tu equipo.' },
      { q: '¿Funciona en TikTok?', a: 'No. TikTok no tiene función de comentarios automatizables por IA en este momento; en TikTok Klientia solo publica contenido.' },
      { q: '¿Puedo revisar o editar lo que responde la IA?', a: 'Sí, puedes ajustar el tono y el contenido de las respuestas desde la configuración de tu asistente.' },
      { q: '¿Qué pasa si un comentario es una queja?', a: 'Se puede configurar para que esos casos se deriven a un humano de tu equipo en vez de responderse automático.' },
    ],
    ctaText: 'Empieza a responder comentarios con IA, gratis por 7 días',
  },
  {
    slug: 'crear-anuncios-meta-facebook-instagram',
    metaTitle: 'Crear anuncios de Meta: Facebook e Instagram | Klientia',
    metaDescription:
      'Crea y lanza campañas de anuncios de Facebook e Instagram desde el mismo panel donde atiendes tus ventas por WhatsApp. Prueba Klientia gratis 7 días.',
    h1: 'Crea anuncios de Meta (Facebook e Instagram) sin salir de tu panel de ventas',
    subtitle:
      'Lanza campañas para Facebook e Instagram usando el mismo catálogo y la misma cuenta con la que ya vendes por WhatsApp.',
    sections: [
      {
        h2: 'Qué puedes hacer',
        body: 'Desde Klientia puedes crear campañas de anuncios de Meta para Facebook e Instagram, sin tener que entrar por separado al Administrador de anuncios. Todo queda conectado con tu catálogo y tu flujo de conversación por WhatsApp e Instagram.',
      },
      {
        h2: 'Cómo funciona',
        body: 'Configuras la campaña (objetivo, presupuesto, creativo) desde el panel de Klientia, conectada a tu cuenta de Meta. El tráfico que genera el anuncio puede llegar directo a la conversación en WhatsApp o Instagram, donde la IA sigue atendiendo al comprador.',
      },
      {
        h2: 'Todo conectado, sin duplicar trabajo',
        body: 'La ventaja de crear el anuncio desde el mismo panel es que no tienes que exportar catálogo ni copiar datos entre plataformas: usas la misma información de producto que ya tienes cargada en Klientia.',
      },
      {
        h2: 'Para quién es',
        body: 'Para comerciantes que hoy pautan en Meta desde el Administrador de anuncios por separado de su atención por WhatsApp, y quieren tener campaña y conversación en un solo lugar.',
      },
    ],
    steps: [
      { title: 'Conecta tu cuenta de anuncios de Meta', body: 'Vinculas tu cuenta a Klientia.' },
      { title: 'Configura tu campaña', body: 'Defines objetivo, presupuesto, creativo y catálogo.' },
      { title: 'Lanza y da seguimiento', body: 'El tráfico llega a tu conversación de WhatsApp o Instagram, donde la IA atiende.' },
    ],
    faqs: [
      { q: '¿Necesito el Administrador de anuncios de Meta para usar esto?', a: 'Necesitas una cuenta de anuncios de Meta activa; Klientia se conecta a ella, no la reemplaza.' },
      { q: '¿Klientia cobra el presupuesto de los anuncios?', a: 'El presupuesto de la campaña lo paga tu cuenta de Meta directamente; Klientia es el panel desde donde la configuras.' },
      { q: '¿Puedo pautar solo en Instagram o solo en Facebook?', a: 'Sí, puedes elegir dónde se muestra tu campaña dentro de las opciones de Meta.' },
      { q: '¿Sirve para dropshipping o negocios con contra entrega (COD)?', a: 'Sí, funciona igual con cualquier catálogo conectado a tu cuenta, incluidos negocios con logística contra entrega.' },
    ],
    ctaText: 'Conecta tu cuenta de anuncios y prueba Klientia gratis 7 días',
  },
  {
    slug: 'bandeja-unificada-whatsapp-instagram-messenger',
    metaTitle: 'Bandeja unificada: WhatsApp, Instagram y Messenger',
    metaDescription:
      'Atiende WhatsApp, Instagram y Messenger desde una sola bandeja con IA. No mezcles apps ni pierdas mensajes. Prueba Klientia gratis 7 días.',
    h1: 'Una sola bandeja para WhatsApp, Instagram y Messenger',
    subtitle:
      'Deja de saltar entre apps: todos tus mensajes de WhatsApp, Instagram y Messenger llegan a un solo lugar, atendidos por IA cuando tú no puedes.',
    sections: [
      {
        h2: 'Qué es la bandeja unificada',
        body: 'Es una sola vista donde llegan las conversaciones de WhatsApp, Instagram y Messenger de tu negocio. En vez de revisar tres apps distintas, ves y respondes todo desde el panel de Klientia.',
      },
      {
        h2: 'Cómo funciona',
        body: 'Conectas tu número de WhatsApp Business, tu Instagram y tu Messenger a Klientia. Cada conversación aparece identificada por canal en la bandeja, y la IA puede atender automáticamente según la configuración que definas para cada uno.',
      },
      {
        h2: 'La IA no reemplaza a tu equipo, lo acompaña',
        body: 'La IA responde preguntas frecuentes, muestra catálogo y ayuda a avanzar la venta; cuando una conversación necesita un humano (una queja, un caso especial), se puede asignar a alguien de tu equipo sin salir de la misma bandeja.',
      },
      {
        h2: 'Para quién es',
        body: 'Para negocios que reciben clientes por más de un canal (WhatsApp, Instagram, Messenger) y hoy revisan cada app por separado, con el riesgo de dejar mensajes sin responder en alguno de ellos.',
      },
    ],
    steps: [
      { title: 'Conecta tus canales', body: 'WhatsApp Business, Instagram y Messenger.' },
      { title: 'Configura tu IA', body: 'Para que atienda según el canal y el tipo de pregunta.' },
      { title: 'Atiende desde una sola bandeja', body: 'Tú o tu equipo ven y responden todo en un mismo lugar, con la IA cubriendo lo que no alcanzas a responder.' },
    ],
    faqs: [
      { q: '¿Necesito un número de WhatsApp Business API o sirve el normal?', a: 'Klientia se conecta usando WhatsApp Business; la IA gestiona la conversación desde ahí.' },
      { q: '¿Puedo tener varias personas atendiendo la misma bandeja?', a: 'Sí, las conversaciones se pueden asignar a distintas personas de tu equipo.' },
      { q: '¿Qué pasa si un cliente escribe primero por Instagram y luego por WhatsApp?', a: 'Cada canal se muestra identificado en la bandeja; hoy se gestionan como conversaciones dentro de su propio canal.' },
      { q: '¿Se pierden mensajes si la IA no sabe responder?', a: 'No; los casos que la IA no puede resolver se pueden derivar a un humano de tu equipo dentro de la misma bandeja.' },
    ],
    ctaText: 'Une tus canales en una sola bandeja, gratis por 7 días',
  },
  {
    slug: 'ventas-por-whatsapp-con-ia',
    metaTitle: 'Ventas por WhatsApp con IA: vende y cobra 24/7 | Klientia',
    metaDescription:
      'Automatiza tus ventas por WhatsApp con un vendedor con IA que atiende, ofrece, cierra la venta, cobra y recupera carritos 24/7. Prueba gratis 7 días, sin tarjeta.',
    h1: 'Ventas por WhatsApp con IA: un vendedor que atiende, vende y cobra 24/7',
    subtitle:
      'Convierte tu WhatsApp en un vendedor con inteligencia artificial que responde al instante, sube el ticket, cierra la venta y pasa el link de pago — de día, de noche y en fines de semana, incluso contra entrega.',
    sections: [
      {
        h2: 'Qué son las ventas por WhatsApp con IA',
        body: 'Vender por WhatsApp con IA es dejar que un asistente con inteligencia artificial atienda cada chat de tu negocio como lo haría tu mejor vendedor: entiende qué quiere el cliente, le muestra el producto, resuelve dudas de precio y envío, y lo lleva hasta el pago. Todo dentro de WhatsApp, con la información y el tono de tu marca, sin que tengas que estar pegado al celular.',
      },
      {
        h2: 'Atiende al instante, 24/7 (aunque tú estés dormido)',
        body: 'La mayoría de las ventas se pierden por responder tarde. El vendedor con IA de Klientia contesta en segundos a cualquier hora, así no pierdes las ventas de la madrugada, los festivos ni las horas pico en las que no alcanzas a responder.',
      },
      {
        h2: 'No solo responde: ofrece, cierra y sube el ticket',
        body: 'A diferencia de un chatbot de preguntas frecuentes, la IA vende de verdad: ofrece la versión mejor (upsell), suma un complemento (cross-sell) o un descuento para no perder la venta (downsell), confirma el pedido y pasa el link de pago. Vender por WhatsApp deja de depender de que un humano esté disponible.',
      },
      {
        h2: 'Cobra y funciona con contra entrega (COD)',
        body: 'Pensado para cómo se vende en LATAM: conecta MercadoPago en un clic para pago anticipado, o toma el pedido contra entrega y confirma los datos en el chat para reducir devoluciones. La IA cierra la venta con el método que uses.',
      },
      {
        h2: 'Recupera las ventas que se enfrían',
        body: 'Si el cliente no terminó, la IA le vuelve a escribir (a la 1h, 6h y 24h, con descuento opcional) y retoma las conversaciones que se enfriaron. Ventas por WhatsApp que dabas por perdidas, recuperadas solas.',
      },
      {
        h2: 'Para quién es',
        body: 'Para tiendas de e-commerce y dropshipping en LATAM que venden por WhatsApp (y también por Instagram y Messenger) y quieren vender más sin contratar más gente. Si vendes por chat con catálogo y contra entrega, es para ti.',
      },
    ],
    steps: [
      { title: 'Conecta tu WhatsApp', body: 'Enlazas tu número en minutos, sin cambiar de chip ni de app.' },
      { title: 'Sube tu catálogo y ajusta tu vendedor', body: 'Eliges un vendedor con IA por industria y defines cómo ofrece y cierra.' },
      { title: 'La IA vende y cobra por ti', body: 'Responde 24/7, sube el ticket, pasa el link de pago y recupera carritos. Tú ves entrar los pedidos.' },
    ],
    faqs: [
      { q: '¿En qué se diferencia de un chatbot normal de WhatsApp?', a: 'Un chatbot responde preguntas; el vendedor con IA de Klientia ofrece, sube el ticket, cierra la venta y pasa el link de pago, con tu catálogo y tu tono. Vende, no solo contesta.' },
      { q: '¿Sirve para vender contra entrega (COD)?', a: 'Sí. Toma el pedido, confirma los datos en el chat para reducir devoluciones, y si prefieres pago anticipado conecta MercadoPago o Stripe.' },
      { q: '¿La IA se inventa precios o información?', a: 'No. Responde solo con tu catálogo y tu base de conocimiento; tú defines precios, mensajes y reglas. Si no sabe algo, pasa el chat a tu equipo.' },
      { q: '¿Necesito saber de tecnología?', a: 'No. Todo es sin código y en español: conectas tu WhatsApp, subes tu catálogo y eliges un vendedor con IA listo para tu industria.' },
    ],
    ctaText: 'Empieza a vender por WhatsApp con IA, gratis 7 días',
  },
];

export const getSolucion = (slug: string) => SOLUCIONES.find((s) => s.slug === slug);
