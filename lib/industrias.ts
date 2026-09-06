import type { Solucion } from './soluciones';

// Páginas por industria (reusa la forma de Solucion). Contenido diferenciado por vertical — NO plantillas
// con el nombre cambiado. Copy honesto: solo capacidades reales del producto.

export const INDUSTRIAS: Solucion[] = [
  {
    slug: 'dropshipping-y-ecommerce',
    metaTitle: 'WhatsApp con IA para dropshipping y e-commerce | Klientia',
    metaDescription:
      'Vende tu dropshipping por WhatsApp con IA: atiende, cierra, cobra contra entrega y recupera carritos. Conecta Shopify. Prueba Klientia gratis 7 días.',
    h1: 'Klientia para dropshipping y e-commerce',
    subtitle:
      'Vives de responder rápido y de que el contra entrega no se te caiga en devoluciones. Klientia atiende, vende y confirma pedidos por ti, para que escales sin colapsar en el chat.',
    sections: [
      {
        h2: 'El dolor del dropshipping por WhatsApp',
        body: 'Cargas tráfico de anuncios a tu WhatsApp e Instagram, pero pierdes ventas por no responder a tiempo, y el contra entrega te devuelve paquetes de gente que no contesta. Escalar significa más mensajes de los que una persona alcanza a atender.',
      },
      {
        h2: 'Un vendedor con IA que no duerme',
        body: 'La IA responde en segundos a toda hora, resuelve dudas de precio, talla y envío, ofrece el combo o el upsell y cierra la venta. Las ventas de la madrugada y los fines de semana dejan de perderse.',
      },
      {
        h2: 'Contra entrega bajo control',
        body: 'Confirma cada pedido en el chat antes de despachar y marca los dudosos para revisión, para bajar las devoluciones. Y si prefieres pago anticipado, conecta MercadoPago.',
      },
      {
        h2: 'Conecta tu Shopify',
        body: 'Importa tu catálogo con variantes reales (la IA pregunta la talla), sincroniza pedidos y trae tus carritos y borradores. Un solo inventario, sin copiar datos entre apps.',
      },
    ],
    steps: [
      { title: 'Conecta WhatsApp e Instagram', body: 'El tráfico de tus anuncios llega a un vendedor con IA.' },
      { title: 'Sube o sincroniza tu catálogo', body: 'Propio o desde Shopify, con variantes.' },
      { title: 'La IA vende y confirma pedidos', body: 'Cierra ventas, cobra o toma el contra entrega y confirma antes de despachar.' },
    ],
    faqs: [
      { q: '¿Sirve si uso Dropi?', a: 'Klientia gestiona la conversación, la venta y el registro del pedido; la integración con proveedores de logística depende de tu flujo — conviene revisarlo según tu operación.' },
      { q: '¿Reduce las devoluciones del contra entrega?', a: 'Ayuda: confirma el pedido en el chat antes de despachar y separa los pedidos dudosos, para que no salgan a reparto a ciegas.' },
      { q: '¿Necesito Shopify?', a: 'No es obligatorio. Puedes subir tu catálogo a mano; si usas Shopify, se conecta y sincroniza solo.' },
    ],
    ctaText: 'Escala tu dropshipping sin colapsar en el chat, gratis 7 días',
  },
  {
    slug: 'belleza-y-estetica',
    metaTitle: 'WhatsApp con IA para salones de belleza y estética | Klientia',
    metaDescription:
      'Agenda citas por WhatsApp, reduce inasistencias con recordatorios y atiende sin dejar el trabajo. Klientia para salones, spas y barberías. Prueba gratis 7 días.',
    h1: 'Klientia para belleza y estética',
    subtitle:
      'Entre cliente y cliente no alcanzas a contestar WhatsApp, y las citas se agendan a mano en un cuaderno. Klientia agenda por ti dentro del chat y recuerda las citas para que no te queden sillas vacías.',
    sections: [
      {
        h2: 'Agenda sin soltar las tijeras',
        body: 'Tus clientes preguntan por disponibilidad por WhatsApp mientras tú atiendes. El bot les muestra los horarios libres y confirma la cita en el mismo chat, sin que tengas que parar lo que haces.',
      },
      {
        h2: 'Horario por estilista y sin choques',
        body: 'Cada estilista o servicio con su propio horario. La IA asigna al profesional correcto (o deja que el cliente elija) y evita que dos citas se pisen. Puedes bloquear franjas y marcar a alguien como ocupado.',
      },
      {
        h2: 'Menos inasistencias con recordatorios',
        body: 'Un recordatorio antes de la cita por el mismo WhatsApp reduce las ausencias de último minuto que te dejan una silla vacía y sin ingreso.',
      },
      {
        h2: 'Vende también tus productos y paquetes',
        body: 'Además de agendar, la IA responde por tus productos, paquetes y promociones, y toma el pago si vendes por adelantado.',
      },
    ],
    steps: [
      { title: 'Conecta tu WhatsApp', body: 'Define tus servicios y tu equipo de estilistas.' },
      { title: 'Configura horarios y cupos', body: 'Por día, por profesional, con bloqueos y recordatorios.' },
      { title: 'Los clientes agendan solos', body: 'Reservan en el chat y reciben recordatorios; tú ves tu agenda llena.' },
    ],
    faqs: [
      { q: '¿Puedo tener varios estilistas con horarios distintos?', a: 'Sí, el horario se configura por día y por profesional, y la asignación lo respeta.' },
      { q: '¿Sirve para clases o servicios grupales?', a: 'Sí, puedes definir un cupo por franja en vez de una sola persona por horario.' },
      { q: '¿El cliente agenda sin salir de WhatsApp?', a: 'Sí, ve la disponibilidad y confirma dentro del mismo chat, sin formularios.' },
    ],
    ctaText: 'Llena tu agenda de belleza sin dejar el trabajo, gratis 7 días',
  },
  {
    slug: 'restaurantes',
    metaTitle: 'WhatsApp con IA para restaurantes y domicilios | Klientia',
    metaDescription:
      'Toma pedidos por WhatsApp con IA, muestra tu menú, cobra y organiza tus domicilios sin saturarte en horas pico. Klientia para restaurantes. Prueba gratis 7 días.',
    h1: 'Klientia para restaurantes y domicilios',
    subtitle:
      'En hora pico los pedidos por WhatsApp se te amontonan y algunos se pierden. Klientia toma el pedido, muestra el menú, confirma la dirección y cobra — sin que dejes la cocina.',
    sections: [
      {
        h2: 'Toma pedidos sin saturarte en hora pico',
        body: 'La IA atiende varios chats a la vez, muestra tu menú, arma el pedido y confirma la dirección de entrega. Los mensajes que antes se te quedaban sin responder dejan de perderse.',
      },
      {
        h2: 'Cobra y coordina el domicilio',
        body: 'Pasa el link de pago o toma el pago contra entrega, y deja el pedido con sus datos ordenados para que tu equipo lo despache sin confusiones.',
      },
      {
        h2: 'Responde lo de siempre, automático',
        body: 'Horarios, zonas de cobertura, precios y promociones: la IA responde las preguntas repetidas con tu información, para que tú te concentres en cocinar.',
      },
      {
        h2: 'Recupera al cliente que vuelve',
        body: 'Guarda el historial de cada cliente y puede volver a escribirle con una promoción, para que el que pidió una vez vuelva a pedir.',
      },
    ],
    steps: [
      { title: 'Conecta tu WhatsApp', body: 'Sube tu menú, zonas de entrega y precios.' },
      { title: 'Configura al bot', body: 'Cómo toma el pedido, cómo cobra y qué responde.' },
      { title: 'La IA toma pedidos', body: 'Atiende, arma el pedido, confirma dirección y cobra; tú cocinas.' },
    ],
    faqs: [
      { q: '¿Puede tomar el pedido completo?', a: 'Sí: muestra el menú, arma el pedido, confirma la dirección y pasa el pago o toma contra entrega.' },
      { q: '¿Atiende varios chats a la vez?', a: 'Sí, responde a muchos clientes en paralelo, útil en hora pico.' },
      { q: '¿Puedo seguir atendiendo yo cuando quiera?', a: 'Sí, tomas el chat cuando lo necesites y la IA se aparta; luego se lo devuelves.' },
    ],
    ctaText: 'Toma pedidos por WhatsApp sin salir de la cocina, gratis 7 días',
  },
  {
    slug: 'tiendas-shopify',
    metaTitle: 'WhatsApp con IA para tiendas Shopify | Klientia',
    metaDescription:
      'Conecta tu Shopify a WhatsApp: la IA vende con tu catálogo real, recupera carritos y empuja los pedidos. Klientia para tiendas Shopify. Prueba gratis 7 días.',
    h1: 'Klientia para tiendas Shopify',
    subtitle:
      'Tienes tu tienda en Shopify, pero la venta de verdad pasa en el chat. Klientia conecta tu catálogo de Shopify a WhatsApp para que la IA venda con tus productos reales y recupere los carritos que se quedan a medias.',
    sections: [
      {
        h2: 'Tu catálogo de Shopify, vendiendo en el chat',
        body: 'Importa tus productos con variantes reales; cuando un cliente pregunta, la IA responde con el producto, el precio y la talla o color correctos, sin que tengas que copiar nada a mano.',
      },
      {
        h2: 'Recupera los carritos abandonados',
        body: 'Trae tus carritos abandonados y borradores de Shopify y deja que la IA le vuelva a escribir al cliente que no terminó — con descuento opcional — para cerrar la venta que se estaba yendo.',
      },
      {
        h2: 'Empuja los pedidos y sincroniza',
        body: 'Los pedidos que cierra el bot se empujan a Shopify, y el estado se sincroniza cuando se confirma el pago. Un solo inventario y un solo registro, sin doble trabajo.',
      },
      {
        h2: 'Con o sin contra entrega',
        body: 'Funciona con pago anticipado (MercadoPago, Stripe) o contra entrega, confirmando el pedido en el chat antes de despachar.',
      },
    ],
    steps: [
      { title: 'Conecta tu tienda Shopify', body: 'Autorizas los permisos y Klientia importa tu catálogo.' },
      { title: 'Conecta tu WhatsApp', body: 'La IA queda lista para vender con tus productos reales.' },
      { title: 'Vende y recupera', body: 'Cierra ventas en el chat, recupera carritos y empuja los pedidos a Shopify.' },
    ],
    faqs: [
      { q: '¿La IA usa mi catálogo real de Shopify?', a: 'Sí: importa tus productos con variantes y responde con precios y opciones reales; se sincroniza por webhooks.' },
      { q: '¿Recupera carritos abandonados de Shopify?', a: 'Sí, trae tus carritos y borradores y la IA le vuelve a escribir al cliente para cerrar la venta.' },
      { q: '¿Tengo que reconectar la tienda seguido?', a: 'No: el acceso se renueva solo; no necesitas reconectar cada vez.' },
    ],
    ctaText: 'Conecta tu Shopify y vende por WhatsApp con IA, gratis 7 días',
  },
];

export const getIndustria = (slug: string) => INDUSTRIAS.find((i) => i.slug === slug);
