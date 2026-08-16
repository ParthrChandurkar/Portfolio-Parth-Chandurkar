# Parth Rajesh Chandurkar Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Visit-22c55e?style=for-the-badge&logo=vercel&logoColor=white)](https://parth-chandurkar.vercel.app)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

A fast, responsive portfolio for Parth Rajesh Chandurkar, focused on Cloud, DevOps, AI automation, analytics, MLOps, and full-stack engineering.

Live site: [parth-chandurkar.vercel.app](https://parth-chandurkar.vercel.app)

## Why This Repo Exists

This repository is the source of truth for the live portfolio. It keeps the portfolio content, resume asset, project links, styling, and deployment setup version-controlled so every public update can be reviewed, built, and deployed safely.

The portfolio is built as a single-page React experience for recruiters, hiring managers, and technical reviewers who need quick access to:

- Current public GitHub projects
- Cloud, DevOps, automation, AI/ML, analytics, and full-stack skills
- Freelance, capstone, and research work
- Downloadable CV
- Contact, GitHub, LinkedIn, LeetCode, and IEEE research links

## Portfolio Highlights

| Area | What Visitors Get |
| --- | --- |
| Hero | Direct GitHub, LinkedIn, and resume actions |
| Skills | Categorized technology chips with recognizable icons |
| Experience | Applied engineering work with links and measurable outcomes |
| Work | Current GitHub projects with repositories, live demos, and project categories |
| Research | ZenithMind IEEE Xplore publication link |
| Contact | Direct email, phone, GitHub, LinkedIn, and location details |

## Project Finder Feature

The Work section includes an interactive project finder:

- Search across project names, statuses, stacks, categories, and project outcomes
- Filter projects by category such as `Analytics`, `Automation`, `AI`, `Full Stack`, `Cloud`, `DevOps`, `MLOps`, and `Desktop`
- Show a live result count so visitors know how much of the portfolio is visible
- Provide a reset action and empty-result state for clean navigation

Project filtering is data-driven. Each project object in [src/App.jsx](src/App.jsx) includes a `category` field, and the category buttons are generated from the project list automatically.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Frontend | React 19, JavaScript, HTML5, CSS3 |
| Build | Vite 8 |
| UI Icons | Lucide React, React Icons |
| Hosting | Vercel |
| Workflow | npm, Git, GitHub |

## Project Structure

```text
Portfolio/
|-- public/
|   |-- profile.jpeg
|   |-- profile-fallback.bmp
|   `-- Parth_Rajesh_Chandurkar_Resume.pdf
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|   `-- styles.css
|-- index.html
|-- package.json
|-- package-lock.json
`-- vite.config.js
```

## Run Locally

Prerequisites:

- Node.js 20.19+ or 22.12+
- npm 10+

Setup:

```bash
git clone https://github.com/ParthrChandurkar/Portfolio-Parth-Chandurkar.git
cd Portfolio-Parth-Chandurkar
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173
```

Production build:

```bash
npm run build
npm run preview
```

## Content Maintenance

Most portfolio content lives in [src/App.jsx](src/App.jsx):

- `profile`
- `featuredStack`
- `skillGroups`
- `experience`
- `projects`
- `certifications`
- `education`
- `stats`

Global layout and responsive styling live in [src/styles.css](src/styles.css). Static assets such as the profile photo, fallback image, and resume PDF live in [public/](public/).

Recommended update flow:

1. Add or update project data in `projects`
2. Set a clear `category`, `status`, `stack`, and measurable `points`
3. Add `github` and `live` links when available
4. Run `npm run build`
5. Check the project finder with at least one search and one category filter
6. Push to `main` and verify the Vercel deployment

## Quality Checks

Before publishing content changes:

```bash
npm run build
```

Also verify:

- Resume opens from `/Parth_Rajesh_Chandurkar_Resume.pdf`
- Project repository and live demo links are current
- Mobile layout does not overflow
- Contact email and social links are correct
- Vercel production deployment points to the latest `main` commit

## Deployment

The site is deployed on Vercel. The connected production URL is:

```text
https://parth-chandurkar.vercel.app
```

Every pushed `main` update can be deployed through the linked Vercel project. For manual deployment:

```bash
npx vercel deploy --prod
```

## Connect

- GitHub: [github.com/ParthrChandurkar](https://github.com/ParthrChandurkar)
- LinkedIn: [linkedin.com/in/parth-chandurkar](https://www.linkedin.com/in/parth-chandurkar)
- LeetCode: [leetcode.com/u/parthchn28](https://leetcode.com/u/parthchn28)
- Email: [parthrchn27@gmail.com](mailto:parthrchn27@gmail.com)

---

Built and maintained by [Parth Rajesh Chandurkar](https://github.com/ParthrChandurkar).
