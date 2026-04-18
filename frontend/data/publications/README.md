# Publications Page — Editing Guide

**File to edit:** `publications.json`  
**Page affected:** `/publications`

---

## Fields

```json
{
  "github": "https://github.com/NUS-Mars-Rover-Team",
  "reports": [ ... ]
}
```

- **github** — URL to the team's GitHub organisation page

---

## Adding a Report

Add a new object to the `reports` array:

```json
{
  "title": "SAR Report 2026",
  "year": 2026,
  "type": "SAR",
  "description": "System Acceptance Review submission for URC 2026...",
  "link": "https://drive.google.com/..."
}
```

| Field | Notes |
|-------|-------|
| `title` | Display name shown on the page |
| `year` | The competition year (number, e.g. `2026`) |
| `type` | Either `"SAR"` or `"PDR"` — controls the badge colour |
| `description` | Short paragraph describing the report |
| `link` | Full URL to the PDF or video. Set to `null` if not published yet — it will show "Coming Soon" |

## Removing a Report

Delete the entire `{ ... }` object for that report from the `reports` array.

## Publishing a Report (changing from Coming Soon)

Find the report entry and replace `null` with the full URL:

```json
"link": "https://drive.google.com/file/d/YOUR_FILE_ID/view"
```

## Notes

- There are no local image files in this folder.
- The hero background is `hero-bg.png` — replace it to change the page banner image.
