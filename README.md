# 🚀 OpenBlog

> **A modern, minimalist, zero-configuration GitHub blog starter.**  
> Create and publish your personal blog for free on GitHub Pages in under 3 minutes — without installing Node.js, Ruby, or touching the terminal.

[![Use This Template](https://img.shields.io/badge/GitHub-Use%20this%20template-2ea44f?style=for-the-badge&logo=github)](https://github.com/Microtechx-GmbH/OpenBlog/generate)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-181717?style=for-the-badge&logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

Inspired by modern, sleek typography and UI designs like **shadcn/ui Blog 6**, OpenBlog gives you a publication-ready blog with automatic light/dark mode, featured hero posts, category badges, responsive cards, and clean typography.

---

## ✨ Features

- ⚡ **Zero-Friction Setup**: No terminal, Node.js, or software installation needed. Setup 100% in your browser.
- 🎨 **Modern Design (shadcn-inspired)**: Clean slate aesthetics, responsive card grid, and prominent featured hero post.
- 🌓 **Instant Dark & Light Mode**: Smooth theme switcher with local storage memory and OS preference detection.
- 🎯 **One Configuration File**: Personalize your title, author, bio, avatar, and social links in `_config.yml`.
- 🌈 **Accent Color Themes**: Switch between `indigo`, `blue`, `violet`, `emerald`, `rose`, or `amber`.
- 📝 **Write in Markdown**: Write posts in standard Markdown (`.md`) with code syntax highlighting, blockquotes, and tables.
- ⏱️ **Reading Time & Dates**: Automatic reading time estimation and formatted publication dates.
- 📱 **Fully Responsive**: Flawless experience across mobile, tablet, and desktop screens.
- 🔍 **SEO & RSS Included**: Generates OpenGraph meta tags, sitemaps, and an RSS feed (`/feed.xml`) automatically.
- 💸 **100% Free Hosting**: Hosted on GitHub Pages with zero server costs.

---

## 🚀 3-Minute Quickstart

Follow these 4 simple steps directly inside your web browser:

### 1. Click "Use this template"
Click the green **[Use this template](https://github.com/Microtechx-GmbH/OpenBlog/generate)** button at the top of this repository (or select **Create a new repository**).
- Give your repository a name (e.g., `my-blog` or `yourusername.github.io`).
- Keep it **Public** (required for free GitHub Pages).

### 2. Personalize `_config.yml`
In your new repository:
1. Click on the file named `_config.yml`.
2. Click the ✏️ **Edit this file** button (pencil icon).
3. Update your details:
   ```yaml
   title: "Jane Doe's Blog"
   tagline: "Notes on software, design, and building products."
   url: "https://yourusername.github.io"
   baseurl: "/my-blog"   # (Leave empty "" if repo is yourusername.github.io)

   author:
     name: "Jane Doe"
     bio: "Software builder and creative writer."
     github: "yourusername"
     twitter: "yourusername"
   ```
4. Click **Commit changes...** at the top right.

### 3. Turn on GitHub Pages
1. Go to your repository's **Settings** tab.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. That's it! GitHub will now automatically run the deploy action. In ~60 seconds, your site is live!

### 4. Write Your First Article
1. Navigate to the `_posts/` folder in your repository.
2. Click **Add file** &rarr; **Create new file**.
3. Name your file with the date format: `YYYY-MM-DD-your-title.md` (e.g. `2026-10-15-my-first-post.md`).
4. Add the front matter at the top:
   ```markdown
   ---
   layout: post
   title: "My First Article"
   description: "A short summary of what this post is about."
   date: 2026-10-15
   category: "Thoughts"
   featured: false
   ---

   Write your thoughts here using Markdown!
   ```
5. Click **Commit changes...**. Your new article will be automatically published!

---

## ⚙️ Configuration Reference (`_config.yml`)

| Setting | Default | Description |
| :--- | :--- | :--- |
| `title` | `"OpenBlog"` | The main name of your blog. |
| `tagline` | `"Thoughts on craft..."` | Short tagline displayed under section titles. |
| `description` | `"A fast, minimalist..."` | SEO description for search engines and social shares. |
| `url` | `https://yourusername.github.io` | Your root URL. |
| `baseurl` | `/OpenBlog` | Subpath if hosted in a project repo (`/repo-name`). |
| `author.name` | `"Alex Morgan"` | Your name displayed on articles and footer. |
| `author.bio` | `"Designer, writer..."` | Short bio shown in the author box. |
| `author.avatar` | `"/assets/images/default-avatar.svg"` | Profile image path or URL. |
| `theme_settings.default_theme` | `"system"` | Default theme: `"system"`, `"dark"`, or `"light"`. |
| `theme_settings.accent_color` | `"indigo"` | Accent color: `indigo`, `blue`, `violet`, `emerald`, `rose`, `amber`. |
| `theme_settings.show_hero` | `true` | Show featured post banner at the top of homepage. |
| `theme_settings.show_reading_time` | `true` | Display estimated reading time. |
| `theme_settings.posts_per_page` | `6` | Number of recent articles shown on homepage. |

---

## 🎨 Theme Customization

OpenBlog supports 6 built-in accent colors. To change your accent color, change `accent_color` in `_config.yml`:

```yaml
theme_settings:
  accent_color: "emerald" # Options: indigo, blue, violet, emerald, rose, amber
```

---

## 🌐 Custom Domain (Optional)

If you have your own domain name (e.g. `blog.yourname.com` or `yourname.com`):
1. In your repository settings, go to **Pages** &rarr; **Custom domain**.
2. Type your domain name and click **Save**.
3. In `_config.yml`, set:
   ```yaml
   url: "https://yourdomain.com"
   baseurl: ""
   ```

---

## 💻 Optional: Local Development (For Developers)

If you want to run OpenBlog locally on your computer:

```bash
# Clone your repository
git clone https://github.com/yourusername/your-blog.git
cd your-blog

# Install dependencies (requires Ruby and Bundler)
bundle install

# Run the Jekyll local preview server
bundle exec jekyll serve

# Open your browser at http://localhost:4000
```

---

## 📄 License

OpenBlog is licensed under the [MIT License](LICENSE) — free to use for personal and commercial blogs.