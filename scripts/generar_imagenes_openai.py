#!/usr/bin/env python3
"""
ConversaCommerce — Generador de imágenes para la landing usando la API de OpenAI.
Lee OPENAI_API_KEY del .env de ConversaCommerce (o de la variable de entorno).
Intenta gpt-image-1 y, si la cuenta no está verificada para ese modelo, cae a dall-e-3.

Uso:
    python3 scripts/generar_imagenes_openai.py
    python3 scripts/generar_imagenes_openai.py --force
"""

import argparse
import base64
import json
import sys
import urllib.request
import urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent          # .../landing
OUTPUT_DIR = ROOT / "public" / "images"
ENV_CANDIDATES = [ROOT / ".env", ROOT.parent / ".env"]  # landing/.env, ConversaCommerce/.env
API_URL = "https://api.openai.com/v1/images/generations"

STYLE = (
    "Realistic professional photography, warm natural lighting, shallow depth of field, "
    "centered face, square framing. No text, no watermark, no logos."
)

IMAGENES = [
    {
        "salida": "avatar-1.png",
        "prompt": "A warm, authentic headshot photograph of a Latin American woman around 32 years old, "
                  "friendly genuine smile, owner of a small online cosmetics business, soft window light, "
                  "slightly blurred cozy home-office behind her, looking at the camera.",
    },
    {
        "salida": "avatar-2.png",
        "prompt": "A warm, authentic headshot photograph of a Latin American man around 30 years old, "
                  "confident friendly smile, casual entrepreneur running an online accessories store, "
                  "simple t-shirt, soft studio light, warm neutral background, looking at the camera.",
    },
    {
        "salida": "avatar-3.png",
        "prompt": "A warm, authentic headshot photograph of a Latin American woman around 28 years old, "
                  "relaxed natural smile, owner of an online fashion boutique, natural daylight, "
                  "softly blurred clothing rack behind her, looking at the camera.",
    },
]


def read_key():
    import os
    if os.environ.get("OPENAI_API_KEY"):
        return os.environ["OPENAI_API_KEY"].strip()
    for env in ENV_CANDIDATES:
        if env.exists():
            for line in env.read_text(encoding="utf-8").splitlines():
                line = line.strip()
                if line.startswith("OPENAI_API_KEY="):
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    return None


def call_api(key, model, prompt, size):
    body = {"model": model, "prompt": prompt, "n": 1, "size": size}
    if model == "gpt-image-1":
        body["quality"] = "medium"
    else:  # dall-e-3
        body["response_format"] = "b64_json"
        body["quality"] = "standard"
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(body).encode("utf-8"),
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return base64.b64decode(data["data"][0]["b64_json"])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    key = read_key()
    if not key:
        print("ERROR: no encontré OPENAI_API_KEY (ni en entorno ni en .env)")
        sys.exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    model = "gpt-image-1"
    print(f"Generando {len(IMAGENES)} imagen(es). Modelo inicial: {model}")
    ok = 0

    for item in IMAGENES:
        salida = OUTPUT_DIR / item["salida"]
        if salida.exists() and not args.force:
            print(f"  skip (existe): {item['salida']}")
            continue
        prompt = f"{item['prompt']} {STYLE}"
        for attempt_model in ([model] if model == "gpt-image-1" else [model]):
            try:
                img = call_api(key, model, prompt, "1024x1024")
                salida.write_bytes(img)
                print(f"  OK [{model}] -> public/images/{item['salida']} ({len(img)//1024} KB)")
                ok += 1
                break
            except urllib.error.HTTPError as e:
                detail = e.read().decode("utf-8", "ignore")[:300]
                if model == "gpt-image-1" and (e.code in (403, 400, 404)):
                    print(f"  gpt-image-1 no disponible ({e.code}). Cambiando a dall-e-3…")
                    print(f"    detalle: {detail}")
                    model = "dall-e-3"
                    try:
                        img = call_api(key, model, prompt, "1024x1024")
                        salida.write_bytes(img)
                        print(f"  OK [{model}] -> public/images/{item['salida']} ({len(img)//1024} KB)")
                        ok += 1
                    except Exception as e2:
                        print(f"  ERROR dall-e-3: {e2}")
                else:
                    print(f"  ERROR [{model}] {e.code}: {detail}")
                break
            except Exception as e:
                print(f"  ERROR: {e}")
                break

    print(f"\nListo. Generadas: {ok}/{len(IMAGENES)} (modelo final: {model})")
    sys.exit(0 if ok > 0 else 2)


if __name__ == "__main__":
    main()
