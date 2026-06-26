import { ChevronLeft, Video, Phone, Wifi, Plus, Camera, Mic, CheckCheck, Lock } from 'lucide-react';
import type { ReactNode } from 'react';

export type WaMsg = {
  from?: 'in' | 'out';
  text?: ReactNode;
  time?: string;
  read?: boolean;
  kind?: 'text' | 'pay' | 'date' | 'typing';
  amount?: string;
  label?: string;
};

/* ───────── Barra de estado iOS ───────── */
function StatusBar({ time = '9:41' }: { time?: string }) {
  return (
    <div className="relative flex items-center justify-between bg-[#f7f7f7] px-6 pt-2.5 pb-1 text-[13px] font-semibold text-[#111b21]">
      <span className="tracking-tight">{time}</span>
      <span className="absolute left-1/2 top-1.5 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-black" />
      <span className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden="true">
          <rect x="0" y="7" width="2.5" height="4" rx="0.6" />
          <rect x="4.6" y="4.5" width="2.5" height="6.5" rx="0.6" />
          <rect x="9.2" y="2" width="2.5" height="9" rx="0.6" />
          <rect x="13.8" y="0" width="2.5" height="11" rx="0.6" />
        </svg>
        <Wifi className="h-[14px] w-[14px]" strokeWidth={2.5} />
        <span className="relative inline-flex h-[12px] w-[24px] items-center">
          <span className="absolute inset-0 rounded-[3px] border border-black/35" />
          <span className="absolute right-[-2.5px] top-1/2 h-1 w-[2px] -translate-y-1/2 rounded-r bg-black/35" />
          <span className="absolute left-[1.5px] top-1/2 h-[7px] w-[16px] -translate-y-1/2 rounded-[1px] bg-[#111b21]" />
        </span>
      </span>
    </div>
  );
}

/* ───────── Cabecera WhatsApp (iOS) ───────── */
function WaHeader({ contact, initials }: { contact: string; initials: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-black/5 bg-[#f7f7f7] px-2.5 pb-2 pt-0.5">
      <ChevronLeft className="h-6 w-6 shrink-0 text-[#008069]" strokeWidth={2.25} />
      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#25d366] to-[#0a8f57] text-[13px] font-bold text-white">
        {initials}
      </div>
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-[15px] font-semibold text-[#111b21]">{contact}</p>
        <p className="text-[12px] text-[#667781]">en línea</p>
      </div>
      <Video className="h-[22px] w-[22px] shrink-0 text-[#008069]" strokeWidth={2} />
      <Phone className="h-[18px] w-[18px] shrink-0 text-[#008069]" strokeWidth={2.25} />
    </div>
  );
}

/* ───────── Barra de entrada ───────── */
function WaInput() {
  return (
    <div className="flex items-center gap-1.5 bg-[#f7f7f7] px-2 py-1.5">
      <Plus className="h-6 w-6 shrink-0 text-[#54656f]" strokeWidth={2} />
      <div className="flex-1 rounded-full bg-white px-3 py-[7px] text-[14px] text-[#8a98a0] ring-1 ring-black/5">
        Mensaje
      </div>
      <Camera className="h-[22px] w-[22px] shrink-0 text-[#54656f]" strokeWidth={2} />
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white">
        <Mic className="h-[18px] w-[18px]" strokeWidth={2.25} />
      </span>
    </div>
  );
}

/* ───────── Meta (hora + vistos) ───────── */
function Meta({ time, out, read }: { time?: string; out?: boolean; read?: boolean }) {
  if (!time) return null;
  return (
    <span className="ml-2 inline-flex translate-y-1 items-center gap-1 align-bottom text-[10.5px] text-[#667781]">
      {time}
      {out && <CheckCheck className={`h-3.5 w-3.5 ${read ? 'text-wa-tick' : 'text-[#8696a0]'}`} strokeWidth={2.5} />}
    </span>
  );
}

/* ───────── Burbuja de texto ───────── */
function TextBubble({ m }: { m: WaMsg }) {
  const out = m.from === 'out';
  return (
    <div className={`flex ${out ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`relative max-w-[80%] px-2 py-1.5 text-[14.5px] leading-[1.35] text-[#111b21] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] ${
          out ? 'wa-out' : 'wa-in'
        }`}
      >
        <span className="[overflow-wrap:anywhere]">{m.text}</span>
        <Meta time={m.time} out={out} read={m.read} />
      </div>
    </div>
  );
}

/* ───────── Vista previa de link de pago (saliente) ───────── */
function PayBubble({ m }: { m: WaMsg }) {
  return (
    <div className="flex justify-end">
      <div className="wa-out relative max-w-[82%] p-[3px] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]">
        <div className="overflow-hidden rounded-[6px] bg-black/[0.06]">
          <div className="flex items-center gap-2.5 px-2.5 py-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#00a884] text-white">
              <Lock className="h-4 w-4" strokeWidth={2.25} />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[13px] font-semibold text-[#111b21]">Pago seguro · {m.amount}</p>
              <p className="truncate text-[11px] text-[#667781]">pagar.tutienda.co</p>
            </div>
          </div>
        </div>
        <div className="flex items-center px-1.5 pb-0.5 pt-1 text-[14px] text-[#111b21]">
          Toca para pagar 🔒
          <Meta time={m.time} out read />
        </div>
      </div>
    </div>
  );
}

/* ───────── Separador de fecha ───────── */
function DatePill({ label }: { label: string }) {
  return (
    <div className="flex justify-center py-1">
      <span className="rounded-md bg-white/85 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[#54656f] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]">
        {label}
      </span>
    </div>
  );
}

/* ───────── Escribiendo… ───────── */
function Typing() {
  return (
    <div className="flex justify-start">
      <div className="wa-in flex items-center gap-1 px-3 py-2.5 shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[#8696a0]"
            style={{ animation: 'typing-dot 1.2s ease-in-out infinite', animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function renderMsg(m: WaMsg, i: number, animate: boolean) {
  const inner =
    m.kind === 'date' ? (
      <DatePill label={m.label || ''} />
    ) : m.kind === 'typing' ? (
      <Typing />
    ) : m.kind === 'pay' ? (
      <PayBubble m={m} />
    ) : (
      <TextBubble m={m} />
    );
  return (
    <div
      key={i}
      className={animate ? 'msg-anim' : undefined}
      style={animate ? { animationDelay: `${200 + i * 300}ms` } : undefined}
    >
      {inner}
    </div>
  );
}

/* ───────── Teléfono completo con WhatsApp ───────── */
export function WaPhone({
  contact = 'Tu Tienda',
  initials = 'TT',
  statusTime = '9:41',
  messages,
  animate = false,
  withInput = true,
  chatClassName = '',
  className = '',
}: {
  contact?: string;
  initials?: string;
  statusTime?: string;
  messages: WaMsg[];
  animate?: boolean;
  withInput?: boolean;
  chatClassName?: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-[300px] max-w-full ${className}`}>
      {/* botones laterales */}
      <div className="absolute -left-[2.5px] top-28 h-14 w-[2.5px] rounded-l bg-[#0c0c0f]" />
      <div className="absolute -right-[2.5px] top-32 h-20 w-[2.5px] rounded-r bg-[#0c0c0f]" />
      <div className="relative rounded-[2.9rem] bg-[#0c0c0f] p-[10px] shadow-phone ring-1 ring-black/10">
        <div className="overflow-hidden rounded-[2.3rem] bg-[#efeae2]">
          <StatusBar time={statusTime} />
          <WaHeader contact={contact} initials={initials} />
          <div className={`wa-wall space-y-1.5 px-2.5 py-3 ${chatClassName}`}>
            {messages.map((m, i) => renderMsg(m, i, animate))}
          </div>
          {withInput && <WaInput />}
          <div className="flex justify-center bg-[#f7f7f7] pb-2 pt-0.5">
            <span className="h-1 w-32 rounded-full bg-black/25" />
          </div>
        </div>
      </div>
    </div>
  );
}
