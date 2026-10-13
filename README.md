# Parth Rajesh Chandurkar Portfolio

A responsive React portfolio for **Parth Rajesh Chandurkar - Cloud & DevOps Enthusiast**. The site preserves the existing dark infrastructure-themed design while keeping the content aligned with the final CV, public GitHub repositories, IEEE publication, and downloadable resume.

- [Live site](https://parth-chandurkar.vercel.app)

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

## Getting Started

Prerequisites: a Node.js version supported by Vite 8 and npm.

```bash
npm install
npm run dev
```

Use the local URL printed by Vite. To verify a production build:

```bash
npm run build
npm run preview
```

## Content Maintenance

Most portfolio content lives in `src/App.jsx`:

- `profile`
- `featuredStack`
- `skillGroups`
- `experience`
- `projects`
- `certifications`
- `education`
- `stats`

Before publishing content changes, verify:

- `npm run build` passes
- Resume opens from `/Parth_Rajesh_Chandurkar_Resume.pdf`
- Repository, live demo, LeetCode, LinkedIn, and IEEE links work
- Project search and category filters behave correctly
- Long project titles do not overflow on mobile or desktop
- InfraWatch planned capabilities are not presented as completed features

## Deployment

The public site is deployed on Vercel. The repository does not include a committed Vercel project configuration, so deployment settings are managed through the connected Vercel project.

## Connect

- GitHub: [github.com/ParthrChandurkar](https://github.com/ParthrChandurkar)
- LinkedIn: [linkedin.com/in/parth-chandurkar](https://www.linkedin.com/in/parth-chandurkar)
- LeetCode: [leetcode.com/u/parthchn28](https://leetcode.com/u/parthchn28/)
- IEEE: [ieeexplore.ieee.org/document/11566649](https://ieeexplore.ieee.org/document/11566649)
- Email: [parthrchn27@gmail.com](mailto:parthrchn27@gmail.com)

---

Built and maintained by [Parth Rajesh Chandurkar](https://github.com/ParthrChandurkar).
