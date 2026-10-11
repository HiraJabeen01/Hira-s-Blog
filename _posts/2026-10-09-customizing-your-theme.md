---
layout: post
title: "Customizing Your Theme: Colors, Accents, and Dark Mode"
description: "Learn how to personalize the look and feel of your OpenBlog without writing a single line of CSS."
date: 2026-10-09 14:15:00 +0000
category: "Design"
image: "/assets/images/covers/cover-3.svg"
featured: false
author: "Alex Morgan"
---

OpenBlog was engineered from the ground up so that anyone — even someone who has never touched CSS — can personalize their blog to reflect their personal style.

All styling switches are controlled through simple values in `_config.yml`.

## Changing Your Accent Color

In `_config.yml`, find the `accent_color` field under `theme_settings`:

```yaml
theme_settings:
  accent_color: "indigo"  # Try: blue, violet, emerald, rose, or amber
```

OpenBlog comes with built-in color presets:
- **`indigo`**: Modern, sleek tech aesthetic (default).
- **`blue`**: Classic corporate and engineering blue.
- **`violet`**: Creative, vibrant purple hue.
- **`emerald`**: Fresh, natural green accent.
- **`rose`**: Warm, bold crimson accent.
- **`amber`**: Warm honey gold accent.

When you change this one setting, all badges, active navigation links, buttons, and hover effects update automatically.

---

## Configuring Default Theme Mode

You can configure what visitors see the first time they land on your website:

```yaml
theme_settings:
  default_theme: "system" # Options: "system", "dark", or "light"
```

- **`system`**: Automatically matches the visitor's operating system preferences.
- **`dark`**: Always starts in sleek midnight dark mode.
- **`light`**: Always starts in crisp white light mode.

Visitors can still switch themes at any time using the theme toggle button in the top navigation bar.

---

## Toggling Features On and Off

Want a cleaner homepage without the large featured hero banner? You can toggle features with simple `true` or `false` switches:

```yaml
theme_settings:
  show_hero: false           # Hide or show the top featured article
  show_reading_time: true    # Show or hide estimated reading time
  show_author_box: true      # Show author info box at bottom of posts
  posts_per_page: 6          # Number of articles displayed on homepage
```

Commit your changes to `_config.yml`, wait about 30 seconds for GitHub Actions to complete, and your refreshed design will be live!
