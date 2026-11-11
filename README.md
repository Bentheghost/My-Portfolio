# ⚡ Chukwuebuka Benjamin Ugwu — Developer Portfolio

A high-performance, modular, terminal-inspired cyberpunk portfolio engineered for **Chukwuebuka Benjamin Ugwu** — Full-Stack & Applied AI Engineer and LLM Evaluation & RLHF Specialist.

Engineered with zero runtime bloat using **semantic HTML5**, **compiled & minified Tailwind CSS**, and a **modular vanilla JavaScript architecture** featuring pre-production linting and static compilation. Includes an interactive retro bootloader, a live system telemetry dashboard, persistent dual dark/light themes, structured JSON-LD SEO schema, and direct resume/contact integrations.

---

## 🌟 Key Features

* **Modular Clean Architecture:**
  * Fully decoupled configuration and content layer (`src/data/portfolioData.js`).
  * Pure, single-responsibility sub-components under 150 lines (`src/components/`).
  * Isolated client-side daemons (`theme.js`, `telemetry.js`, `matrix.js`).
* **Retro "Enter the Matrix" Bootloader Intro:**
  * Real-time character scramble decoding prompt with blinking green terminal cursor.
  * Interactive choice between `[ yes ]` (executes an authentic dual-engine ML and network boot sequence) and `[ skip ]` (instant content access).
* **Live System Telemetry Dashboard:**
  * **Online Beacon:** Blinking emerald green status indicator (`● online`) featuring a sleek floating tooltip on hover: `"available for remote work"`.
  * **Uptime Counter:** Animated looping progress bar with active continuous uptime counter anchored to 25 days baseline (`25d ...`).
  * **Live Regional Telemetry:** Real-time ticking clock formatted for **West Africa Time (WAT / UTC+1)** and localized calendar date.
* **Seamless Dark / Light Mode Toggle:**
  * High-contrast obsidian terminal theme (`#090a0c`) with emerald accents (`#10b981`), alongside a clean, modern frosted light theme (`#f8fafc`).
  * Instant theme persistence via `localStorage.theme` with zero flash-of-unstyled-theme (FOUC).
* **Accessibility (a11y) & SEO Ready:**
  * Strict heading hierarchy (`h1` -> `h2` -> `h3` -> `h4`) with zero skipped levels.
  * Complete ARIA labels on all icon-only buttons (`#theme-toggle`, external repo links, verified badge).
  * Comprehensive OpenGraph, Twitter Cards, and JSON-LD `Person` schema markup.
* **1-Click Resume PDF Download:**
  * Direct one-click download for `Chukwuebuka_Benjamin_Ugwu_Resume.pdf` served directly from the root bundle, with an optional cloud link to view on Google Drive.
* **Direct Instant Communication:**
  * One-tap WhatsApp chat initiation (`+234 817 126 3915`).
  * Direct phone calling (`tel:+2348171263915`) and direct email routing.
* **Curated Engineering Proof-of-Work:**
  * **Adaptive Learning System:** Dual-engine ML pipeline integrating Bayesian Knowledge Tracing (BKT) and Reinforcement Learning (RL) across 4 Nigerian languages (English, Yoruba, Igbo, Hausa).
  * **BFARMCON Agribusiness Platform:** Commercial landing platform optimized for sub-second mobile load times in low-bandwidth environments.
  * **Quiz-Master Engine:** Interactive client-server assessment engine with real-time scoring logic.
  * **Network Benchmarking Suite:** Automated throughput and latency stress-testing CLI built with Python and iPerf3.
* **Media & Tech Documentary Showcase:**
  * Dedicated feature card linking to YouTube documentary channel [**@TechUntold-btg**](https://www.youtube.com/@TechUntold-btg) (analyzing the history of WinRAR, Skype, and Nokia).

---

## 🛠️ Tech Stack & Tooling

| Domain | Technology |
| :--- | :--- |
| **Markup & Core** | Semantic HTML5, Vanilla JavaScript (ES6+ ES Modules) |
| **Styling & Theme** | Tailwind CSS v3 (Compiled & Minified), Custom Glassmorphism, CSS Custom Properties |
| **Architecture** | Component-driven static build pipeline (`scripts/build.js`), decoupled data schema (`portfolioData.js`) |
| **Typography & Icons** | JetBrains Mono (Google Fonts), Clean Inline SVG Glyphs |
| **Testing & Verification** | Automated pre-production audit suite (`scripts/lint.js`) |
| **Asset Pipeline** | 1:1 bust portrait (`profile.jpg`), Favicon (`favicon.png` / `favicon.ico`), Local PDF (`resume.pdf`) |
| **Hosting Targets** | Vercel, Netlify, GitHub Pages (Zero-configuration static deployment) |

---

## 📁 Repository Structure

```text
portfolio/
├── .vscode/
│   └── settings.json          # Editor configuration to silence custom CSS linting
├── scripts/
│   ├── build.js               # Compiles modular components & data into production index.html
│   ├── lint.js                # Pre-production test suite (schema, a11y, security, cleanliness)
│   └── preview.js             # Zero-dependency local HTTP preview server
├── src/
│   ├── components/            # Single-responsibility UI sub-components (<150 lines each)
│   │   ├── About.js           # Systems & intelligence summary + impact highlights
│   │   ├── CallToAction.js    # Proof-of-work link & resume download triggers
│   │   ├── Education.js       # FUTMINNA degree & verified certifications
│   │   ├── Experience.js      # Work history timeline with semantic h3 hierarchy
│   │   ├── Footer.js          # Terminal footer & stack tagline
│   │   ├── Header.js          # Telemetry cluster, avatar, verified badge, theme switch
│   │   ├── MatrixIntro.js     # Retro terminal bootloader modal & controls
│   │   ├── Media.js           # YouTube documentary card (@TechUntold-btg)
│   │   ├── Projects.js        # Featured repository cards with tags & links
│   │   ├── Roles.js           # Target engineering specialties
│   │   ├── Socials.js         # Contact channels (GitHub, X, WhatsApp, Email, Phone)
│   │   └── TechStack.js       # Core languages, AI/ML, frameworks, and DevOps matrix
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for all content & configuration
│   ├── scripts/               # Isolated client runtime daemons
│   │   ├── matrix.js          # Intro text scramble animation & bootloader sequence
│   │   ├── telemetry.js       # Live WAT clock, localized date, and 25-day uptime counter
│   │   └── theme.js           # Dark/light theme controller with localStorage sync
│   └── styles/
│       └── input.css          # Tailwind base directives, custom scrollbars, glassmorphism
├── .env.example               # Documentation template for configuration variables
├── .gitignore                 # Excludes node_modules, env files, caches, and system files
├── favicon.ico                # Multi-resolution tab icon for legacy and desktop browsers
├── favicon.png                # High-res 64x64 PNG browser tab avatar
├── index.html                 # Production compiled static page (SEO & SSR ready)
├── package.json               # Development scripts (build, lint, dev, preview)
├── package-lock.json          # Locked dependency tree
├── profile.jpg                # 1:1 square cropped illustrated avatar
├── resume.pdf                 # Bundled curriculum vitae available for direct download
├── style.css                  # Compiled, production-ready, minified CSS (~26 KB)
└── tailwind.config.js         # Theme customization (emerald palette, dark mode class, fonts)
```

---

## 🚀 Local Development & Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/Bentheghost/portfolio.git
cd portfolio
```

### 2. Install Build Dependencies
```bash
npm install
```

### 3. Build & Verify Codebase
* **Full Production Build (compiles HTML + minified CSS):**
  ```bash
  npm run build
  ```
* **Run Pre-Production Code Review Audit:**
  ```bash
  npm run lint
  ```

### 4. Development & Watch Mode
* Rebuilds stylesheet and HTML automatically as you develop:
  ```bash
  npm run dev
  ```

### 5. Local Preview Server
* Launches the built site on a local lightweight HTTP server (`http://localhost:3000`):
  ```bash
  npm run preview
  ```

---

## 🌐 Deployment

Because this project compiles to a standalone, zero-dependency static bundle (`index.html`, `style.css`, and static media), you can deploy it in seconds:

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. Set Build Command: `npm run build` (or leave default if deploying pre-built `index.html`).
4. Click **Deploy**.

### Deploy to GitHub Pages
1. Go to your repository on GitHub -> **Settings** -> **Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose `main` branch and `/ (root)` directory, then click **Save**.

---

## 📬 Contact & Connect

* **Full Name:** Chukwuebuka Benjamin Ugwu
* **LinkedIn:** [Chukwuebuka Ugwu](https://www.linkedin.com/in/chukwuebuka-ugwu-6285a9448)
* **GitHub:** [@Bentheghost](https://github.com/Bentheghost)
* **X (Twitter):** [@Topboy_benji](https://x.com/Topboy_benji)
* **YouTube:** [@TechUntold-btg](https://www.youtube.com/@TechUntold-btg)
* **WhatsApp / Call:** [+234 817 126 3915](https://wa.me/2348171263915)
* **Email:** [ebukaugwu41@gmail.com](mailto:ebukaugwu41@gmail.com)

---

<div align="center">
  <sub>Crafted with zero bloat • HTML5 + Tailwind CSS • Production Ready</sub>
</div>
