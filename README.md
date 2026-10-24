# What is Yummizi (ymz)?
Yummizi was a foodtech startup project that allowed restaurants to prepare diners' food while they were on their way to the establishment. Although I didn't continue with the project due to validation issues, it taught me a lot about marketing, sales, and full-stack development.

I think that the best way to be grateful for what I have is to share it. Here, I share with you what I learned by building a stable, real-time platform that connects diners with restaurants the Yummizi way.

# Sub-systems of the platform
+ [AWS Lambda with hono](https://github.com/PieroEngineer/ymz-aws-lambda-with-hono) (TS) 
+ [AWS serverless configuration with AWS SAM](https://github.com/PieroEngineer/ymz-iac-with-aws-sam) (yaml) 
+ [Client for process observability](https://github.com/PieroEngineer/ymz-admin-client-with-python) (Python) 
+ [Landing page](https://github.com/PieroEngineer/ymz-landing-page) (HTML + JS + CSS) 
+ [Restaurant Web app](https://github.com/PieroEngineer/ymz-restaurant-client-side) (TS + Vite + React) 
+ [Diner Android app](https://github.com/PieroEngineer/ymz-diner-client-side) (Kotlin) 

# Yummizi — Landing Page

> **Optimize timing in your restaurant.**  
> The public-facing landing page for Yummizi — a FoodTech platform that eliminates unnecessary waiting times for diners and restaurants through virtual queues, anticipated dish confirmation, and live menu interaction.

---

## 🌐 Live Site

**[yummizi.com](https://yummizi.com)**

---

## 📋 Overview

This is a **vanilla HTML/CSS/JS** single-origin landing page deployed on **Netlify**. It serves as the primary entry point for both restaurant owners and diners, communicating Yummizi's value proposition through a rich, animated, scroll-driven experience.

The page includes:
- A full-screen animated **hero section** with GSAP scroll-driven scene transitions
- A **comparison section** (Before / With Yummizi) with scroll-triggered card reveals
- A **diner app showcase** with step-by-step mobile UI screenshots
- A **benefits section** with interactive 3D flip cards
- A **lead generation form** connected to Supabase
- Full **bilingual support** (Spanish / English) via a custom i18n engine
- Dedicated sub-pages for restaurants (`restaurants.html`) and diners (`diners.html`)

---

## 🗂️ Project Structure

```
connected/
├── index.html              # Main landing page
├── restaurants.html        # Dedicated page for restaurant owners
├── diners.html             # Dedicated page for diners
├── privacy-policy.html     # Privacy policy page
├── quick-links.css         # Supplementary CSS for quick-link overlays
│
├── src/
│   └── input.css           # Tailwind v4 source — custom theme tokens & keyframes
│
├── dist/
│   └── output.css          # Compiled Tailwind CSS (do NOT edit manually)
│
├── js/
│   ├── script.js           # Main animation & interaction controller
│   └── i18n.js             # Bilingual translation engine (ES / EN)
│
├── images/                 # All visual assets (.webp)
│   ├── animated_*.webp     # Looping animated scene illustrations
│   ├── icon_*.webp         # Section icons
│   ├── mobile_*.webp       # Mobile app UI screenshots
│   ├── web_*.webp          # Web dashboard screenshots
│   └── yummIzi_logo.webp   # Brand logo
│
├── others/
│   ├── privacy_policies/   # Raw privacy policy text
│   ├── prompts/            # Development prompt references
│   └── testing/            # Penetration testing scripts
│
├── package.json            # Node dependencies (Tailwind CLI)
└── README.md               # This file
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, SEO-optimised) |
| Styling | Tailwind CSS v4 (`@tailwindcss/cli`) + custom inline styles |
| Animation | GSAP 3.12 + ScrollTrigger plugin (CDN) |
| Backend / DB | Supabase JS SDK v2 (CDN) — lead form submissions |
| i18n | Custom vanilla JS engine (`js/i18n.js`) |
| Fonts | League Spartan · Glacial Indifference · Comfortaa (Google / CDN) |
| Deployment | Netlify |

---

## ⚙️ Local Development

### Prerequisites

- Node.js ≥ 18
- A browser with a local server (e.g. Live Server extension for VS Code)

### Install

```bash
npm install
```

### Build CSS

Tailwind v4 must be compiled whenever new utility classes are added to the HTML:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css
```

> [!IMPORTANT]
> `dist/output.css` is the compiled output — **never edit it directly**. All custom theme tokens (colors, fonts) live in `src/input.css`. Arbitrary Tailwind classes added to HTML require a rebuild to take effect; for deployment-critical styles, prefer **inline `style=""`** attributes.

### Watch mode (development)

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
```

---

## 📄 Pages

| File | Description |
|---|---|
| `index.html` | Main landing page — hero, comparison, diner app showcase, benefits, CTA |
| `restaurants.html` | Restaurant-focused pitch page with lead form |
| `diners.html` | Diner-focused pitch page |
| `privacy-policy.html` | Privacy policy (ES/EN) |

---

## 🎬 Animation Architecture (`js/script.js`)

All animations are orchestrated inside `js/script.js`. The execution flow is:

```
DOMContentLoaded
  └── Preloader animation (GSAP timeline)
        └── initHeroSection()
              ├── Hero expand animation (pill → fullscreen)
              ├── Background reel slideshow (setInterval)
              └── initHeroNarrative()   ← called on hero expand complete
                    ├── ScrollTrigger pinned timeline (hero section)
                    ├── Scene 1 → 2 → 3 → 4 transitions (text curtain + opacity)
                    ├── Scroll progress bar update (onUpdate / onRefresh)
                    └── Side image rotation animations (scene-2 & scene-3)
        └── initComparisonSection()
              └── ScrollTrigger card focus reveals
        └── initBenefitFlipCards()
              ├── Hover flip (desktop, CSS-driven)
              ├── Tap-to-flip (mobile, JS .is-flipped toggle)
              └── Horizontal swipe-to-flip (mobile, touch & pointer events)
        └── initLeadForm()
              └── Supabase form submission handler
```

### Hero Narrative — Scene Order

The DOM order of scenes is **1 → 3 → 2 → 4**, but the GSAP timeline plays them in logical order **1 → 2 → 3 → 4** using `opacity` and `desc-text` curtain animations.

### Scroll Progress Bar

A thin horizontal bar below the hero title tracks the pinned scroll progress. It updates via the ScrollTrigger `onUpdate` callback, starting near 0% and reaching 100% at the end of the pinned section.

---

## 🌍 Internationalisation (`js/i18n.js`)

- Default language: **Spanish (`es`)**
- Supported languages: Spanish, English (`en`)
- All translatable text elements carry a `data-i18n="key"` attribute
- Language is persisted in `localStorage` under `yummizi_lang`
- A navbar toggle switches between ES / EN without a page reload

---

## 🎨 Theme Tokens (`src/input.css`)

```css
--color-primary:      #ff751f   /* Yummizi orange */
--color-navy:         #001560   /* Deep navy */
--color-accent:       #ff6105   /* Dark orange accent */
--font-spartan:       'League Spartan'
--font-glacial:       'Glacial Indifference'
--font-comfortaa:     'Comfortaa'
```

---

## 🖼️ Images

All images are in **`.webp`** format for optimal performance. Categories:

- **`animated_*.webp`** — Looping animated GIF-style illustrations used in the comparison section
- **`icon_*.webp`** — Square icons for hero scenes and benefit cards
- **`mobile_*.webp`** — Phone UI screenshots (virtual queues, menu, arrival)
- **`web_*.webp`** — Web dashboard screenshots (request dashboard, digital menu, profile)
- Restaurant ambience photos — used in the hero background reel and footer

---

## 🚀 Deployment

The project is deployed via **Netlify** with automatic deploys from the connected repository.

> [!NOTE]
> Because `dist/output.css` is committed to the repository, no build step is required on Netlify. If new Tailwind classes are added, run the build locally and commit the updated `dist/output.css` before pushing.


# Author

Made with 💙 by **Piero Olivas Tuesta**
