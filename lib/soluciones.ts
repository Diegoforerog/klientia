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
    metaTitle: 'Ventas por WhatsApp con IA: vende y cobra a toda hora | Klientia',
    metaDescription:
      'Automatiza tus ventas por WhatsApp con un vendedor con IA que atiende, ofrece, cierra la venta, cobra y recupera carritos a toda hora. Prueba gratis 7 días, sin tarjeta.',
    h1: 'Ventas por WhatsApp con IA: un vendedor que atiende, vende y cobra a toda hora',
    subtitle:
      'Convierte tu WhatsApp en un vendedor con inteligencia artificial que responde al instante, sube el ticket, cierra la venta y pasa el link de pago — de día, de noche y en fines de semana, incluso contra entrega.',
    sections: [
      {
        h2: 'Qué son las ventas por WhatsApp con IA',
        body: 'Vender por WhatsApp con IA es dejar que un asistente con inteligencia artificial atienda cada chat de tu negocio como lo haría tu mejor vendedor: entiende qué quiere el cliente, le muestra el producto, resuelve dudas de precio y envío, y lo lleva hasta el pago. Todo dentro de WhatsApp, con la información y el tono de tu marca, sin que tengas que estar pegado al celular.',
      },
      {
        h2: 'Atiende al instante, a toda hora (aunque tú estés dormido)',
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
      { title: 'La IA vende y cobra por ti', body: 'Responde a toda hora, sube el ticket, pasa el link de pago y recupera carritos. Tú ves entrar los pedidos.' },
    ],
    faqs: [
      { q: '¿En qué se diferencia de un chatbot normal de WhatsApp?', a: 'Un chatbot responde preguntas; el vendedor con IA de Klientia ofrece, sube el ticket, cierra la venta y pasa el link de pago, con tu catálogo y tu tono. Vende, no solo contesta.' },
      { q: '¿Sirve para vender contra entrega (COD)?', a: 'Sí. Toma el pedido, confirma los datos en el chat para reducir devoluciones, y si prefieres pago anticipado conecta MercadoPago o Stripe.' },
      { q: '¿La IA se inventa precios o información?', a: 'No. Responde solo con tu catálogo y tu base de conocimiento; tú defines precios, mensajes y reglas. Si no sabe algo, pasa el chat a tu equipo.' },
      { q: '¿Necesito saber de tecnología?', a: 'No. Todo es sin código y en español: conectas tu WhatsApp, subes tu catálogo y eliges un vendedor con IA listo para tu industria.' },
    ],
    ctaText: 'Empieza a vender por WhatsApp con IA, gratis 7 días',
  },
  {
    slug: 'crm-para-whatsapp',
    metaTitle: 'CRM para WhatsApp: organiza tus chats y vende más | Klientia',
    metaDescription:
      'Un CRM para WhatsApp que convierte cada conversación en una ficha de cliente, con embudos, etiquetas y tareas. Ordena tus ventas por chat. Prueba gratis 7 días.',
    h1: 'CRM para WhatsApp: cada chat se vuelve una ficha y una venta',
    subtitle:
      'Deja de perder clientes en un mar de conversaciones. El CRM de Klientia crea solo la ficha de cada persona que te escribe, la ubica en tu embudo de ventas y te dice qué hacer después.',
    sections: [
      {
        h2: 'Qué es un CRM para WhatsApp',
        body: 'Un CRM (gestor de relaciones con clientes) para WhatsApp es donde vive todo lo que pasa con cada cliente: sus datos, su historial de chat, en qué punto de la compra está y las tareas pendientes. En vez de tener las ventas en tu cabeza o en una hoja de cálculo, quedan organizadas en un tablero.',
      },
      {
        h2: 'Se llena solo desde el chat',
        body: 'Cada conversación crea o actualiza la ficha del cliente automáticamente: nombre, teléfono, etiquetas y su etapa en el embudo. No tienes que copiar datos a mano; el CRM se alimenta de lo que ya pasa en WhatsApp, Instagram y Messenger.',
      },
      {
        h2: 'Embudos, etiquetas, tareas y lead scoring',
        body: 'Ves tus ventas en un tablero visual (kanban) por etapas, marcas clientes con etiquetas, creas tareas para no olvidar seguimientos y priorizas con puntaje quién está más listo para comprar. Todo tu pipeline de ventas, en un solo lugar.',
      },
      {
        h2: 'No solo organiza: vende',
        body: 'A diferencia de un CRM tradicional, aquí el vendedor con IA atiende, ofrece y cierra dentro del mismo chat, y el CRM se actualiza en tiempo real con cada venta. Organizar y vender dejan de ser dos herramientas distintas.',
      },
      {
        h2: 'Para quién es',
        body: 'Para comercios de e-commerce y dropshipping en LATAM que venden por WhatsApp y hoy pierden el hilo de sus conversaciones, sin saber a quién dar seguimiento ni en qué quedó cada cliente.',
      },
    ],
    steps: [
      { title: 'Conecta tus canales', body: 'WhatsApp, Instagram y Messenger; las conversaciones empiezan a crear fichas solas.' },
      { title: 'Ordena tu embudo', body: 'Defines las etapas de tu venta, etiquetas y reglas de asignación.' },
      { title: 'Da seguimiento sin olvidos', body: 'El CRM te muestra tareas, puntaje y en qué quedó cada cliente para que cierres más.' },
    ],
    faqs: [
      { q: '¿En qué se diferencia de un CRM normal?', a: 'La mayoría de los CRM te obligan a registrar los datos a mano y no venden por ti. El de Klientia se llena solo desde el chat y el vendedor con IA cierra la venta dentro de la misma conversación.' },
      { q: '¿Necesito instalar algo?', a: 'No. Es en la nube y en español; conectas tu WhatsApp y empiezas. Sin código.' },
      { q: '¿Sirve si atiendo por varios canales?', a: 'Sí. WhatsApp, Instagram y Messenger llegan a una sola bandeja y a un solo CRM, con la ficha unificada del cliente.' },
      { q: '¿Puedo tener un equipo con distintos roles?', a: 'Sí, puedes asignar conversaciones y tareas a distintas personas de tu equipo.' },
    ],
    ctaText: 'Ordena tus ventas por WhatsApp con un CRM que se llena solo',
  },
  {
    slug: 'chatbot-para-whatsapp',
    metaTitle: 'Chatbot para WhatsApp con IA que vende (no solo responde) | Klientia',
    metaDescription:
      'Un chatbot para WhatsApp con IA que no solo responde: ofrece, cierra la venta y cobra a toda hora, con tu catálogo y tu tono. Prueba gratis 7 días, sin tarjeta.',
    h1: 'Chatbot para WhatsApp con IA: no solo responde, vende y cobra',
    subtitle:
      'Un chatbot común contesta preguntas. El de Klientia es un vendedor con inteligencia artificial: entiende al cliente, le ofrece, cierra la venta y le pasa el link de pago — a toda hora y con la información de tu negocio.',
    sections: [
      {
        h2: 'Más que un chatbot de preguntas frecuentes',
        body: 'Los chatbots tradicionales siguen un guion rígido de botones y respuestas fijas. El chatbot con IA de Klientia entiende lo que el cliente escribe en sus palabras, responde con tu catálogo y lo lleva hasta la compra. Vender deja de depender de un menú de opciones.',
      },
      {
        h2: 'Atiende al instante, a toda hora',
        body: 'Responde en segundos a cualquier hora, así no pierdes las ventas de la madrugada ni los fines de semana. Y cuando hace falta una persona, pasa el chat a tu equipo sin dejar a nadie esperando.',
      },
      {
        h2: 'Vende y cobra dentro del chat',
        body: 'Ofrece la versión mejor, suma un complemento, confirma el pedido y pasa el link de pago. Funciona con contra entrega y con MercadoPago. Un chatbot que no solo informa: cierra la venta.',
      },
      {
        h2: 'Con tu información, sin inventar',
        body: 'Responde solo con tu catálogo y tu base de conocimiento; tú defines precios, mensajes y reglas. La IA no se inventa datos, y si no sabe algo, escala a un humano.',
      },
      {
        h2: 'Para quién es',
        body: 'Para tiendas que reciben muchos mensajes por WhatsApp e Instagram y quieren automatizar la atención y la venta sin sonar como un robot y sin contratar más gente.',
      },
    ],
    steps: [
      { title: 'Conecta tu WhatsApp', body: 'En minutos, sin cambiar de número ni de app.' },
      { title: 'Sube tu catálogo y configura al bot', body: 'Eliges un vendedor con IA por industria y ajustas cómo responde y vende.' },
      { title: 'El chatbot atiende y vende', body: 'Responde a toda hora, ofrece, cierra y pasa el link de pago. Tú ves entrar los pedidos.' },
    ],
    faqs: [
      { q: '¿Es un chatbot de botones o entiende lenguaje natural?', a: 'Entiende lenguaje natural con IA: el cliente escribe como habla y el bot responde en contexto de tu catálogo, no con menús rígidos.' },
      { q: '¿El chatbot puede cobrar?', a: 'Sí: confirma el pedido y pasa el link de pago (o toma el pedido contra entrega). No solo responde, cierra la venta.' },
      { q: '¿Se puede pasar a un humano?', a: 'Sí. Cuando la IA no sabe algo o el cliente lo pide, la conversación pasa a tu equipo dentro de la misma bandeja.' },
      { q: '¿Necesito programar el chatbot?', a: 'No. Es sin código y en español; eliges un bot listo para tu industria y lo ajustas a tu gusto.' },
    ],
    ctaText: 'Prueba un chatbot de WhatsApp con IA que vende, gratis 7 días',
  },
  {
    slug: 'agendar-citas-por-whatsapp',
    metaTitle: 'Agendar citas por WhatsApp: bot de agendamiento con IA | Klientia',
    metaDescription:
      'Un bot de agendamiento que deja a tus clientes reservar su cita por WhatsApp, con horario por asesor, recordatorios y sin choques. Prueba Klientia gratis 7 días.',
    h1: 'Bot de agendamiento: agenda tus citas por WhatsApp con IA',
    subtitle:
      'Deja que tus clientes reserven su cita dentro del mismo chat de WhatsApp. El bot de agendamiento de Klientia muestra la disponibilidad real, agenda sin choques y envía recordatorios para reducir inasistencias.',
    sections: [
      {
        h2: 'Agendar dentro del chat, sin formularios',
        body: 'Cuando alguien pregunta por WhatsApp si hay cupo, el bot le muestra los horarios disponibles y confirma la cita en la misma conversación. Sin mandarlo a un formulario aparte ni pedirle que llame — cada paso extra es una reserva que se pierde.',
      },
      {
        h2: 'Horario por día y por asesor',
        body: 'Cada asesor o servicio con su propio horario. El bot asigna la cita al asesor correcto (por especialidad, carga o disponibilidad) o deja que el cliente elija, sin que dos citas choquen.',
      },
      {
        h2: 'Bloqueos, cupos y "ocupado"',
        body: 'Bloquea franjas cuando un asesor no está, define un cupo por horario para citas grupales o clases, y marca a alguien como ocupado para que no le sigan asignando citas.',
      },
      {
        h2: 'Recordatorios que reducen inasistencias',
        body: 'El bot envía un recordatorio antes de la cita por el mismo canal donde se agendó, para que el cliente no la olvide y tú no pierdas el cupo.',
      },
      {
        h2: 'Para quién es',
        body: 'Para negocios de servicios, salud y belleza —salones, spas, consultorios, talleres, estudios— que agendan por WhatsApp y hoy lo hacen a mano, con doble agendamiento e inasistencias.',
      },
    ],
    steps: [
      { title: 'Conecta tu WhatsApp', body: 'Y define tus servicios y tu equipo de asesores.' },
      { title: 'Configura horarios y reglas', body: 'Horario por día y asesor, bloqueos, cupos y asignación.' },
      { title: 'El bot agenda por ti', body: 'Tus clientes reservan en el chat y reciben recordatorios; tú ves tu agenda llena.' },
    ],
    faqs: [
      { q: '¿El cliente agenda sin salir de WhatsApp?', a: 'Sí. Ve la disponibilidad y confirma la cita dentro del mismo chat, sin formularios ni llamadas.' },
      { q: '¿Puedo tener varios asesores con horarios distintos?', a: 'Sí, el horario se configura por día y por asesor, y la asignación respeta esa configuración.' },
      { q: '¿Sirve para citas grupales o clases?', a: 'Sí, puedes definir un cupo máximo por franja en vez de limitar cada horario a una sola persona.' },
      { q: '¿Envía recordatorios?', a: 'Sí, por el mismo canal donde se agendó la cita, para reducir inasistencias.' },
    ],
    ctaText: 'Llena tu agenda: deja que agenden por WhatsApp, gratis 7 días',
  },
  {
    slug: 'pago-contra-entrega-por-whatsapp',
    metaTitle: 'Pago contra entrega por WhatsApp: confirma pedidos con IA | Klientia',
    metaDescription:
      'Vende con pago contra entrega por WhatsApp sin perder plata en devoluciones: la IA confirma cada pedido en el chat antes de despachar. Prueba Klientia gratis 7 días.',
    h1: 'Pago contra entrega por WhatsApp: confirma cada pedido antes de despachar',
    subtitle:
      'El contra entrega baja la barrera de compra, pero te deja el riesgo: pedidos falsos, clientes que no contestan y devoluciones. Klientia confirma el pedido por WhatsApp con IA antes de que salga a reparto.',
    sections: [
      {
        h2: 'Por qué el pago contra entrega duele',
        body: 'Con el pago contra entrega (COD) el cliente no paga por adelantado, así que todo el riesgo lo asumes tú: pedidos hechos por curiosidad, personas que no responden la confirmación, datos incompletos y devoluciones en la puerta con el costo de envío ya gastado. Es el dolor #1 del dropshipping y el e-commerce con contra entrega en LATAM.',
      },
      {
        h2: 'Confirma el pedido dentro del mismo chat',
        body: 'En vez de una llamada aparte que nadie contesta, el vendedor con IA le escribe al cliente por WhatsApp, le resume el pedido (producto, precio, dirección) y le pide una confirmación explícita antes de despachar. Todo queda registrado, así que si hay una disputa sabes exactamente qué se acordó.',
      },
      {
        h2: 'Detecta el riesgo antes de despachar',
        body: 'Si el cliente duda, cambia de opinión o no responde en un tiempo razonable, ese pedido se marca para revisión en vez de salir a reparto "a ciegas". Menos paquetes que vuelven, menos plata perdida en logística.',
      },
      {
        h2: 'Recupera datos y ordena tu operación',
        body: 'La IA pide el dato que falta (referencia de la dirección, teléfono alterno) sin que tengas que perseguir al cliente. Y si vendes con Shopify, Klientia se conecta a tu catálogo y a tus pedidos, incluidos los borradores que dejan las apps de contra entrega.',
      },
      {
        h2: 'Para quién es',
        body: 'Para tiendas y dropshippers en LATAM que venden principalmente contra entrega y pierden margen en devoluciones y pedidos que nunca se concretan.',
      },
    ],
    steps: [
      { title: 'Conecta tu WhatsApp (y Shopify si usas)', body: 'La IA queda lista para atender y confirmar pedidos.' },
      { title: 'Define tu mensaje de confirmación', body: 'Qué datos pedir y cuándo marcar un pedido como riesgoso.' },
      { title: 'La IA confirma antes de despachar', body: 'Solo salen a reparto los pedidos confirmados; los dudosos quedan para tu revisión.' },
    ],
    faqs: [
      { q: '¿Reemplaza la llamada de confirmación?', a: 'Para la mayoría de los casos sí: si el cliente ya te compró por WhatsApp, confirma por chat. Los casos que necesitan trato humano se pasan a tu equipo.' },
      { q: '¿Sirve con Dropi u otra app de contra entrega?', a: 'Klientia gestiona la conversación y el registro del pedido; la integración con cada proveedor de logística depende de tu flujo, así que conviene revisarlo según tu operación.' },
      { q: '¿Y si el cliente no responde a la confirmación?', a: 'El pedido queda como pendiente en tu bandeja en vez de despacharse solo; tu equipo decide el siguiente paso.' },
      { q: '¿Puedo también cobrar por anticipado?', a: 'Sí, si prefieres pago adelantado conectas MercadoPago en un clic (o Stripe); la IA cierra la venta con el método que uses.' },
    ],
    ctaText: 'Deja de perder plata en devoluciones: confirma tus pedidos COD',
  },
];

export const getSolucion = (slug: string) => SOLUCIONES.find((s) => s.slug === slug);
