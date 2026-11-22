"""Generates the app icons in public/icons. Run: python3 scripts/make_icons.py (needs Pillow)."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / "public" / "icons"
OUT.mkdir(parents=True, exist_ok=True)

NAVY = (15, 23, 42)
STRIPES = [(0, 0, 0), (221, 0, 0), (255, 206, 0)]


def font(size: int):
    for path in [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
        "C:/Windows/Fonts/arialbd.ttf",
    ]:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def make(size: int, maskable: bool = False) -> Image.Image:
    img = Image.new("RGBA", (size, size), NAVY + (255,))
    d = ImageDraw.Draw(img)
    pad = int(size * (0.22 if maskable else 0.14))  # maskable icons need a safe zone
    # flag bar at the bottom of the safe zone
    bar_h = max(2, size // 22)
    bar_w = size - 2 * pad
    y = size - pad - bar_h
    for i, colour in enumerate(STRIPES):
        x0 = pad + i * bar_w // 3
        d.rectangle([x0, y, pad + (i + 1) * bar_w // 3, y + bar_h], fill=colour)
    # "De" lettering
    f = font(int(size * (0.36 if maskable else 0.44)))
    text = "De"
    box = d.textbbox((0, 0), text, font=f)
    tw, th = box[2] - box[0], box[3] - box[1]
    d.text(((size - tw) / 2 - box[0], (y - th) / 2 - box[1] + pad * 0.2), text, font=f, fill=(255, 255, 255))
    return img


make(192).save(OUT / "icon-192.png")
make(512).save(OUT / "icon-512.png")
make(512, maskable=True).save(OUT / "icon-maskable-512.png")
make(180).save(OUT / "apple-touch-icon.png")
make(48).save(OUT.parent.parent / "src" / "app" / "favicon.ico", sizes=[(48, 48)])
print("icons written to", OUT)
