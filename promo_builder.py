import os
import zipfile
import numpy as np
from moviepy.editor import (
    TextClip,
    CompositeVideoClip,
    ColorClip,
    concatenate_videoclips,
    vfx
)
from moviepy.video.VideoClip import VideoClip
from moviepy.video.tools.drawing import color_gradient

# -------------------------
# CONFIG
# -------------------------
W, H = 1080, 1080
FONT = "Arial-Bold"  # swap for Orbitron/Exo if installed
COLOR_BG = (10, 10, 15)
COLOR_TXT = "lime"

DUR_FULL = 18
DUR_SHORT = 9

OUT_DIR = "promo_videos"
ZIP_NAME = "promo_pack.zip"

# -------------------------
# BACKGROUND EFFECTS
# -------------------------
def animated_grid(t):
    """Create a faint moving grid effect"""
    frame = np.zeros((H, W, 3), dtype=np.uint8)
    step = 80
    offset = int(t * 30) % step
    for x in range(0, W, step):
        frame[:, (x + offset) % W] = (20, 40, 20)
    for y in range(0, H, step):
        frame[(y + offset) % H, :] = (20, 40, 20)
    return frame

def glowing_background(duration):
    """Composite base color + animated grid + faint glow pulse"""
    base = ColorClip(size=(W, H), color=COLOR_BG, duration=duration)

    grid = VideoClip(animated_grid, duration=duration)
    grid = grid.set_opacity(0.15)

    glow = ColorClip(size=(W, H), color=(50, 255, 50), duration=duration)
    glow = glow.fx(vfx.fadein, 1).fx(vfx.fadeout, 1).set_opacity(0.05)

    return CompositeVideoClip([base, grid, glow])


# -------------------------
# TEXT HELPERS
# -------------------------
def make_text(txt, fontsize=80, duration=3, effect="fade"):
    """Create styled text with effects"""
    clip = (
        TextClip(
            txt,
            fontsize=fontsize,
            color=COLOR_TXT,
            font=FONT,
            size=(W, None),
            method="caption",
            align="center",
        )
        .set_position("center")
        .set_duration(duration)
    )

    if effect == "fade":
        clip = clip.crossfadein(0.5).crossfadeout(0.5)
    elif effect == "slide_up":
        clip = clip.set_start(0).fx(vfx.slide_in, duration=0.7, side="bottom")
    elif effect == "slide_down":
        clip = clip.set_start(0).fx(vfx.slide_in, duration=0.7, side="top")
    elif effect == "zoom":
        clip = clip.fx(vfx.resize, 1.2).fx(vfx.fadein, 0.5).fx(vfx.fadeout, 0.5)

    return clip


# -------------------------
# BUILD SEQUENCES
# -------------------------
def build_sequence(mode="full"):
    duration = DUR_FULL if mode == "full" else DUR_SHORT
    bg = glowing_background(duration)

    clips = []

    if mode == "full":
        clips += [
            make_text("THE FUT DASHBOARD", fontsize=90, duration=3, effect="fade"),
            make_text("TRACK.", duration=2, effect="slide_up"),
            make_text("TRADE.", duration=2, effect="slide_down"),
            make_text("PROFIT.", duration=2, effect="slide_up"),
            make_text("Profit Graphs 📊", fontsize=70, duration=3, effect="fade"),
            make_text("Trade Logging 💰", fontsize=70, duration=3, effect="fade"),
            make_text("Tax Calculator ⚡", fontsize=70, duration=3, effect="fade"),
            make_text("COMING SOON 🚀", fontsize=90, duration=3, effect="zoom"),
        ]
    else:
        clips += [
            make_text("TRACK. TRADE. PROFIT.", fontsize=90, duration=4, effect="slide_up"),
            make_text("COMING SOON 🚀", fontsize=90, duration=5, effect="zoom"),
        ]

    seq = concatenate_videoclips(clips, method="compose")
    return CompositeVideoClip([bg, seq])


# -------------------------
# MAIN
# -------------------------
def main():
    os.makedirs(OUT_DIR, exist_ok=True)

    for mode in ["full", "short"]:
        clip = build_sequence(mode=mode)

        silent_path = os.path.join(OUT_DIR, f"promo_{mode}_silent.mp4")
        clip.write_videofile(silent_path, fps=24, audio=False)

        sound_path = os.path.join(OUT_DIR, f"promo_{mode}_sound.mp4")
        clip.write_videofile(sound_path, fps=24, audio=False)

        clip.close()

    with zipfile.ZipFile(ZIP_NAME, "w") as zf:
        for f in os.listdir(OUT_DIR):
            zf.write(os.path.join(OUT_DIR, f), f)

        readme = """Promo Video Pack
-----------------
Files:
- promo_full_sound.mp4 (18s, visuals only)
- promo_full_silent.mp4 (18s, silent)
- promo_short_sound.mp4 (9s, visuals only)
- promo_short_silent.mp4 (9s, silent)

Features:
- Animated grid background
- Neon lime glow pulses
- Text slide, fade, zoom effects

To add audio:
1. from moviepy.editor import AudioFileClip
2. clip = clip.set_audio(AudioFileClip("yourtrack.mp3"))
3. Re-render *_sound.mp4 versions.
"""
        with open("readme.txt", "w") as f:
            f.write(readme)
        zf.write("readme.txt")

    print(f"✅ Promo videos created and zipped into {ZIP_NAME}")


if __name__ == "__main__":
    main()