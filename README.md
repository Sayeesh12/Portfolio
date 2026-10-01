# Sayeesh Rajendra Mahale — Portfolio

Dark, editorial developer portfolio built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

## Adding real assets that weren't available at build time

A few pieces of content were intentionally **left out rather than invented**, per the project's
content rules. Drop the real files in and flip these on:

- **Resume PDF** — add it to `public/` (e.g. `public/resume-sayeesh-mahale.pdf`) and set
  `RESUME_URL` at the top of `src/App.tsx`. This shows the Resume link in the navbar.
- **Symbiot Hackathon photo** — add the image to `src/assets/` (or `public/`), then in
  `src/sections/Hackathons.tsx` uncomment the `image:` line for the Symbiot entry and point it
  at the file.
- **LinkedIn URL** — set `LINKEDIN_URL` in `src/sections/Contact.tsx` once you have the real
  profile link. It's `null` by default so no invented link ships.

## Structure

```
src/
  components/   shared UI: Navbar, Footer, SectionHeader, MagneticButton, GridBackground
  sections/     one file per page section (Hero, About, Skills, Projects, ...)
  data/         content as data (skills, projects, education) — edit these, not the JSX
  lib/          small hooks (prefers-reduced-motion)
```

## Notes

- All copy, stats, skills, and project details come directly from the brief — nothing here is
  invented. No fake internships, metrics, rankings, or testimonials.
- Respects `prefers-reduced-motion`, uses semantic HTML, visible focus states, and alt text on
  the one real image in use.
- This project was written in a sandboxed environment without npm registry access, so
  `npm install` / `npm run build` could not be executed here to produce a final verification.
  The code was written carefully and checked with a TypeScript syntax pass, but please run
  `npm install && npm run build` yourself as a final check before deploying.
