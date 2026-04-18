# News / Events — Editing Guide

**File to edit:** `events.json`  
**Pages affected:** `/news` and the "What's Happening" section on the homepage

The homepage automatically shows the 2 most recent entries. Entries are always sorted newest first.

---

## Adding a News Entry

Open `events.json` and add a new object to the array:

```json
{
  "title": "ExCELLence 2026 (ECE Project Showcase)",
  "date": "2026-04-15",
  "description": "The NUS Mars Rover Team participated in...",
  "images": [null, null, null]
}
```

| Field | Notes |
|-------|-------|
| `title` | Heading shown on the News page and homepage card |
| `date` | Format must be `YYYY-MM-DD` (e.g. `2026-04-15`) |
| `description` | Paragraph of text shown below the title |
| `images` | Up to 3 photo slots — set to `null` if no photo yet |

The entry will automatically appear on both the News page and the homepage.

## Removing a News Entry

Delete the entire `{ ... }` object for that entry from the array. Make sure the remaining entries are still separated by commas.

## Editing an Existing Entry

Find the entry by `title` and edit any field directly.

---

## Adding Photos to an Event

Each event supports up to **3 images**. Name files using the event's slug:

**Example for "EDIC Project Showcase 2026":**
- `edic_2026_1.png`
- `edic_2026_2.png`
- `edic_2026_3.png`

**Steps:**

1. Name and place your image file in this folder (`frontend/data/events/`)
2. Update the `images` array in `events.json`:

```json
"images": ["edic_2026_1.png", "edic_2026_2.png", null]
```

## Removing a Photo

Set the value back to `null` and delete the file from this folder.

## Replacing the Hero Background

Replace `hero-bg.png` in this folder. Keep the filename exactly `hero-bg.png`.
