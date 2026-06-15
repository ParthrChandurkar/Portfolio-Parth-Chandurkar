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
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiGnubash,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSelenium,
  SiStreamlit,
  SiTensorflow,
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
  leetcode: "https://leetcode.com/u/parthchn28",
  resume: "/Parth_Rajesh_Chandurkar_Resume.pdf",
};

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

const featuredStack = [
  skill("AWS", FaAws, awsOrange),
  skill("Docker", SiDocker, "#2496ed"),
  skill("Kubernetes", SiKubernetes, "#326ce5"),
  skill("Terraform", SiTerraform, "#844fba"),
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
      skill("Node.js", SiNodedotjs, "#5fa04e"),
      skill("Flask", SiFlask, "#ffffff"),
      skill("REST APIs", ServerCog, "#34d399"),
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
      skill("TensorFlow", SiTensorflow, "#ff6f00"),
      skill("PyTorch", SiPytorch, "#ee4c2c"),
      skill("scikit-learn", SiScikitlearn, "#f7931e"),
    ],
  },
  {
    title: "Analytics",
    icon: Activity,
    accent: "blue",
    items: [
      skill("Power BI", Activity, "#f2c811"),
      skill("Streamlit", SiStreamlit, "#ff4b4b"),
      skill("Monitoring", Activity, "#60a5fa"),
      skill("Dashboards", Workflow, "#34d399"),
    ],
  },
];

const experience = [
  {
    title: "F1 Race Prediction and Strategy System",
    type: "Freelance Project",
    duration: "Jan 2025 - Mar 2025",
    stack: "MLOps, Docker, CI/CD, Machine Learning",
    github: "https://github.com/ParthrChandurkar/F1-Race-Prediction-Strategy-System",
    points: [
      "Built an end-to-end ML pipeline for F1 race outcomes and pit-stop strategy prediction with 78% classification accuracy.",
      "Implemented DVC, Docker, and GitHub Actions for automated CI/CD model retraining.",
      "Designed tyre degradation and pit-window simulations that reduced estimated lap-time loss by nearly 12%.",
    ],
  },
  {
    title: "ZenithMind - AI-Powered Mental Health Assistant",
    type: "Capstone Research Project",
    duration: "Nov 2024 - Feb 2025",
    stack: "React, Node.js, AWS EC2, NLP, Google API",
    github:
      "https://github.com/ParthrChandurkar/-ZenithMind-AI-Powered-Mental-Health-Assistant",
    paper: "https://drive.google.com/file/d/1Uax5n5iSvLYXzWcYPgDl_za4hmlUQw_Z",
    points: [
      "Built a CBT-based wellness platform with AI chatbot, sentiment analysis, and virtual therapist escalation.",
      "Deployed scalable MERN architecture on AWS EC2 with behavioral analytics dashboards.",
      "Added secure authentication and real-time visualizations, improving retention and self-awareness tracking.",
    ],
  },
];

const projects = [
  {
    title: "Pharmacy Management System",
    label: "2025",
    status: "Cloud-ready",
    stack: "Python, Tkinter, AWS RDS, MySQL, REST APIs",
    github: "https://github.com/ParthrChandurkar/Pharmenia---Pharmacy-Management-System",
    icon: Database,
    points: [
      "Multi-store inventory, expiry tracking, and vendor coordination on AWS RDS.",
      "Role-based access for admins and vendors with secure operational workflows.",
    ],
  },
  {
    title: "Smart Public-Police Communication Portal",
    label: "Aug 2024",
    status: "Hackathon",
    stack: "MERN, AWS, Python, Gemini API",
    icon: ShieldCheck,
    points: [
      "Cloud-based citizen-police communication platform with role-specific dashboards.",
      "Microservices on AWS EC2 and S3 reduced estimated infrastructure cost by 20%.",
      "AWS IAM and encryption controls improved data protection and compliance readiness.",
    ],
  },
  {
    title: "InfraWatch",
    label: "June 2026",
    status: "Zero-touch deployment control plane",
    stack: "FastAPI, React, TypeScript, Docker, Kubernetes, Terraform, Helm, Prometheus, Grafana, Loki, PostgreSQL, GitHub Actions",
    github: "https://github.com/ParthrChandurkar/InfraWatch-Zero-Touch-Deployments-with-Full-Infrastructure-Visibility",
    icon: Workflow,
    featured: true,
    points: [
      "Built a cloud-native DevOps command center for service deployments, rollout state, health metrics, logs, and audit events.",
      "Connected Docker Compose, Kubernetes manifests, Terraform/Helm, Prometheus, Grafana, Loki, and GitHub Actions into one demo-ready platform.",
    ],
  },
  {
    title: "DevPilot",
    label: "Planned SaaS",
    status: "Business product",
    stack: "React, Node.js, AWS SDK, Supabase, Stripe",
    icon: Rocket,
    points: [
      "AI-powered cloud cost and health monitor for early-stage startups.",
      "Connects to AWS, finds wasted spend, suggests fixes, and monitors uptime.",
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
    school: "AWS, Kubernetes, Terraform, CI/CD, Linux",
    period: "Current Focus",
    status: "Building production-grade portfolio systems",
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
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("/profile.jpeg");

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const closeMenu = () => setMenuOpen(false);

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
                I am into <span>Cloud Automation</span>
                <i aria-hidden="true" />
              </p>
              <p className="hero-copy">
                I build cloud-ready systems, automate delivery pipelines, and connect DevOps,
                MLOps, and full-stack engineering into products that are measurable, resilient,
                and useful.
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
                I am a B.Tech IT student at VIIT Pune focused on Cloud, DevOps, and scalable
                product engineering. My work blends AWS infrastructure, CI/CD automation,
                containers, monitoring, and practical ML systems.
              </p>
              <p>
                I am building toward production-grade DevOps ownership: shipping reliable
                pipelines, monitoring real services, and turning cloud complexity into systems
                teams can operate with confidence.
              </p>
            </div>
            <div className="identity-panel">
              <div>
                <span>College</span>
                <strong>{profile.college}</strong>
              </div>
              <div>
                <span>Current focus</span>
                <strong>Kubernetes, Terraform, MLOps, AWS automation</strong>
              </div>
              <div>
                <span>Building next</span>
                <strong>InfraWatch and DevPilot</strong>
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
                      <a href={item.paper} target="_blank" rel="noreferrer">
                        <FileText size={16} />
                        IEEE Paper
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
            <span className="section-kicker">Work</span>
            <h2>Projects built for operations, visibility, and scale.</h2>
          </div>
          <div className="project-grid">
            {projects.map(({ title, label, status, stack, github, icon: Icon, points, featured }) => (
              <article className={`project-card ${featured ? "is-featured" : ""}`} key={title}>
                <div className="project-topline">
                  <Icon size={22} />
                  <span>{label}</span>
                </div>
                <h3>{title}</h3>
                <p className="project-status">{status}</p>
                <p className="stack-line">{stack}</p>
                <ul>
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {github && (
                  <a className="card-link" href={github} target="_blank" rel="noreferrer">
                    View repository
                    <ExternalLink size={15} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="research-band">
            <div>
              <span className="section-kicker">Research</span>
              <h2>ZenithMind IEEE research work</h2>
              <p>
                A capstone research project exploring CBT-based mental wellness support with
                NLP-driven chatbot flows, sentiment analysis, behavioral analytics, and
                therapist escalation pathways.
              </p>
            </div>
            <a
              className="button button-primary"
              href="https://drive.google.com/file/d/1Uax5n5iSvLYXzWcYPgDl_za4hmlUQw_Z"
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={18} />
              Read Paper
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
