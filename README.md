# Klientia — Landing de ventas

Landing page de marketing (una sola página, secciones ancladas) para captar registros a la
prueba gratis de **Klientia**: el vendedor con IA para WhatsApp.

- **Stack:** Next.js 14 (App Router) + Tailwind CSS + lucide-react.
- **Idioma:** español LATAM. **Objetivo:** conversión (botón "Prueba gratis").
- **Independiente del monorepo:** vive en `landing/` y se despliega por separado (el
  `pnpm-workspace` solo incluye `apps/*` y `packages/*`, así que no interfiere con la app).

## Correr en local

```bash
cd landing
npm install
npm run dev      # http://localhost:3030
```

## Build de producción

El sitio se publica en `www.klientia.app` como **export estático** de Next
(`output: 'export'` en `next.config.mjs`, solo con `STATIC_EXPORT=true`). El comando real
usado hoy para el deploy (ver `publicar-landing.sh` en `SaasEcommerce/scripts`, que hace
`rsync` de `out/`):

```bash
STATIC_EXPORT=true NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXX NEXT_PUBLIC_WEB_CHAT_SITE_KEY=wk_xxxxxxxx pnpm build
```

Variables `NEXT_PUBLIC_*` relevantes en build (se hornean en el HTML/JS estático, no son secretas):

| Variable | Para qué | Default si falta |
|---|---|---|
| `NEXT_PUBLIC_WEB_CHAT_SITE_KEY` | Clave pública del **chat web** (widget) de la org Klientia, generada en `/admin` (`apps/api`) | No se define → `components/ChatWidget.tsx` no inyecta nada (el chat no aparece) |
| `NEXT_PUBLIC_WEB_CHAT_API_ORIGIN` | Origen de la API que sirve `widget.js` (solo se cambia para apuntar a otro entorno) | `https://api.klientia.app` |

Build/preview local en modo servidor de Node (sin export estático):

```bash
pnpm build
pnpm start        # sirve la versión optimizada
```

## Desplegar

| Plataforma | Cómo |
|---|---|
| **Vercel** | Importa el repo y pon *Root Directory* = `Personal/Klientia/landing`. Detecta Next.js solo. |
| **Netlify** | Base directory = `landing`, build `npm run build`, usa el plugin oficial de Next.js. |
| **Easypanel** | App tipo Node, build `npm run build`, start `npm start`, puerto `3000`. |

## Dónde se edita el contenido (sin tocar diseño)

Todo el copy, precios, planes, FAQ y testimonios viven en **un solo archivo**:

```
lib/content.tsx
```

- **Precios / planes:** array `PLANS` (cambia `price`, `features`, etc.).
- **Características:** `FEATURES`. **FAQ:** `FAQS`. **Testimonios:** `TESTIMONIALS`.
- **URL de registro:** constante `REGISTER_URL` (hoy `https://conversa.nextgencol.com/register`).
  Cada botón de plan ya enlaza con `?plan=BRONCE|PLATA|ORO` para preseleccionar.

## SEO

- Metadatos (título, descripción, OpenGraph, Twitter) en `app/layout.tsx`.
- Imagen social `og:image` generada por código en `app/opengraph-image.tsx` (1200×630, se
  pre-renderiza a PNG en el build — no depende de servicios externos).
- Favicon en `app/icon.svg`.

## Imágenes (opcional)

La landing **no necesita fotos externas**: avatares, ilustraciones y el chat de WhatsApp están
hechos con CSS/SVG. Si quieres añadir fotos reales (retratos de testimonios, lifestyle), hay un
generador con Gemini listo:

```bash
GEMINI_API_KEY=tu_key python3 scripts/generar_imagenes.py
```

Guarda los PNG en `public/images/`. Requiere un key de Gemini **con créditos**
(`gemini-2.5-flash-image`).
