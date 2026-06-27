# Portfolio Website

A zero-build, data-driven portfolio site using vanilla JavaScript ES modules and [lit-html](https://lit.dev/docs/libraries/standalone-templates/) for templating. All content is driven from a single data file — no framework, no bundler, no build step.

**Live:** [vinaysomawat.github.io](https://vinaysomawat.github.io)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Templating | [lit-html](https://unpkg.com/lit-html?module) (loaded from CDN) |
| DOM/animations | jQuery 3.7.1 + jquery.waypoints |
| Styling | CSS3 custom properties, Bootstrap 3, Font Awesome 6 |
| Visitor counter | Firebase Firestore + Firebase Analytics |
| External data | GitHub pinned repos API, Medium RSS, gitconnected, StackOverflow API |
| Hosting | GitHub Pages |

---

## Project Structure

```
├── index.html              # Single-page entry point; contains empty placeholder divs
├── user-data/
│   ├── data.js             # All portfolio content (bio, skills, experience, etc.)
│   ├── urls.js             # External API endpoint configuration
│   └── firebase.js         # Firebase project config
├── js/
│   ├── page-builder.js     # Entry module; imports data and renders each section
│   ├── templates.js        # lit-html template functions for every section
│   ├── portfolio-features.js  # Theme toggle, command palette (⌘K), scroll UI
│   ├── main.js             # jQuery nav: waypoints, mobile menu, active highlighting
│   ├── profile-card.js     # GitHub + StackOverflow profile stat cards
│   └── visitor-counter.js  # Firebase Firestore read/increment for visitor count
├── pages/
│   └── json-generator.html # Standalone tool to generate data.js JSON
└── css/
    ├── style.css           # Main layout and section styles
    ├── portfolio-features.css  # Theme variables, command palette, quick-action buttons
    └── animate.css         # Scroll-triggered CSS animations
```

---

## Prerequisites

- A modern browser (Chrome, Firefox, Safari, Edge) — ES modules and CSS custom properties required
- Python 3 **or** Node.js — to run a local HTTP server
- A GitHub account with [pinned repositories](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile)
- _(Optional)_ A Medium account for the blogs section
- _(Optional)_ A Firebase project for the visitor counter

> **Why a local server?** `page-builder.js` uses ES module `import` statements and fetches from external APIs. Browsers block both over `file://` due to CORS. You must serve the project over HTTP.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vinaysomawat/vinaysomawat.github.io.git
cd vinaysomawat.github.io
```

### 2. Start a local HTTP server

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js (npx, no install needed):**
```bash
npx serve .
```

**VS Code:** Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, then click **Go Live** in the status bar.

Open `http://localhost:8000` in your browser. Do **not** open `index.html` directly — it will fail silently due to CORS.

---

## Customizing for Your Own Portfolio

### Step 1 — Update your profile identifiers

Edit `user-data/urls.js`:

```js
const githubUsername = "your-github-username";
const mediumUsername = "your-medium-username"; // leave blank string if unused
```

Edit `index.html` — find the StackOverflow card and replace the `user-id`:

```html
<div class="stack-card" user-id="YOUR_STACKOVERFLOW_USER_ID"></div>
<div class="github-card" username="your-github-username"></div>
```

To find your StackOverflow user ID, go to your profile page — it's the number in the URL: `stackoverflow.com/users/USER_ID/username`.

### Step 2 — Edit your portfolio content

All content lives in `user-data/data.js`. Update each exported array:

| Export | Section rendered |
|---|---|
| `bio` | Array of strings, one paragraph each |
| `skills` | Array of skill name strings |
| `experience` | Work timeline entries (see structure below) |
| `education` | Education timeline entries (same structure as experience) |
| `adventures` | Grouped adventure items |
| `contact` | Contact link list |
| `footer` | Footer columns and copyright text |

**Experience / Education entry shape:**
```js
{
  title: "Company or Institution Name",
  duration: "Month Year - Month Year",
  subtitle: "Role or Degree",
  details: ["Bullet point one", "Bullet point two"],
  tags: ["Tag1", "Tag2"],
  icon: "font-awesome-icon-name", // e.g. "briefcase", "graduation-cap"
}
```

Font Awesome 6 free icons reference: [fontawesome.com/icons](https://fontawesome.com/icons)

> **Tip:** Use the JSON Generator tool at `pages/json-generator.html` to fill in a form and get the correct `data.js` structure output automatically.

### Step 3 — Set up the visitor counter (Firebase)

The visitor counter uses Firebase Firestore. To use your own counter instead of the original project's:

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and create a new project.
2. Enable **Firestore Database** (start in production mode).
3. Add a Firestore Security Rule to allow public read/write on the `visitors` collection:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /visitors/{docId} {
         allow read, write: if true;
       }
     }
   }
   ```
4. Enable **Google Analytics** for the project (used by `firebase-analytics`).
5. In Project Settings → General → Your apps, register a Web app and copy the config.
6. Replace the contents of `user-data/firebase.js` with your config:
   ```js
   export const firebaseConfig = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "...",
     measurementId: "...",
   };
   ```

If you skip Firebase setup, the visitor counter will show "Loading..." indefinitely — the rest of the site is unaffected.

### Step 4 — Pin your GitHub repositories

The **Top Repositories** section fetches your pinned repos via [pinned.berrysauce.dev](https://pinned.berrysauce.dev). Pin up to 6 repositories on your GitHub profile page:

GitHub Profile → **Customize your pins** → select repos → Save

Only the top 4 pinned repos are displayed.

### Step 5 — gitconnected profile (page title)

The page `<title>` is set from your [gitconnected.com](https://gitconnected.com) profile. Create an account, link your GitHub, and set your display name. If the fetch fails, the title defaults to blank — not a blocker.

---

## Deployment (GitHub Pages)

1. Rename your repository to `<your-github-username>.github.io`
2. Push to the `master` branch
3. GitHub Pages serves the root `index.html` automatically — no configuration needed

For a custom domain, add a `CNAME` file at the repo root with your domain:
```
yourdomain.com
```
Then configure your DNS provider to point to `<your-username>.github.io`.

---

## How the Rendering Works

`page-builder.js` is the ES module entry point loaded via `<script type="module">`. On page load it:

1. Calls `buildContainer(dataArray, domId, templateFn)` for each static section — this runs `lit-html`'s `render()` into the matching `<div id="...">` placeholder in `index.html`
2. Fetches Medium blogs, GitHub pinned repos, and gitconnected profile in parallel and renders them once resolved

`portfolio-features.js` is loaded with `defer` (not a module) and wires up the theme toggle, command palette (`Cmd/Ctrl + K`), scroll progress bar, and back-to-top button independently of the data rendering.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Blank page / sections missing | Opened `index.html` via `file://` | Use a local HTTP server |
| Blogs section empty | Medium username wrong or RSS feed rate-limited | Verify `mediumUsername` in `urls.js`; check browser console for network errors |
| Repos section empty | GitHub username wrong or no pinned repos | Verify `githubUsername` in `urls.js`; pin repos on your GitHub profile |
| Visitor counter stuck on "Loading..." | Firebase not configured or Firestore rules blocking writes | Set up your own Firebase project (Step 3 above) |
| Profile image not loading | Medium fetch failed | Check console for CORS or network errors on `api.rss2json.com` |
| Command palette not working | `portfolio-features.js` failed to load | Check console for JS errors; ensure `defer` script loads after DOM elements exist |

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test locally with an HTTP server
4. Open a pull request against `master`

**If you find this project helpful, consider [supporting it](https://www.buymeacoffee.com/r194dME8y).**

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/r194dME8y)
