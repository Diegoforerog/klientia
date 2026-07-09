import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tinta (texto) — escala slate (neutros fríos que armonizan con el azul)
        ink: {
          DEFAULT: '#0f172a',
          soft: '#334155',
          mute: '#64748b',
          faint: '#94a3b8',
        },
        // Superficies y líneas (tinte frío muy sutil)
        surface: '#ffffff',
        subtle: '#f8fafc',
        panel: '#f1f5f9',
        line: '#e7edf4',
        line2: '#dbe3ec',
        // Acento de marca (azul confianza) — único color, usado con moderación
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        skyx: '#0ea5e9',
        // Verde WhatsApp (solo dentro de los chats)
        wa: {
          green: '#25d366',
          deep: '#075e54',
          header: '#f0f2f5',
          headerInk: '#111b21',
          bubble: '#d9fdd3',
          bubbleIn: '#ffffff',
          wall: '#efeae2',
          tick: '#34b7f1',
          meta: '#667781',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        // Rubik es geométrica: menos tracking negativo que Manrope
        tighter: '-0.02em',
        tightest: '-0.03em',
      },
      transitionTimingFunction: {
        // Curvas con carácter (Emil Kowalski): las nativas de CSS son débiles
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
        drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(15,23,42,0.05)',
        sm: '0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)',
        md: '0 10px 30px -14px rgba(15,23,42,0.14), 0 2px 6px -2px rgba(15,23,42,0.06)',
        lift: '0 24px 60px -28px rgba(15,23,42,0.22)',
        phone: '0 50px 90px -36px rgba(15,23,42,0.40), 0 8px 24px -12px rgba(15,23,42,0.18)',
        ring: '0 0 0 1px rgba(15,23,42,0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'msg-in': {
          from: { opacity: '0', transform: 'translateY(12px) scale(0.97)' },
          to: { opacity: '1', transform: 'none' },
        },
        'typing-dot': {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.35' },
          '30%': { transform: 'translateY(-4px)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
        'typing-dot': 'typing-dot 1.2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
