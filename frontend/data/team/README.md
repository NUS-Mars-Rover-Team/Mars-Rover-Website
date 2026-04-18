# Meet the Team Page — Editing Guide

**File to edit:** `members.json`  
**Page affected:** `/team`

The page has year tabs (2027, 2026, 2025). Each tab shows that year's leadership and subsystem members.

---

## Structure Overview

```json
[
  {
    "year": 2026,
    "leadership": [ ... ],
    "subsystems": [
      {
        "name": "Chassis — Mechanical",
        "members": [ ... ]
      },
      ...
    ]
  }
]
```

Find the right year entry, then edit `leadership` or the relevant subsystem inside `subsystems`.

---

## Adding a Member

Add a new object to either `leadership` or a subsystem's `members` array:

```json
{
  "name": "Jane Doe",
  "role": "Mechanical Engineer",
  "major": "Mechanical Engineering",
  "intro": "Short bio about the member.",
  "photo": "https://drive.google.com/thumbnail?id=FILE_ID&sz=w400",
  "isLead": false
}
```

| Field | Notes |
|-------|-------|
| `name` | Full name as it should appear on the site |
| `role` | Job title shown on the card (e.g. `"Team Lead"`, `"Software Engineer"`) |
| `major` | Degree/major — leave `""` if unknown |
| `intro` | Bio paragraph — leave `""` if none |
| `photo` | Google Drive thumbnail URL (see below) — leave `""` if no photo |
| `isLead` | `true` gives the card an orange highlight border and badge; `false` for regular members |

## Removing a Member

Delete the entire `{ ... }` object for that member from the array.

---

## Getting a Photo URL from Google Drive

Team member photos are hosted on Google Drive. To get the correct URL:

1. Upload the photo to Google Drive and set sharing to **"Anyone with the link can view"**
2. Open the file — the URL will look like:  
   `https://drive.google.com/file/d/FILE_ID/view`
3. Copy just the `FILE_ID` part (the long string between `/d/` and `/view`)
4. Build the thumbnail URL:  
   `https://drive.google.com/thumbnail?id=FILE_ID&sz=w400`
5. Paste that as the `photo` value in `members.json`

**Example:**  
Drive link: `https://drive.google.com/file/d/1ABC123xyz/view`  
→ Photo URL: `https://drive.google.com/thumbnail?id=1ABC123xyz&sz=w400`

---

## Adding a New Year

Add a new object to the top-level array:

```json
{
  "year": 2028,
  "leadership": [],
  "subsystems": []
}
```

A new tab will appear on the page automatically. The "coming soon" message shows while the arrays are empty.

## Replacing the Hero Background

Replace `hero-bg.png` in this folder. Keep the filename exactly `hero-bg.png`.
