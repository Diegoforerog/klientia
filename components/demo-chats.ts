import { TrendingUp, PlusCircle, TicketPercent, RotateCcw, MessageCircle, type LucideIcon } from 'lucide-react';
import type { WaMsg } from './WhatsAppChat';

/**
 * Conversaciones de EJEMPLO que dramatizan cómo vende la IA. Son maquetas
 * (se etiquetan como tal en pantalla) y NO contienen cifras de resultados.
 * Viven aquí para que el hero (LiveSale) y la demo por pestañas (DemoTabs)
 * compartan el mismo guion.
 */

export type DemoChat = {
  key: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  /** Hora de la barra de estado del teléfono. */
  clock: string;
  chat: WaMsg[];
};

/* ───────── Venta en vivo del hero ───────── */

export type Beat = { msg: WaMsg; wait: number };

// Cada paso = mensaje + lo que tarda en aparecer el SIGUIENTE (ms).
// Los "typing" simulan a la IA redactando antes de responder.
export const LIVE_SALE_SCRIPT: Beat[] = [
  { msg: { kind: 'date', label: 'Hoy · 11:46 p. m.' }, wait: 500 },
  { msg: { from: 'in', text: 'Hola, ¿aún tienen el serum de vitamina C? 🙏', time: '11:46' }, wait: 900 },
  { msg: { kind: 'typing' }, wait: 1400 },
  {
    msg: {
      from: 'out',
      text: '¡Hola! 😊 Sí, $79.900 con envío gratis. Y por $20.000 más te llevas el XL, que rinde el doble. ¿Te lo dejo así?',
      time: '11:46',
      read: true,
    },
    wait: 1500,
  },
  { msg: { from: 'in', text: 'Dale, el XL 🙌', time: '11:47' }, wait: 800 },
  { msg: { kind: 'typing' }, wait: 1100 },
  { msg: { from: 'out', text: '¡Perfecto! Serum XL en $99.900. Aquí tu pago seguro 👇', time: '11:47', read: true }, wait: 700 },
  { msg: { kind: 'pay', amount: '$99.900', time: '11:47' }, wait: 1300 },
];

/** La misma venta, completa y sin "escribiendo…", para mostrarla estática. */
export const LIVE_SALE_MESSAGES: WaMsg[] = LIVE_SALE_SCRIPT.map((b) => b.msg).filter((m) => m.kind !== 'typing');

/* ───────── Impulsores y recuperación ───────── */

export const IMPULSORES_STEPS: DemoChat[] = [
  {
    key: 'upsell',
    icon: TrendingUp,
    title: 'Ofrece la versión mejor',
    desc: 'Cuando el cliente ya va a comprar, la IA propone el tamaño o la versión superior con un motivo de valor. Sube el ticket sin sonar insistente.',
    clock: '9:43',
    chat: [
      { from: 'in', text: 'Hola 🙌 ¿cuánto está la crema hidratante?', time: '9:41' },
      {
        from: 'out',
        text: '¡Hola! 😊 La de 30 ml está en $39.900. Y por $15.000 más te llevas la de 60 ml, que rinde el doble. ¿Te la dejo en 60?',
        time: '9:42',
        read: true,
      },
      { from: 'in', text: 'Mmm, tienes razón… dale la de 60 🙌', time: '9:43' },
      { from: 'out', text: '¡Excelente elección! 🎉 Crema 60 ml en $54.900 con envío gratis. Te dejo el pago seguro 👇', time: '9:43', read: true },
      { kind: 'pay', amount: '$54.900', time: '9:43' },
    ],
  },
  {
    key: 'crosssell',
    icon: PlusCircle,
    title: 'Suma el complemento ideal',
    desc: 'La IA detecta el producto que combina y lo ofrece en el momento justo, antes de cerrar. Más productos por pedido, sin que muevas un dedo.',
    clock: '16:22',
    chat: [
      { from: 'in', text: 'Listo, me llevo los audífonos inalámbricos 🎧', time: '16:20' },
      {
        from: 'out',
        text: '¡Buena elección! 🎧 $77.900 a contra entrega. ¿Le sumas el estuche protector? Por $12.000 más no se rayan. ¿Te lo agrego?',
        time: '16:21',
        read: true,
      },
      { from: 'in', text: 'Dale, agrégalo 👍', time: '16:22' },
      { from: 'out', text: '¡Genial! Audífonos + estuche = $89.900, contra entrega. Aquí tu confirmación 👇', time: '16:22', read: true },
      { kind: 'pay', amount: '$89.900', time: '16:22' },
    ],
  },
  {
    key: 'downsell',
    icon: TicketPercent,
    title: 'Rescata al que duda',
    desc: 'Si el cliente frena por el precio, la IA ofrece una alternativa más accesible o un descuento — y salva la venta en vez de perderla.',
    clock: '20:07',
    chat: [
      { from: 'in', text: 'Uy, $89.900 está caro para mí ahorita 😅', time: '20:05' },
      {
        from: 'out',
        text: 'Te entiendo 🙌 El mismo combo con 15% de descuento te queda en $76.400, o solo los audífonos por $49.900. ¿Cuál prefieres?',
        time: '20:06',
        read: true,
      },
      { from: 'in', text: 'El del descuento porfa 🙏', time: '20:06' },
      { from: 'out', text: '¡Hecho! 🎉 Combo en $76.400, precio solo por hoy. Aquí tu pago 👇', time: '20:07', read: true },
      { kind: 'pay', amount: '$76.400', time: '20:07' },
    ],
  },
  {
    key: 'recovery',
    icon: RotateCcw,
    title: 'Recupera el carrito solo',
    desc: 'Si el cliente se queda en visto, la IA le escribe sola más tarde (1h, 6h, 24h) con tu mensaje y rescata la venta. Recuperas ventas que dabas por perdidas.',
    clock: '10:16',
    chat: [
      { kind: 'date', label: 'Ayer · 6:30 p. m.' },
      { from: 'in', text: 'Me interesa el set de skincare ✨ ¿cuánto?', time: '18:30' },
      { from: 'out', text: '¡Hola! El set está en $119.900 con envío gratis 😊 ¿Te lo aparto?', time: '18:31', read: true },
      { kind: 'date', label: 'Hoy · 10:15 a. m.' },
      { from: 'out', text: '¡Hola de nuevo! 👋 Te quedó pendiente tu set de skincare ✨ ¿Lo dejamos a contra entrega y te llega esta semana?', time: '10:15', read: true },
      { from: 'in', text: 'Ay sí, se me pasó 🙈 dale', time: '10:16' },
      { kind: 'pay', amount: '$119.900', time: '10:16' },
    ],
  },
];

/* ───────── Qué chat va con cada pilar (DemoTabs) ───────── */

/** Chats por `key` de PILLARS (lib/content.tsx). Si un pilar tiene varios, la pestaña muestra chips para alternarlos. */
export const PILLAR_CHATS: Record<string, DemoChat[]> = {
  responde: [
    {
      key: 'responde',
      icon: MessageCircle,
      title: 'Responde y cierra',
      desc: '',
      clock: '11:47',
      chat: LIVE_SALE_MESSAGES,
    },
  ],
  'vende-mas': IMPULSORES_STEPS.filter((s) => s.key !== 'recovery'),
  recupera: IMPULSORES_STEPS.filter((s) => s.key === 'recovery'),
};
