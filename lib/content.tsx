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
    desc: 'Enlazas tu número desde el panel. No cambias de chip ni de app: la IA vive dentro de tu mismo WhatsApp.',
  },
  {
    n: '02',
    title: 'Elige un bot y sube tu catálogo',
    time: '10 min',
    desc: 'Activa un bot experto de tu industria en 1 clic (moda, tech, belleza…), sube productos e impulsores y ajusta cómo quieres que venda. Sin código.',
  },
  {
    n: '03',
    title: 'La IA atiende, vende y cobra',
    time: '24/7',
    desc: 'Desde ese momento responde sola, cierra ventas, manda el link de pago y recupera carritos. Tú solo ves entrar los pedidos.',
  },
];

/* ─────────────────────────  PLANES  ───────────────────────── */

export type Plan = {
  id: 'BRONCE' | 'PLATA' | 'ORO';
  name: string;
  /** Precios en USD. launch = precio de lanzamiento (actual); list = precio normal (tachado);
   *  yearly = pago anual con 2 meses gratis (sobre precio de lista). */
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
    priceYearly: '290',
    conversations: '1.000',
    tagline: 'El bot que atiende y responde por ti, 24/7.',
    features: [
      'Agente de IA que responde con tu información, 24/7',
      'Bots listos por industria, en 1 clic',
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
    priceYearly: '490',
    conversations: '2.000',
    tagline: 'Suma citas: el bot que agenda por ti.',
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
    priceYearly: '890',
    conversations: '3.000',
    tagline: 'El completo: el bot que vende, cobra y recupera.',
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
    desc: 'Bots expertos listos por industria en 1 clic. Ya saben vender en tu rubro; tú solo los ajustas a tu gusto.',
  },
  {
    title: 'Hecho para LATAM y contra entrega',
    desc: 'Pensado para vender COD, en español, a un precio accesible para tiendas y dropshippers de la región.',
  },
  {
    title: 'Todos tus chats en un solo lugar',
    desc: 'WhatsApp, Instagram y Messenger en una sola bandeja: vende, recupera, hace campañas, agenda y organiza tu CRM — sin saltar entre cinco herramientas distintas.',
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
    a: 'Para nada. Todo está en español y es sin código. Conectas tu WhatsApp, eliges un bot listo de tu industria y subes tu catálogo: si sabes usar WhatsApp, sabes usar esto.',
  },
  {
    q: '¿Cuánto me toma dejarlo funcionando?',
    a: 'Entre 10 y 15 minutos: 2 min para conectar tu WhatsApp, unos minutos para subir tu catálogo y ajustar el bot, y ya está vendiendo por ti. La documentación tiene el paso a paso con capturas si te pierdes en algo.',
  },
  {
    q: '¿Y si tengo un problema o dudas por el camino?',
    a: 'Tienes documentación completa dentro del panel y en klientia.app/doc/es (con capturas de cada pantalla). Y desde el panel puedes escribirnos directo cuando algo no cuadra. No estás solo.',
  },
  {
    q: '¿Puedo enviar promociones o campañas a mis clientes?',
    a: 'Sí. Envías campañas por WhatsApp con plantillas oficiales aprobadas (difusión segura, sin arriesgar tu número). Y la IA hace recompra automática: le vuelve a escribir a quien ya te compró para que regrese.',
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
