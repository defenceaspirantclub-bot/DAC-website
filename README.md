# Defence Aspirant Club (DAC) Website

Static website. No build step. Open `index.html` in a browser to preview.

## Structure
- `index.html`  all page sections (About, Gallery, NCC, SSB, Events, Visits, National Days)
- `css/style.css`  all styling and colours (see the variables at the top)
- `assets/`  logo and gallery photos (compress to under 300 KB each)

## Contribution Guideline
1. `git clone <repo-url>`
2. `git checkout -b feature/<short-name>` (never work on `main`)
3. Make changes, then `git add . && git commit -m "Add gallery photos"`
4. `git push origin feature/<short-name>` and open a Pull Request
5. One teammate reviews and merges into `main`. The live site updates automatically.

## Running code on your machine

This site is plain HTML styled with **Tailwind CSS v4**. Tailwind needs a short build step: it reads the classes in `index.html` and `src/input.css`, then generates `dist/output.css`, the file the page actually loads.

### What you need
- **Git**
- **Node.js** (the current LTS version) and **npm**, which comes with Node
- **Python 3** (only for the local preview server; most Linux and macOS machines already have it)

Check your setup:
```bash
node -v
npm -v
python3 --version
```

### First-time setup
```bash
git clone <repo-url>
cd <repo-folder>
npm install
```
`npm install` reads `package.json` and downloads Tailwind into a local `node_modules/` folder. Nothing is installed globally, and `node_modules/` is git-ignored, so never commit it.

### Everyday workflow
Use **two terminals** in the project folder.

**Terminal 1: rebuilds the CSS every time you save**
```bash
npm run dev
```
Leave it running. If it prints an error, the CSS has not updated, so fix the error first.

**Terminal 2: serves the site**
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000` in your browser. After a change, hard-refresh with `Ctrl+Shift+R` (`Cmd+Shift+R` on macOS) so the browser doesn't show a cached stylesheet.

### Before you commit
```bash
npm run build
```
This regenerates a minified `dist/output.css`. **Commit `dist/output.css`.** Netlify serves the files in the repo as they are and does not run the build, so without the updated file the live site will have old or missing styling.

```bash
git add .
git commit -m "Short description of the change"
```
Work on a feature branch and open a pull request. Do not commit straight to `main`.

### Where to edit what
| I want to change... | Edit this |
|---|---|
| Text, sections, links | `index.html` |
| Colours, fonts, reusable styles (`.btn`, `.card`, `.eyebrow`) | `src/input.css` |
| Logo and photos | `assets/` (compress photos to under 300 KB, WebP preferred) |

Do **not** edit `dist/output.css` by hand. It is regenerated on every build and your changes would be lost.

### Troubleshooting
| Problem | Likely cause and fix |
|---|---|
| Page looks unstyled | `dist/output.css` is missing or old. Run `npm run build`, then hard-refresh. |
| A new class does nothing | `npm run dev` is not running, or it printed an error. Check Terminal 1. |
| Build error mentioning a class like `grid-cols-[repeat(auto-fit,` | A space got into a bracketed class. Spaces are not allowed inside `[...]`. Turn off format-on-save in your editor for HTML and CSS. |
| An image shows locally but breaks online | File names are case-sensitive on Netlify. `DAC_LOGO.png` and `dac_logo.png` are different files. |
| `npm: command not found` | Node.js is not installed. Install the LTS version from nodejs.org, or use `nvm`. |
| Port 8000 already in use | Use another port: `python3 -m http.server 8080`. |
| Icons look huge | The CSS is stale. Rebuild and hard-refresh. |

## Future ideas
- Photo lightbox
- event registration form
- member login
- blog for SSB tips
- separate pages per section.
