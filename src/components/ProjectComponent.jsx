import { useMemo, useState } from "react";
import FadeUp from "../components/FadeUp";

import {
  SiTerraform, SiGithubactions, SiDocker, SiKubernetes, SiArgo, SiPrometheus,
  SiGrafana, SiHelm, SiGithub, SiJenkins, SiApachemaven, SiAnsible, SiReact,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJsonwebtokens, SiTailwindcss,
  SiVite, SiJavascript, SiGo, SiPostgresql,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

import {
  LuCheck, LuArrowLeft, LuArrowUpRight, LuBox, LuLayoutGrid, LuCalendar, LuBellRing,
} from "react-icons/lu";

const serif = { fontFamily: "'Lora', 'Playfair Display', Georgia, serif" };

/* ================= TECHNOLOGIES ================= */

const TECH = {
  Terraform: [SiTerraform, "#a26ee0"],
  AWS: [FaAws, "#ff9900"],
  "GitHub Actions": [SiGithubactions, "#2088ff"],
  Docker: [SiDocker, "#2496ed"],
  Kubernetes: [SiKubernetes, "#4f83f1"],
  "Argo CD": [SiArgo, "#ef7b4d"],
  Prometheus: [SiPrometheus, "#e6522c"],
  Grafana: [SiGrafana, "#f46800"],
  Helm: [SiHelm, "#3fa9e8"],
  Jenkins: [SiJenkins, "#d24939"],
  Maven: [SiApachemaven, "#e0304f"],
  Ansible: [SiAnsible, "#ee3b3b"],
  Alertmanager: [LuBellRing, "#e6522c"],
  React: [SiReact, "#61dafb"],
  "Node.js": [SiNodedotjs, "#68a063"],
  Express: [SiExpress, "#ffffff"],
  MongoDB: [SiMongodb, "#47a248"],
  MySQL: [SiMysql, "#4a9fd0"],
  JWT: [SiJsonwebtokens, "#ffffff"],
  Tailwind: [SiTailwindcss, "#06b6d4"],
  Vite: [SiVite, "#a78bfa"],
  JavaScript: [SiJavascript, "#f7df1e"],
  Go: [SiGo, "#00add8"],
  PostgreSQL: [SiPostgresql, "#4169e1"],
};

const tech = (name) => TECH[name] || [LuBox, "#9ca3af"];

/* ================= PROJECT DATA ================= */

const projects = {
  devops: [
    {
      id: "microservices-deployment",
      year: "2026",
      title: "Production-Grade GitOps on AWS EKS",
      tag: "Cloud & GitOps",
      description:
        "A production-style GitOps platform running microservices on AWS EKS, with infrastructure, security, deployment automation and observability managed through code.",
      highlights: [
        "Provisioned a private multi-AZ AWS EKS environment using Terraform.",
        "Built GitHub Actions workflows for service builds and container image scanning with Trivy.",
        "Implemented Argo CD GitOps delivery with automated image promotion and Kubernetes self-healing.",
        "Configured Gateway API, ALB, Route 53 and TLS for application traffic.",
        "Added Prometheus, Grafana and Alertmanager for monitoring and alerting.",
      ],
      stack: ["Terraform", "AWS", "Kubernetes", "GitHub Actions", "Argo CD", "Prometheus", "Grafana"],
      art: ["#2563eb", "#7c3aed", "#22d3ee"],
      repo: "https://github.com/Nafees-khan-29/Microservices-Deployment",
      live: "",
    },
    {
      id: "devsecops-pipeline",
      year: "2026",
      title: "End-to-End DevSecOps CI/CD Pipeline",
      tag: "DevSecOps",
      description:
        "An end-to-end CI/CD and security pipeline integrating automated code quality, dependency, container and deployment checks.",
      highlights: [
        "Automated application builds and deployments using Jenkins.",
        "Integrated SonarQube for continuous code-quality analysis.",
        "Added OWASP Dependency-Check and Trivy into the security workflow.",
        "Containerized the application with Docker.",
        "Used Argo CD and Kubernetes for GitOps-based application delivery.",
      ],
      stack: ["Jenkins", "Docker", "Kubernetes", "Argo CD", "Terraform", "Prometheus", "Grafana"],
      art: ["#dc2626", "#7c3aed", "#2563eb"],
      repo: "https://github.com/Nafees-khan-29/End-to-End-DevSecOps-CI-CD-Pipeline",
      live: "",
    },
    {
      id: "three-tier-aws",
      year: "2026",
      title: "Highly Available 3-Tier Application on AWS",
      tag: "Infrastructure as Code",
      description:
        "A multi-AZ AWS 3-tier architecture provisioned through modular Terraform with load balancing, Auto Scaling, private application infrastructure and managed database connectivity.",
      highlights: [
        "Designed VPC networking with public and private subnets across multiple Availability Zones.",
        "Configured Application Load Balancers and EC2 Auto Scaling.",
        "Provisioned PostgreSQL database infrastructure with secure private connectivity.",
        "Used AWS Secrets Manager and IAM instance profiles for runtime credentials.",
        "Automated Docker image delivery through GitHub Actions.",
      ],
      stack: ["Terraform", "AWS", "GitHub Actions", "Docker", "EC2", "ALB", "PostgreSQL"],
      art: ["#0d9488", "#10b981", "#a3e635"],
      repo: "https://github.com/Nafees-khan-29/3-Tier-AWS-Architecture",
      live: "",
    },
    {
      id: "go-web-app",
      year: "2026",
      title: "Go Web App on AWS EKS",
      tag: "CI/CD & GitOps",
      description:
        "A Go web application taken through a complete containerization and GitOps deployment workflow using Kubernetes, Helm, GitHub Actions and Argo CD.",
      highlights: [
        "Containerized the Go application using a multi-stage Docker build.",
        "Configured GitHub Actions for automated builds and testing.",
        "Packaged Kubernetes deployment configuration with Helm.",
        "Used Argo CD to continuously deploy the application to AWS EKS.",
        "Followed Git as the source of truth for deployment configuration.",
      ],
      stack: ["Go", "Docker", "GitHub Actions", "Helm", "Argo CD", "Kubernetes"],
      art: ["#00add8", "#2563eb", "#7c3aed"],
      repo: "https://github.com/Nafees-khan-29/go-web-app-devOpsify",
      live: "",
    },
    {
      id: "mern-stack-deployment",
      year: "2026",
      title: "MERN Stack Docker Deployment",
      tag: "Containerization",
      description:
        "A containerized MERN application demonstrating frontend and backend Dockerization with Docker Compose-based application orchestration.",
      highlights: [
        "Created separate Docker configurations for the React frontend and backend.",
        "Containerized the Node.js and Express application.",
        "Configured MongoDB as the application database.",
        "Used Docker Compose to orchestrate the application services.",
        "Structured the project for reproducible local deployment.",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "Docker"],
      art: ["#f97316", "#2563eb", "#10b981"],
      repo: "https://github.com/Nafees-khan-29/mern-stack-deployment",
      live: "",
    },
  ],

  development: [
    {
      id: "ai-healthcare",
      year: "2026",
      title: "AI-Powered Healthcare Management System",
      tag: "Full Stack + AI",
      description:
        "A full-stack healthcare platform focused on patient management, appointments, medical records, AI-assisted healthcare workflows and role-based access.",
      highlights: [
        "Built a modern React-based healthcare interface.",
        "Implemented backend APIs using Node.js and Express.",
        "Used MongoDB for application data management.",
        "Implemented authentication and protected routes using JWT.",
        "Integrated AI-oriented healthcare functionality into the platform.",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "JWT"],
      art: ["#0891b2", "#2563eb", "#7c3aed"],
      repo: "https://github.com/Nafees-khan-29/AI-powered-healthcare-management-system",
      live: "",
    },
    {
      id: "bagh-e-khizar",
      year: "2026",
      title: "Bagh-e-Khizar",
      tag: "Production Website",
      description:
        "A responsive publishing website built with React and Tailwind CSS, with reusable components, routing, animations, SEO and production deployment.",
      highlights: [
        "Built the website using reusable React components.",
        "Implemented responsive layouts with Tailwind CSS.",
        "Added React Router for multi-page navigation.",
        "Implemented SEO metadata, canonical URLs and structured data.",
        "Configured production deployment and SPA routing on Netlify.",
      ],
      stack: ["React", "Vite", "Tailwind", "JavaScript"],
      art: ["#16a34a", "#0d9488", "#2563eb"],
      repo: "https://github.com/Nafees-khan-29/bagh-e-khizar",
      live: "https://baghekhizar.org",
    },
    {
      id: "website-audit-tool",
      year: "2026",
      title: "Website Audit Tool",
      tag: "Web Development",
      description:
        "A web auditing project focused on inspecting websites and presenting technical audit information through a dedicated web interface.",
      highlights: [
        "Built a dedicated interface for website auditing workflows.",
        "Structured the application around website analysis and audit results.",
        "Focused on presenting technical website information clearly.",
        "Designed the interface for practical developer-oriented use.",
      ],
      stack: ["JavaScript"],
      art: ["#7c3aed", "#2563eb", "#06b6d4"],
      repo: "https://github.com/Nafees-khan-29/Website-Audit-Tool-",
      live: "",
    },
    {
      id: "e-corp",
      year: "2025",
      title: "E-CORP Secure Authentication",
      tag: "Cybersecurity",
      description:
        "A cybersecurity-focused authentication project featuring Zero-Knowledge Proof concepts with a dedicated frontend and Node.js backend.",
      highlights: [
        "Built a dedicated authentication interface.",
        "Explored Zero-Knowledge Proof based authentication concepts.",
        "Implemented a separate Node.js backend.",
        "Designed a distinctive cyberpunk-inspired user interface.",
        "Developed as a collaborative project.",
      ],
      stack: ["React", "Node.js", "Express", "JavaScript"],
      art: ["#7c3aed", "#06b6d4", "#ec4899"],
      repo: "https://github.com/Pruthvi-123-prog/E-CORP",
      live: "",
    },
    {
      id: "sambhram-2025",
      year: "2025",
      title: "Sambhram 2025",
      tag: "Frontend",
      description:
        "A dedicated event frontend project created for the Sambhram 2025 experience, focusing on a responsive and engaging event interface.",
      highlights: [
        "Built a dedicated event-oriented frontend.",
        "Focused on responsive presentation across screen sizes.",
        "Created reusable UI sections for the event experience.",
        "Designed the interface around clear event information and navigation.",
      ],
      stack: ["React", "JavaScript"],
      art: ["#db2777", "#7c3aed", "#f97316"],
      repo: "https://github.com/Appuraj46/Sambhram2025-Frontend",
      live: "",
    },
  ],
};

/* ================= FILTERS ================= */

const FILTERS = [
  { key: "all", label: "All", icon: LuLayoutGrid },
  { key: "devops", label: "DevOps", icon: FaAws },
  { key: "development", label: "Development", icon: SiGithubactions },
];

/* ================= CARD BACKGROUND ================= */

const artBackground = ([a, b, c]) =>
  `radial-gradient(60% 60% at 15% 20%, ${a} 0%, transparent 70%),
   radial-gradient(55% 55% at 85% 30%, ${b} 0%, transparent 70%),
   radial-gradient(65% 65% at 40% 90%, ${c} 0%, transparent 70%),
   #0a0a0f`;

/* ================= PROJECT CARD ================= */

const ProjectCard = ({ project }) => (
  <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] md:hover:-translate-y-1">
    {/* Banner */}
    <div
      className="relative h-32 shrink-0 overflow-hidden min-[400px]:h-40 sm:h-44 lg:h-40 xl:h-44 2xl:h-48"
      style={{ background: artBackground(project.art) }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2 sm:inset-x-5 sm:top-5">
        <span className="max-w-[70%] truncate rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] text-white backdrop-blur-md sm:px-3 sm:text-[11px]">
          {project.tag}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] text-white/80 backdrop-blur-md sm:text-[11px]">
          <LuCalendar size={11} />
          {project.year}
        </span>
      </div>
    </div>

    {/* Body */}
    <div className="flex flex-1 flex-col p-4 min-[400px]:p-5 sm:p-6">
      <h3
        className="break-words text-lg font-semibold leading-tight text-white min-[400px]:text-xl sm:text-[22px] md:min-h-[56px]"
        style={serif}
      >
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-neutral-400 lg:min-h-[72px]">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2.5 sm:mt-5">
        {project.highlights.map((point, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-neutral-300">
              <LuCheck size={10} />
            </span>
            <span className="min-w-0 break-words text-[13px] leading-5 text-neutral-300">
              {point}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((name) => {
          const [Icon, color] = tech(name);
          return (
            <span
              key={name}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-neutral-200 sm:px-2.5"
            >
              <Icon size={12} style={{ color }} />
              {name}
            </span>
          );
        })}
      </div>

      {/* Buttons: stack full-width on very small screens, inline otherwise */}
      <div className="mt-auto flex flex-col gap-2 pt-6 min-[400px]:flex-row min-[400px]:flex-wrap sm:pt-7">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
        >
          <SiGithub size={13} />
          View code
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-xs font-medium text-black transition-colors duration-300 hover:bg-neutral-200"
          >
            Live demo
            <LuArrowUpRight size={13} />
          </a>
        )}
      </div>
    </div>
  </article>
);

/* ================= PROJECTS PAGE ================= */

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    if (filter === "all") {
      return [
        ...projects.devops.map((p) => ({ ...p, category: "devops" })),
        ...projects.development.map((p) => ({ ...p, category: "development" })),
      ];
    }
    return projects[filter].map((p) => ({ ...p, category: filter }));
  }, [filter]);

  const counts = {
    all: projects.devops.length + projects.development.length,
    devops: projects.devops.length,
    development: projects.development.length,
  };

  return (
    <section className="min-h-screen overflow-x-hidden bg-[#050505] px-2 py-2 text-white min-[400px]:px-3 min-[400px]:py-3 sm:px-6 sm:py-6">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0c0c0c] px-4 py-8 min-[400px]:px-5 sm:rounded-[28px] sm:px-8 sm:py-12 lg:px-12 lg:py-16 xl:px-16 2xl:max-w-[1600px]">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 py-1 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
        >
          <LuArrowLeft size={15} />
          Back home
        </a>

        {/* Header */}
        <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <FadeUp>
              <h1
                className="max-w-2xl text-[32px] font-semibold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]"
                style={serif}
              >
                Things I've built
                <br />
                <span className="text-neutral-500">and shipped</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-400 sm:mt-5 sm:text-[15px] sm:leading-7">
                Cloud infrastructure, DevOps automation, full-stack applications
                and production websites — built with modern technologies and
                real-world deployment workflows.
              </p>
            </FadeUp>
          </div>

          {/* Filters: wrap on small screens, never overflow */}
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {FILTERS.map(({ key, label, icon: Icon }) => {
              const selected = filter === key;
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  aria-pressed={selected}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[13px] font-medium transition-all duration-300 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
                    selected
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-white/[0.04] text-neutral-400 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <Icon size={14} />
                  {label}
                  <span className={`text-xs ${selected ? "text-black/50" : "text-neutral-600"}`}>
                    {counts[key]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid: 1 col → 2 cols (md) → 3 cols (xl) */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {visible.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-neutral-500">No projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;