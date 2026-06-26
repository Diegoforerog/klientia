#!/usr/bin/env python3
"""
ConversaCommerce — Generador de imágenes para la landing (Gemini 2.5 Flash Image / Nano Banana).

Uso:
    GEMINI_API_KEY=... python3 scripts/generar_imagenes.py
    GEMINI_API_KEY=... python3 scripts/generar_imagenes.py --force
"""

import argparse
import os
import sys
import time
from pathlib import Path

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("ERROR: falta google-genai  ->  pip install google-genai")
    sys.exit(1)

ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = ROOT / "public" / "images"
MODELO = "gemini-2.5-flash-image"

ESTILO_BASE = (
    "Premium marketing photography for a modern SaaS brand. Warm, friendly, trustworthy, "
    "Latin American context. Soft natural lighting, shallow depth of field, clean warm cream "
    "and subtle indigo tones. Authentic, not stocky. No text, no watermarks, no logos, "
    "no UI overlays in the image."
)

IMAGENES = [
    {
        "id": "avatar-maria",
        "salida": "avatar-1.png",
        "prompt": (
            "Authentic portrait headshot of a Latin American woman in her early 30s, owner of a "
            "small online cosmetics shop. Warm genuine smile, looking at the camera, soft natural "
            "window light, cozy home-office softly blurred behind her. Square crop, face centered."
        ),
    },
    {
        "id": "avatar-andres",
        "salida": "avatar-2.png",
        "prompt": (
            "Authentic portrait headshot of a Latin American man in his late 20s, casual "
            "entrepreneur who runs an online accessories store. Confident friendly smile, simple "
            "t-shirt, soft studio light, warm neutral background. Square crop, face centered."
        ),
    },
    {
        "id": "avatar-camila",
        "salida": "avatar-3.png",
        "prompt": (
            "Authentic portrait headshot of a Latin American woman in her late 20s, owner of an "
            "online fashion boutique. Warm relaxed smile, natural daylight, softly blurred "
            "clothing rack behind her. Square crop, face centered."
        ),
    },
    {
        "id": "lifestyle-founder",
        "salida": "lifestyle-founder.png",
        "prompt": (
            "Lifestyle landscape photo: a happy Latin American small-business owner sitting at a "
            "bright table, smiling while holding a smartphone, a laptop open beside them and a few "
            "neat shipping boxes ready to send. Cozy modern home workspace, warm natural light, "
            "relaxed and successful mood. Wide 16:9 composition."
        ),
    },
    {
        "id": "product-serum",
        "salida": "product-serum.png",
        "prompt": (
            "Clean e-commerce product photo of a single premium skincare serum bottle with a "
            "dropper, minimal, soft shadow, on a warm cream seamless background, centered, "
            "studio lighting. Square crop."
        ),
    },
    {
        "id": "og-cover",
        "salida": "og-cover.png",
        "prompt": (
            "Premium 3D product render for a social share cover: a floating smartphone showing a "
            "bright green chat bubble, next to a glowing indigo-violet shopping bag icon and a "
            "small coin/payment icon, soft indigo and violet gradient background with warm cream "
            "accents and gentle glow, lots of negative space. Wide 16:9 cinematic composition, "
            "modern, clean, depth of field."
        ),
    },
]


def construir_prompt(item):
    return (
        f"{item['prompt']}\n\nStyle guidelines: {ESTILO_BASE}\n"
        "Output exactly one image. Absolutely no text, letters, numbers or watermarks in the image."
    )


def generar(client, item, force):
    salida = OUTPUT_DIR / item["salida"]
    if salida.exists() and not force:
        print(f"  skip (existe): {item['salida']}")
        return "skip"
    try:
        resp = client.models.generate_content(
            model=MODELO,
            contents=[construir_prompt(item)],
            config=types.GenerateContentConfig(response_modalities=["IMAGE", "TEXT"]),
        )
    except Exception as e:
        print(f"  ERROR API en {item['id']}: {e}")
        return "error"

    data = None
    for cand in resp.candidates or []:
        for part in (cand.content.parts if cand.content else []) or []:
            if getattr(part, "inline_data", None) and part.inline_data.data:
                data = part.inline_data.data
                break
        if data:
            break

    if not data:
        print(f"  ERROR: sin imagen para {item['id']}")
        return "error"

    salida.parent.mkdir(parents=True, exist_ok=True)
    with open(salida, "wb") as f:
        f.write(data)
    print(f"  OK  -> public/images/{item['salida']}")
    return "ok"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--id", dest="uid")
    args = parser.parse_args()

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERROR: define GEMINI_API_KEY en el entorno")
        sys.exit(1)

    client = genai.Client(api_key=api_key)
    items = [i for i in IMAGENES if (not args.uid or i["id"] == args.uid)]
    print(f"Generando {len(items)} imagen(es) con {MODELO}...")

    res = {"ok": 0, "skip": 0, "error": 0}
    for it in items:
        print(f"\n-> {it['id']}")
        r = generar(client, it, args.force)
        res[r] = res.get(r, 0) + 1
        time.sleep(1.5)

    print(f"\nListo. OK={res['ok']} skip={res['skip']} error={res['error']}")
    if res["error"]:
        sys.exit(2)


if __name__ == "__main__":
    main()
