# AI Project Context — Zeeshan Ansari Portfolio

Use this document as a handoff for an AI assistant working on this repository. It describes the current code, not a proposed redesign. If this file conflicts with the implementation, verify the source and update this context after making changes.

## Project at a glance

- A single-page personal portfolio site for Zeeshan Ansari, an AIML engineering student.
- Built with React 19 and Vite 7 using JavaScript and JSX.
- No backend, database, router, or external UI component library.
- The main page is composed from reusable section components. Portfolio text, links, skills, projects, and education are centralized in `src/data/portfolio.js`.
- The current visual style is dark, restrained, responsive, and uses mint-green accents.

## Tech and commands

- Runtime dependencies: `react`, `react-dom`.
- Build/dev dependencies: `vite`, `@vitejs/plugin-react`.
- `npm run dev` — start the Vite development server.
- `npm run build` — create the production build in `dist/`.
- `npm run preview` — serve the production build locally.
- `npm install` — install dependencies.
- There are currently no test, lint, or type-check scripts in `package.json`.

## Application structure

```text
index.html                      HTML shell, metadata, fonts, app mount
src/
  main.jsx                      React entry point; imports global CSS
  App.jsx                       Page composition and scroll/reveal effects
  data/
    portfolio.js                All editable portfolio content
  components/
    Navbar.jsx                  Responsive navigation and active-section state
    Hero.jsx                    Intro, portrait, calls to action, social links
    About.jsx                   About paragraphs
    Skills.jsx                  Categorized skills and learning labels
    Projects.jsx                Project cards, technologies, GitHub/live links
    Journey.jsx                 Learning path, education, optional experience
    Contact.jsx                 Email link and social links
    Footer.jsx                  Name, current year, social links, back-to-top
    SocialLinks.jsx             Reusable GitHub/LinkedIn icons and links
  styles.css                    Global design system, layout, responsive styles
public/
  assets/
    portrait.jpg                JPEG portrait fallback
    portrait.webp               Preferred WebP portrait
legacy.html                     Preserved standalone legacy implementation
vite.config.js                  Vite React plugin configuration
```

`index.html` is the active Vite entry page and mounts the React app through `src/main.jsx`. `legacy.html` is a separate preserved HTML page, not part of the React component tree. `dist/` is generated output and is ignored by Git.

## Page composition and behavior

`src/App.jsx` renders the sections in this order:

1. Fixed top navigation
2. Hero (`#home`)
3. About (`#about`)
4. Skills (`#skills`)
5. Projects (`#projects`)
6. Learning journey and education (`#journey`)
7. Contact (`#contact`)
8. Footer

Shared page behaviors in `App.jsx`:

- The top progress indicator scales with document scroll position.
- An `IntersectionObserver` adds `is-visible` to reveal-animated elements.
- Scroll position is also checked as a fallback to reveal items already above the viewport.
- The page disables/reveals content appropriately for `prefers-reduced-motion`; observer and event listeners are cleaned up on unmount.

Navigation behavior in `Navbar.jsx`:

- Links use in-page anchors, and the active item is updated from scroll position and URL hash changes.
- On small screens, a button opens/closes the menu; selecting a link closes it.
- Escape closes the open menu and restores focus to the menu button.
- Resizing to desktop width closes the mobile menu.

Other behavior:

- Resume download appears only when `person.resume` is a non-empty URL/path.
- Contact is a `mailto:` link, not a submitted form.
- Project live-demo links are only rendered when `project.live` is non-empty.
- Project images are optional; projects without images use a generated placeholder.
- External social/project links use a new tab and `rel="noopener noreferrer"`.

## Where to make common changes

- **Name, role, intro, email, portrait paths, resume:** `portfolio.person` in `src/data/portfolio.js`.
- **GitHub and LinkedIn:** `portfolio.social` in the same file.
- **About text:** `portfolio.about` (array of paragraphs).
- **Skills:** `portfolio.skills` (array of categories; each item can set `learning: true`).
- **Projects:** `portfolio.projects` (name, description, `tech`, optional `image`, `github`, optional `live`).
- **Learning path:** `portfolio.journey`; supported statuses are `done`, `current`, `next`.
- **Education and experience:** `portfolio.education` and `portfolio.experience`. Experience currently is empty and its section is omitted when empty.
- **Contact heading/body:** `portfolio.contact`.
- **Markup and section functionality:** the matching component under `src/components/`.
- **Visual design, responsive behavior, animations:** `src/styles.css`.
- **Browser title, description, social preview metadata, font loading, portrait preload:** `index.html`.

Keep content edits in the data module instead of hard-coding portfolio copy in components. If adding a skill category, also check `categoryIcons` in `Skills.jsx`; categories without a matching icon may render without a valid SVG path.

## Design and accessibility notes

- CSS custom properties at the top of `src/styles.css` define the dark background/surface, foreground/muted text, mint accent, content width, gutters, spacing, radii, and shadows.
- Fonts are loaded from Google Fonts in `index.html`: DM Sans for body text and Manrope for headings/controls, with system fallbacks.
- Responsive breakpoints are at `820px` and `480px`; the navigation menu becomes a mobile menu at the tablet breakpoint.
- Reduced-motion behavior is implemented both in CSS and JavaScript. Keep both in sync when changing motion behavior.
- Interactive links and buttons have visible keyboard focus styling. Navigation uses `aria-expanded`/`aria-controls`; icon-only links have accessible labels.
- Keep anchor IDs aligned between `Navbar.jsx` and the page sections.
- Portrait paths are rooted at `/assets/`; place public assets under `public/assets/`.

## Current portfolio content (from `src/data/portfolio.js`)

- Name: Zeeshan Ansari; title: “Aspiring Full Stack + AI Engineer”.
- Education: B.Tech in Artificial Intelligence & Machine Learning at Haldia Institute of Technology, listed as 2025–2029 and second-year student.
- Skills include frontend (HTML5, CSS3, JavaScript, React, Tailwind CSS), backend/full stack (Node.js, Express.js, Mongo.db marked as learning), programming (C, Python, Java), AI/ML (marked as learning), and core DSA/Git/GitHub.
- Projects currently listed: AI-Based-Landslide-Prediction, Rock-Paper-and-Scissors, and Task Management Dashboard. All currently use placeholder visuals and have GitHub links; live URLs are empty.
- Learning path covers programming fundamentals, frontend, React, DSA, full-stack, AI/ML, and Generative AI.
- No work experience is listed. Resume path is empty, so the resume button is hidden.

## Working guidance for another AI

- Inspect the relevant component and its matching CSS before changing UI behavior; this project uses hand-authored CSS rather than a utility framework.
- Preserve the data-driven component approach and existing section anchors.
- Avoid introducing dependencies for simple UI changes.
- Do not assume form handling, authentication, API calls, server-side rendering, or route navigation exists.
- Run `npm run build` after code changes to verify the production bundle. There is no configured automated test suite.
- `README.md`, `index.html`, `legacy.html`, `package.json`, `package-lock.json`, `.gitignore`, `public/`, `src/`, and `vite.config.js` were already modified or untracked in the worktree when this handoff was created. Preserve those existing changes; do not treat them as your own or revert them.
