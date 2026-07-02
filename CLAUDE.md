# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

No build step required. Serve over HTTP (required for ES module CORS):

```bash
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`. Opening `index.html` directly as a `file://` URL will fail due to CORS on CDN-loaded ES modules.

## Architecture

This is a **no-build, vanilla JS portfolio site** using ES modules and [lit-html](https://lit.dev/docs/libraries/standalone-templates/) (no Shadow DOM / custom elements) loaded from CDN at runtime. There is no `package.json`, no bundler, and no test suite. No CSS framework and no animation library — every style and animation is hand-written.

### Data Flow

```
user-data/data.js         ← all portfolio content (bio, skills, experience, etc.)
        ↓
src/main.js                ← entry point; mounts every component, wires every service
        ↓
src/components/*.js        ← one lit-html module per section (template + mount fn)
        ↓
index.html section placeholders  ← empty <section id="..."> elements
```

`mount(id, templateResult)` (`src/utils/dom.js`) is the core rendering primitive: it selects a DOM element by id and calls `lit-html`'s `render()`. Dynamic sections (GitHub repos, Medium blog, gitconnected title) are fetched in `src/main.js` via `Promise.allSettled` — each is error-isolated so one failing API never blocks the rest of the page.

### Directory Layout

| Path | Role |
|---|---|
| `src/main.js` | Entry point — imports data, mounts every section, initializes every service, kicks off dynamic fetches |
| `src/components/` | One module per section (`hero.js`, `nav.js`, `about.js`, `experience.js`, `skills.js`, `github.js`, `blog.js`, `adventures.js`, `contact.js`, `footer.js`) — each exports a `mount*()` function and, where content is fetched later, a `*ListTemplate()` for re-rendering |
| `src/services/` | Cross-cutting behavior: `theme.js` (dark/light, persisted in localStorage), `commandPalette.js` (⌘K), `nav-scroll.js` (scrollspy, scroll progress, back-to-top, mobile menu), `easterEgg.js` (Konami code + console greeting), `profileCard.js` (GitHub/StackOverflow stat cards), `visitorCounter.js` (Firebase Firestore) |
| `src/animations/` | `scrollReveal.js` (IntersectionObserver-driven `[data-reveal]` fade-ins — call `observeReveals()` after mounting new content), `interactions.js` (magnetic buttons, card tilt, cursor glow, ripple — all event-delegated on `document` so they work on dynamically mounted content without re-init) |
| `src/utils/` | `dom.js` (`mount`, `qs`, `qsa`, `showError`), `fetch.js` (`fetchJson` with timeout, `timeAgo`) |
| `src/constants/` | `urls.js` (external API endpoints, resume path, contact form endpoint placeholder), `firebase.js` (Firebase project config) |
| `src/styles/tokens.css` | Single source of truth for color palette, type scale, spacing, radius, shadow, and motion tokens (dark theme is default; light theme overrides via `[data-theme="light"]`) |
| `src/styles/base.css` | Reset, focus-visible, `prefers-reduced-motion`, scrollbar, skip link |
| `src/styles/animations.css` | Keyframes and the `[data-reveal]` / `.skeleton` classes |
| `src/styles/utilities.css` | Shared primitives reused across every component: `.glass`, `.btn-*`, `.chip`, `.section*`, `.magnetic`, `.tilt`, `.ripple`, `.glow-card`, `.underline-link`, `.cursor-glow` |
| `src/styles/components/` | One stylesheet per section, mirroring `src/components/` |

### External APIs

- **lit-html** — `https://unpkg.com/lit-html?module`
- **Firebase** — `https://www.gstatic.com/firebasejs/11.4.0/` (analytics + Firestore), config in `src/constants/firebase.js`
- **Medium RSS** — via `api.rss2json.com` (top 3 posts shown)
- **GitHub pinned repos** — via `pinned.berrysauce.dev` (top 4 shown)
- **GitHub contribution graph** — image widget via `ghchart.rshah.org`
- **gitconnected** — sets the page `<title>` from profile basics
- **StackOverflow / GitHub APIs** — profile stat cards in `src/services/profileCard.js`

### Customization Points

All portfolio content lives in `user-data/data.js` — editing this file is the primary way to update the site. `skills` is intentionally kept as a **flat array of strings** (not categorized) so that `pages/json-generator.html` keeps working; `src/components/skills.js` applies its own display-only category grouping on top.

To change which external accounts are used, external API endpoints, or the (placeholder) contact-form/resume asset paths, edit `src/constants/urls.js`.

There is no Featured Projects / Achievements / Certifications / Developer Philosophy / Current Learning / AI Workflow / Open Source section — those were intentionally left out of the redesign because there's no real content for them yet. Add real content to `user-data/data.js` and a matching `src/components/*.js` module if/when that content exists; don't fabricate placeholder claims about the site owner.

### CSS

Dark mode is the primary, fully-designed theme (per the design brief: `#050816` background, `#4F8CFF`/`#7B61FF`/`#00D4FF` accents, glassmorphism, gradients). Light mode exists as a toggled alternative via `[data-theme="light"]` token overrides in `tokens.css`, sharing the same component CSS.

### Pages

`pages/json-generator.html` + `js/json-generator.js` + `css/json-generator.css` is a standalone tool for generating the `data.js` JSON structure — it is intentionally independent of the redesigned portfolio and still depends on `css/style.css`, `css/animate.css`, and the Bootstrap 3 CDN. Don't delete those two CSS files or change `data.js` export shapes without checking this tool first.
