# Nafees Khan | Portfolio

A responsive portfolio website for **Nafees Khan**, a DevOps Engineer and Full Stack Developer. It showcases cloud, GitOps and CI/CD projects alongside full-stack applications, skills and experience.

**Live site:** _add your deployed URL here_

## Features

- **Fully responsive** layout, from small phones to ultra-wide screens
- **Hero and About** sections with resume download
- **Skills** bento grid grouped by DevOps, Cloud, Frontend, Backend, Programming and Database, with brand-coloured icons
- **Projects** page with a **3D carousel** (swipe, drag, arrow keys and indicator dots) and a DevOps / Development switch
- **Experience** timeline with education, certifications and achievements
- **Contact form** that sends messages straight to email through Web3Forms, with loading, success and error states
- **Mobile bottom navigation** and a footer with quick links
- **Scroll to top** on every page change
- Smooth entrance animations that respect `prefers-reduced-motion`

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React, Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Icons | React Icons (Simple Icons, Lucide, Font Awesome, Tabler) |
| Contact form | Web3Forms |
| Linting | Oxlint |

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/skill` | Skills |
| `/project` | Projects |
| `/experience` | Experience |
| `/contact` | Contact |

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Nafees-khan-29/<your-repo-name>.git
cd <your-repo-name>

# 2. Install dependencies
npm install
```

### Environment variables

The contact form uses [Web3Forms](https://web3forms.com). Get a free access key, then create a `.env` file in the project root:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

`.env` is listed in `.gitignore`, so it won't be committed. Without this key the contact form shows an "access key is missing" message.

### Run locally

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deployment

The site is a single-page app, so the host needs two things:

1. **Environment variable:** add `VITE_WEB3FORMS_ACCESS_KEY` in your host's settings (Netlify, Vercel, etc.). The local `.env` file is not uploaded.
2. **SPA routing:** send all routes to `index.html`, otherwise refreshing a page like `/project` returns a 404.
   - **Netlify:** add a `public/_redirects` file containing `/*  /index.html  200`
   - **Vercel:** add a `vercel.json` with a rewrite of `/(.*)` to `/index.html`

> Vite embeds `VITE_` variables in the built JavaScript, so the Web3Forms key is visible in the browser. Restrict it to your domain in the Web3Forms dashboard to prevent misuse.

## Customising

- **Contact details:** edit `EMAIL` and `PHONE` at the top of `Contact.jsx`, and `EMAIL` in `Footer.jsx`.
- **Projects and skills:** edit the data arrays at the top of the Projects and Skills components.
- **Experience, education and certifications:** edit the arrays at the top of `Experience.jsx`.
- **Resume:** replace the PDF in `src/assets` (keep the same file name, or update the import).
- **Photos:** replace `portfolio-image.png` (Hero) and `about-image.png` (About) in `src/assets`.

## Contact

- **GitHub:** [Nafees-khan-29](https://github.com/Nafees-khan-29)
- **LinkedIn:** [nafeeskhan29](https://www.linkedin.com/in/nafeeskhan29/)
- **Email:** nafeeskhan7627@gmail.com
