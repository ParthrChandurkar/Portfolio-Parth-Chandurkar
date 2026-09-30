# Parth Rajesh Chandurkar Portfolio

A responsive React portfolio presenting projects, skills, experience, research, and contact information. The site includes search and category filters for navigating the project collection.

- [Live site](https://parth-chandurkar.vercel.app)

## Features

- Single-page project and experience presentation
- Searchable, category-based project finder
- Downloadable resume
- Responsive layout and image fallback generation
- Links to project repositories, demonstrations, and research

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

Portfolio content is defined in `src/App.jsx`, including profile details, skills, experience, projects, certifications, and education. Static files are stored under `public/`, and global presentation rules are in `src/styles.css`.

Before publishing a change, run `npm run build` and manually verify the resume download, external links, project filtering, and mobile layout.

## Deployment

The public site is deployed on Vercel. The repository does not include a committed Vercel project configuration, so deployment settings are managed through the connected Vercel project or the Vercel CLI.

