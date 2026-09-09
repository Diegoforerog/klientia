import {
  Bot,
  TrendingUp,
  RotateCcw,
  Repeat,
  Megaphone,
  MessageCircle,
  KanbanSquare,
  Workflow,
  Headset,
  Sparkles,
  CalendarCheck,
  Wallet,
  SearchCheck,
  ShoppingBag,
  Inbox,
  Rss,
  AtSign,
  Target,
  type LucideIcon,
} from 'lucide-react';

/** URL de registro / inicio de prueba. Cambia esto si tu dominio cambia. */
export const REGISTER_URL = 'https://app.klientia.app/register';
export const LOGIN_URL = 'https://app.klientia.app/login';
export const registerWithPlan = (plan: 'BRONCE' | 'PLATA' | 'ORO') =>
  `${REGISTER_URL}?plan=${plan}`;

/** Texto único del botón de acción principal (un solo CTA repetido en toda la landing,
    para no saturar con variantes). Lo consume Ingeniería en los componentes. */
export const CTA_LABEL = 'Empieza gratis 7 días';

export const NAV_LINKS = [
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Ver la IA vendiendo', href: '#impulsores' },
  { label: 'Agenda de citas', href: '#agenda' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas', href: '#faq' },
];

/* ─────────────────────────  CARACTERÍSTICAS  ───────────────────────── */

export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent?: boolean;
};

export const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: 'Vendedor con IA, no un bot de FAQ',
    desc: 'Atiende al instante, entiende qué quiere el cliente, ofrece, cierra la venta y pasa el link de pago. 24/7 y con TU información: nunca se inventa nada.',
    accent: true,
  },
  {
    icon: TrendingUp,
    title: 'Impulsores de venta',
    desc: 'La IA sube el ticket sola: ofrece la versión mejor, suma un complemento o un descuento cuando el cliente duda. Nunca se pierde una venta por precio.',
  },
  {
    icon: RotateCcw,
    title: 'Recupera carritos solo',
    desc: 'Si el cliente no terminó, la IA le escribe a la 1h, 6h y 24h — con descuento opcional. Ventas que dabas por perdidas, recuperadas.',
  },
  {
    icon: Repeat,
    title: 'Recompra automática',
    desc: 'Días después de la entrega, la IA le vuelve a escribir a tu cliente para que compre de nuevo. Clientes que regresan, sin que muevas un dedo.',
  },
  {
    icon: Megaphone,
    title: 'Campañas por WhatsApp',
    desc: 'Envía promos y novedades a tus contactos con plantillas oficiales aprobadas. Difusión segura, sin arriesgar tu número.',
  },
  {
    icon: Inbox,
    title: 'WhatsApp, Instagram y Messenger juntos',
    desc: 'Todos tus mensajes directos llegan a una sola bandeja, con la IA atendiendo en cada canal. Un cliente, un historial, sin importar por dónde escriba.',
  },
  {
    icon: Rss,
    title: 'Publica y programa en tus redes',
    desc: 'Crea y agenda tus publicaciones de Instagram, Facebook y TikTok desde el mismo panel, con calendario y estados. Una herramienta, no diez.',
  },
  {
    icon: AtSign,
    title: 'Comentarios que se responden solos',
    desc: 'Los comentarios de tus posts de Instagram y Facebook se contestan con reglas por palabra clave — en público y por mensaje directo — o a mano, sin salir de tu bandeja.',
  },
  {
    icon: Target,
    title: 'Anuncios de Meta con control',
    desc: 'Crea campañas de Facebook e Instagram con tu presupuesto validado, pausa cuando quieras y sigue tus resultados. Sin sustos de cobros.',
  },
  {
    icon: MessageCircle,
    title: 'Reimpacto “¿sigues ahí?”',
    desc: 'Cuando una conversación se enfría, la IA la retoma sola con un mensaje amable y la reactiva. Menos chats perdidos a mitad de camino.',
  },
  {
    icon: KanbanSquare,
    title: 'CRM que se llena solo',
    desc: 'Cada chat crea la ficha del cliente con sus datos, etiquetas y tareas. Tus ventas se ordenan en un tablero visual — sin que muevas un dedo.',
  },
  {
    icon: Workflow,
    title: 'Automatizaciones',
    desc: 'Reglas “cuando pasa X → haz Y”: etiqueta, mueve en el embudo, asigna o dispara un mensaje. Tú las defines, sin código.',
  },
  {
    icon: Headset,
    title: 'Paso a humano',
    desc: 'Cuando la IA no sabe, el cliente se molesta o pide una persona, pasa el chat a tu equipo y les avisa. Nunca dejas a nadie colgado.',
  },
  {
    icon: Sparkles,
    title: 'Asistencia IA a tu equipo',
    desc: 'La IA también ayuda a tus asesores: resume el chat, sugiere respuestas, reescribe y detecta el ánimo del cliente.',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda de citas',
    desc: 'Tus servicios y tu equipo de asesores, cada uno con su horario. La IA reserva en el chat sin choques, asigna sola (o deja que el cliente elija asesor) y sincroniza con Google Calendar o Calendly.',
  },
  {
    icon: Wallet,
    title: 'Cobros y contra entrega',
    desc: 'Pensado para COD. Conecta MercadoPago en un clic (o Stripe), confirma el pago y mueve la venta en tu embudo automáticamente.',
  },
  {
    icon: ShoppingBag,
    title: 'Integración con Shopify',
    desc: 'Conecta tu tienda Shopify: importa tu catálogo con variantes reales (la IA pregunta la talla), se sincroniza solo por webhooks y empuja los pedidos. Un solo inventario.',
  },
  {
    icon: SearchCheck,
    title: 'Auditor de ventas perdidas',
    desc: 'Cada noche la IA revisa los chats con interés real que no compraron y te dice por qué (precio, dudas, se enfrió…). Sabes exactamente qué arreglar para vender más.',
  },
];

/* ── Versión AGRUPADA de las features (para aligerar la sección "Lo demás que necesitas":
   18 tarjetas → 5 grupos temáticos, cada uno enlaza a su página /soluciones. Sin perder valor
   ni keywords (el detalle vive en las subpáginas). */
export type FeatureGroup = { icon: LucideIcon; title: string; desc: string; href: string };

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    icon: TrendingUp,
    title: 'Vende más, sin sonar insistente',
    desc: 'Sube el ticket con impulsores (upsell, cross-sell, downsell) y trae de vuelta a tus clientes con recompra automática.',
    href: '/soluciones/ventas-por-whatsapp-con-ia/',
  },
  {
    icon: RotateCcw,
    title: 'No pierdas ni una venta',
    desc: 'Recupera carritos, retoma los chats fríos con “¿sigues ahí?” y descubre por qué no te compraron con el auditor de ventas perdidas.',
    href: '/soluciones/pago-contra-entrega-por-whatsapp/',
  },
  {
    icon: Inbox,
    title: 'En todos tus canales',
    desc: 'WhatsApp, Instagram y Messenger en una sola bandeja; publica posts, responde comentarios de IG/FB y crea anuncios de Meta.',
    href: '/soluciones/redes-sociales-con-ia/',
  },
  {
    icon: Workflow,
    title: 'Se organiza solo',
    desc: 'CRM que se llena solo, automatizaciones “cuando pasa X → haz Y”, paso a humano y asistencia IA para tu equipo.',
    href: '/soluciones/crm-para-whatsapp/',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda, cobros e integraciones',
    desc: 'Agenda de citas, cobros y contra entrega, Shopify y campañas por WhatsApp — todo en tu plan.',
    href: '/soluciones/agendar-citas-por-whatsapp/',
  },
];

/* ─────────────────────────  BOTS LISTOS  ───────────────────────── */

export const BOT_TYPES = [
  { icon: MessageCircle, name: 'Responde', desc: 'Atiende dudas y responde con tu información, 24/7.' },
  { icon: CalendarCheck, name: 'Agenda', desc: 'Reserva citas en el chat: servicios, asesores y sincronía con tu calendario.' },
  { icon: TrendingUp, name: 'Vende', desc: 'Ofrece, sube el ticket, cierra la venta y cobra.' },
];

export const INDUSTRIES = [
  { emoji: '👗', name: 'Moda' },
  { emoji: '📱', name: 'Tecnología' },
  { emoji: '💄', name: 'Belleza' },
  { emoji: '🍔', name: 'Restaurante' },
  { emoji: '🛠️', name: 'Servicios' },
];

/* ─────────────────────────  CÓMO FUNCIONA  ───────────────────────── */

export const STEPS = [
  {
    n: '01',
    title: 'Conecta tu WhatsApp',
    time: '2 min',
    desc: 'Enlazas tu número desde el panel. La IA vive en tu mismo WhatsApp: sin cambiar de chip ni de app.',
  },
  {
    n: '02',
    title: 'Elige tu vendedor con IA y sube tu catálogo',
    time: '10 min',
    desc: 'Activa en 1 clic un vendedor con IA de tu industria, sube tu catálogo e impulsores y ajústalo. Sin código.',
  },
  {
    n: '03',
    title: 'La IA atiende, vende y cobra',
    time: '24/7',
    desc: 'Responde sola, cierra ventas, manda el link de pago y recupera carritos. Tú solo ves entrar los pedidos.',
  },
];

/* ─────────────────────────  PLANES  ───────────────────────── */

export type Plan = {
  id: 'BRONCE' | 'PLATA' | 'ORO';
  name: string;
  /** Precios en USD. launch = precio de lanzamiento (actual); list = precio normal (tachado);
   *  yearly = pago anual = 11× el precio mensual de lanzamiento (1 mes gratis). */
  priceLaunch: string;
  priceList: string;
  priceYearly: string;
  /** Conversaciones/mes incluidas en el plan. */
  conversations: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

/** Costo por conversación adicional al superar el cupo del plan (USD). */
export const EXTRA_CONVERSATION_USD = '0.09';

export const PLANS: Plan[] = [
  {
    id: 'BRONCE',
    name: 'Responde',
    priceLaunch: '19',
    priceList: '29',
    priceYearly: '209',
    conversations: '1.000',
    tagline: 'El vendedor con IA que atiende y responde por ti, 24/7.',
    features: [
      'Agente de IA que responde con tu información, 24/7',
      'Vendedores con IA listos por industria, en 1 clic',
      'CRM que se llena solo: fichas, etiquetas y tareas de cada cliente',
      'Automatizaciones “cuando pasa X → haz Y”',
      'Paso a humano con aviso a tu equipo',
    ],
    cta: 'Empezar a responder',
  },
  {
    id: 'PLATA',
    name: 'Agenda',
    priceLaunch: '29',
    priceList: '49',
    priceYearly: '319',
    conversations: '2.000',
    tagline: 'Suma citas: el vendedor con IA que agenda por ti.',
    features: [
      'Todo lo de Responde',
      'Agenda citas en el chat: servicios con precio y duración',
      'Equipo de asesores con horario propio · asignación automática o el cliente elige',
      'Sincroniza con Google Calendar o Calendly',
      'Bloqueos de agenda y reprogramación: la IA nunca agenda encima',
    ],
    cta: 'Empezar a agendar',
  },
  {
    id: 'ORO',
    name: 'Vende',
    priceLaunch: '49',
    priceList: '89',
    priceYearly: '539',
    conversations: '3.000',
    tagline: 'El completo: el vendedor con IA que vende, cobra y recupera.',
    popular: true,
    features: [
      'Todo lo de Agenda',
      'Catálogo + impulsores: la IA sugiere la versión mejor, complementos y descuentos',
      'Cobros: MercadoPago, Stripe y contra entrega',
      'Recuperación de carritos + recompra automática',
      'Campañas por WhatsApp con plantillas oficiales',
    ],
    cta: 'Empezar a vender',
  },
];

/* ─────────────────────────  DIFERENCIADORES  ───────────────────────── */

export const DIFFERENTIATORS = [
  {
    title: 'La IA vende y cobra de verdad',
    desc: 'No es un chatbot de preguntas frecuentes: ofrece, cierra la venta y pasa el link de pago. Resultados, no respuestas.',
  },
  {
    title: 'Empieza en minutos, no en semanas',
    desc: 'Vendedores con IA expertos por industria, listos en 1 clic. Ya saben vender en tu rubro; tú los ajustas.',
  },
  {
    title: 'Hecho para LATAM y contra entrega',
    desc: 'Pensado para vender COD, en español, a un precio accesible para tiendas y dropshippers de la región.',
  },
  {
    title: 'Todos tus chats en un solo lugar',
    desc: 'WhatsApp, Instagram y Messenger en una sola bandeja: vende, agenda, recupera y organiza tu CRM sin saltar entre apps.',
  },
  {
    title: 'Cada negocio configura lo suyo',
    desc: 'Catálogo, mensajes, reglas e impulsores: todo es tuyo. La IA vende como vendes tú, no como una plantilla.',
  },
];

/* ─────────────────────────  TESTIMONIOS  ───────────────────────── */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  flag: string;
  initials: string;
  image: string;
  metric: string;
};

/** Fotos lifestyle generadas por IA. Ya NO se usan en el hero (se quitaron por integridad: no son clientes reales). */
export const AVATARS = ['/images/ph-maria.jpg', '/images/ph-andres.jpg', '/images/ph-camila.jpg'];

/**
 * ⚠️ DATOS DE EJEMPLO — NO SON TESTIMONIOS REALES.
 * Nombres, citas y métricas son ilustrativos. La sección <Testimonials /> está OCULTA en app/page.tsx.
 * NO republicar hasta reemplazar por testimonios verificados de clientes reales (con su permiso).
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Antes perdía todas las ventas de la madrugada porque nadie respondía. Ahora amanezco con pedidos ya cobrados. Es como tener un vendedor que no duerme.',
    name: 'María José Rincón',
    role: 'Tienda de cosmética',
    location: 'Bogotá',
    flag: '🇨🇴',
    initials: 'MJ',
    image: '/images/ph-maria.jpg',
    metric: '+38% ventas nocturnas',
  },
  {
    quote:
      'Los impulsores suben el ticket solos. La IA ofrece el combo justo en el momento justo y el cliente dice que sí. Subimos el promedio de pedido sin contratar a nadie.',
    name: 'Andrés Beltrán',
    role: 'Accesorios y tecnología',
    location: 'Ciudad de México',
    flag: '🇲🇽',
    initials: 'AB',
    image: '/images/ph-andres.jpg',
    metric: '+23% ticket promedio',
  },
  {
    quote:
      'Recuperó carritos que yo daba por perdidos y ahora la recompra me trae clientes de vuelta solita. Se paga solo el primer mes.',
    name: 'Camila Fuentes',
    role: 'Moda y ropa femenina',
    location: 'Santiago',
    flag: '🇨🇱',
    initials: 'CF',
    image: '/images/ph-camila.jpg',
    metric: '1 de cada 4 carritos recuperado',
  },
];

/* ─────────────────────────  FAQ  ───────────────────────── */

export const FAQS = [
  {
    q: '¿Necesito tarjeta de crédito para la prueba?',
    a: 'No. Empiezas tu prueba de 7 días gratis sin tarjeta. Solo agregas un método de pago si decides continuar.',
  },
  {
    q: '¿Necesito saber de tecnología o programar?',
    a: 'Para nada. Todo está en español y es sin código. Conectas tu WhatsApp, eliges un vendedor con IA listo de tu industria y subes tu catálogo: si sabes usar WhatsApp, sabes usar esto.',
  },
  {
    q: '¿En qué países funciona?',
    a: 'En toda LATAM: Colombia, México, Chile, Perú, Ecuador, Argentina y más. Está pensado para la forma de vender de la región, incluyendo contra entrega.',
  },
  {
    q: '¿Sirve para Instagram, Facebook y TikTok, o solo WhatsApp?',
    a: 'Atiende tus mensajes directos de WhatsApp, Instagram y Messenger en una sola bandeja, con la IA respondiendo en cada canal. También publicas y programas posts en Instagram, Facebook y TikTok, respondes los comentarios de Instagram y Facebook con reglas automáticas, y creas anuncios de Meta — todo desde el panel.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. No hay contratos ni permanencia. Cancelas cuando quieras desde tu cuenta, sin llamadas ni trámites.',
  },
  {
    q: '¿Klientia cobra los mensajes de WhatsApp?',
    a: 'No. Los cobra Meta directamente a tu cuenta de WhatsApp Business según su tarifa por país. Desde el 1 de octubre de 2026 Meta cobra también las respuestas dentro de la ventana de 24 horas, después de su cuota gratuita mensual. Klientia cobra únicamente tu suscripción; no intermedia ni le añade margen al pago de tus mensajes.',
  },
  {
    q: '¿Sirve para contra entrega (COD)?',
    a: 'Sí, está diseñado para contra entrega. La IA toma el pedido y confirma los datos; y si prefieres pago anticipado, conecta MercadoPago en un clic o Stripe.',
  },
  {
    q: '¿La IA se inventa cosas o responde con mi información?',
    a: 'Responde solo con tu catálogo y tu base de conocimiento. Tú defines los precios, los mensajes de venta y las reglas: la IA vende como tu marca, sin inventar. Y si no sabe algo, pasa el chat a tu equipo.',
  },
];

export const COUNTRIES = [
  { flag: '🇨🇴', name: 'Colombia' },
  { flag: '🇲🇽', name: 'México' },
  { flag: '🇨🇱', name: 'Chile' },
  { flag: '🇵🇪', name: 'Perú' },
  { flag: '🇪🇨', name: 'Ecuador' },
  { flag: '🇦🇷', name: 'Argentina' },
];

/* ─────────────────────────  DÓNDE SE VA EL DINERO  ───────────────────────── */

/** Tres fugas de dinero concretas (causa) y qué hace Klientia con cada una (remedio). */
export const MONEY_LEAKS = [
  {
    tag: 'Venta perdida',
    title: 'El cliente escribe y nadie responde',
    desc: 'A las 11 de la noche, un domingo o mientras despachas. Cuando por fin contestas, ya le compró a otro.',
    fix: 'Responde en segundos, todos los días, a toda hora — y lleva la charla hasta el pago.',
  },
  {
    tag: 'Ticket bajo',
    title: 'Vendes lo mínimo que te piden',
    desc: 'Nadie ofrece la versión grande, el complemento que combina o el combo. Cada pedido se queda corto.',
    fix: 'Ofrece la versión mejor y el complemento justo en el momento justo. Sube el ticket sin sonar insistente.',
  },
  {
    tag: 'Dinero en la mesa',
    title: 'El carrito se enfría y ahí se queda',
    desc: '“Lo pienso y te aviso” — y nunca avisa. Nadie tiene tiempo de volver a escribirle.',
    fix: 'Le vuelve a escribir sola a la 1h, 6h y 24h, y días después invita a recomprar. Ventas que dabas por perdidas.',
  },
];

/* ─────────────────────────  PILARES (con capturas reales)  ───────────────────────── */

export const PILLARS = [
  {
    key: 'responde',
    eyebrow: 'Responde y cierra',
    title: 'Contesta en segundos, a cualquier hora, y lleva la charla hasta el pago',
    desc: 'Responde con tu catálogo, sin inventar: resuelve dudas, arma el pedido y cierra con link de pago o contra entrega.',
    bullets: [
      'Responde con TU información: precios, envíos, tallas, políticas',
      'Toma el pedido y confirma datos de contra entrega',
      'Si no sabe o el cliente pide una persona, pasa el chat a tu equipo y les avisa',
    ],
    cta: 'Quiero que responda por mí',
    image: '/images/product/15-conversaciones.jpg',
    alt: 'Bandeja de conversaciones de Klientia con la IA cerrando una venta contra entrega',
    screen: 'Conversaciones',
  },
  {
    key: 'vende-mas',
    eyebrow: 'Vende más a cada cliente',
    title: 'Sube el ticket de cada pedido sin sonar insistente',
    desc: 'Defines reglas simples —“si pide X, ofrece Y”— y ofrece la versión grande, el complemento o un descuento, sin presionar.',
    bullets: [
      'Versión mejor (upsell), complemento (cross-sell) y rescate por precio (downsell)',
      'Reglas por producto, con tu propio mensaje si quieres',
      'Funciona igual a las 3 de la tarde que a las 3 de la mañana',
    ],
    cta: 'Ver los impulsores en acción',
    image: '/images/product/20-impulsores.jpg',
    alt: 'Reglas de impulsores de venta en Klientia: versión mejor, complemento y rescate por precio',
    screen: 'Impulsores de venta',
  },
  {
    key: 'recupera',
    eyebrow: 'Recupera lo que dabas por perdido',
    title: 'Persigue carritos y trae clientes de vuelta, solo',
    desc: 'En visto, la IA escribe y rescata la venta; tras comprar, lo invita a volver. Sin mover un dedo.',
    bullets: [
      'Recuperación de carritos a la 1h, 6h y 24h, con descuento opcional',
      'Recompra automática con plantillas oficiales aprobadas',
      'Cada noche, un auditor te dice por qué no compraron los que sí tenían interés',
    ],
    cta: 'Quiero recuperar ventas',
    image: '/images/product/19-recuperacion.jpg',
    alt: 'Recuperación de carritos automática en Klientia',
    screen: 'Recuperación',
  },
];
