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
  BriefcaseBusiness,
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

const profile = {
  name: "Parth Rajesh Chandurkar",
  shortName: "Parth",
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

const navItems = ["About", "Skills", "Experience", "Projects", "Research", "Contact"];

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    accent: "cyan",
    items: ["C", "C++", "Python", "Java", "SQL", "Bash"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    accent: "violet",
    items: [
      "AWS EC2",
      "S3",
      "RDS",
      "Lambda",
      "IAM",
      "DynamoDB",
      "Athena",
      "CloudWatch",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "Ansible",
      "Linux",
      "GitHub Actions",
    ],
  },
  {
    title: "Web & APIs",
    icon: ServerCog,
    accent: "green",
    items: ["React", "Node.js", "Flask", "REST APIs", "Postman", "Selenium"],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "amber",
    items: ["MongoDB", "MySQL", "Firebase", "DynamoDB"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    accent: "rose",
    items: ["Machine Learning", "NLP", "TensorFlow", "PyTorch", "scikit-learn"],
  },
  {
    title: "Analytics",
    icon: Activity,
    accent: "blue",
    items: ["Power BI", "Streamlit", "Monitoring", "Dashboards"],
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
    label: "Coming soon",
    status: "DevOps portfolio project",
    stack: "FastAPI, React, Docker, Kubernetes, Terraform, Prometheus, Grafana, GitHub Actions",
    icon: Workflow,
    points: [
      "Production-grade CI/CD pipeline with automated Kubernetes deployments.",
      "Real-time health monitoring, service telemetry, Grafana dashboards, and failure alerts.",
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

const stats = [
  { value: "78%", label: "F1 ML accuracy" },
  { value: "12%", label: "Lap-loss reduction" },
  { value: "35%", label: "Retention lift" },
  { value: "8.71", label: "CGPA" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("/profile.jpg");

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
          <span>Parth.dev</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
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
          <img
            className="hero-photo"
            src={avatarSrc}
            alt="Parth Rajesh Chandurkar"
            onError={() => setAvatarSrc("/profile-fallback.bmp")}
          />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content">
            <div className="eyebrow">
              <Terminal size={16} />
              <span>cloud/devops engineer</span>
            </div>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-copy">
              I build cloud-ready systems, automate delivery pipelines, and connect DevOps,
              MLOps, and full-stack engineering into products that are measurable, resilient,
              and useful.
            </p>

            <div className="hero-actions" aria-label="Profile links">
              <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">
                <GitBranch size={18} />
                GitHub
              </a>
              <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={18} />
                LinkedIn
              </a>
              <a className="button button-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>

          <div className="hero-stats" aria-label="Portfolio highlights">
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
                  <Icon size={20} />
                  <h3>{title}</h3>
                </div>
                <div className="tag-cloud">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
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

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="section-kicker">Projects</span>
            <h2>Systems built for operations, visibility, and scale.</h2>
          </div>
          <div className="project-grid">
            {projects.map(({ title, label, status, stack, github, icon: Icon, points }) => (
              <article className="project-card" key={title}>
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
            <h2>Let’s build something reliable.</h2>
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
                <GitBranch size={18} />
                github.com/ParthrChandurkar
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={18} />
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
        <span>© {currentYear} {profile.name}</span>
        <a href={profile.leetcode} target="_blank" rel="noreferrer">
          LeetCode <ChevronRight size={14} />
        </a>
      </footer>
    </div>
  );
}

export default App;
