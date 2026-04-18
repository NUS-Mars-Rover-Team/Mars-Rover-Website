# About Us Page — Editing Guide

**File to edit:** `content.json`  
**Page affected:** `/aboutus`

---

## Editing Text

### Mission and Vision

```json
{
  "mission": "We bridge the gap between...",
  "vision": "To serve as a premier..."
}
```

Replace the string values directly. Keep them as a single line of text.

---

### Outreach Goals

Each goal has a `title`, `description`, and up to 3 `images`:

```json
"outreachGoals": [
  {
    "title": "University Outreach",
    "description": "Engaging NUS students...",
    "images": [null, null, null]
  },
  ...
]
```

- **title** — heading shown on the page
- **description** — paragraph below the heading
- **images** — up to 3 photo slots (see below)

---

## Adding a Photo to an Outreach Goal

Each outreach goal supports up to **3 images**. Images are named using this pattern:

| Goal | Image names |
|------|------------|
| University Outreach | `university_outreach_1.png`, `university_outreach_2.png`, `university_outreach_3.png` |
| STEM Education | `stem_education_1.png`, `stem_education_2.png`, `stem_education_3.png` |
| Industry Partnerships | `industry_partnerships_1.png`, `industry_partnerships_2.png`, `industry_partnerships_3.png` |

**Steps:**

1. Name your photo file exactly as shown above (e.g. `university_outreach_1.png`)
2. Place the file in this folder (`frontend/data/aboutus/`)
3. Open `content.json` and replace the matching `null` with the filename in quotes:

```json
"images": ["university_outreach_1.png", null, null]
```

## Removing a Photo

Set the filename back to `null` and delete the image file from this folder:

```json
"images": [null, null, null]
```

## Replacing the Hero Background

Replace `hero-bg.png` in this folder with your new image. Keep the filename exactly `hero-bg.png`.
