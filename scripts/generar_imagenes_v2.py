#!/usr/bin/env python3
"""
ConversaCommerce — Imágenes premium (v2) para el rediseño minimal, usando OpenAI gpt-image-1.
Lee OPENAI_API_KEY del .env de ConversaCommerce. Estética: lifestyle cinematográfica, editorial,
color sobrio, mucho aire negativo. Realismo alto (no look de IA).
"""

import base64
import json
import sys
import urllib.request
import urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUTPUT_DIR = ROOT / "public" / "images"
ENV_CANDIDATES = [ROOT / ".env", ROOT.parent / ".env"]
API_URL = "https://api.openai.com/v1/images/generations"

STYLE = (
    "Premium editorial lifestyle photography. Realistic, candid, natural skin tones, soft directional "
    "natural light, shallow depth of field (50mm look), sophisticated muted color grade, lots of clean "
    "negative space, minimal modern aesthetic. Absolutely no text, no watermark, no logos, no visible "
    "screen UI."
)

IMAGENES = [
    {
        "salida": "ph-maria.png", "size": "1024x1024",
        "prompt": "Candid environmental portrait of a Latina entrepreneur around 33, owner of a small "
                  "skincare brand, in her bright minimal studio, holding her phone, neatly arranged "
                  "product boxes softly blurred behind, genuine relaxed smile, looking toward camera.",
    },
    {
        "salida": "ph-andres.png", "size": "1024x1024",
        "prompt": "Candid environmental portrait of a Latin American man around 30 who runs an online "
                  "tech-accessories store, at a clean minimal desk preparing an order, soft daylight, "
                  "confident friendly expression, looking at camera.",
    },
    {
        "salida": "ph-camila.png", "size": "1024x1024",
        "prompt": "Candid environmental portrait of a Latina woman around 28 who owns an online fashion "
                  "boutique, standing beside a minimalist neutral-tone clothing rack, soft natural light, "
                  "warm authentic smile.",
    },
    {
        "salida": "lifestyle-hands.png", "size": "1536x1024",
        "prompt": "Cinematic close-up of a Latin American entrepreneur's hands holding a smartphone over "
                  "a clean minimal light wood desk with a laptop and a single small plant, soft morning "
                  "light from the side, lots of negative space on the left, premium and calm mood.",
    },
    {
        "salida": "lifestyle-shop.png", "size": "1536x1024",
        "prompt": "A relaxed Latin American small-business owner in a tidy minimal home studio packing "
                  "online orders into shipping boxes, smiling softly, bright airy space with neutral "
                  "tones, wide composition with breathing room, warm but sophisticated.",
    },
]


def read_key():
    import os
    if os.environ.get("OPENAI_API_KEY"):
        return os.environ["OPENAI_API_KEY"].strip()
    for env in ENV_CANDIDATES:
        if env.exists():
            for line in env.read_text(encoding="utf-8").splitlines():
                if line.strip().startswith("OPENAI_API_KEY="):
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    return None


def call_api(key, model, prompt, size):
    body = {"model": model, "prompt": prompt, "n": 1, "size": size}
    if model == "gpt-image-1":
        body["quality"] = "high"
    else:
        body["response_format"] = "b64_json"
        body["quality"] = "hd"
        if size not in ("1024x1024", "1792x1024", "1024x1792"):
            body["size"] = "1792x1024" if size == "1536x1024" else "1024x1024"
    req = urllib.request.Request(
        API_URL, data=json.dumps(body).encode(),
        headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"}, method="POST",
    )
    with urllib.request.urlopen(req, timeout=180) as resp:
        return base64.b64decode(json.loads(resp.read())["data"][0]["b64_json"])


def main():
    key = read_key()
    if not key:
        print("ERROR: no OPENAI_API_KEY")
        sys.exit(1)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    model = "gpt-image-1"
    ok = 0
    print(f"Generando {len(IMAGENES)} imágenes premium con {model}…")
    for it in IMAGENES:
        out = OUTPUT_DIR / it["salida"]
        prompt = f"{it['prompt']} {STYLE}"
        try:
            img = call_api(key, model, prompt, it["size"])
            out.write_bytes(img)
            print(f"  OK [{model}] {it['salida']} ({len(img)//1024} KB)")
            ok += 1
        except urllib.error.HTTPError as e:
            detail = e.read().decode("utf-8", "ignore")[:200]
            if model == "gpt-image-1" and e.code in (400, 403, 404):
                print(f"  gpt-image-1 no disp ({e.code}); paso a dall-e-3. {detail}")
                model = "dall-e-3"
                try:
                    img = call_api(key, model, prompt, it["size"])
                    out.write_bytes(img)
                    print(f"  OK [dall-e-3] {it['salida']} ({len(img)//1024} KB)")
                    ok += 1
                except Exception as e2:
                    print(f"  ERROR dall-e-3 {it['salida']}: {e2}")
            else:
                print(f"  ERROR [{model}] {it['salida']} {e.code}: {detail}")
        except Exception as e:
            print(f"  ERROR {it['salida']}: {e}")

    print(f"\nListo. {ok}/{len(IMAGENES)} (modelo final: {model})")
    sys.exit(0 if ok else 2)


if __name__ == "__main__":
    main()
