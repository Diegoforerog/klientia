#!/usr/bin/env python3
"""
Klientia — Generador de imágenes de la landing (OpenAI gpt-image-1).

Reemplaza las fotos "de stock" por fotografía editorial auténtica.
Genera EXACTAMENTE los archivos que la landing ya usa, con el tamaño
correcto para cada encuadre.

Lee OPENAI_API_KEY de la variable de entorno o del .env (landing/.env o
ConversaCommerce/.env). Usa gpt-image-1; si la cuenta no está verificada,
cae a dall-e-3.

Uso:
    python3 scripts/generar_imagenes_klientia.py                 # genera lo que falte
    python3 scripts/generar_imagenes_klientia.py --force         # regenera todo
    python3 scripts/generar_imagenes_klientia.py --only ph-maria.jpg,lifestyle-hands.jpg
"""

import argparse
import base64
import json
import sys
import urllib.request
import urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent            # .../landing
OUTPUT_DIR = ROOT / "public" / "images"
ENV_CANDIDATES = [ROOT / ".env", ROOT.parent / ".env"]   # landing/.env, ConversaCommerce/.env
API_URL = "https://api.openai.com/v1/images/generations"

# Lenguaje fotográfico compartido: editorial, auténtico, NADA de stock/PPTX.
STYLE = (
    "Authentic editorial lifestyle photography, shot on a full-frame camera with an 85mm lens "
    "at f/2.0, natural window light, true-to-life colours, candid unposed real moment, subtle "
    "film grain, high dynamic range, sharp focus with creamy background blur, magazine quality. "
    "Real Latin American small-business owner, natural skin texture, genuine expression. "
    "Photojournalistic — NOT staged corporate stock, no plastic AI look. "
    "No text, no watermark, no logos, no readable brand names, no on-screen UI text."
)

IMAGENES = [
    # ── Imágenes grandes y protagónicas ──────────────────────────────
    {
        "salida": "lifestyle-hands.jpg",
        "size": "1536x1024",
        "quality": "high",
        "prompt": (
            "Warm close-up of a young Latina entrepreneur's hands holding a modern smartphone "
            "at a light oak desk in a bright, airy home studio. The phone screen is softly out of "
            "focus (no readable interface). Behind her, gently blurred: neatly stacked kraft shipping "
            "boxes, a small green plant and a laptop. Soft morning light from a side window, relaxed "
            "confident mood, cohesive warm palette with a subtle indigo accent."
        ),
    },
    {
        "salida": "lifestyle-shop.jpg",
        "size": "1536x1024",
        "quality": "high",
        "prompt": (
            "Cinematic portrait of a confident Latina small-business owner standing in her boutique "
            "workshop, positioned on the RIGHT side of the frame among neatly organised shelves of "
            "products and kraft shipping boxes. She glances slightly off-camera with a subtle, genuine "
            "smile, phone in hand. Rich, warm, slightly moody light. Deliberate empty negative space "
            "on the LEFT third of the frame (darker, for text overlay). Elegant, premium, editorial."
        ),
    },
    # ── Retratos de testimonios (se ven en círculos pequeños) ─────────
    {
        "salida": "ph-maria.jpg",
        "size": "1024x1024",
        "quality": "medium",
        "prompt": (
            "Editorial headshot portrait of a Latina woman in her early 30s (María José, Bogotá), "
            "warm genuine smile, owner of a small online cosmetics shop, holding a smartphone. Cozy, "
            "bright home office; softly blurred shelves with beauty products behind her. Natural "
            "daylight, centred, looking at the camera."
        ),
    },
    {
        "salida": "ph-andres.jpg",
        "size": "1024x1024",
        "quality": "medium",
        "prompt": (
            "Editorial headshot portrait of a Latino man around 30 (Andrés, Mexico City), friendly "
            "confident smile, casual entrepreneur running an online tech-accessories store, simple "
            "t-shirt. At his desk, a laptop and a couple of gadget boxes softly blurred behind him. "
            "Warm neutral light, centred, looking at the camera."
        ),
    },
    {
        "salida": "ph-camila.jpg",
        "size": "1024x1024",
        "quality": "medium",
        "prompt": (
            "Editorial headshot portrait of a young Latina woman around 28 (Camila, Santiago), "
            "relaxed natural smile, owner of a women's fashion boutique, standing beside a clothing "
            "rack that is softly blurred behind her. Natural daylight, centred, looking at the camera."
        ),
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


def call_api(key, model, prompt, size, quality):
    body = {"model": model, "prompt": prompt, "n": 1, "size": size}
    if model == "gpt-image-1":
        body["quality"] = quality            # low | medium | high
        body["output_format"] = "jpeg"
    else:  # dall-e-3
        body["response_format"] = "b64_json"
        body["quality"] = "hd"
        # dall-e-3 solo acepta 1024x1024 / 1792x1024 / 1024x1792
        body["size"] = "1792x1024" if size == "1536x1024" else "1024x1024"
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(body).encode("utf-8"),
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=180) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return base64.b64decode(data["data"][0]["b64_json"])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--only", default="", help="lista separada por comas de nombres de salida")
    args = parser.parse_args()

    only = {s.strip() for s in args.only.split(",") if s.strip()}

    key = read_key()
    if not key:
        print("ERROR: no encontré OPENAI_API_KEY (ni en entorno ni en .env)")
        sys.exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    model = "gpt-image-1"
    objetivo = [it for it in IMAGENES if not only or it["salida"] in only]
    print(f"Generando {len(objetivo)} imagen(es). Modelo inicial: {model}")
    ok = 0

    for item in objetivo:
        salida = OUTPUT_DIR / item["salida"]
        if salida.exists() and not args.force and not only:
            print(f"  skip (existe): {item['salida']}")
            continue
        prompt = f"{item['prompt']} {STYLE}"
        try:
            img = call_api(key, model, prompt, item["size"], item.get("quality", "high"))
            salida.write_bytes(img)
            print(f"  OK [{model}] -> public/images/{item['salida']} ({len(img)//1024} KB)")
            ok += 1
        except urllib.error.HTTPError as e:
            detail = e.read().decode("utf-8", "ignore")[:400]
            if model == "gpt-image-1" and e.code in (400, 403, 404):
                print(f"  gpt-image-1 no disponible ({e.code}). Cambiando a dall-e-3…\n    {detail}")
                model = "dall-e-3"
                try:
                    img = call_api(key, model, prompt, item["size"], item.get("quality", "high"))
                    salida.write_bytes(img)
                    print(f"  OK [{model}] -> public/images/{item['salida']} ({len(img)//1024} KB)")
                    ok += 1
                except Exception as e2:
                    print(f"  ERROR dall-e-3: {e2}")
            else:
                print(f"  ERROR [{model}] {e.code}: {detail}")
        except Exception as e:
            print(f"  ERROR: {e}")

    print(f"\nListo. Generadas: {ok}/{len(objetivo)} (modelo final: {model})")
    sys.exit(0 if ok > 0 else 2)


if __name__ == "__main__":
    main()
