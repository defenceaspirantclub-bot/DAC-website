# Defence Aspirant Club (DAC) Website

Static website. No build step. Open `index.html` in a browser to preview.

## Structure
- `index.html`  all page sections (About, Gallery, NCC, SSB, Events, Visits, National Days)
- `css/style.css`  all styling and colours (see the variables at the top)
- `images/`  logo and gallery photos (compress to under 300 KB each)

## Team workflow
1. `git clone <repo-url>`
2. `git checkout -b feature/<short-name>` (never work on `main`)
3. Make changes, then `git add . && git commit -m "Add gallery photos"`
4. `git push origin feature/<short-name>` and open a Pull Request
5. One teammate reviews and merges into `main`. The live site updates automatically.

## Suggested roles
- Design lead: css/style.css, logo, colours
- Content lead: About DAC, NCC, SSB text
- Media lead: images/ and the Gallery section
- Events lead: Events, Visits, National Days sections
- Deploy lead: hosting, domain, GitHub settings

## Future ideas
Photo lightbox, event registration form, member login, blog for SSB tips, separate pages per section.
