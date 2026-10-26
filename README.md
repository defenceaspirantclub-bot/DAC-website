# Defence Aspirant Club (DAC) Website

Official website of the **Defence Aspirant Club (DAC)** at AISSMS.

The website is built using **Astro** with **Tailwind CSS v4** and is currently a static site. The project is structured so that it can be expanded in the future with backend services, databases, authentication, event registration, and other features.

## Please Go through the [contribution guidelines](#contribution-guidelines) properly, before making contribution!

## Tech Stack

- **Astro** — Static site framework
- **Tailwind CSS v4** — Styling
- **JavaScript** — Interactive functionality
- **HTML/CSS** — Website structure and styling
- **Netlify** — Deployment and preview

## Project Structure

```text
dac_website/
├── public/
│   └── assets/
│       ├── favicon/
│       ├── images/
│       │   ├── gallery/
│       │   ├── hero/
│       │   └── team/
│       └── logo/
│           └── DAC_LOGO.png
│
├── src/
│   ├── components/
│   │   └── Navbar.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about-dac.astro
│   │   ├── gallery.astro
│   │   ├── ncc-forces.astro
│   │   ├── ssb-guidance.astro
│   │   ├── events.astro
│   │   ├── visits.astro
│   │   ├── national-days.astr0
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Website Pages

The current website contains the following pages:

| Page          | Route             | Purpose                                 |
| ------------- | ----------------- | --------------------------------------- |
| Home          | `/`               | Introduction to DAC                     |
| About DAC     | `/about-dac/`     | Club history, mission and information   |
| Gallery       | `/gallery/`       | Photos and activities                   |
| NCC & Forces  | `/ncc-forces/`    | NCC and Indian Armed Forces information |
| SSB Guidance  | `/ssb-guidance/`  | SSB-related guidance                    |
| Events        | `/events/`        | Club events and activities              |
| Visits        | `/visits/`        | Defence and institutional visits        |
| National Days | `/national-days/` | National days and related activities    |

## Getting Started

### Requirements

You need:

- **Git**
- **Node.js** — current LTS version recommended
- **npm** — included with Node.js

Check your installation:

```bash
node -v
npm -v
git --version
```

### First-Time Setup

Clone the repository:

```bash
git clone <repo-url>
cd dac_website
```

Install project dependencies:

```bash
npm install
```

Dependencies are installed locally inside `node_modules/`. This directory is git-ignored and should **never be committed**.

## Local Development

Start the Astro development server:

```bash
npm run dev
```

Astro will provide a local development URL, normally:

```text
http://localhost:4321
```

The development server automatically reloads the website when files are changed.

You do **not** need to run a separate Python server.

## Production Build

Before committing major changes or deploying the website, test the production build:

```bash
npm run build
```

Astro generates the static website inside:

```text
dist/
```

The `dist/` directory is generated automatically and should **not** be committed to Git.

To preview the production build locally:

```bash
npm run preview
```

## Contribution Guidelines

### 1. Create a feature branch

Do not work directly on `main`.

```bash
git checkout -b feature/<short-name>
```

Example:

```bash
git checkout -b feature/gallery-update
```

### 2. Make your changes

Edit the relevant Astro, CSS, JavaScript, or asset files.

### 3. Test locally

Run:

```bash
npm run dev
```

Check the website on both desktop and mobile screen sizes.

Also test the production build:

```bash
npm run build
```

If the build completes successfully, the project is ready to commit.

### 4. Commit your changes

```bash
git add .
git commit -m "Short description of the change"
```

Example:

```bash
git commit -m "Add new gallery photos"
```

### 5. Push your branch

```bash
git push origin feature/<short-name>
```

### 6. Open a Pull Request

Create a Pull Request from your feature branch into `main`.

Another teammate should review the changes before they are merged.

## Where to Edit What

| I want to change...                       | Edit this                       |
| ----------------------------------------- | ------------------------------- |
| Home page                                 | `src/pages/index.astro`         |
| About DAC                                 | `src/pages/about-dac.astro`     |
| Gallery                                   | `src/pages/gallery.astro`       |
| NCC & Forces                              | `src/pages/ncc-forces.astro`    |
| SSB Guidance                              | `src/pages/ssb-guidance.astro`  |
| Events                                    | `src/pages/events.astro`        |
| Visits                                    | `src/pages/visits.astro`        |
| National Days                             | `src/pages/national-days.astro` |
| Navigation bar                            | `src/components/Navbar.astro`   |
| Common page layout                        | `src/layouts/Layout.astro`      |
| Global colours, fonts and reusable styles | `src/styles/global.css`         |
| Logo and images                           | `public/assets/`                |

## Assets

Website assets are stored inside:

```text
public/assets/
```

For example:

```text
public/assets/logo/DAC_LOGO.png
public/assets/images/gallery/
public/assets/images/hero/
public/assets/images/team/
```

When adding photos:

- Prefer **WebP** where practical.
- Keep image file sizes reasonably small.
- Avoid unnecessarily large images.
- Use consistent and descriptive file names.
- Remember that file names are **case-sensitive** when deployed.

For example:

```text
NDA_Visit_2026.webp
```

and

```text
nda_visit_2026.webp
```

are different file names.

## Styling

Global styling is handled by:

```text
src/styles/global.css
```

The project uses **Tailwind CSS v4** along with custom DAC design variables and reusable classes.

Common reusable styles include:

- `.btn`
- `.btn-primary`
- `.btn-ghost`
- `.nav-link`
- `.card`
- `.card-grid`
- `.eyebrow`

Do not edit generated files inside `dist/` manually.

## Important Git Rules

### Do not commit generated or local files

The following should remain ignored:

```text
node_modules/
dist/
.astro/
.env
```

### Do not work directly on `main`

Use a feature branch:

```bash
git checkout -b feature/<short-name>
```

Then create a Pull Request when the work is ready.

### Preserve the existing Git history

This repository already contains the project's Git history and contributors.

Do **not** delete the `.git/` directory or initialize a new repository when working on the project.

## Deployment

The website is currently deployed through **Netlify** for preview and hosting.

The project is an Astro static site. The production deployment uses:

```bash
npm run build
```

and the generated output is placed in:

```text
dist/
```

Netlify should be configured to build the project from the repository rather than serving an old manually generated `dist/output.css`.

## Troubleshooting

| Problem                            | Likely cause / fix                                                    |
| ---------------------------------- | --------------------------------------------------------------------- |
| `npm: command not found`           | Node.js/npm is not installed or not available in PATH                 |
| Page looks unstyled                | Check `src/styles/global.css` and run `npm run dev`                   |
| A Tailwind class does nothing      | Check the class name and make sure the development server is running  |
| Production build fails             | Run `npm run build` and fix the reported error                        |
| Image works locally but not online | Check the file name and capitalization                                |
| Page route gives 404               | Check that the corresponding `.astro` file exists inside `src/pages/` |
| Changes are not appearing          | Refresh the browser and check the Astro terminal for errors           |
| Port 4321 is already in use        | Astro will normally offer another available port                      |

## Future Ideas

The website is currently static, but the project can be expanded in the future.

Possible features include:

- Photo lightbox
- Event registration
- Member login
- Member profiles
- SSB guidance/blog system
- Admin dashboard
- Event management
- Database integration
- Backend/API
- Online membership system
- Separate pages for additional DAC activities
- Dynamic announcements and updates

The current Astro structure is intended to provide a clean foundation for these future additions.
