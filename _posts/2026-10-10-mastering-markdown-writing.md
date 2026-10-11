---
layout: post
title: "Mastering Markdown Writing: Complete Formatting Guide"
description: "A quick reference guide demonstrating all the formatting capabilities supported out-of-the-box by OpenBlog."
date: 2026-10-10 10:30:00 +0000
category: "Writing"
image: "/assets/images/covers/cover-2.svg"
featured: false
author: "Alex Morgan"
---

Writing in Markdown allows you to focus purely on your words while producing structured, accessible, and beautifully formatted HTML.

This article serves as a live test and showcase of all the typography elements supported in **OpenBlog**.

## Headings & Typography

You can structure your thoughts using standard Markdown heading levels:

### Third-Level Heading (H3)
Subheadings keep long technical explanations or essays organized and scannable.

#### Fourth-Level Heading (H4)
Great for detailed sub-points or specifications.

---

## Code Blocks & Syntax Highlighting

OpenBlog includes syntax highlighting for code blocks in both **Light** and **Dark** modes. Simply specify the language identifier after the triple backticks:

```javascript
// Example JavaScript function
function calculateReadingTime(text, wpm = 200) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);
  return `${minutes} min read`;
}

console.log(calculateReadingTime("Hello world, this is OpenBlog!"));
```

You can also include inline code snippets like `npm install`, `_config.yml`, or `const theme = "dark"`.

---

## Blockquotes & Callouts

Use blockquotes to highlight quotes from authors, papers, or customer feedback:

> "Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects, and the products are not burdened with non-essentials."
>
> — Dieter Rams

---

## Lists & Checklists

### Unordered Lists
- **Fast performance**: Static HTML pages with zero database queries.
- **Accessible markup**: Semantic HTML with proper heading tags and ARIA labels.
- **Privacy-first**: No trackers, cookies, or bloat by default.

### Ordered Lists
1. Create a GitHub account.
2. Fork or template OpenBlog.
3. Commit your articles.

---

## Clean Tables

Tables are styled with crisp borders and generous padding:

| Feature | OpenBlog | Traditional CMS |
| :--- | :--- | :--- |
| **Hosting Cost** | $0 (Free forever) | $5 - $30 / month |
| **Speed** | Instant CDN cache | Depends on database |
| **Maintenance** | Zero maintenance | Constant plugin patches |
| **Dark Mode** | Built-in | Requires plugin |

---

## Ready to Write?

Simply duplicate any `.md` file in `_posts/`, edit the front matter at the top, and start typing!
