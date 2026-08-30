# Cabeceras de seguridad de la landing — cómo aplicar (T1, auditoría Ciber, Alta)

**Estado: PREPARADO, NO APLICADO.** Va en el mismo deploy del lote de Marca, con el Go de Diego.

## Por qué aquí y no en `next.config`
La landing se publica como **export estático** (`output: 'export'` en `next.config.mjs`, para www.klientia.app). En un export estático **no corre un servidor Node**, así que la función `headers()` de Next **no se ejecuta**. Las cabeceras HTTP tienen que ponerlas el **nginx / Traefik** que sirve los archivos. Por eso el bloque queda versionado en [`security-headers.conf`](./security-headers.conf) y se referencia desde la config del servidor.

> El riesgo Alta es **clickjacking** en la puerta de registro: sin `X-Frame-Options`/`frame-ancestors` la landing se puede incrustar en un iframe y superponer los CTAs hacia `app.klientia.app/register`.

## Opción A — nginx (recomendada)
En el `server { … }` (o `location /`) que sirve la landing, agregar:
```nginx
include /ruta/al/repo/klientia-landing/deploy/security-headers.conf;
```
o pegar el contenido del `.conf` directamente en el bloque. Recargar nginx: `nginx -t && nginx -s reload`.

## Opción B — Easypanel (si sirve el estático por su proxy)
En el servicio de la landing → **Advanced / Custom nginx config** (o el campo de headers del proxy), pegar las líneas `add_header … always;` del `.conf`.

## Opción C — Traefik (si el sitio pasa por Traefik, como indica la topología del VPS)
Definir un middleware `headers` y engancharlo al router de la landing (labels o dynamic config). Equivalencias:
- `customFrameOptionsValue: "DENY"`
- `stsSeconds: 31536000`, `stsIncludeSubdomains: true`
- `contentTypeNosniff: true`
- `referrerPolicy: "strict-origin-when-cross-origin"`
- `customResponseHeaders`: `Content-Security-Policy` y `Permissions-Policy` (copiar los valores del `.conf`).

## ✅ Verificación antes de cerrar (Marca/DevOps)
1. Abrir www.klientia.app y confirmar que carga bien: **fuentes**, imágenes, y **pixels** (Meta/TikTok/GA4) — la consola del navegador NO debe mostrar bloqueos por CSP.
2. Confirmar cabeceras: `curl -sI https://www.klientia.app | grep -iE "x-frame|content-security|strict-transport|nosniff|referrer|permissions"`.
3. Probar el anti-clickjacking: intentar incrustar la landing en un `<iframe>` de prueba → debe ser bloqueado.

## Endurecer más adelante (opcional, backlog)
La CSP es pragmática (img/connect abiertos a `https:` por los pixels). Cuando haya tiempo, enumerar hosts exactos en `img-src`/`connect-src` y evaluar quitar `'unsafe-inline'` de `script-src` (requiere nonces/hashes para los bootstraps de los pixels).
