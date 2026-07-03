# Devin Johnson Portfolio

A polished personal portfolio site for Devin Johnson, a Senior AI Engineer. The site presents professional positioning, impact metrics, selected case studies, experience, skills, contact links, and a downloadable resume.

## Overview

This project is built as a single-page portfolio with Next.js App Router, TypeScript, Tailwind CSS, and theme support through `next-themes`.

Key sections include:

- Hero introduction with animated role copy
- Impact metrics with animated counters
- About summary and focus areas
- Selected work and case studies
- Professional experience timeline
- Skills grouped by domain
- Contact section with email, LinkedIn, and resume links
- Light and dark theme support
- Structured person metadata for search engines

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-themes
- ESLint with Next.js defaults

## Getting Started

### Prerequisites

Use a current Node.js LTS release. Node 18.17 or newer is recommended for Next.js 14.

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
app/
  fonts.ts          Font configuration
  globals.css       Global styles, CSS variables, motion, theme tokens
  layout.tsx        Root layout, metadata, schema.org person JSON-LD
  page.tsx          Main page composition

components/
  About.tsx         About section
  CaseStudy.tsx     Reusable case study component
  Contact.tsx       Contact call-to-action
  Counter.tsx       Animated metric counter
  Experience.tsx    Experience timeline
  Footer.tsx        Site footer
  Hero.tsx          Main hero section
  Metrics.tsx       Impact metric cards
  Nav.tsx           Navigation and active-section behavior
  Providers.tsx     Theme provider
  Reveal.tsx        Scroll reveal behavior
  SectionHeader.tsx Reusable section heading
  Skills.tsx        Skill groups
  TerminalCard.tsx  Hero terminal-style visual
  ThemeToggle.tsx   Theme switcher
  Typewriter.tsx    Animated typewriter text
  Work.tsx          Case study list

lib/
  content.ts        Profile data, copy, metrics, roles, skills, and links

public/
  Devin_Johnson_Resume.pdf
```

## Customization

Most site content is centralized in `lib/content.ts`.

Update that file to change:

- Name, title, location, email, phone, LinkedIn, and resume path
- Hero copy and rotating typewriter words
- Metrics and animated counter targets
- About copy and focus chips
- Case studies and result summaries
- Experience history
- Skill groups
- Contact section copy

Update `app/layout.tsx` to change:

- Site title and meta description
- Canonical URL
- Open Graph and Twitter metadata
- Person structured data

Update `app/globals.css` and `tailwind.config.ts` to change:

- Theme colors
- Layout spacing
- Animation behavior
- Tailwind theme tokens

## Resume

The resume is served from:

```text
public/Devin_Johnson_Resume.pdf
```

To replace it, add a new PDF in `public/` and update `PROFILE.resume` in `lib/content.ts` if the filename changes.

## Accessibility Notes

The app includes:

- A skip-to-content link
- Visible focus states
- Reduced-motion handling through `prefers-reduced-motion`
- Semantic page sections and headings
- Sufficient theme contrast through CSS variables

When adding new interactive elements, keep keyboard behavior and focus visibility intact.

## Deployment

The easiest deployment target is Vercel.

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Set the production domain.
5. Update `metadataBase` in `app/layout.tsx` to match the live domain.

Any platform that supports Next.js can also host the app. Run `npm run build` as the build command and `npm run start` as the production command.

## Maintenance Checklist

Before publishing major updates:

- Run `npm run lint`
- Run `npm run build`
- Confirm resume download works
- Confirm all contact links are correct
- Review metadata and canonical URL
- Check the page in both light and dark themes
- Check the page at mobile and desktop widths

## License

This is a private portfolio project. Add a license before reusing the code outside this repository.
