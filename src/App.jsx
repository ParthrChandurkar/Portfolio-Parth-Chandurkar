import { useMemo, useState } from "react";
import {
  Activity,
  Award,
  BrainCircuit,
  CalendarDays,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Search,
  Send,
  ServerCog,
  ShieldCheck,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import { FaAws, FaGithub, FaJava, FaLinkedinIn } from "react-icons/fa6";
import {
  SiAnsible,
  SiC,
  SiCplusplus,
  SiDocker,
  SiDvc,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiGooglegemini,
  SiGrafana,
  SiGnubash,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiN8N,
  SiPostman,
  SiPlotly,
  SiPostgresql,
  SiPrisma,
  SiPrometheus,
  SiPython,
  SiPytorch,
  SiRedis,
  SiReact,
  SiRender,
  SiScikitlearn,
  SiSelenium,
  SiSpringboot,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const profile = {
  name: "Parth Rajesh Chandurkar",
  shortName: "ParthChandurkar",
  role: "Cloud & DevOps Engineer",
  college: "VIIT Pune | B.Tech IT | CGPA 8.71",
  email: "parthrchn27@gmail.com",
  phone: "+91-7057252266",
  location: "Pune, India",
  github: "https://github.com/ParthrChandurkar",
  linkedin: "https://www.linkedin.com/in/parth-chandurkar",
  leetcode: "https://leetcode.com/u/parthchn28",
  resume: "/Parth_Rajesh_Chandurkar_Resume.pdf",
};

const portfolioUpdated = "August 2026";

const navItems = [
  { label: "Home", id: "top" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

const skill = (name, icon, color) => ({ name, icon, color });
const awsOrange = "#ff9900";
const researchPaperUrl = "https://ieeexplore.ieee.org/document/11566649";

const featuredStack = [
  skill("AWS", FaAws, awsOrange),
  skill("Docker", SiDocker, "#2496ed"),
  skill("Kubernetes", SiKubernetes, "#326ce5"),
  skill("Terraform", SiTerraform, "#844fba"),
  skill("FastAPI", SiFastapi, "#009688"),
  skill("TypeScript", SiTypescript, "#3178c6"),
  skill("GitHub Actions", SiGithubactions, "#ffffff"),
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    accent: "cyan",
    items: [
      skill("C", SiC, "#a8b9cc"),
      skill("C++", SiCplusplus, "#659ad2"),
      skill("Python", SiPython, "#ffd43b"),
      skill("Java", FaJava, "#f89820"),
      skill("SQL", Database, "#38bdf8"),
      skill("Bash", SiGnubash, "#4eaa25"),
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    accent: "violet",
    items: [
      skill("AWS EC2", FaAws, awsOrange),
      skill("S3", FaAws, awsOrange),
      skill("RDS", Database, "#527fff"),
      skill("Lambda", FaAws, awsOrange),
      skill("IAM", ShieldCheck, "#a855f7"),
      skill("DynamoDB", Database, "#4053d6"),
      skill("Athena", Activity, "#38bdf8"),
      skill("CloudWatch", Activity, "#ff4f8b"),
      skill("Docker", SiDocker, "#2496ed"),
      skill("Kubernetes", SiKubernetes, "#326ce5"),
      skill("Helm", SiHelm, "#0f1689"),
      skill("Jenkins", SiJenkins, "#d24939"),
      skill("Terraform", SiTerraform, "#844fba"),
      skill("Ansible", SiAnsible, "#ee0000"),
      skill("Linux", SiLinux, "#fcc624"),
      skill("GitHub Actions", SiGithubactions, "#ffffff"),
      skill("Git", SiGit, "#f05032"),
    ],
  },
  {
    title: "Web & APIs",
    icon: ServerCog,
    accent: "green",
    items: [
      skill("React", SiReact, "#61dafb"),
      skill("TypeScript", SiTypescript, "#3178c6"),
      skill("Next.js", SiNextdotjs, "#ffffff"),
      skill("Node.js", SiNodedotjs, "#5fa04e"),
      skill("Spring Boot", SiSpringboot, "#6db33f"),
      skill("FastAPI", SiFastapi, "#009688"),
      skill("Flask", SiFlask, "#ffffff"),
      skill("REST APIs", ServerCog, "#34d399"),
      skill("Tailwind CSS", SiTailwindcss, "#06b6d4"),
      skill("Postman", SiPostman, "#ff6c37"),
      skill("Selenium", SiSelenium, "#43b02a"),
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "amber",
    items: [
      skill("MongoDB", SiMongodb, "#47a248"),
      skill("MySQL", SiMysql, "#4479a1"),
      skill("PostgreSQL", SiPostgresql, "#4169e1"),
      skill("Redis", SiRedis, "#dc382d"),
      skill("Prisma", SiPrisma, "#ffffff"),
      skill("Firebase", SiFirebase, "#ffca28"),
      skill("DynamoDB", Database, "#4053d6"),
      skill("AWS RDS", FaAws, awsOrange),
    ],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    accent: "rose",
    items: [
      skill("Machine Learning", BrainCircuit, "#fb7185"),
      skill("NLP", BrainCircuit, "#a855f7"),
      skill("Gemini", SiGooglegemini, "#8e75b2"),
      skill("TensorFlow", SiTensorflow, "#ff6f00"),
      skill("PyTorch", SiPytorch, "#ee4c2c"),
      skill("scikit-learn", SiScikitlearn, "#f7931e"),
      skill("DVC", SiDvc, "#945dd6"),
    ],
  },
  {
    title: "Analytics",
    icon: Activity,
    accent: "blue",
    items: [
      skill("Power BI", Activity, "#f2c811"),
      skill("Streamlit", SiStreamlit, "#ff4b4b"),
      skill("Plotly", SiPlotly, "#3f4f75"),
      skill("Prometheus", SiPrometheus, "#e6522c"),
      skill("Grafana", SiGrafana, "#f46800"),
      skill("Monitoring", Activity, "#60a5fa"),
      skill("Dashboards", Workflow, "#34d399"),
    ],
  },
  {
    title: "Automation & Hosting",
    icon: Workflow,
    accent: "cyan",
    items: [
      skill("n8n", SiN8N, "#ea4b71"),
      skill("Workflow Automation", Workflow, "#34d399"),
      skill("Vercel", SiVercel, "#ffffff"),
      skill("Render", SiRender, "#46e3b7"),
      skill("CI/CD", SiGithubactions, "#ffffff"),
      skill("Webhook APIs", ServerCog, "#38bdf8"),
    ],
  },
];

const experience = [
  {
    title: "Orbis Flow - AI-Assisted Invoice Approval Workflow Platform",
    type: "Freelance Project",
    duration: "Mar 2025 - Jun 2025",
    stack: "Spring Boot, FastAPI, Next.js, PostgreSQL, Redis, Docker, OCR, GitHub Actions",
    github: "https://github.com/ParthrChandurkar/orbisflow-platform",
    points: [
      "Built an end-to-end invoice workflow across employee, manager, and finance roles with OCR extraction, JWT auth, RBAC, and audit trails.",
      "Protected workflow integrity with optimistic locking, append-only events, and state validation to prevent duplicate invoice processing.",
      "Configured CI for Maven, pytest, Vitest, and Playwright across a three-service Docker Compose stack.",
    ],
  },
  {
    title: "ZenithMind - AI-Powered Mental Health Assistant",
    type: "Capstone Research Project",
    duration: "Nov 2024 - Feb 2025",
    stack: "React, Node.js, AWS EC2, NLP, Google API",
    github:
      "https://github.com/ParthrChandurkar/-ZenithMind-AI-Powered-Mental-Health-Assistant",
    paper: researchPaperUrl,
    points: [
      "Built a CBT-informed wellness platform with AI chat, mood analytics, therapist workflows, Google Fit integrations, and gamified self-care.",
      "Deployed the MERN platform on AWS EC2 with Kubernetes HPA, CloudWatch alarms, JWT authentication, and real-time dashboards.",
      "Published the associated research work on IEEE Xplore as document 11566649.",
    ],
  },
  {
    title: "F1 Race Prediction and Strategy System",
    type: "Freelance Project",
    duration: "Jan 2025 - Mar 2025",
    stack: "Python, Streamlit, scikit-learn, DVC, Docker, GitHub Actions, MLOps",
    github: "https://github.com/ParthrChandurkar/F1-Race-Prediction-Strategy-System",
    points: [
      "Built an end-to-end F1 analytics app for race outcome prediction, Monte Carlo grid simulation, and weather-aware pit strategy.",
      "Used DVC, Docker, and GitHub Actions for reproducible data, model, and deployment workflows.",
      "Modeled tyre degradation and pit windows to support data-backed race strategy decisions.",
    ],
  },
];

const projects = [
  {
    title: "Retail IQ",
    label: "Aug 2026",
    status: "Retail BI and decision-support platform",
    category: "Analytics",
    stack: "Python, Next.js, TypeScript, PostgreSQL, ETL, Power BI, ML, Docker",
    github: "https://github.com/ParthrChandurkar/Retail-IQ",
    icon: Activity,
    featured: true,
    points: [
      "Transforms raw Olist marketplace data into governed KPIs, customer analytics, RFM/CLV views, statistics, and dashboards.",
      "Adds explainable satisfaction classification and decision-ready reporting without treating ML as the whole product.",
    ],
  },
  {
    title: "Orbis Flow",
    label: "Aug 2026",
    status: "AI-assisted finance workflow automation",
    category: "Automation",
    stack: "Next.js, Spring Boot, FastAPI, PostgreSQL, Redis, MinIO, Docker Compose",
    github: "https://github.com/ParthrChandurkar/orbisflow-platform",
    icon: Workflow,
    featured: true,
    points: [
      "Replaces email and spreadsheet invoice handoffs with upload, OCR validation, manager approval, finance processing, and audit trails.",
      "Uses a secure multi-service topology with browser-isolated OCR, RBAC, JWT auth, CSRF protection, and traceable workflow states.",
    ],
  },
  {
    title: "OptiVest",
    label: "Aug 2026",
    status: "Quantitative portfolio decision support",
    category: "Analytics",
    stack: "Python, React, optimization, Indian equities, scenario simulation",
    github: "https://github.com/ParthrChandurkar/quantitative-portfolio-optimization-dss",
    icon: Activity,
    featured: true,
    points: [
      "Turns investor goals, risk appetite, capital, sector caps, and diversification limits into explainable Nifty 50 allocations.",
      "Supports stress tests, binding-constraint inspection, projected drawdown analysis, and investment-committee exports.",
    ],
  },
  {
    title: "ResumeForge",
    label: "Aug 2026",
    status: "Private AI resume and cover-letter studio",
    category: "AI",
    stack: "FastAPI, React, Gemini, PDF export, LaTeX, private workspaces",
    github: "https://github.com/ParthrChandurkar/ResumeForge",
    icon: FileText,
    featured: true,
    points: [
      "Tailors role-specific resumes and cover letters from job descriptions while preserving truthful evidence and document style.",
      "Supports multiple resume variants, ATS keyword insight, personal history, clickable links, PDF output, and Overleaf-ready LaTeX.",
    ],
  },
  {
    title: "Six Sigma DMAIC Quality Dashboard",
    label: "Aug 2026",
    status: "ML-assisted manufacturing quality analytics",
    category: "Analytics",
    stack: "Python, Streamlit, scikit-learn, Random Forest, DMAIC, quality control",
    github: "https://github.com/ParthrChandurkar/six-sigma-dmaic-quality-dashboard",
    icon: Activity,
    points: [
      "Combines DMAIC workflow, Pareto analysis, defect severity prediction, risk ranking, and process improvement recommendations.",
      "Monitors process stability with weekly defect views and c-chart-style control limits.",
    ],
  },
  {
    title: "SeatFlow",
    label: "July 2026",
    status: "Live full-stack deployment",
    category: "Full Stack",
    stack: "React, Vite, TypeScript, Node.js, Express, Prisma, PostgreSQL, JWT, Resend, Render, Vercel, Neon",
    github: "https://github.com/ParthrChandurkar/Ticket-Booking-System",
    live: "https://seatflow-ticket-booking-tawny.vercel.app",
    icon: ServerCog,
    featured: true,
    points: [
      "Built a production-style movie and concert booking system with role-based admin, organiser, and customer workflows.",
      "Implemented concurrency-safe seat holds with atomic SQL updates, TTL expiry jobs, waitlist auto-assignment, and QR email tickets.",
      "Deployed the full stack on Vercel, Render, and Neon with seeded demo data, verified email delivery, and automated Jest/Supertest coverage.",
    ],
  },
  {
    title: "FlowCraft Pipeline Builder",
    label: "July 2026",
    status: "Visual workflow builder",
    category: "Automation",
    stack: "React Flow, FastAPI, JavaScript, graph validation, drag-and-drop UI",
    github: "https://github.com/ParthrChandurkar/flowcraft-pipeline-builder",
    icon: Workflow,
    points: [
      "Built a responsive node-canvas builder for composing inputs, outputs, prompts, transforms, API calls, filters, and timers.",
      "Analyzes submitted graphs through a FastAPI backend with dynamic handles from text variables and workflow validation.",
    ],
  },
  {
    title: "SnapLink",
    label: "June 2026",
    status: "Live serverless URL analytics app",
    category: "Cloud",
    stack: "React, Tailwind CSS, Recharts, Python, AWS SAM, Lambda, DynamoDB, API Gateway",
    github: "https://github.com/ParthrChandurkar/SnapLink",
    live: "https://snaplink-eight.vercel.app",
    icon: Rocket,
    featured: true,
    points: [
      "Creates compact short links, redirects visitors with low latency, and tracks clicks by country, device, browser, referrer, and time.",
      "Showcases cloud deployment, backend architecture, and frontend analytics in one production-style serverless build.",
    ],
  },
  {
    title: "InfraWatch",
    label: "June 2026",
    status: "Zero-touch deployment control plane",
    category: "DevOps",
    stack: "FastAPI, React, TypeScript, Docker, Kubernetes, Terraform, Helm, Prometheus, Grafana, Loki, GitHub Actions",
    github: "https://github.com/ParthrChandurkar/InfraWatch-Zero-Touch-Deployments-with-Full-Infrastructure-Visibility",
    live: "https://infrawatch-platform.vercel.app",
    icon: Workflow,
    featured: true,
    points: [
      "Built a cloud-native DevOps command center for deployments, service state, health metrics, logs, and audit events.",
      "Connected Docker Compose, Kubernetes manifests, Terraform/Helm, Prometheus, Grafana, Loki, and GitHub Actions into a demo-ready platform.",
    ],
  },
  {
    title: "AI-Based Network Route Optimizer",
    label: "July 2026",
    status: "Failure-aware network routing dashboard",
    category: "AI",
    stack: "Python, Streamlit, Random Forest, Dijkstra, Plotly, network telemetry",
    github: "https://github.com/ParthrChandurkar/AI-Based-Network-Route-Optimizer",
    icon: Cloud,
    points: [
      "Compares traditional shortest-path routing with ML-assisted routing that penalizes risky links using predicted failure probability.",
      "Visualizes latency, packet loss, bandwidth, stress simulations, and safer route selection in an interactive dashboard.",
    ],
  },
  {
    title: "F1 Race Prediction and Strategy System",
    label: "Aug 2026",
    status: "MLOps race analytics application",
    category: "MLOps",
    stack: "Python, Streamlit, scikit-learn, DVC, Docker, Monte Carlo simulation, CI",
    github: "https://github.com/ParthrChandurkar/F1-Race-Prediction-Strategy-System",
    icon: BrainCircuit,
    points: [
      "Predicts race outcomes and simulates strategy using trained models, circuit characteristics, weather, and tyre degradation rules.",
      "Uses MLOps tooling and CI to keep the data, model, and dashboard workflow reproducible.",
    ],
  },
  {
    title: "ZenithMind",
    label: "July 2026",
    status: "IEEE-published AI mental wellness platform",
    category: "AI",
    stack: "React, Express, MongoDB, Gemini, Socket.IO, Google Fit, AWS EC2, Kubernetes",
    github: "https://github.com/ParthrChandurkar/-ZenithMind-AI-Powered-Mental-Health-Assistant",
    icon: BrainCircuit,
    points: [
      "Combines CBT-informed AI chat, mood and stress analytics, therapist workflows, community features, and gamified mental fitness.",
      "Associated research paper is published on IEEE Xplore as document 11566649.",
    ],
  },
  {
    title: "Pharmenia",
    label: "June 2026",
    status: "Pharmacy operations and DBMS system",
    category: "Desktop",
    stack: "Python, Tkinter, MySQL, ReportLab, stored procedures, triggers, views",
    github: "https://github.com/ParthrChandurkar/Pharmenia---Pharmacy-Management-System",
    icon: Database,
    points: [
      "Manages medicine stock, suppliers, customers, purchases, GST invoices, FIFO batch consumption, and PDF invoice exports.",
      "Demonstrates normalized 3NF database design with stored procedures, triggers, views, and cursor-based invoice processing.",
    ],
  },
  {
    title: "LexiLog",
    label: "June 2026",
    status: "Personal vocabulary journal",
    category: "Desktop",
    stack: "Python, Tkinter, MongoDB, PDF export, quiz workflows",
    github: "https://github.com/ParthrChandurkar/LexiLog-Your-Personal-Vocabulary-Journal",
    icon: FileText,
    points: [
      "Captures words, phrases, and idioms from films into searchable notes with meanings, context, and difficulty levels.",
      "Adds quiz practice, learning stats, exportable collections, and a desktop-first workflow for regular vocabulary building.",
    ],
  },
];

const certifications = [
  "IBM DevOps and Software Engineering - Coursera",
  "CCNA v7: Introduction to Networks - Cisco Networking Academy",
  "AWS Certified Cloud Practitioner Specialization - Udemy",
  "Career Essentials in Project Management - Microsoft & LinkedIn Learning",
];

const education = [
  {
    title: "B.Tech in Information Technology",
    school: "Vishwakarma Institute of Information Technology, Pune",
    period: "2023 - 2027",
    status: "Pursuing | CGPA 8.71",
  },
  {
    title: "Cloud & DevOps Engineering Track",
    school: "AWS, Kubernetes, Terraform, Helm, CI/CD, Linux, observability",
    period: "Current Focus",
    status: "Building production-grade cloud and automation systems",
  },
  {
    title: "DevOps & Software Engineering",
    school: "IBM, Cisco, AWS, Microsoft Learning",
    period: "Certifications",
    status: "Validated fundamentals across delivery, networks, and cloud",
  },
];

const stats = [
  { value: "8.71", label: "CGPA" },
  { value: "17", label: "Public GitHub repos" },
  { value: "14", label: "Portfolio projects" },
  { value: "IEEE", label: "Published research" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("/profile.jpeg");
  const [projectQuery, setProjectQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const projectCategories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );
  const filteredProjects = useMemo(() => {
    const query = projectQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const searchable = [
        project.title,
        project.status,
        project.stack,
        project.category,
        ...project.points,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [activeCategory, projectQuery]);

  const closeMenu = () => setMenuOpen(false);
  const resetProjectFilters = () => {
    setProjectQuery("");
    setActiveCategory("All");
  };

  const handleContact = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(message || "Hi Parth, I found your portfolio.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Parth portfolio home">
          <span className="brand-mark">PC</span>
          <span>{profile.shortName}</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="icon-button mobile-menu"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-bg-grid" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-layout">
            <div className="hero-content">
              <div className="eyebrow">
                <Terminal size={16} />
                <span>cloud/devops engineer</span>
              </div>
              <h1 id="hero-title">
                <span>Parth Rajesh</span>
                <span className="name-accent">Chandurkar</span>
              </h1>
              <p className="hero-role">
                I am into <span>Cloud, DevOps & AI Automation</span>
                <i aria-hidden="true" />
              </p>
              <p className="hero-copy">
                I build cloud-native products, deployment systems, AI workflow tools, and
                analytics dashboards that connect backend engineering with infrastructure,
                observability, and practical business outcomes.
              </p>

              <div className="hero-actions" aria-label="Profile links">
                <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">
                  <FaGithub size={18} />
                  GitHub
                </a>
                <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedinIn size={18} />
                  LinkedIn
                </a>
                <a className="button button-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                  <Download size={18} />
                  Resume
                </a>
              </div>

              <div className="hero-stack" aria-label="Featured technologies">
                {featuredStack.map(({ name, icon: StackIcon, color }) => (
                  <span className="stack-chip" key={name} style={{ "--skill-color": color }}>
                    <StackIcon size={18} aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-visual-card" aria-label="Cloud DevOps visual profile">
              <svg className="infra-svg" viewBox="0 0 520 520" role="img" aria-label="Animated cloud infrastructure map">
                <defs>
                  <linearGradient id="infraStroke" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="52%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                <path className="infra-ring" d="M260 58a202 202 0 1 1 0 404 202 202 0 0 1 0-404Z" />
                <path className="infra-line line-one" d="M88 260h96c28 0 42-42 76-42h172" />
                <path className="infra-line line-two" d="M94 336h116c34 0 36-82 82-82h132" />
                <path className="infra-line line-three" d="M104 184h84c30 0 50 72 86 72h154" />
                {[
                  [88, 260],
                  [184, 260],
                  [260, 218],
                  [432, 218],
                  [94, 336],
                  [210, 336],
                  [292, 254],
                  [424, 254],
                  [104, 184],
                  [188, 184],
                  [274, 256],
                  [428, 256],
                ].map(([cx, cy]) => (
                  <circle className="infra-node" cx={cx} cy={cy} key={`${cx}-${cy}`} r="5" />
                ))}
              </svg>

              <div className="profile-frame">
                <img
                  className="hero-photo"
                  src={avatarSrc}
                  alt="Parth Rajesh Chandurkar"
                  onError={() => setAvatarSrc("/profile-fallback.bmp")}
                />
              </div>

              <div className="cloud-console" aria-hidden="true">
                <span className="console-dot" />
                <code>kubectl get pods --watch</code>
                <strong>99.9% uptime mindset</strong>
              </div>
            </div>
          </div>

          <div className="hero-stats metrics-band" aria-label="Portfolio highlights">
            {stats.map((stat) => (
              <div className="stat-tile" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <span className="section-kicker">About</span>
            <h2>Engineer for cloud systems that keep moving.</h2>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              <p>
                I am a B.Tech IT student at VIIT Pune focused on Cloud, DevOps, full-stack
                systems, and AI automation. My work spans AWS infrastructure, Kubernetes,
                CI/CD, observability, workflow automation, analytics, and practical ML systems.
              </p>
              <p>
                My current GitHub portfolio includes public builds across deployment control
                planes, invoice automation, retail BI, quantitative decision support, resume AI,
                serverless analytics, quality dashboards, and MLOps products.
              </p>
            </div>
            <div className="identity-panel">
              <div>
                <span>College</span>
                <strong>{profile.college}</strong>
              </div>
              <div>
                <span>Current focus</span>
                <strong>Kubernetes, Terraform, observability, AI automation, analytics systems</strong>
              </div>
              <div>
                <span>Latest refresh</span>
                <strong>GitHub projects and resume updated in {portfolioUpdated}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <span className="section-kicker">Skills</span>
            <h2>Tooling across infrastructure, apps, data, and AI.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map(({ title, icon: Icon, accent, items }) => (
              <article className={`skill-card accent-${accent}`} key={title}>
                <div className="card-title">
                  <div className="card-title-main">
                    <Icon size={20} />
                    <h3>{title}</h3>
                  </div>
                  <span className="skill-count">{items.length}</span>
                </div>
                <div className="skill-cloud">
                  {items.map(({ name, icon: SkillIcon, color }) => (
                    <span className="skill-pill" key={name} style={{ "--skill-color": color }}>
                      <SkillIcon size={18} aria-hidden="true" />
                      <span>{name}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading centered-heading">
            <span className="section-kicker">Education</span>
            <h2>Learning path built around cloud systems.</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.title}>
                <div className="education-icon">
                  <Award size={22} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                  <span>{item.period}</span>
                  <strong>{item.status}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-section" id="experience">
          <div className="section-heading">
            <span className="section-kicker">Experience</span>
            <h2>Applied engineering work with measurable outcomes.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="item-meta">
                    <span>
                      <CalendarDays size={15} />
                      {item.duration}
                    </span>
                    <span>{item.type}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="stack-line">{item.stack}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="inline-links">
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <GitBranch size={16} />
                      Repository
                    </a>
                    {item.paper && (
                      <a className="paper-link" href={item.paper} target="_blank" rel="noreferrer">
                        <FileText size={16} />
                        Published IEEE Paper
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="work">
          <div className="section-heading">
            <span className="section-kicker">Work - GitHub synced {portfolioUpdated}</span>
            <h2>Current public projects across cloud, automation, analytics, and AI.</h2>
          </div>
          <div className="project-finder" aria-label="Project finder">
            <label className="project-search">
              <Search size={18} />
              <input
                type="search"
                value={projectQuery}
                onChange={(event) => setProjectQuery(event.target.value)}
                placeholder="Search projects, stacks, or outcomes"
              />
            </label>
            <div className="project-filter-group" aria-label="Filter projects by category">
              {projectCategories.map((category) => (
                <button
                  className={`filter-chip ${activeCategory === category ? "is-active" : ""}`}
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="project-result-bar" aria-live="polite">
            <span>{filteredProjects.length} of {projects.length} projects shown</span>
            {(projectQuery || activeCategory !== "All") && (
              <button type="button" onClick={resetProjectFilters}>Reset</button>
            )}
          </div>
          <div className="project-grid">
            {filteredProjects.map(({ title, label, status, category, stack, github, live, icon: Icon, points, featured }) => (
              <article className={`project-card ${featured ? "is-featured" : ""}`} key={title}>
                <div className="project-topline">
                  <Icon size={22} />
                  <span>{category} / {label}</span>
                </div>
                <h3>{title}</h3>
                <p className="project-status">{status}</p>
                <p className="stack-line">{stack}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {github && (
                    <a className="card-link" href={github} target="_blank" rel="noreferrer">
                      View repository
                      <ExternalLink size={15} />
                    </a>
                  )}
                  {live && (
                    <a className="card-link" href={live} target="_blank" rel="noreferrer">
                      Live demo
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="research-band">
            <div>
              <span className="section-kicker">Research</span>
              <span className="published-badge">
                <ShieldCheck size={15} />
                Published on IEEE Xplore
              </span>
              <h2>ZenithMind IEEE research work</h2>
              <p>
                A capstone research project exploring CBT-based mental wellness support with
                NLP-driven chatbot flows, sentiment analysis, behavioral analytics, and
                therapist escalation pathways.
              </p>
            </div>
            <a
              className="button button-primary paper-button"
              href={researchPaperUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={18} />
              Read Published Paper
              <ExternalLink size={16} />
            </a>
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <div className="section-heading">
            <span className="section-kicker">Certifications</span>
            <h2>Validated foundations for cloud, networks, and delivery.</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article className="cert-card" key={cert}>
                <Award size={20} />
                <span>{cert}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <span className="section-kicker">Contact</span>
            <h2>Let's build something reliable.</h2>
          </div>
          <div className="contact-layout">
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`}>
                <Phone size={18} />
                {profile.phone}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub size={18} />
                github.com/ParthrChandurkar
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn size={18} />
                linkedin.com/in/parth-chandurkar
              </a>
              <span>
                <MapPin size={18} />
                {profile.location}
              </span>
            </div>

            <form className="contact-form" onSubmit={handleContact}>
              <label>
                Name
                <input name="name" type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell me about the role or project" />
              </label>
              <button className="button button-primary" type="submit">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>&copy; {currentYear} {profile.name}</span>
        <a href={profile.leetcode} target="_blank" rel="noreferrer">
          LeetCode <ChevronRight size={14} />
        </a>
      </footer>
    </div>
  );
}

export default App;
