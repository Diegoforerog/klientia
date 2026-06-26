import {
  Bot,
  TrendingUp,
  RotateCcw,
  KanbanSquare,
  Workflow,
  CalendarCheck,
  Wallet,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

/** URL de registro / inicio de prueba. Cambia esto si tu dominio cambia. */
export const REGISTER_URL = 'https://conversa.nextgencol.com/register';
export const registerWithPlan = (plan: 'BRONCE' | 'PLATA' | 'ORO') =>
  `${REGISTER_URL}?plan=${plan}`;

export const NAV_LINKS = [
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Cómo funciona', href: '#como-funciona' },
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
    desc: 'Atiende al instante, entiende lo que el cliente quiere, ofrece el producto correcto, cierra la venta y pasa el link de pago. 24/7.',
    accent: true,
  },
  {
    icon: TrendingUp,
    title: 'Impulsores de venta',
    desc: 'Sube el ticket solo: ofrece la versión mejor (upsell), un complemento (cross-sell) o rescata la venta con descuento (downsell). Con TU mensaje, no genérico.',
  },
  {
    icon: RotateCcw,
    title: 'Recupera carritos solo',
    desc: 'Si el cliente no terminó, la IA le escribe a la 1h, 6h y 24h con un mensaje propio por producto. Ventas que dabas por perdidas, recuperadas.',
  },
  {
    icon: KanbanSquare,
    title: 'CRM conversacional',
    desc: 'Embudos tipo kanban, etiquetas, tareas y la ficha de cada cliente. Sabes en qué va cada conversación sin perder ninguna.',
  },
  {
    icon: Workflow,
    title: 'Automatizaciones',
    desc: 'Reglas simples “cuando pasa X → haz Y”: etiqueta, mueve en el embudo, asigna o dispara un mensaje. Tú las defines, sin código.',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda de citas',
    desc: 'Define tu horario y tus servicios; la IA consulta disponibilidad y reserva la cita dentro del chat, sin choques de horario.',
  },
  {
    icon: Wallet,
    title: 'Cobros y contra entrega',
    desc: 'Pensado para COD. También cobra con MercadoPago y Stripe, confirma el pago y mueve la venta en tu embudo automáticamente.',
  },
  {
    icon: BookOpen,
    title: 'Responde con TU información',
    desc: 'Cargas tu catálogo y tu base de conocimiento; la IA responde con tus datos, tus precios y tu tono. Nunca se inventa nada.',
  },
];

/* ─────────────────────────  CÓMO FUNCIONA  ───────────────────────── */

export const STEPS = [
  {
    n: '01',
    title: 'Conecta tu WhatsApp',
    desc: 'Enlazas tu número en minutos. No cambias de chip ni de app: la IA vive dentro de tu mismo WhatsApp.',
  },
  {
    n: '02',
    title: 'Sube tu catálogo y tus reglas',
    desc: 'Cargas productos, precios e impulsores, y le dices cómo querés que venda. Todo en español, sin tocar una línea de código.',
  },
  {
    n: '03',
    title: 'La IA atiende, vende y cobra',
    desc: 'Desde ese momento responde sola 24/7, cierra ventas, manda el link de pago y recupera carritos. Tú solo ves entrar los pedidos.',
  },
];

/* ─────────────────────────  PLANES  ───────────────────────── */

export type Plan = {
  id: 'BRONCE' | 'PLATA' | 'ORO';
  name: string;
  price: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

export const PLANS: Plan[] = [
  {
    id: 'BRONCE',
    name: 'Bronce',
    price: '49.900',
    tagline: 'Para empezar a no perder ni un mensaje.',
    features: [
      'Agente de IA de soporte (responde con tu información)',
      'CRM conversacional tipo kanban',
      'Automatizaciones “cuando pasa X → haz Y”',
      'Base de conocimiento de tu negocio',
      'Bandeja unificada de WhatsApp',
    ],
    cta: 'Empezar gratis',
  },
  {
    id: 'PLATA',
    name: 'Plata',
    price: '89.900',
    tagline: 'Suma agenda para servicios y citas.',
    features: [
      'Todo lo de Bronce',
      'Agendamiento de citas dentro del chat',
      'Servicios con precio y duración',
      'Calendario semanal en tu panel',
      'Horario de atención configurable',
    ],
    cta: 'Empezar gratis',
  },
  {
    id: 'ORO',
    name: 'Oro',
    price: '149.900',
    tagline: 'La IA que vende, cobra y recupera. Completo.',
    popular: true,
    features: [
      'Todo lo de Plata',
      'Catálogo de productos para vender en el chat',
      'Impulsores: upsell, cross-sell y downsell',
      'Cobros con MercadoPago, Stripe y contra entrega',
      'Recuperación de carritos automática',
    ],
    cta: 'Empezar gratis',
  },
];

/* ─────────────────────────  DIFERENCIADORES  ───────────────────────── */

export const DIFFERENTIATORS = [
  {
    title: 'La IA vende y cobra de verdad',
    desc: 'No es un chatbot de preguntas frecuentes: ofrece, cierra la venta y pasa el link de pago. Resultados, no respuestas.',
  },
  {
    title: 'Impulsores con tu mensaje',
    desc: 'El upsell, cross-sell y downsell los escribes tú. El cliente siente que le habla tu marca, no un robot.',
  },
  {
    title: 'Hecho para LATAM y contra entrega',
    desc: 'Pensado para vender COD, en español, a un precio accesible para tiendas y dropshippers de la región.',
  },
  {
    title: 'Recupera carritos automático',
    desc: 'Mensajes de seguimiento por producto a la 1h, 6h y 24h. Recupera ventas mientras tú haces otra cosa.',
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

/** Fotos lifestyle (IA) reutilizadas en el hero como prueba social. */
export const AVATARS = ['/images/ph-maria.jpg', '/images/ph-andres.jpg', '/images/ph-camila.jpg'];

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
      'Recuperó carritos que yo daba por perdidos. Llegan los mensajes de seguimiento solitos y la gente vuelve a comprar. Se paga solo el primer mes.',
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
    q: '¿En qué países funciona?',
    a: 'En toda LATAM: Colombia, México, Chile, Perú, Ecuador, Argentina y más. Está pensado para la forma de vender de la región, incluyendo contra entrega.',
  },
  {
    q: '¿Necesito saber de tecnología o programar?',
    a: 'Para nada. Todo está en español y es sin código. Conectas tu WhatsApp, subes tu catálogo y listo: si sabes usar WhatsApp, sabes usar esto.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. No hay contratos ni permanencia. Cancelas cuando quieras desde tu cuenta, sin llamadas ni trámites.',
  },
  {
    q: '¿Sirve para contra entrega (COD)?',
    a: 'Sí, está diseñado para contra entrega. La IA toma el pedido y confirma los datos; y si prefieres pago anticipado, también cobra con MercadoPago y Stripe.',
  },
  {
    q: '¿La IA se inventa cosas o responde con mi información?',
    a: 'Responde solo con tu catálogo y tu base de conocimiento. Tú defines los precios, los mensajes de venta y las reglas: la IA vende como tu marca, sin inventar.',
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
