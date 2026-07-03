# Parth Rajesh Chandurkar - Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Visit-22c55e?style=for-the-badge&logo=vercel&logoColor=white)](https://parth-chandurkar.vercel.app)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

A responsive, cloud-and-DevOps-focused portfolio showcasing my engineering experience, technical skills, research, certifications, and projects. It is designed as a fast single-page experience with clear navigation and direct access to my work.

### [View the live portfolio ->](https://parth-chandurkar.vercel.app)

## Quick Links

- [About the Portfolio](#about-the-portfolio)
- [Highlights](#highlights)
- [Tech Stack](#tech-stack)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [Connect](#connect)

## About the Portfolio

This site presents my path as a B.Tech Information Technology student and aspiring Cloud & DevOps Engineer. The content brings together practical infrastructure work, full-stack development, MLOps projects, and research in one recruiter-friendly experience.

## Highlights

- Responsive desktop and mobile layouts
- Cloud and DevOps-oriented visual identity
- Categorized skills with recognizable technology icons
- Experience and education timelines
- Project cards with repositories and measurable outcomes
- Research and certification showcases
- Downloadable resume and mail-based contact form
- Accessible navigation, labels, and semantic sections

## What Visitors Can Explore

- Cloud, DevOps, MLOps, and full-stack projects in one place
- Skills grouped by practical engineering areas
- Timeline-based education and experience details
- Research, certifications, resume, and contact links for quick review

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, JavaScript, HTML5, CSS3 |
| Build tooling | Vite 8 |
| UI and icons | Lucide React, React Icons |
| Hosting | Vercel |
| Development | npm, Git, GitHub |

The portfolio content also highlights hands-on work with AWS, Docker, Kubernetes, Terraform, Jenkins, Ansible, GitHub Actions, Python, Node.js, Flask, SQL, and machine learning tooling.

## Project Structure

```text
Portfolio/
|-- public/              # Profile image, fallback image, and resume
|-- src/
|   |-- App.jsx          # Portfolio content and React components
|   |-- main.jsx         # Application entry point
|   `-- styles.css       # Layout, visual system, and responsive styles
|-- index.html           # Vite HTML shell
|-- package.json         # Scripts and dependencies
`-- vite.config.js       # Vite configuration
```

## Run Locally

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm 10 or newer

### Setup

```bash
git clone https://github.com/ParthrChandurkar/Portfolio-Parth-Chandurkar.git
cd Portfolio-Parth-Chandurkar
npm install
npm run dev
```

Open `http://127.0.0.1:5173` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the local Vite development server |
| `npm run build` | Creates the optimized production build |
| `npm run preview` | Serves the production build locally for review |

## Customize

Most portfolio content is stored in the data collections at the top of `src/App.jsx`. Update those collections to change profile details, navigation, skills, experience, projects, certifications, or education without restructuring the page.

Replace these files to use your own personal assets:

```text
public/profile.jpeg
public/Parth_Rajesh_Chandurkar_Resume.pdf
```

If the main portrait cannot load, the interface automatically uses `public/profile-fallback.bmp`.

## Content Update Checklist

- Update profile details, project data, and timeline entries in `src/App.jsx`
- Replace the resume PDF in `public/` after every major resume revision
- Confirm all project, certification, and social links open correctly
- Run `npm run build` before deployment to catch production build issues

## Deployment

The site is deployed on Vercel. Every push to the production branch can trigger a new deployment after Vercel is connected to the repository. For another static host, run `npm run build` and publish the generated `dist/` directory.

## Connect

- [GitHub](https://github.com/ParthrChandurkar)
- [LinkedIn](https://www.linkedin.com/in/parth-chandurkar)
- [LeetCode](https://leetcode.com/u/parthchn28)
- [Email](mailto:parthrchn27@gmail.com)

---

Built by [Parth Rajesh Chandurkar](https://github.com/ParthrChandurkar).
