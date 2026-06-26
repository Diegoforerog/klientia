import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tinta (texto) — escala neutra fría, casi negra
        ink: {
          DEFAULT: '#0a0a0b',
          soft: '#3f3f46',
          mute: '#71717a',
          faint: '#a1a1aa',
        },
        // Superficies y líneas
        surface: '#ffffff',
        subtle: '#fafafa',
        panel: '#f5f5f6',
        line: '#ededf0',
        line2: '#e3e3e7',
        // Acento de marca (índigo) — único color, usado con moderación
        brand: {
          50: '#eef1ff',
          100: '#e0e4ff',
          200: '#c6ccff',
          300: '#a3a8ff',
          400: '#8184fb',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#2e2a7d',
          950: '#1b1840',
        },
        violetx: '#7c3aed',
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
      },
      letterSpacing: {
        tighter: '-0.03em',
        tightest: '-0.045em',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(10,10,11,0.05)',
        sm: '0 1px 3px rgba(10,10,11,0.06), 0 1px 2px rgba(10,10,11,0.04)',
        md: '0 10px 30px -14px rgba(10,10,11,0.14), 0 2px 6px -2px rgba(10,10,11,0.06)',
        lift: '0 24px 60px -28px rgba(10,10,11,0.22)',
        phone: '0 50px 90px -36px rgba(10,10,11,0.40), 0 8px 24px -12px rgba(10,10,11,0.18)',
        ring: '0 0 0 1px rgba(10,10,11,0.06)',
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
