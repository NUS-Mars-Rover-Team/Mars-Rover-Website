# Homepage — Editing Guide

**Files to edit:** `content.json`  
**Page affected:** `/homepage` (the main landing page)

---

## Editing Text

### Hero section (top banner)

```json
"hero": {
  "overline": "National University of Singapore",
  "title": "NUS Mars Rover Team",
  "subtitle": "A multidisciplinary student team...",
  "stats": [
    { "label": "Members", "value": "30+" },
    { "label": "Years Active", "value": "3+" }
  ]
}
```

- **overline** — small text above the title
- **title** — large heading (split across two lines automatically)
- **subtitle** — short description paragraph
- **stats** — the two number callouts (e.g. "30+ Members"). Edit `value` and `label` as needed

### Who We Are section

```json
"about": {
  "heading": "Engineers, Researchers, and Explorers",
  "paragraphs": ["Paragraph one...", "Paragraph two..."],
  "subsystems": [
    { "title": "Autonav", "desc": "Autonomous GPS + terrain navigation" },
    ...
  ]
}
```

- **paragraphs** — array of text blocks shown under the heading. Add or remove strings to add/remove paragraphs.
- **subsystems** — the 6 clickable cards linking to the Rovers page. Edit `title` and `desc` for each card.

### SAR Video section

```json
"sarVideo": {
  "heading": "Our 2026 SAR Video",
  "description": "Watch our full System Acceptance Review...",
  "embedUrl": "https://www.youtube.com/embed/VIDEO_ID"
}
```

To update the video, replace the `embedUrl` with a new YouTube embed link. The embed URL format is `https://www.youtube.com/embed/VIDEO_ID` (not the regular watch URL).

---

## Rover Gallery Images

The gallery section uses these image files in this folder:

| JSON field | Filename | Slot |
|-----------|----------|------|
| `featuredImage` | `rover-photo.png` | Large featured image |
| `sideImages[0]` | `rover-photo-2.png` | Side vertical image (portrait orientation) |
| `bottomImages[0]` | `rover-photo-4.png` | Bottom row 1 |
| `bottomImages[1]` | `rover-photo-5.png` | Bottom row 2 |
| `bottomImages[2]` | `rover-photo-6.png` | Bottom row 3 |
| `bottomImages[3]` | `rover-photo-7.png` | Bottom row 4 |

**To add a gallery photo:**

1. Name your file exactly as listed above (e.g. `rover-photo-2.png`)
2. Place it in this folder (`frontend/data/homepage/`)
3. The gallery will display it automatically — no JSON change needed since filenames are already set

**To replace a photo:** Overwrite the existing file with the same filename.

## Replacing the Hero Background

Replace `hero-bg.png` in this folder with your new image. Keep the filename exactly `hero-bg.png`.
