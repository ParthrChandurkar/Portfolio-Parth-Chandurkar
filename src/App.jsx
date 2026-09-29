import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Box,
  Braces,
  CheckCircle2,
  Cloud,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Gauge,
  GitBranch,
  Layers,
  Mail,
  Menu,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { FaAws, FaGithub, FaJava, FaLinkedinIn } from "react-icons/fa6";
import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiGrafana,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiSplunk,
  SiSpringboot,
  SiTerraform,
} from "react-icons/si";

const profile = {
  name: "Parth Rajesh Chandurkar",
  role: "Cloud & DevOps Engineer",
  summary:
    "Building cloud-native infrastructure, automating deployments, and making systems observable.",
  email: "parthrchn27@gmail.com",
  phone: "+91-7057252266",
  github: "https://github.com/ParthrChandurkar",
  linkedin: "https://www.linkedin.com/in/parth-chandurkar",
  resume: "/Parth_Rajesh_Chandurkar_Resume.pdf",
  photo: "/profile.jpeg",
  ieee: "https://ieeexplore.ieee.org/document/11566649/",
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const heroSignals = [
  "AWS",
  "Kubernetes",
  "Terraform",
  "Docker",
  "CI/CD",
  "Observability",
  "Linux",
];

const quickFacts = [
  {
    value: "Final-year",
    label: "Information Technology student",
  },
  {
    value: "8.71/10",
    label: "Current CGPA at VIIT Pune",
  },
  {
    value: "IEEE",
    label: "Published capstone research",
  },
];

const stackGroups = [
  {
    id: "cloud",
    label: "Cloud",
    Icon: Cloud,
    summary:
      "AWS fundamentals across compute, storage, identity, serverless, database, and monitoring services.",
    items: [
      {
        name: "AWS",
        Icon: FaAws,
        note: "Primary cloud platform for infrastructure and application deployment work.",
      },
      {
        name: "EC2",
        Icon: Server,
        note: "Compute target used for deployed application workloads and cloud experiments.",
      },
      {
        name: "S3",
        Icon: Box,
        note: "Object storage for documents, artifacts, and pipeline outputs.",
      },
      {
        name: "RDS",
        Icon: Database,
        note: "Managed relational database service in the cloud skill set.",
      },
      {
        name: "Lambda",
        Icon: Zap,
        note: "Serverless execution model within the AWS ecosystem.",
      },
      {
        name: "IAM",
        Icon: ShieldCheck,
        note: "Identity and access management for cloud permissions.",
      },
      {
        name: "CloudWatch",
        Icon: Gauge,
        note: "AWS monitoring and alarms for workload visibility.",
      },
    ],
  },
  {
    id: "containers",
    label: "Containers & Orchestration",
    Icon: Layers,
    summary:
      "Container packaging and Kubernetes-based workload deployment for reproducible systems.",
    items: [
      {
        name: "Docker",
        Icon: SiDocker,
        note: "Container images for local and cloud application workflows.",
      },
      {
        name: "Kubernetes",
        Icon: SiKubernetes,
        note: "Deployment, orchestration, validation, and workload scaling concepts.",
      },
      {
        name: "Helm",
        Icon: SiHelm,
        note: "Kubernetes package management and release configuration.",
      },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    Icon: Workflow,
    summary:
      "Version control, automation, and CI/CD pipelines for repeatable delivery.",
    items: [
      {
        name: "Git",
        Icon: SiGit,
        note: "Version control and collaborative engineering workflow.",
      },
      {
        name: "GitHub Actions",
        Icon: SiGithubactions,
        note: "Automation for builds, deployment tasks, and retraining workflows.",
      },
      {
        name: "Jenkins",
        Icon: SiJenkins,
        note: "CI/CD server concepts and pipeline automation.",
      },
      {
        name: "CI/CD",
        Icon: GitBranch,
        note: "Build, test, package, and deployment automation.",
      },
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    Icon: Terminal,
    summary:
      "Infrastructure as code, Linux operations, and shell scripting for system-level work.",
    items: [
      {
        name: "Terraform",
        Icon: SiTerraform,
        note: "Infrastructure as code for declarative cloud and platform configuration.",
      },
      {
        name: "Linux",
        Icon: SiLinux,
        note: "Operating system foundation for servers, containers, and tooling.",
      },
      {
        name: "Bash",
        Icon: SiGnubash,
        note: "Shell scripting for repeatable local and infrastructure workflows.",
      },
    ],
  },
  {
    id: "observability",
    label: "Observability",
    Icon: Eye,
    summary:
      "Metrics, dashboards, alerts, and logs for understanding workload behavior.",
    items: [
      {
        name: "Prometheus",
        Icon: SiPrometheus,
        note: "Metric collection and alerting foundation for Kubernetes workloads.",
      },
      {
        name: "Grafana",
        Icon: SiGrafana,
        note: "Dashboards for infrastructure and application visibility.",
      },
      {
        name: "Alertmanager",
        Icon: Activity,
        note: "Alert routing and notification coordination in a Prometheus stack.",
      },
      {
        name: "Splunk",
        Icon: SiSplunk,
        note: "Log search and operational visibility tooling.",
      },
    ],
  },
  {
    id: "development",
    label: "Development",
    Icon: Braces,
    summary:
      "Backend and API skills used to understand the applications that infrastructure supports.",
    items: [
      {
        name: "Python",
        Icon: SiPython,
        note: "Scripting, automation, backend services, and MLOps workflow support.",
      },
      {
        name: "Java",
        Icon: FaJava,
        note: "Backend engineering with Spring Boot services.",
      },
      {
        name: "Spring Boot",
        Icon: SiSpringboot,
        note: "Java service framework used in microservice workflow projects.",
      },
      {
        name: "FastAPI",
        Icon: SiFastapi,
        note: "Python API framework used for service and workflow components.",
      },
      {
        name: "REST APIs",
        Icon: Network,
        note: "HTTP service interfaces for application and platform communication.",
      },
      {
        name: "SQL",
        Icon: Database,
        note: "Relational data querying and schema interaction.",
      },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    Icon: Database,
    summary:
      "Relational and document database foundations for application data layers.",
    items: [
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        note: "Relational database in the core database skill set.",
      },
      {
        name: "MySQL",
        Icon: SiMysql,
        note: "Relational database for structured application data.",
      },
      {
        name: "MongoDB",
        Icon: SiMongodb,
        note: "Document database for flexible application data models.",
      },
    ],
  },
  {
    id: "learning",
    label: "Currently Learning",
    Icon: BookOpen,
    summary:
      "Current learning focus for strengthening Linux enterprise and platform engineering foundations.",
    items: [
      {
        name: "RHEL",
        Icon: SiLinux,
        note: "Enterprise Linux administration learning path.",
      },
      {
        name: "OpenShift",
        Icon: SiKubernetes,
        note: "Kubernetes platform learning path.",
      },
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "InfraWatch",
    title: "Open-Source Local Kubernetes Deployment & Observability Platform",
    repo: "https://github.com/ParthrChandurkar/InfraWatch-Zero-Touch-Deployments-with-Full-Infrastructure-Visibility",
    intro:
      "A local-first Kubernetes deployment and observability platform with a React dashboard for validating workloads and watching infrastructure behavior.",
    scope:
      "Positioned as an open-source local Kubernetes workflow for deployment validation and observability practice.",
    tags: [
      "Kubernetes",
      "Minikube",
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Terraform",
      "GitHub Actions",
      "Docker",
    ],
    highlights: [
      "Pod health, rollout status, live logs, and application metrics in a React dashboard.",
      "Automated container image builds and Kubernetes manifest deployment workflow.",
      "Local Kubernetes and Minikube workload validation with observability components.",
    ],
    flow: [
      "Developer",
      "GitHub Actions",
      "Docker Image",
      "Kubernetes / Minikube",
      "Prometheus / Grafana / Alertmanager",
      "Dashboard",
    ],
    accent: "green",
  },
  {
    number: "02",
    name: "OrbisFlow",
    title: "AI-Assisted Invoice Approval Workflow Platform",
    repo: "https://github.com/ParthrChandurkar/orbisflow-platform",
    intro:
      "A multi-role invoice approval workflow platform with Spring Boot and FastAPI microservices, AWS storage, OCR, and audit-focused controls.",
    scope:
      "Focused on secure approval flow design, document handling, authentication, and concurrent approval safety.",
    tags: [
      "Spring Boot",
      "FastAPI",
      "AWS",
      "Docker",
      "Tesseract OCR",
      "Amazon S3",
      "JWT",
      "RBAC",
    ],
    highlights: [
      "Employee, Manager, and Finance approval paths with role-based access control.",
      "Invoice documents stored in Amazon S3 and processed through Tesseract OCR.",
      "Subject-bound CSRF protection, append-only audit trail, and optimistic locking.",
    ],
    flow: [
      "Invoice",
      "S3",
      "OCR / Tesseract",
      "Spring Boot / FastAPI",
      "Employee -> Manager -> Finance",
      "Audit Trail",
    ],
    accent: "amber",
  },
  {
    number: "03",
    name: "F1 Race Prediction and Strategy System",
    title: "Reproducible ML/MLOps Pipeline for F1 Telemetry Experiments",
    repo: "https://github.com/ParthrChandurkar/F1-Race-Prediction-Strategy-System",
    intro:
      "An ML/MLOps pipeline built around historical F1 telemetry, dataset versioning, reproducible workloads, and automated model retraining.",
    scope:
      "A learning and engineering pipeline project using motorsport data, not a system used by an actual Formula 1 team.",
    tags: [
      "AWS EC2",
      "Docker",
      "Kubernetes",
      "DVC",
      "GitHub Actions",
      "Amazon S3",
      "MLOps",
    ],
    highlights: [
      "Docker-based training and inference workloads for repeatable execution.",
      "Kubernetes batch execution with DVC-backed dataset versioning.",
      "GitHub Actions workflow for automated retraining when datasets change.",
    ],
    flow: [
      "Historical F1 Telemetry",
      "DVC",
      "Training",
      "Docker / Kubernetes",
      "Model",
      "GitHub Actions",
      "S3 Outputs",
    ],
    accent: "red",
  },
];

const research = {
  name: "ZenithMind",
  title: "AI-Powered Mental Health Assistant",
  type: "Capstone Research Project",
  timeline: "Oct 2025 - May 2026",
  distinction: "IEEE Published Paper",
  link: profile.ieee,
  stack: [
    "AWS EC2",
    "Docker",
    "Kubernetes",
    "HPA",
    "CloudWatch",
    "React",
    "Node.js",
  ],
  points: [
    "Collaborated with a team to deploy a React and Node.js application on AWS EC2 using Docker and Kubernetes.",
    "Made the platform available to approximately 300-400 students across the research cohort.",
    "Configured Kubernetes Horizontal Pod Autoscaler and AWS CloudWatch alarms for workload scaling and monitoring.",
    "Focused on application reliability and operational visibility for the research deployment.",
  ],
};

const certifications = [
  {
    name: "IBM DevOps and Software Engineering Professional Certificate",
    issuer: "Coursera",
  },
  {
    name: "AWS Cloud Practitioner Specialization",
    issuer: "Udemy",
  },
  {
    name: "CCNA v7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
  },
];

const learningPath = [
  {
    label: "RHEL",
    detail: "Building enterprise Linux administration depth.",
  },
  {
    label: "OpenShift",
    detail: "Extending Kubernetes learning toward platform engineering.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, children, align = "left", headingId }) {
  return (
    <Reveal className={`section-header ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      {children ? <p className="section-copy">{children}</p> : null}
    </Reveal>
  );
}

function HeroTopology() {
  const reduceMotion = useReducedMotion();
  const nodes = [
    { label: "AWS", className: "node-a" },
    { label: "Docker", className: "node-b" },
    { label: "K8s", className: "node-c" },
    { label: "Terraform", className: "node-d" },
    { label: "CI/CD", className: "node-e" },
    { label: "Metrics", className: "node-f" },
  ];

  return (
    <motion.div
      className="hero-topology"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      aria-label="Animated cloud infrastructure topology"
    >
      <div className="topology-grid" aria-hidden="true" />
      <div className="topology-ring ring-one" aria-hidden="true" />
      <div className="topology-ring ring-two" aria-hidden="true" />
      <div className="topology-lines" aria-hidden="true">
        <span className="line line-one" />
        <span className="line line-two" />
        <span className="line line-three" />
        <span className="line line-four" />
      </div>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className={`topology-node ${node.className}`}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, index % 2 === 0 ? -8 : 8, 0],
                }
          }
          transition={{
            duration: 4 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span />
          {node.label}
        </motion.div>
      ))}

      <div className="terminal-card">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-lines">
          <p>
            <span>$</span> terraform plan
          </p>
          <p>
            <span>$</span> kubectl rollout status
          </p>
          <p>
            <span>$</span> prometheus targets healthy
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectFlow({ steps, accent }) {
  return (
    <div className={`flow-diagram accent-${accent}`} aria-label="Project workflow">
      {steps.map((step, index) => (
        <motion.div
          className="flow-step"
          key={`${step}-${index}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.05, duration: 0.45 }}
        >
          <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="flow-label">{step}</span>
        </motion.div>
      ))}
    </div>
  );
}

function StackExplorer() {
  const [activeStack, setActiveStack] = useState(stackGroups[0].id);
  const activeGroup =
    stackGroups.find((group) => group.id === activeStack) ?? stackGroups[0];
  const ActiveIcon = activeGroup.Icon;

  return (
    <div className="stack-explorer">
      <div className="stack-tabs" role="tablist" aria-label="Technology stack categories">
        {stackGroups.map((group) => {
          const Icon = group.Icon;
          const selected = group.id === activeGroup.id;

          return (
            <button
              type="button"
              key={group.id}
              className={`stack-tab ${selected ? "active" : ""}`}
              onClick={() => setActiveStack(group.id)}
              onMouseEnter={() => setActiveStack(group.id)}
              onFocus={() => setActiveStack(group.id)}
              role="tab"
              aria-selected={selected}
              aria-controls={`stack-panel-${group.id}`}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{group.label}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeGroup.id}
        id={`stack-panel-${activeGroup.id}`}
        className="stack-panel"
        role="tabpanel"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="stack-panel-head">
          <span className="stack-panel-icon">
            <ActiveIcon size={24} aria-hidden="true" />
          </span>
          <div>
            <p className="panel-kicker">{activeGroup.label}</p>
            <h3>{activeGroup.summary}</h3>
          </div>
        </div>

        <div className="stack-items">
          {activeGroup.items.map((item, index) => {
            const Icon = item.Icon;
            return (
              <motion.article
                className="stack-item"
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.035, duration: 0.3 }}
              >
                <Icon size={22} aria-hidden="true" />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.note}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <div className="project-showcase">
      <div className="project-rail" role="tablist" aria-label="Featured projects">
        {projects.map((item, index) => {
          const selected = index === activeProject;
          return (
            <button
              type="button"
              key={item.name}
              className={`project-tab ${selected ? "active" : ""}`}
              onClick={() => setActiveProject(index)}
              role="tab"
              aria-selected={selected}
            >
              <span>{item.number}</span>
              <strong>{item.name}</strong>
            </button>
          );
        })}
      </div>

      <motion.article
        key={project.name}
        className={`project-panel accent-${project.accent}`}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="project-panel-content">
          <p className="project-number">{project.number}</p>
          <h3>{project.name}</h3>
          <h4>{project.title}</h4>
          <p className="project-intro">{project.intro}</p>
          <p className="project-scope">{project.scope}</p>

          <div className="tag-row" aria-label={`${project.name} technologies`}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <ul className="project-highlights">
            {project.highlights.map((point) => (
              <li key={point}>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            className="button secondary"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub aria-hidden="true" />
            View Repository
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <ProjectFlow steps={project.flow} accent={project.accent} />
      </motion.article>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-42% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="site-nav">
        <a className="brand-mark" href="#home" onClick={handleNavClick}>
          <span>PC</span>
          <strong>Cloud & DevOps</strong>
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-content">
            <Reveal>
              <p className="eyebrow">AWS / Kubernetes / IaC / Observability</p>
              <h1 id="hero-title">{profile.name}</h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-copy">{profile.summary}</p>

              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View Projects
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  className="button secondary"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub aria-hidden="true" />
                  GitHub
                </a>
                <a
                  className="button ghost"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={17} aria-hidden="true" />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal className="hero-signals" delay={0.12}>
              {heroSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </Reveal>

            <Reveal className="quick-facts" delay={0.18}>
              {quickFacts.map((fact) => (
                <div className="quick-fact" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </Reveal>
          </div>

          <HeroTopology />

          <motion.a
            className="scroll-cue"
            href="#about"
            aria-label="Scroll to about section"
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            <span />
          </motion.a>
        </section>

        <section className="section-shell about-grid" id="about" aria-labelledby="about-title">
          <SectionHeader
            eyebrow="About"
            title="Infrastructure-minded, application-aware."
            headingId="about-title"
          />

          <Reveal className="about-copy">
            <p>
              I am a final-year Information Technology student at Vishwakarma
              Institute of Information Technology, Pune, focused on Cloud and
              DevOps engineering.
            </p>
            <p>
              My current work centers on AWS, Kubernetes, Terraform, CI/CD,
              Linux, and observability. I like building systems where deployment,
              monitoring, and reliability are part of the engineering design,
              not an afterthought.
            </p>
          </Reveal>

          <Reveal className="education-panel" delay={0.1}>
            <div className="profile-snapshot">
              <img
                src={profile.photo}
                alt="Parth Rajesh Chandurkar"
                width="96"
                height="96"
                loading="lazy"
              />
              <div>
                <span>Final-year IT student</span>
                <strong>Cloud & DevOps focus</strong>
              </div>
            </div>
            <p className="panel-kicker">Education</p>
            <h3>Vishwakarma Institute of Information Technology, Pune</h3>
            <p>Bachelor of Technology in Information Technology</p>
            <div className="education-meta">
              <span>Aug 2023 - Present</span>
              <span>CGPA 8.71 / 10</span>
            </div>
          </Reveal>
        </section>

        <section className="section-shell" id="stack" aria-labelledby="stack-title">
          <SectionHeader
            eyebrow="Engineering Stack"
            title="A practical stack for cloud-native delivery."
            headingId="stack-title"
          >
            Explore the tools grouped by how they fit into infrastructure,
            delivery, observability, application services, and current learning.
          </SectionHeader>
          <Reveal>
            <StackExplorer />
          </Reveal>
        </section>

        <section className="section-shell" id="projects" aria-labelledby="projects-title">
          <SectionHeader
            eyebrow="Project Archive"
            title="Cloud, DevOps, and platform engineering work."
            headingId="projects-title"
          >
            Each project is presented as an engineering workflow so recruiters can
            quickly see the infrastructure, automation, and reliability thinking
            behind the code.
          </SectionHeader>
          <Reveal>
            <ProjectShowcase />
          </Reveal>
        </section>

        <section
          className="section-shell experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <SectionHeader
            eyebrow="Research Experience"
            title="ZenithMind capstone research deployment."
            headingId="experience-title"
          >
            A research project with application deployment, orchestration,
            autoscaling, and monitoring work across AWS EC2, Docker, Kubernetes,
            HPA, and CloudWatch.
          </SectionHeader>

          <Reveal className="research-card">
            <div className="research-heading">
              <div>
                <p className="panel-kicker">{research.type}</p>
                <h3>{research.name}</h3>
                <p>{research.title}</p>
              </div>
              <a
                className="button secondary"
                href={research.link}
                target="_blank"
                rel="noreferrer"
              >
                IEEE Paper
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="research-meta">
              <span>{research.timeline}</span>
              <span>{research.distinction}</span>
            </div>

            <div className="tag-row">
              {research.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <ul className="research-points">
              {research.points.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section
          className="section-shell cert-section"
          id="certifications"
          aria-labelledby="certifications-title"
        >
          <SectionHeader
            eyebrow="Certifications"
            title="Verified learning foundations."
            headingId="certifications-title"
          />
          <Reveal className="cert-grid">
            {certifications.map((cert, index) => (
              <article className="cert-card" key={cert.name}>
                <span className="cert-index">{String(index + 1).padStart(2, "0")}</span>
                <Award size={24} aria-hidden="true" />
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
              </article>
            ))}
          </Reveal>
        </section>

        <section className="section-shell github-section" aria-labelledby="github-title">
          <Reveal className="github-panel">
            <div>
              <p className="eyebrow">GitHub / Open Source</p>
              <h2 id="github-title">Explore my engineering work.</h2>
              <p>
                The portfolio links to the repositories that best represent my
                Cloud and DevOps direction: local Kubernetes observability,
                secure workflow services, and reproducible MLOps infrastructure.
              </p>
            </div>
            <a
              className="button primary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub aria-hidden="true" />
              Open GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </section>

        <section className="section-shell learning-section" aria-labelledby="learning-title">
          <SectionHeader
            eyebrow="Currently Learning"
            title="Extending the platform path."
            headingId="learning-title"
          >
            These are active learning areas, presented as current focus rather
            than claimed proficiency.
          </SectionHeader>
          <Reveal className="learning-track">
            {learningPath.map((item, index) => (
              <article className="learning-step" key={item.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </section>

        <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
          <Reveal className="contact-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Let's build reliable systems.</h2>
              <p>
                I am focused on Cloud Engineer, DevOps Engineer, Site
                Reliability, Platform, and Infrastructure roles where systems
                thinking matters.
              </p>
            </div>

            <div className="contact-actions" aria-label="Contact links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedinIn aria-hidden="true" />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a href={`tel:${profile.phone.replace(/[-\s]/g, "")}`}>
                <Phone size={18} aria-hidden="true" />
                {profile.phone}
              </a>
              <a href={profile.resume} target="_blank" rel="noreferrer">
                <FileText size={18} aria-hidden="true" />
                Resume
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; {currentYear} {profile.name}. Cloud & DevOps portfolio.</p>
        <a href="#home">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
