# Yuva Kiran Palla – Portfolio

Personal portfolio built with React 18, Vite, Tailwind CSS v4 and Framer Motion.

**Live:** https://yuvakiran.vercel.app

![Portfolio home: "From ideas into blazing web apps" with a typing terminal card](docs/screenshots/hero.jpg)

## Screenshots

| About | Projects |
| --- | --- |
| ![About section with photo, intro and education](docs/screenshots/about.jpg) | ![Projects section with the MyJobTracker card and live preview](docs/screenshots/projects.jpg) |

| Experience | Skills |
| --- | --- |
| ![Experience section with SmartBridge and byteXL internships](docs/screenshots/experience.jpg) | ![Skills section with pastel skill cards](docs/screenshots/skills.jpg) |

| Certifications | Contact |
| --- | --- |
| ![Certifications and achievements section](docs/screenshots/certifications.jpg) | ![Contact section with social links and message form](docs/screenshots/contact.jpg) |

**On mobile**

<p>
  <img src="docs/screenshots/mobile-hero.jpg" width="260" alt="Mobile view of the home section" />
  &nbsp;&nbsp;
  <img src="docs/screenshots/mobile-projects.jpg" width="260" alt="Mobile view of a project card" />
</p>

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

`.npmrc` sets `legacy-peer-deps=true` because npm 10 crashes (`reading 'edgesOut'`) while resolving
Vite 8's optional peer dependencies. Vercel reads the same file.

## Edit content

Everything you see on the page comes from **`src/data/portfolio.js`**: text, links, projects,
experience, skills, certifications, FAQ, the page title/description and the link-preview tags.
Components only read from that file.

- `==words==` in a heading gives the lavender highlight, `**words**` makes text bold.
- Card colors: `'lilac' | 'lime' | 'sky' | 'pink' | 'mint' | 'butter'`.
- After your first deploy, set `site.url` to the live address (used by link previews, `robots.txt` and `sitemap.xml`).
- BookStore's GitHub button appears as soon as you set `github` on that project.

## Contact form

Messages from the form are emailed to `site.email` by [FormSubmit](https://formsubmit.co) (free, no
account or key). The first message sent from a new address (localhost, then your Vercel URL) triggers an
**"Activate Form"** email to you: click it once and every later message arrives in your inbox. Replies
go straight to the sender because their email is set as reply-to. A hidden field drops spam bots.

## Assets (`public/`)

| File | Used for |
| --- | --- |
| `profile.jpg` | About photo |
| `resume.pdf` | Resume buttons (downloads as `Yuva-Kiran-Palla-Resume.pdf`) |
| `certificates/smartbridge.pdf` | SmartBridge certificate links |
| `certificates/bytexl.pdf` | byteXL certificate links |
| `projects/*.webp` | Project screenshots (1280×720) |
| `og-image.jpg` | Link preview image (1200×630) |
| `favicon.svg` | Browser tab icon |

To swap a project screenshot, drop a new image in `public/projects/` and update `image` in `portfolio.js`.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel: **Add New → Project**, import the repository. The Vite preset is detected
   automatically (build `npm run build`, output `dist`).
3. Update `site.url` in `src/data/portfolio.js` to the live URL and push again.

Or from the terminal: `npx vercel` (preview) and `npx vercel --prod`.

## Structure

```
src/
  data/portfolio.js     all content
  components/           one file per section + ui/ helpers (Section, Reveal, Rich, ExternalLink)
  hooks/                useScrollSpy, useMediaQuery
  lib/                  icon and color maps
  index.css             design tokens (Tailwind @theme) and shared styles
docs/DESIGN_NOTES.md    what was matched from the reference design
docs/screenshots/       images used in this README
```
