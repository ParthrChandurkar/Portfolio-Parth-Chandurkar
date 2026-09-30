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
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGrafana,
  SiGnubash,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiRedis,
  SiSpringboot,
  SiTerraform,
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
  ieee: "https://ieeexplore.ieee.org/document/11566649",
  resume: "/Parth_Rajesh_Chandurkar_Resume.pdf",
};

const portfolioUpdated = "September 2026";

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
  skill("GitHub Actions", SiGithubactions, "#ffffff"),
  skill("Prometheus", SiPrometheus, "#e6522c"),
  skill("Linux", SiLinux, "#fcc624"),
];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    accent: "cyan",
    items: [
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
      skill("CloudWatch", Activity, "#ff4f8b"),
      skill("Docker", SiDocker, "#2496ed"),
      skill("Kubernetes", SiKubernetes, "#326ce5"),
      skill("Helm", SiHelm, "#0f1689"),
      skill("Git", SiGit, "#f05032"),
      skill("GitHub Actions", SiGithubactions, "#ffffff"),
      skill("Jenkins", SiJenkins, "#d24939"),
      skill("CI/CD", SiGithubactions, "#ffffff"),
    ],
  },
  {
    title: "Networking & IaC",
    icon: ServerCog,
    accent: "green",
    items: [
      skill("Linux Administration", SiLinux, "#fcc624"),
      skill("Terraform", SiTerraform, "#844fba"),
      skill("K8s", SiKubernetes, "#326ce5"),
      skill("TCP/IP", Cloud, "#38bdf8"),
      skill("DNS", Cloud, "#38bdf8"),
      skill("Security Fundamentals", ShieldCheck, "#a855f7"),
    ],
  },
  {
    title: "Observability & Monitoring",
    icon: Activity,
    accent: "blue",
    items: [
      skill("Prometheus", SiPrometheus, "#e6522c"),
      skill("Grafana", SiGrafana, "#f46800"),
      skill("Alertmanager", Activity, "#34d399"),
      skill("Splunk", Activity, "#ff8f1f"),
      skill("CloudWatch", Activity, "#ff4f8b"),
      skill("Dashboards", Workflow, "#34d399"),
    ],
  },
  {
    title: "Frameworks & Databases",
    icon: Database,
    accent: "amber",
    items: [
      skill("Spring Boot", SiSpringboot, "#6db33f"),
      skill("FastAPI", SiFastapi, "#009688"),
      skill("REST APIs", ServerCog, "#34d399"),
      skill("PostgreSQL", SiPostgresql, "#4169e1"),
      skill("MySQL", SiMysql, "#4479a1"),
      skill("Redis", SiRedis, "#dc382d"),
    ],
  },
  {
    title: "Currently Learning",
    icon: Terminal,
    accent: "rose",
    items: [
      skill("RHEL", SiLinux, "#ee0000"),
      skill("OpenShift", SiKubernetes, "#ee0000"),
    ],
  },
];

const experience = [
  {
    title: "ZenithMind - AI-Powered Mental Health Assistant",
    type: "Capstone Research Project",
    duration: "Oct 2025 - May 2026",
    stack: "React, Node.js, AWS EC2, Docker, Kubernetes, HPA, CloudWatch",
    github:
      "https://github.com/ParthrChandurkar/-ZenithMind-AI-Powered-Mental-Health-Assistant",
    paper: researchPaperUrl,
    points: [
      "Collaborated with a team to deploy a React/Node.js application on AWS EC2 using Docker and Kubernetes for containerization and orchestration.",
      "Made the platform available across the research cohort.",
      "Configured Kubernetes Horizontal Pod Autoscaler and AWS CloudWatch alarms for workload scaling and monitoring.",
      "Co-authored the associated ZenithMind research paper published on IEEE Xplore.",
    ],
  },
];

const projects = [
  {
    title: "InfraWatch",
    label: "Sep 2026",
    status: "Open-source local Kubernetes deployment and observability platform",
    category: "DevOps",
    stack: "React, Kubernetes, Minikube, Docker, Terraform, Helm, GitHub Actions, Redis, Prometheus, Grafana, Alertmanager",
    icon: Workflow,
    github: "https://github.com/ParthrChandurkar/InfraWatch",
    featured: true,
    points: [
      "Developed a local Kubernetes deployment and observability platform with a React dashboard for pod health, rollout status, live logs, and application metrics.",
      "Provisioned infrastructure with Terraform and Helm while automating container image builds and Kubernetes manifest deployment through GitHub Actions.",
      "Integrated Prometheus, Grafana, and Alertmanager, and used Redis to cache recent Prometheus query results for repeated dashboard requests.",
    ],
  },
  {
    title: "Orbis Flow",
    label: "Sep 2026",
    status: "AI-assisted invoice approval workflow",
    category: "Automation",
    stack: "Java Spring Boot, FastAPI, AWS, Docker, Tesseract OCR, Amazon S3, JWT, RBAC",
    github: "https://github.com/ParthrChandurkar/orbisflow-platform",
    icon: Workflow,
    featured: true,
    points: [
      "Developed a multi-role invoice approval workflow with Spring Boot and FastAPI microservices on AWS.",
      "Used Docker containerization and Tesseract OCR to extract invoice fields from documents stored in Amazon S3.",
      "Implemented RBAC across Employee, Manager, and Finance workflows with JWT auth, subject-bound CSRF protection, append-only audit trails, and optimistic locking.",
    ],
  },
  {
    title: "F1 Race Prediction and Strategy System",
    label: "Sep 2026",
    status: "Reproducible ML/MLOps race analytics pipeline",
    category: "MLOps",
    stack: "Python, AWS EC2, Docker, Kubernetes, DVC, GitHub Actions, Amazon S3",
    github: "https://github.com/ParthrChandurkar/F1-Race-Prediction-Strategy-System",
    icon: BrainCircuit,
    featured: true,
    points: [
      "Built an ML/MLOps pipeline on AWS EC2 for race-position prediction from historical F1 telemetry.",
      "Used Docker for reproducible training and inference workloads, Kubernetes for batch execution, and DVC for dataset versioning.",
      "Automated model retraining through GitHub Actions on dataset updates and stored pipeline outputs in Amazon S3.",
    ],
  },
  {
    title: "PurchaseLens",
    label: "Sep 2026",
    status: "Explainable purchase prediction and customer analytics",
    category: "AI",
    stack: "Python, Streamlit, scikit-learn, SHAP, retail analytics",
    github: "https://github.com/ParthrChandurkar/explainable-purchase-prediction",
    icon: BrainCircuit,
    featured: true,
    points: [
      "Built a reproducible purchase-prediction workflow for e-commerce customer behavior data.",
      "Compares class-balanced models, tunes probability thresholds, and produces global and local SHAP explanations.",
      "Maps model predictions into transparent retail-action suggestions through a Streamlit prototype.",
    ],
  },
  {
    title: "SnapLink",
    label: "Sep 2026",
    status: "Serverless URL shortener with click analytics",
    category: "Cloud",
    stack: "React, Python, AWS Lambda, API Gateway, DynamoDB, S3, CloudFront",
    github: "https://github.com/ParthrChandurkar/SnapLink",
    live: "https://snaplink-eight.vercel.app",
    icon: Rocket,
    featured: true,
    points: [
      "Creates compact short links, redirects visitors, and tracks clicks by country, device, browser, referrer, and time.",
      "Uses a serverless AWS architecture with Lambda, API Gateway, DynamoDB, S3, and CloudFront.",
    ],
  },
  {
    title: "OptiVest",
    label: "Sep 2026",
    status: "Quantitative portfolio decision-support system",
    category: "Analytics",
    stack: "Python, React, PostgreSQL, optimization, Indian equities, scenario simulation",
    github: "https://github.com/ParthrChandurkar/quantitative-portfolio-optimization-dss",
    icon: Activity,
    featured: true,
    points: [
      "Builds personalized Nifty portfolio allocations from risk appetite, sector limits, diversification rules, and optimization constraints.",
      "Combines a decision-support loop for model, solve, explain, simulate, and report-style portfolio review.",
    ],
  },
  {
    title: "Retail IQ",
    label: "Sep 2026",
    status: "Retail business intelligence platform",
    category: "Analytics",
    stack: "Python, Next.js, PostgreSQL, ETL, Power BI, ML, Docker",
    github: "https://github.com/ParthrChandurkar/Retail-IQ",
    icon: Activity,
    featured: true,
    points: [
      "Transforms an Indian retail transaction dataset into clean data, governed KPIs, dashboards, recommendations, and statistical evidence.",
      "Adds explainable high-profit order prediction as a decision-support layer, not as a replacement for BI.",
    ],
  },
  {
    title: "ResumeForge",
    label: "Aug 2026",
    status: "Private AI resume and cover-letter studio",
    category: "AI",
    stack: "Python, FastAPI, React, Gemini, PDF export, LaTeX",
    github: "https://github.com/ParthrChandurkar/ResumeForge",
    icon: FileText,
    featured: true,
    points: [
      "Tailors role-specific resumes and cover letters from job descriptions while preserving truthful evidence and document style.",
      "Supports private workspaces, ATS keyword insights, clickable links, PDF output, and Overleaf-ready LaTeX.",
    ],
  },
  {
    title: "Six Sigma DMAIC Quality Dashboard",
    label: "Aug 2026",
    status: "ML-assisted manufacturing quality dashboard",
    category: "Analytics",
    stack: "Python, Streamlit, scikit-learn, Random Forest, DMAIC",
    github: "https://github.com/ParthrChandurkar/six-sigma-dmaic-quality-dashboard",
    icon: Activity,
    points: [
      "Combines the Six Sigma DMAIC framework with a trained machine-learning pipeline for defect analysis.",
      "Measures defects, predicts severity, identifies risky process combinations, recommends improvements, and monitors process stability.",
    ],
  },
  {
    title: "FlowCraft Pipeline Builder",
    label: "Jul 2026",
    status: "Visual node-based workflow builder",
    category: "Automation",
    stack: "React Flow, FastAPI, JavaScript, graph validation",
    github: "https://github.com/ParthrChandurkar/flowcraft-pipeline-builder",
    icon: Workflow,
    points: [
      "Composes node-based workflows on a drag-and-drop canvas with a responsive React Flow frontend.",
      "Uses a FastAPI backend to analyze submitted graphs and validate workflow structure in real time.",
    ],
  },
  {
    title: "SeatFlow",
    label: "Jul 2026",
    status: "Movie and concert ticket booking app",
    category: "Web App",
    stack: "React, TypeScript, Node.js, Express, Prisma, PostgreSQL",
    github: "https://github.com/ParthrChandurkar/Ticket-Booking-System",
    live: "https://seatflow-ticket-booking-tawny.vercel.app",
    icon: ServerCog,
    points: [
      "Implements live seat maps, timed seat holds, waitlists, booking confirmation emails, and QR tickets.",
      "Focuses on booking correctness so two customers cannot hold or book the same seat at the same time.",
    ],
  },
  {
    title: "AI-Based Network Route Optimizer",
    label: "Jul 2026",
    status: "Failure-aware network routing dashboard",
    category: "Network",
    stack: "Python, Streamlit, Random Forest, Dijkstra, Plotly",
    github: "https://github.com/ParthrChandurkar/AI-Based-Network-Route-Optimizer",
    icon: Cloud,
    points: [
      "Compares traditional shortest-path routing with machine-learning assisted, failure-aware routing.",
      "Uses Random Forest failure prediction from link telemetry and penalizes risky edges before selecting a path.",
    ],
  },
  {
    title: "ZenithMind",
    label: "Jul 2026",
    status: "IEEE-published AI mental wellness platform",
    category: "Research",
    stack: "React, Node.js, MongoDB, Gemini, Socket.IO, AWS EC2, Kubernetes",
    github: "https://github.com/ParthrChandurkar/-ZenithMind-AI-Powered-Mental-Health-Assistant",
    icon: BrainCircuit,
    points: [
      "Combines CBT-informed chatbot support, mood and stress tracking, therapist workflows, realtime community spaces, and gamified self-care tools.",
      "Associated research paper is published on IEEE Xplore as document 11566649.",
    ],
  },
  {
    title: "Pharmenia",
    label: "Jun 2026",
    status: "Pharmacy management and DBMS system",
    category: "Desktop",
    stack: "Python, Tkinter, MySQL, ReportLab, stored procedures, triggers, views",
    github: "https://github.com/ParthrChandurkar/Pharmenia---Pharmacy-Management-System",
    icon: Database,
    points: [
      "Handles medicine stock, suppliers, purchases, GST invoices, FIFO batch consumption, and PDF invoice export.",
      "Demonstrates normalized 3NF database design with stored procedures, triggers, views, and cursor-based invoice processing.",
    ],
  },
  {
    title: "LexiLog",
    label: "Jul 2026",
    status: "Personal vocabulary journal",
    category: "Desktop",
    stack: "Python, Tkinter, MongoDB, PDF export, quiz workflows",
    github: "https://github.com/ParthrChandurkar/LexiLog-Your-Personal-Vocabulary-Journal",
    icon: FileText,
    points: [
      "Captures memorable words, phrases, and idioms from movies into searchable notes.",
      "Adds quiz practice, learning stats, and printable PDF exports for regular vocabulary building.",
    ],
  },
];

const certifications = [
  "IBM DevOps and Software Engineering Professional Certificate - Coursera",
  "AWS Cloud Practitioner Specialization - Udemy",
  "CCNA v7: Introduction to Networks - Cisco Networking Academy",
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
    school: "AWS, Terraform, Docker, Kubernetes, GitHub Actions, Linux, observability, Redis caching",
    period: "Current Focus",
    status: "Currently learning RHEL and OpenShift",
  },
  {
    title: "Research Publication",
    school: "Co-authored and published the ZenithMind research paper on IEEE Xplore",
    period: "Achievement",
    status: "IEEE document 11566649",
  },
  {
    title: "Academic Achievements",
    school: "100% in SSC and 97.97 percentile in MHT-CET",
    period: "Achievement",
    status: "Strong academic foundation alongside engineering project work",
  },
  {
    title: "DevOps & Software Engineering",
    school: "IBM, Cisco Networking Academy, Udemy",
    period: "Certifications",
    status: "Validated fundamentals across delivery, networks, and cloud",
  },
];

const stats = [
  { value: "8.71", label: "CGPA" },
  { value: "15", label: "GitHub project repos" },
  { value: "IEEE", label: "Published research" },
  { value: "97.97", label: "MHT-CET percentile" },
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
  const visibleFeaturedCount = useMemo(
    () => filteredProjects.filter((project) => project.featured).length,
    [filteredProjects],
  );

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
                I am into <span>Cloud, DevOps & Infrastructure Automation</span>
                <i aria-hidden="true" />
              </p>
              <p className="hero-copy">
                Final-year Information Technology student specializing in AWS, Terraform,
                Docker, Kubernetes, GitHub Actions, Linux, CI/CD, observability, and
                Redis-based caching.
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
                <strong>Cloud monitoring mindset</strong>
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
                I am a final-year B.Tech Information Technology student at VIIT Pune focused
                on Cloud and DevOps engineering. My work spans AWS infrastructure,
                Terraform, Docker, Kubernetes, CI/CD, Linux, and observability.
              </p>
              <p>
                My current GitHub portfolio includes public builds across local Kubernetes
                observability, invoice approval workflows, MLOps pipelines, serverless
                analytics, network routing, quality dashboards, and applied AI systems.
              </p>
            </div>
            <div className="identity-panel">
              <div>
                <span>College</span>
                <strong>{profile.college}</strong>
              </div>
              <div>
                <span>Current focus</span>
                <strong>AWS, Terraform, Docker, Kubernetes, CI/CD, Linux, observability, and Redis caching</strong>
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
            <h2>Tooling across cloud, DevOps, networking, and observability.</h2>
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
            <h2>Capstone research deployment with cloud operations work.</h2>
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
            <h2>Current public GitHub projects across cloud, DevOps, analytics, and applied AI.</h2>
          </div>
          <div className="project-finder" aria-label="Project finder">
            <label className="project-search">
              <span className="sr-only">Search projects</span>
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
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="project-result-bar" aria-live="polite">
            <span>{filteredProjects.length} of {projects.length} projects shown / {visibleFeaturedCount} featured visible</span>
            {(projectQuery || activeCategory !== "All") && (
              <button type="button" onClick={resetProjectFilters}>Reset</button>
            )}
          </div>
          {filteredProjects.length > 0 ? (
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
          ) : (
            <div className="empty-project-state">
              <h3>No matching projects</h3>
              <p>Try a broader stack, outcome, or category.</p>
              <button className="button button-ghost" type="button" onClick={resetProjectFilters}>
                Reset filters
              </button>
            </div>
          )}
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
                A capstone research project where the team deployed a React and Node.js
                application on AWS EC2 using Docker and Kubernetes, configured HPA and
                CloudWatch alarms, and published the associated paper on IEEE Xplore.
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
              <a href={profile.ieee} target="_blank" rel="noreferrer">
                <FileText size={18} />
                IEEE publication
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
        <a href={profile.ieee} target="_blank" rel="noreferrer">
          IEEE Paper <ChevronRight size={14} />
        </a>
      </footer>
    </div>
  );
}

export default App;
