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

This is a **no-build, vanilla JS portfolio site** using ES modules loaded from CDN at runtime. There is no `package.json`, no bundler, and no test suite.

### Data Flow

```
user-data/data.js        ← all portfolio content (bio, skills, experience, etc.)
user-data/urls.js        ← external API endpoint constructors
user-data/firebase.js    ← Firebase config for visitor counter
        ↓
js/page-builder.js       ← entry point; imports data, calls buildContainer() per section
        ↓
js/templates.js          ← lit-html template functions for each section type
        ↓
index.html placeholders  ← empty divs (id="bio", "skills", "experience", etc.)
```

`buildContainer(dataItems, dataId, template)` is the core rendering primitive: it selects a DOM element by id and calls `lit-html`'s `render()` with the appropriate template function.

### JS Modules

| File | Role |
|---|---|
| `js/page-builder.js` | Imports all data, renders static sections, fetches dynamic data (Medium blogs, GitHub repos, gitconnected profile title) |
| `js/templates.js` | All lit-html template exports (`bioTemplate`, `timelineTemplate`, `repoTemplate`, `blogTemplate`, `adventureTemplate`, `contactLinksTemplate`, `footerTemplate`) |
| `js/portfolio-features.js` | Dark/light theme (persisted in localStorage), command palette (Cmd+K), scroll progress bar, back-to-top button — loaded with `defer`, no ES module |
| `js/main.js` | jQuery-based nav: waypoint scroll animations, mobile menu toggle, active nav highlighting |
| `js/profile-card.js` | Fetches and renders GitHub and StackOverflow profile stat cards |
| `js/visitor-counter.js` | Firebase Firestore read/increment for visitor count display |

### External APIs

- **lit-html** — loaded from `https://unpkg.com/lit-html?module` and `https://unpkg.com/lit@latest?module`
- **Firebase** — loaded from `https://www.gstatic.com/firebasejs/11.4.0/` (analytics + Firestore)
- **Medium RSS** — via `api.rss2json.com` (top 3 posts shown)
- **GitHub pinned repos** — via `pinned.berrysauce.dev` (top 4 shown)
- **gitconnected** — for setting the page `<title>` from profile basics
- **StackOverflow / GitHub APIs** — for profile stat cards in `profile-card.js`

### Customization Points

All portfolio content lives in `user-data/data.js` — editing this file is the primary way to update the site. The exports (`bio`, `skills`, `experience`, `education`, `adventures`, `contact`, `footer`) map 1:1 to DOM section ids and their corresponding template functions in `templates.js`.

To change which external accounts are used, update the username constants in `user-data/urls.js`.

### CSS

| File | Purpose |
|---|---|
| `css/style.css` | Main layout and section styles |
| `css/portfolio-features.css` | Theme variables, command palette, quick-action buttons, profile cards |
| `css/animate.css` | Scroll-triggered CSS animations (triggered by waypoints in `main.js`) |

Theme switching is done via `data-theme="dark|light"` on `<html>` — CSS custom properties in `portfolio-features.css` handle the color swaps.

### Pages

`pages/json-generator.html` + `js/json-generator.js` + `css/json-generator.css` is a standalone tool for generating the `data.js` JSON structure — it is independent of the main portfolio page.
