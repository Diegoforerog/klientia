import { ShieldCheck, CreditCard, BadgeCheck, Banknote, MapPin } from 'lucide-react';
import { COUNTRIES } from '@/lib/content';

/**
 * Franja de hechos. Sin logos de clientes ni cifras de resultados: solo lo que
 * es verificable hoy. La confianza aquí se construye con condiciones claras,
 * no con prueba social que aún no tenemos.
 */
const FACTS = [
  { icon: CreditCard, text: '7 días gratis, sin tarjeta' },
  { icon: ShieldCheck, text: 'Cancela cuando quieras' },
  { icon: BadgeCheck, text: 'Plantillas oficiales de WhatsApp' },
  { icon: Banknote, text: 'Contra entrega y MercadoPago' },
  { icon: MapPin, text: 'En español · hecho en Colombia para LATAM' },
];

export default function TrustStrip() {
  return (
    <section className="hairline-b hairline-t bg-surface py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 sm:px-8 lg:flex-row lg:justify-between">
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {FACTS.map((f) => {
            const Icon = f.icon;
            return (
              <li key={f.text} className="flex items-center gap-2 text-[14px] font-medium text-ink-soft">
                <Icon className="h-4 w-4 text-brand-600" strokeWidth={2.25} />
                {f.text}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-1.5" aria-label="Países donde funciona">
          {COUNTRIES.map((c) => (
            <span key={c.name} title={c.name} className="text-[18px] leading-none">
              {c.flag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
