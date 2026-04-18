# Contact Page — Editing Guide

**File to edit:** `contact.json`  
**Page affected:** `/contact` and the "Get Involved" section on the homepage

---

## Fields

```json
{
  "email": "roverteam.nus@gmail.com",
  "instagram": "https://www.instagram.com/nusroverteam/",
  "linkedin": "https://www.linkedin.com/company/nus-mars-rover-team/posts/?feedView=all",
  "youtube": "https://www.youtube.com/@nusmarsroverteam",
  "tagline": "Have questions, want to collaborate..."
}
```

| Field | What it does |
|-------|-------------|
| `email` | Displayed on the contact page (not a clickable link) |
| `instagram` | Full URL to the Instagram profile — opens in a new tab when clicked |
| `linkedin` | Full URL to the LinkedIn page — opens in a new tab when clicked |
| `youtube` | Full URL to the YouTube channel — opens in a new tab when clicked |
| `tagline` | Short description shown below the heading on the contact page |

## How to update a link

1. Open `contact.json`
2. Replace the URL value for the field you want to change
3. Save the file — the change appears on both the Contact page and the homepage "Get Involved" section automatically

## Notes

- The email field on the Contact page is display-only (not a mailto link). The "Get Involved" button on the homepage links to the `/contact` page.
- There are no images in this folder.
