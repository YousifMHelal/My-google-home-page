# My Google Home Page

A personal browser start page built with React and Tailwind CSS: a live clock, Google search, and quick links to the tools I use for development and security work, over an animated glyph-rain background.

![Start page preview](src/preview.png)

## Features

- **Clock**: 12-hour time with the date and a greeting, updated every second.
- **Google search**: auto-focused search bar; press `/` anywhere to jump back to it.
- **Quick links**: 45 brand-coloured tiles in four groups: Workspace & AI, Dev & learning, Offensive security, OSINT & recon.
- **Header links**: mail, GitHub, LinkedIn, Upwork, portfolio, chat, and social accounts.
- **Animated background**: falling glyphs on a canvas, shading from cyan to purple. The rain speeds up while you type a search and stays still when the OS "reduce motion" setting is on.

## Tech stack

- React 18
- Vite 8 (dev server and build)
- Tailwind CSS 3 (via PostCSS)
- react-icons 4
- gh-pages for deployment

## Getting started

```bash
git clone https://github.com/YousifMHelal/My-google-home-page.git
cd My-google-home-page
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Scripts

| Command | What it does |
|---|---|
| `npm start` (or `npm run dev`) | Start the dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and publish to GitHub Pages |

## Customising

| To change | Edit |
|---|---|
| Links, categories, header icons, name and roles | [src/data/links.js](src/data/links.js) |
| Layout, colours, clock, search bar | [src/App.jsx](src/App.jsx) |
| Background animation (speed, colours, glyphs) | [src/components/GlyphRain.jsx](src/components/GlyphRain.jsx) |
| Profile photo | `src/profile.jpeg` |
| Fonts | the Google Fonts link in [index.html](index.html) |

Each link is one line in `links.js`: a label, URL, icon from `react-icons`, and brand colour. Very dark brand colours are lightened automatically so they stay visible on the dark background.

## Project structure

```
index.html                   # HTML shell and font links
vite.config.mjs              # Vite config (GitHub Pages base path)
src/
├── App.jsx                  # Page layout: header, clock, search, link tiles
├── main.jsx                 # React entry point
├── index.css                # Tailwind directives and base styles
├── components/
│   └── GlyphRain.jsx        # Animated canvas background
├── data/
│   └── links.js             # All links and profile info
├── hooks/
│   ├── useClock.js          # Current time, refreshed on an interval
│   ├── useReducedMotion.js  # Tracks the OS reduce-motion setting
│   └── useSlashFocus.js     # "/" shortcut to focus search
├── utils/
│   ├── brandColor.js        # Lightens brand colours that are too dark
│   └── time.js              # Time, date and greeting formatting
├── profile.jpeg
└── preview.png              # Screenshot used in this README
```

## Deployment

The site is served from `https://yousifmhelal.github.io/My-google-home-page/`, so [vite.config.mjs](vite.config.mjs) sets `base` to `/My-google-home-page/` for production builds. Run `npm run deploy` to build into `dist/` and push it to the `gh-pages` branch.
