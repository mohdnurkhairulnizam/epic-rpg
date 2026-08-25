from PIL import Image, ImageDraw
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "assets"
OUT.mkdir(parents=True, exist_ok=True)


def draw_pixel_chest(size: int, transparent: bool = False) -> Image.Image:
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0) if transparent else (24, 49, 38, 255))
    draw = ImageDraw.Draw(image)
    unit = size // 32
    ox = unit * 4
    oy = unit * 5
    chest_w = unit * 24
    chest_h = unit * 20

    # Low-key forest/stone pixel background for the standalone icon.
    if not transparent:
        draw.rectangle([0, 0, size - 1, size - 1], fill="#183126")
        for y in range(0, size, unit * 2):
            for x in range(0, size, unit * 2):
                if (x // unit + y // unit) % 3 == 0:
                    draw.rectangle([x, y, x + unit - 1, y + unit - 1], fill="#214333")

    # Drop shadow.
    draw.rectangle([ox + unit * 2, oy + chest_h + unit * 2, ox + chest_w + unit * 2, oy + chest_h + unit * 4], fill="#0c1712")

    # Chest outline and body.
    outline = "#26170f"
    dark_wood = "#5a321b"
    wood = "#8a5128"
    light_wood = "#b87838"
    gold = "#f6c453"
    gold_dark = "#a8751c"
    draw.rectangle([ox, oy + unit * 6, ox + chest_w, oy + chest_h], fill=outline)
    draw.rectangle([ox + unit, oy + unit * 7, ox + chest_w - unit, oy + chest_h - unit], fill=dark_wood)
    draw.rectangle([ox + unit * 2, oy + unit * 8, ox + chest_w - unit * 2, oy + unit * 13], fill=wood)
    draw.rectangle([ox + unit * 2, oy + unit * 14, ox + chest_w - unit * 2, oy + chest_h - unit * 2], fill=wood)

    # Lid, rim, and pixel highlights.
    draw.rectangle([ox + unit * 2, oy + unit * 3, ox + chest_w - unit * 2, oy + unit * 7], fill=outline)
    draw.rectangle([ox + unit * 3, oy + unit * 4, ox + chest_w - unit * 3, oy + unit * 6], fill=light_wood)
    draw.rectangle([ox + unit * 4, oy + unit * 5, ox + chest_w - unit * 5, oy + unit * 6], fill="#d99b4a")
    draw.rectangle([ox + unit * 3, oy + unit * 8, ox + unit * 5, oy + unit * 12], fill="#d19149")
    draw.rectangle([ox + unit * 4, oy + unit * 15, ox + unit * 7, oy + unit * 17], fill="#b87335")
    draw.rectangle([ox + unit * 17, oy + unit * 15, ox + unit * 21, oy + unit * 17], fill="#6b3d20")

    # Iron/gold band and latch.
    draw.rectangle([ox + unit * 13, oy + unit * 7, ox + unit * 16, oy + chest_h - unit], fill=gold_dark)
    draw.rectangle([ox + unit * 14, oy + unit * 7, ox + unit * 15, oy + chest_h - unit], fill=gold)
    draw.rectangle([ox + unit * 12, oy + unit * 12, ox + unit * 17, oy + unit * 17], fill=outline)
    draw.rectangle([ox + unit * 13, oy + unit * 13, ox + unit * 16, oy + unit * 16], fill=gold)
    draw.rectangle([ox + unit * 14, oy + unit * 14, ox + unit * 15, oy + unit * 16], fill="#fff0a6")

    # Emerald pixel on the lid.
    emerald = "#36d184"
    emerald_dark = "#126d4a"
    cx = ox + chest_w // 2
    draw.rectangle([cx - unit * 3, oy, cx + unit * 3, oy + unit * 3], fill=outline)
    draw.rectangle([cx - unit * 2, oy - unit, cx + unit * 2, oy + unit * 2], fill=emerald_dark)
    draw.rectangle([cx - unit, oy - unit * 2, cx + unit, oy + unit], fill=emerald)
    draw.rectangle([cx - unit, oy - unit * 2, cx, oy - unit], fill="#b8ffd4")

    return image


icon = draw_pixel_chest(1024, transparent=False)
icon.save(OUT / "epic-rpg-icon.png", optimize=True)
foreground = draw_pixel_chest(432, transparent=True)
foreground.save(OUT / "epic-rpg-foreground.png", optimize=True)

splash = Image.new("RGBA", (1600, 900), "#183126")
splash_draw = ImageDraw.Draw(splash)
for y in range(0, 900, 56):
    for x in range(0, 1600, 56):
        if (x // 56 + y // 56) % 3 == 0:
            splash_draw.rectangle([x, y, x + 28, y + 28], fill="#214333")
chest = draw_pixel_chest(512, transparent=True)
splash.alpha_composite(chest, ((1600 - chest.width) // 2, 150))
splash.save(OUT / "epic-rpg-splash.png", optimize=True)

# Android launcher density resources.
DENSITIES = {
    "mdpi": 48,
    "hdpi": 72,
    "xhdpi": 96,
    "xxhdpi": 144,
    "xxxhdpi": 192,
}
RES = Path(__file__).resolve().parents[1] / "android" / "app" / "src" / "main" / "res"
for density, px in DENSITIES.items():
    folder = RES / f"mipmap-{density}"
    folder.mkdir(parents=True, exist_ok=True)
    icon.resize((px, px), Image.Resampling.LANCZOS).save(folder / "ic_launcher.png", optimize=True)
    icon.resize((px, px), Image.Resampling.LANCZOS).save(folder / "ic_launcher_round.png", optimize=True)
    foreground.resize((px, px), Image.Resampling.LANCZOS).save(folder / "ic_launcher_foreground.png", optimize=True)

# The adaptive icon XML uses a color background and transparent foreground.
