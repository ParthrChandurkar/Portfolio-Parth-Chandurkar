# Parth Rajesh Chandurkar Portfolio

A responsive React portfolio for **Parth Rajesh Chandurkar - Cloud & DevOps Enthusiast**. The site preserves the existing dark infrastructure-themed design while keeping the content aligned with the final CV, public GitHub repositories, IEEE publication, and downloadable resume.

- [Live site](https://parth-chandurkar.vercel.app)

## Quick Navigation

For visitors: [Projects](https://parth-chandurkar.vercel.app/#work), [Experience](https://parth-chandurkar.vercel.app/#experience), [Research](https://parth-chandurkar.vercel.app/#research), and [Resume PDF](https://parth-chandurkar.vercel.app/Parth_Rajesh_Chandurkar_Resume.pdf).

For maintainers:

- [Getting Started](#getting-started): install dependencies and run the app.
- [Content Maintenance](#content-maintenance): edit projects, profile information, and assets.
- [Deployment](#deployment): configure builds and verify releases.
- [Troubleshooting](#troubleshooting): investigate installation, asset, filter, and publishing problems.

The main portfolio uses section anchors; [Open Source](https://parth-chandurkar.vercel.app/opensource) has its own page. Keep section IDs and `navItems` in `src/App.jsx` aligned when changing navigation so shared links remain valid.

## Current Focus

- Cloud infrastructure, Kubernetes, deployment automation, CI/CD, observability, networking, and reliability engineering
- AWS EC2, S3, RDS, IAM, Lambda, CloudWatch, Docker, Kubernetes, Minikube, Helm, GitHub Actions, and Terraform
- Prometheus, Grafana, Loki, Alertmanager, OpenTelemetry, Jaeger, Redis, MySQL, PostgreSQL, MongoDB, and FastAPI

## Featured Project Order

| Project | Focus | Link |
| --- | --- | --- |
| InfraWatch | Local-first Kubernetes deployment and observability platform with React, FastAPI, Python CLI, Prometheus, Grafana, Loki, Alloy, Alertmanager, and Redis | [Repository](https://github.com/ParthrChandurkar/InfraWatch) |
| Predictive Network Degradation & Route Optimizer | LTE degradation-risk routing with NetworkX, Random Forest evaluation, Mininet testing, Streamlit, OpenTelemetry, Jaeger, and Prometheus | [Repository](https://github.com/ParthrChandurkar/predictive-network-route-optimizer) |
| ZenithMind | IEEE-published mental-wellness research project deployed with AWS EC2, Docker, Kubernetes, and Google Fit OAuth | [Repository](https://github.com/ParthrChandurkar/-ZenithMind-AI-Powered-Mental-Health-Assistant) |
| Pharmenia - Pharmacy Management System | Python/Tkinter pharmacy management with MySQL, AWS RDS/EC2/S3 CV deployment scope, supplier coordination, and FIFO invoicing | [Repository](https://github.com/ParthrChandurkar/Pharmenia---Pharmacy-Management-System) |

InfraWatch roadmap items such as GitHub repository analysis, broader deployment tracking, and consolidated operational reports are described as planned work, not completed features.

## Portfolio Features

- Single-page portfolio with hero, about, skills, education, experience, projects, research, certifications, and contact sections
- Searchable and category-filtered project grid generated from `src/App.jsx`
- Featured cards for the final-CV projects, with the wider GitHub project set still discoverable
- Downloadable resume stored in `public/Parth_Rajesh_Chandurkar_Resume.pdf`
- Direct links to GitHub, LinkedIn, LeetCode, the IEEE paper, project repositories, and live demos where available
- Responsive CSS and profile image fallback handling

## Tech Stack

- React 19 and JavaScript
- Vite 8
- CSS
- Lucide React and React Icons
- Vercel deployment

## Project Structure

```text
Portfolio/
|-- public/              # Resume and profile assets
|-- scripts/             # Profile fallback generator
|-- src/
|   |-- App.jsx          # Portfolio data and component structure
|   |-- main.jsx         # React entry point
|   `-- styles.css       # Global and responsive styles
|-- index.html
|-- package.json
`-- vite.config.js
```

## How the App Runs

`index.html` provides the root element and loads `src/main.jsx`, which mounts `App` in React Strict Mode and imports `src/styles.css`. Profile and project data live directly in `src/App.jsx`; Vite bundles them into the static production output.

The mobile menu, project query, category selection, and image fallback use React state. Search and category changes are processed in the browser. They are not stored in a database or encoded in the URL, so reloading resets the filters.

The contact form opens a `mailto:` URL using the visitor's name for the subject and message for the body. It does not submit to a server or confirm delivery. Although an email field is displayed, the current handler does not include that field in the generated draft; the sending address is controlled by the visitor's email client.

There is no application backend or database to start for this portfolio. The technologies listed in project cards describe those separate repositories, not dependencies required to run this website.

## Getting Started

Prerequisites: Node.js 20.19+ within the 20.x release line, or Node.js 22.12+, and npm. These versions match the installed Vite package's Node engine requirement.

Clone the repository and install the versions recorded in `package-lock.json`:

```bash
git clone https://github.com/ParthrChandurkar/Portfolio-Parth-Chandurkar.git
cd Portfolio-Parth-Chandurkar
npm ci
npm run dev
```

Use the local URL printed by Vite. The dev server binds to `127.0.0.1`. To request another port when one is occupied:

```bash
npm run dev -- --port 5174
```

To verify a production build:

```bash
npm run build
npm run preview
```

| Command | Purpose |
| --- | --- |
| `npm ci` | Install dependencies from the committed lockfile; fails if it disagrees with `package.json` |
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Serve the existing `dist/` build locally for verification |

Rebuild before previewing changes. Preview does not rebuild the app or publish it. The repository currently defines no lint, type-check, or automated test scripts.

## Content Maintenance

### Open-source Contributions

The `/opensource` page shows verified merged and open pull requests authored by `ParthrChandurkar` across Meshery and Layer5. It includes status and organization filters, search, direct PR links, and a verification date. Closed, unmerged PRs are excluded, and community introductions are labeled separately from engineering work.

```bash
npm run sync:contributions
npm run build
```

The sync script queries GitHub's public API and checks each PR's merge status before writing `src/data/contributions.json`. Review and commit this snapshot to publish refreshed statuses; visitors do not call GitHub at runtime. API failures leave the previous snapshot intact. Unauthenticated GitHub API rate limits apply.

Edit curated contribution summaries in `src/Contributions.jsx` and page styles in `src/contributions.css`. Newly discovered PRs use their GitHub titles until a summary is added. Organization logos are stored locally in `public/opensource-*.png`.

Most portfolio content lives in `src/App.jsx`:

- `profile`
- `featuredStack`
- `skillGroups`
- `experience`
- `projects`
- `certifications`
- `education`
- `stats`

### Updating Projects

Edit the `projects` array in [src/App.jsx](src/App.jsx). Each card uses the following fields:

| Fields | Purpose |
| --- | --- |
| `title`, `status` | Unique project name and short description |
| `label`, `category` | Display date and category; category filters are generated from these values |
| `stack`, `points` | Technology summary and an array of evidence-backed descriptions |
| `icon` | An imported icon component used on the card |
| `github` | Repository link |
| `live`, `paper` | Optional demo and publication links, rendered only when present |
| `featured` | Enables the featured card styling and contributes to the featured result count |

Cards appear in array order. Setting `featured: true` does not move a card to the top, so keep the four featured CV projects first. Search is case-insensitive and covers title, status, stack, category, and points; it combines with the selected category filter.

Verify claims against the current CV and repository implementation. Keep planned work explicitly labeled, preserve publication links, and update `portfolioUpdated` only after reviewing the content. This is a manually maintained portfolio; the page does not fetch GitHub project data at runtime.

### Updating Assets

- Replace [the resume PDF](public/Parth_Rajesh_Chandurkar_Resume.pdf) at the existing path to preserve the download link. Check that its text agrees with the visible profile and project descriptions.
- Replace `public/profile.jpeg` to update the portrait. If it fails to load, the app uses `public/profile-fallback.bmp`.
- To regenerate the fallback image, run `node scripts/create-profile-fallback.mjs` from the repository root. This overwrites the existing fallback bitmap.
- If an asset filename changes, update its reference in `src/App.jsx`. Files in `public/` are served from the URL root, without a `/public/` prefix.
- Keep the title and description in [index.html](index.html) aligned with the profile positioning.

### Keeping CV Updates Consistent

Some facts appear in several places and are not derived from a single value. Review these together when updating the CV:

| Changed fact | Places to review |
| --- | --- |
| Professional title or focus | `profile`, hero and about copy in `src/App.jsx`, page metadata in `index.html`, and the README introduction |
| Education or achievements | `profile.college`, `education`, `stats`, and the downloadable resume |
| Featured project selection | Array order and `featured` flags in `projects`, the manually written featured-project statistic, and the README project table |
| Project responsibilities or implementation status | Relevant `experience` and `projects` entries, research copy where applicable, and the resume |
| IEEE publication URL | `researchPaperUrl`, `profile.ieee`, and the README research/contact links |
| Refresh date | `portfolioUpdated`, after the corresponding content and resume review is complete |

Record evaluation context alongside metrics: held-out model scores and controlled Mininet results should retain their test conditions. Describe virtual experiences as such, and keep roadmap capabilities separate from implemented project behavior. When the CV and a public repository differ, identify the source of the claim instead of silently treating both as equivalent evidence.

Before publishing content changes, verify:

- `npm run build` passes
- Resume opens from `/Parth_Rajesh_Chandurkar_Resume.pdf`
- Repository, live demo, LeetCode, LinkedIn, and IEEE links work
- Project search and category filters behave correctly
- Long project titles do not overflow on mobile or desktop
- InfraWatch planned capabilities are not presented as completed features

## Deployment

The public site is deployed on Vercel. Build settings are managed through the connected Vercel project; `vercel.json` rewrites `/opensource` and `/opensource/` to the app entry point so direct visits and refreshes work.

### Build Configuration

The repository's scripts produce a static Vite build. When configuring or repairing the connected Vercel project, use:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Root directory | Repository root |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

### Release Verification

1. Run `npm run build` and `git diff --check`, then preview the build locally.
2. Check project search with `InfraWatch`, combine it with a category, and verify Reset restores the full list. Test an unmatched query to check the empty state.
3. Open the resume, portrait, repository links, and IEEE paper. Check long card titles and navigation at both desktop and mobile widths.
4. Commit the intended files and push to `main`. In Vercel, check that the production deployment references that commit and finishes successfully.
5. Open [the live portfolio](https://parth-chandurkar.vercel.app) and verify the published content and resume. A successful Git push alone does not confirm a successful deployment.

### Troubleshooting

| Symptom | Check |
| --- | --- |
| Dependency installation reports an unsupported engine | Compare `node --version` with the prerequisites above |
| `npm ci` reports a lockfile mismatch | Reconcile `package.json` and `package-lock.json`; review and commit dependency changes together |
| Local preview shows old content | Run `npm run build` again before starting `npm run preview` |
| Portrait or resume fails to load | Verify the exact filename and letter case in `public/` and its root-relative URL in `src/App.jsx` |
| A project disappears from results | Reset both filters and check the card's category and searchable fields |
| Contact form does not send mail automatically | It opens the visitor's configured email client through `mailto:`; the app has no email-sending backend |
| Production still shows an older version | Check Vercel's deployed commit and build logs, then reload the page without cache |

## Connect

- GitHub: [github.com/ParthrChandurkar](https://github.com/ParthrChandurkar)
- LinkedIn: [linkedin.com/in/parth-chandurkar](https://www.linkedin.com/in/parth-chandurkar)
- LeetCode: [leetcode.com/u/parthchn28](https://leetcode.com/u/parthchn28/)
- IEEE: [ieeexplore.ieee.org/document/11566649](https://ieeexplore.ieee.org/document/11566649)
- Email: [parthrchn27@gmail.com](mailto:parthrchn27@gmail.com)

---

Built and maintained by [Parth Rajesh Chandurkar](https://github.com/ParthrChandurkar).
