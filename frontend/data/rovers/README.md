# Our Rovers Page — Editing Guide

**File to edit:** `rovers.json`  
**Page affected:** `/rovers`

The page has year tabs (2027, 2026, 2025). Each tab shows one rover's details.

---

## Editing a Rover's Details

Find the rover entry by `year` and edit its fields:

```json
{
  "year": 2026,
  "name": "igNUS 2026",
  "status": "current",
  "writeup": "igNUS 2026 represents our most ambitious build...",
  "sarVideo": "https://www.youtube.com/embed/VIDEO_ID",
  "pdrReport": null,
  "sarReport": null,
  "upcomingFeatures": [],
  "images": ["photo-1.jpg", "photo-2.jpg"],
  "subteams": [ ... ]
}
```

| Field | Notes |
|-------|-------|
| `name` | Display name (e.g. `"igNUS 2026"`) |
| `status` | `"upcoming"`, `"current"`, or `"past"` — controls the badge colour |
| `writeup` | Main description paragraph |
| `sarVideo` | YouTube **embed** URL (`https://www.youtube.com/embed/VIDEO_ID`). Set to `null` to hide the video section |
| `pdrReport` | Link to the PDR report PDF. `null` shows "Coming Soon" |
| `sarReport` | Link to the SAR report PDF. `null` shows "Coming Soon" |
| `upcomingFeatures` | Bullet list of planned features — only shown when `status` is `"upcoming"` |

---

## Subteam Sections

Each rover (2026 and 2027) has 6 subteam entries:

```json
"subteams": [
  {
    "name": "Chassis",
    "writeup": "Description of what the Chassis subteam did...",
    "images": [null, null, null, null]
  },
  ...
]
```

- **writeup** — paragraph shown under the subteam heading
- **images** — up to **4** photos per subteam (see below)

The 6 subteams are: Chassis, Robotic Arm, GNSS & Comms, Autonomous Navigation, Drone, Science.

---

## Adding a Subteam Photo

Each subteam supports up to **4 images**. Name files using the subteam slug and year:

| Subteam | Example filenames |
|---------|-----------------|
| Chassis | `chassis_2026_1.png`, `chassis_2026_2.png`, … |
| Robotic Arm | `robotic_arm_2026_1.png`, … |
| GNSS & Comms | `gnss_2026_1.png`, … |
| Autonomous Navigation | `autonav_2026_1.png`, … |
| Drone | `drone_2026_1.png`, … |
| Science | `science_2026_1.png`, … |

**Steps:**

1. Name your file (e.g. `chassis_2026_1.png`) and place it in this folder (`frontend/data/rovers/`)
2. Find the matching subteam in `rovers.json` and replace a `null` with the filename:

```json
"images": ["chassis_2026_1.png", null, null, null]
```

## Removing a Subteam Photo

Set the value back to `null` and delete the file from this folder.

## Replacing the Hero Background

Replace `hero-bg.png` in this folder. Keep the filename exactly `hero-bg.png`.
