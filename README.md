# Amogh Garg — Portfolio

Personal portfolio website for **Amogh Garg**, Software Engineer at Microsoft.  
Live at: [amoghgarg.com/portfolio](https://amoghgarg.com/portfolio)

---

## Repository Structure

```
Portfolio2/
├── portfolio/              # All website source files
│   ├── index.html          # Main HTML page (all sections in one file)
│   ├── styles.css          # Global stylesheet (light/dark themes, responsive)
│   └── script.js           # Interactivity: theme toggle, scroll animations, contact form
├── screenshots/            # Local test screenshots (see below)
├── robots.txt              # SEO crawler directives
└── README.md
```

## Running Locally

The site is a plain static website — no build step or dependencies required.

### Option 1 — Python (built-in, recommended)

```bash
# Serve from the portfolio/ subdirectory so all relative paths resolve correctly
python3 -m http.server 8080 --directory portfolio
```

Open [http://localhost:8080/](http://localhost:8080/) in your browser.

> **Note:** When deployed, the site lives at `/portfolio` (e.g. `amoghgarg.com/portfolio`).
> Running the dev server from inside the `portfolio/` directory (`--directory portfolio`) replicates
> that behavior — `index.html`, `styles.css`, and `script.js` are all served from the root of
> the dev server just as they would be from `/portfolio/` in production.

### Option 2 — Node.js (`npx serve`)

```bash
npx serve portfolio
```

Then open the URL printed in the terminal (usually [http://localhost:3000](http://localhost:3000)).

### Option 3 — VS Code Live Server

1. Open the repository folder in VS Code.
2. Right-click `portfolio/index.html` → **Open with Live Server**.

---

## Screenshots

Captured locally with Playwright against `python3 -m http.server 8080`.

| Preview | Section |
|---------|---------|
| ![Hero – light](screenshots/01-hero-light.png) | Hero (light mode) |
| ![Full page – light](screenshots/02-fullpage-light.png) | Full page (light mode) |
| ![About](screenshots/03-about-light.png) | About Me |
| ![Experience](screenshots/04-experience-light.png) | Experience |
| ![Skills](screenshots/05-skills-light.png) | Technical Skills |
| ![Projects](screenshots/06-projects-light.png) | Projects |
| ![Contact](screenshots/07-contact-light.png) | Contact |
| ![Hero – dark](screenshots/08-hero-dark.png) | Hero (dark mode) |
| ![Full page – dark](screenshots/09-fullpage-dark.png) | Full page (dark mode) |
| ![Mobile](screenshots/10-hero-mobile.png) | Mobile viewport (390 × 844) |

> Social icons appear as empty circles in the screenshots above because Font Awesome's CDN is
> blocked in the capture environment. They display correctly in a real browser.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic, accessible) |
| Styles | CSS3 — custom properties, CSS Grid, Flexbox, `@keyframes` |
| Behavior | Vanilla JavaScript (ES6+) |
| Icons | Font Awesome 6 (CDN) |
| Fonts | Inter — Google Fonts |

## Features

- 🌗 **Light / Dark theme** toggle with `localStorage` persistence
- 📱 **Fully responsive** — mobile-first, hamburger menu on small screens
- ✨ **Scroll animations** via `IntersectionObserver`
- 📬 **Contact form** with simulated async send
- ♿ ARIA labels and semantic HTML throughout
