import { useRef, useState } from "react";
import FadeUp from "../components/FadeUp";

import {
  SiGithubactions, SiDocker, SiKubernetes, SiArgo, SiTerraform, SiPrometheus,
  SiGrafana, SiJenkins, SiApachemaven, SiAnsible, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJavascript, SiVite,
  SiJsonwebtokens, SiGithub, SiGo, SiHelm, SiPostgresql,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

import {
  LuServer, LuNetwork, LuSplit, LuDatabase, LuBellRing, LuWebhook, LuBox,
  LuArrowLeft, LuArrowRight, LuArrowUpRight,
} from "react-icons/lu";

const serif = { fontFamily: "'Lora', 'Playfair Display', Georgia, serif" };

/* ================= TECHNOLOGIES ================= */

const TECH = {
  "GitHub Actions": [SiGithubactions, "#2088ff"],
  Docker: [SiDocker, "#2496ed"],
  Kubernetes: [SiKubernetes, "#4f83f1"],
  "Argo CD": [SiArgo, "#ef7b4d"],
  Terraform: [SiTerraform, "#a26ee0"],
  AWS: [FaAws, "#ff9900"],
  EC2: [LuServer, "#ed7100"],
  VPC: [LuNetwork, "#8c4fff"],
  ALB: [LuSplit, "#8c4fff"],
  RDS: [LuDatabase, "#527fff"],
  PostgreSQL: [SiPostgresql, "#4169e1"],
  Prometheus: [SiPrometheus, "#e6522c"],
  Grafana: [SiGrafana, "#f46800"],
  Alertmanager: [LuBellRing, "#e6522c"],
  Jenkins: [SiJenkins, "#d24939"],
  Maven: [SiApachemaven, "#e0304f"],
  Ansible: [SiAnsible, "#ee3b3b"],
  React: [SiReact, "#61dafb"],
  Tailwind: [SiTailwindcss, "#06b6d4"],
  "Node.js": [SiNodedotjs, "#68a063"],
  Express: [SiExpress, "#ffffff"],
  MongoDB: [SiMongodb, "#47a248"],
  MySQL: [SiMysql, "#4a9fd0"],
  JavaScript: [SiJavascript, "#f7df1e"],
  Vite: [SiVite, "#a78bfa"],
  JWT: [SiJsonwebtokens, "#ffffff"],
  Go: [SiGo, "#00ADD8"],
  Helm: [SiHelm, "#0F1689"],
  "REST API": [LuWebhook, "#a78bfa"],
};

const tech = (name) => TECH[name] || [LuBox, "#ffffff"];

/* ================= PROJECTS ================= */

const projects = {
  devops: {
    label: "DevOps",
    blurb:
      "Cloud infrastructure, GitOps, CI/CD and Kubernetes platforms built around real deployment workflows.",
    items: [
      {
        id: "microservices-deployment",
        title: "Production-Grade GitOps on AWS EKS",
        tag: "Microservices & GitOps",
        description:
          "Built a production-style GitOps platform on AWS EKS using Terraform, GitHub Actions, Trivy, Argo CD and Kubernetes. The platform includes automated image promotion, ALB routing, TLS, autoscaling and observability with Prometheus, Grafana and Alertmanager.",
        stack: ["Terraform", "AWS", "GitHub Actions", "Docker", "Kubernetes", "Argo CD", "Prometheus", "Grafana"],
        art: ["#2563eb", "#7c3aed", "#06b6d4"],
        repo: "https://github.com/Nafees-khan-29/Microservices-Deployment",
        live: "",
      },
      {
        id: "devsecops-pipeline",
        title: "End-to-End DevSecOps CI/CD Pipeline",
        tag: "DevSecOps",
        description:
          "Implemented an end-to-end DevSecOps workflow using Jenkins for CI/CD, security and quality gates, Docker for containerization, Argo CD for GitOps-based Kubernetes delivery, and Prometheus with Grafana for monitoring.",
        stack: ["Jenkins", "Docker", "Kubernetes", "Argo CD", "Terraform", "Prometheus", "Grafana"],
        art: ["#dc2626", "#7c3aed", "#2563eb"],
        repo: "https://github.com/Nafees-khan-29/End-to-End-DevSecOps-CI-CD-Pipeline",
        live: "",
      },
      {
        id: "3-tier-aws",
        title: "Enterprise AWS 3-Tier Architecture",
        tag: "Cloud Infrastructure",
        description:
          "Designed a production-style three-tier AWS architecture with isolated VPC networking, Application Load Balancers, EC2 Auto Scaling, PostgreSQL database infrastructure, Secrets Manager and modular Terraform. GitHub Actions automates application delivery.",
        stack: ["Terraform", "AWS", "Docker", "GitHub Actions", "EC2", "ALB", "PostgreSQL"],
        art: ["#f59e0b", "#10b981", "#2563eb"],
        repo: "https://github.com/Nafees-khan-29/3-Tier-AWS-Architecture",
        live: "",
      },
      {
        id: "go-web-app-devopsify",
        title: "DevOpsified Go Web Application",
        tag: "CI/CD & Kubernetes",
        description:
          "Took a Go web application through a complete DevOps workflow with containerization, Kubernetes deployment, Helm-based configuration, GitHub Actions CI and Argo CD GitOps delivery on AWS EKS.",
        stack: ["Go", "Docker", "Kubernetes", "Helm", "GitHub Actions", "Argo CD"],
        art: ["#00add8", "#2563eb", "#7c3aed"],
        repo: "https://github.com/Nafees-khan-29/go-web-app-devOpsify",
        live: "",
      },
      {
        id: "mern-stack-deployment",
        title: "MERN Stack Docker Deployment",
        tag: "Containerization",
        description:
          "Containerized a MERN stack application using separate Docker configurations for the frontend and backend and orchestrated the application using Docker Compose.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Docker"],
        art: ["#f97316", "#2563eb", "#10b981"],
        repo: "https://github.com/Nafees-khan-29/mern-stack-deployment",
        live: "",
      },
    ],
  },

  development: {
    label: "Development",
    blurb:
      "Full-stack applications, AI-powered systems and production websites built with modern web technologies.",
    items: [
      {
        id: "ai-healthcare-management",
        title: "AI-Powered Healthcare Management System",
        tag: "Full Stack + AI",
        description:
          "A full-stack healthcare management platform designed around patient management, appointments, medical records, AI-assisted healthcare features and role-based workflows for healthcare users.",
        stack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "JWT"],
        art: ["#0891b2", "#2563eb", "#7c3aed"],
        repo: "https://github.com/Nafees-khan-29/AI-powered-healthcare-management-system",
        live: "",
      },
      {
        id: "bagh-e-khizar",
        title: "Bagh-e-Khizar",
        tag: "Production Website",
        description:
          "A modern responsive publishing website built with reusable React components, client-side routing, Tailwind CSS, animations, SEO metadata, structured data and production deployment on Netlify.",
        stack: ["React", "Vite", "Tailwind", "JavaScript"],
        art: ["#16a34a", "#0d9488", "#2563eb"],
        repo: "https://github.com/Nafees-khan-29/bagh-e-khizar",
        live: "https://baghekhizar.org",
      },
      {
        id: "website-audit-tool",
        title: "Website Audit Tool",
        tag: "Web Development",
        description:
          "A web-based auditing project focused on analyzing websites and presenting useful audit information to help identify technical and optimization issues.",
        stack: ["JavaScript", "React", "Node.js", "Express"],
        art: ["#7c3aed", "#2563eb", "#06b6d4"],
        repo: "https://github.com/Nafees-khan-29/Website-Audit-Tool-",
        live: "",
      },
      {
        id: "e-corp",
        title: "E-CORP Secure Authentication",
        tag: "Cybersecurity",
        description:
          "A secure authentication system featuring Zero-Knowledge Proofs and a cyberpunk-inspired interface, developed with a separate frontend and Node.js backend.",
        stack: ["React", "Node.js", "Express", "JavaScript"],
        art: ["#7c3aed", "#06b6d4", "#ec4899"],
        repo: "https://github.com/Pruthvi-123-prog/E-CORP",
        live: "",
      },
      {
        id: "sambhram-2025",
        title: "Sambhram 2025",
        tag: "Frontend",
        description:
          "A responsive event-focused frontend project designed to present the Sambhram 2025 experience through a modern interactive web interface.",
        stack: ["React", "JavaScript", "Tailwind", "Vite"],
        art: ["#db2777", "#7c3aed", "#f97316"],
        repo: "https://github.com/Appuraj46/Sambhram2025-Frontend",
        live: "",
      },
    ],
  },
};

const CATEGORY_KEYS = Object.keys(projects);

/* ================= 3D LAYOUT ================= */

const offsetOf = (i, active, n) => {
  let d = (((i - active) % n) + n) % n;
  if (d > n / 2) d -= n;
  return d;
};

const poseFor = (off) => {
  const k = Math.abs(off);
  const sign = Math.sign(off);

  if (k === 0) return { x: 0, z: 0, rot: 0, s: 1, o: 1 };
  if (k === 1) return { x: sign * 1.02, z: -150, rot: sign * 38, s: 0.92, o: 1 };
  if (k === 2) return { x: sign * 1.72, z: -320, rot: sign * 52, s: 0.84, o: 0.45 };
  return { x: sign * 2.1, z: -450, rot: sign * 60, s: 0.8, o: 0 };
};

/* ================= CARD ART ================= */

const artBackground = ([a, b, c]) =>
  `radial-gradient(60% 50% at 20% 15%, ${a} 0%, transparent 70%),
   radial-gradient(55% 55% at 85% 35%, ${b} 0%, transparent 70%),
   radial-gradient(70% 60% at 35% 95%, ${c} 0%, transparent 70%),
   radial-gradient(40% 30% at 60% 60%, ${a}99 0%, transparent 100%),
   #0a0a0f`;

const clamp3 = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

/* ================= PROJECT CARD ================= */

const ProjectCard = ({ project, index, total, off, snapping, onSelect }) => {
  const pose = poseFor(off);
  const isActive = off === 0;
  const [MainIcon, mainColor] = tech(project.stack[0]);

  return (
    <article
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}: ${project.title}`}
      aria-hidden={pose.o === 0}
      onClick={onSelect}
      style={{
        width: "var(--cw)",
        height: "var(--ch)",
        zIndex: 10 - Math.abs(off),
        transform: `
          translate(-50%, -50%)
          translate3d(calc(var(--cw) * ${pose.x}), 0, ${pose.z}px)
          rotateY(${pose.rot}deg)
          scale(${pose.s})
        `,
        opacity: snapping ? 0 : pose.o,
        transition: snapping
          ? "none"
          : "transform 800ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
        pointerEvents: pose.o === 0 ? "none" : "auto",
        willChange: "transform",
      }}
      className={`absolute left-1/2 top-1/2 overflow-hidden rounded-2xl bg-[#0a0a0f] ring-1 ring-white/15 motion-reduce:!transition-none ${
        isActive ? "cursor-default" : "cursor-pointer"
      }`}
    >
      {/* Background */}
      {project.image ? (
        <img
          src={project.image}
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="absolute -inset-[20%]"
          style={{
            background: artBackground(project.art),
            filter: `url(#marble${index % 2 ? "B" : "A"})`,
            transform: `rotate(${index * 47}deg)`,
          }}
        />
      )}

      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
      <div
        className="absolute inset-0 bg-black transition-opacity duration-700"
        style={{ opacity: isActive ? 0 : 0.35 }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col p-4 sm:p-5">
        {/* Top */}
        <div className="flex items-center justify-between gap-2">
          <span className="truncate rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] text-white backdrop-blur-md">
            {project.tag}
          </span>
          <span className="shrink-0 text-xs tabular-nums text-white/70">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Main icon */}
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md sm:h-16 sm:w-16">
            <MainIcon size={28} style={{ color: mainColor }} />
          </span>
        </div>

        {/* Title */}
        <h3
          className="break-words text-lg font-semibold leading-tight text-white min-[400px]:text-xl sm:text-[22px]"
          style={serif}
        >
          {project.title}
        </h3>

        {/* Details */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: isActive ? "1fr" : "0fr",
            transition: "grid-template-rows 600ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className={`pt-3 transition-opacity duration-500 ${
                isActive ? "opacity-100 delay-200" : "opacity-0"
              }`}
            >
              <p className="text-xs leading-5 text-white/75" style={clamp3}>
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((name) => {
                  const [Icon, color] = tech(name);
                  return (
                    <span
                      key={name}
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-black/30 px-2 py-1 text-[10px] text-white/90 backdrop-blur-md"
                    >
                      <Icon size={11} style={{ color }} />
                      {name}
                    </span>
                  );
                })}
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={isActive ? 0 : -1}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-3 py-2.5 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:py-2"
                >
                  <SiGithub size={13} />
                  Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2.5 text-xs font-medium text-black transition-colors hover:bg-neutral-200 sm:py-2"
                  >
                    Live
                    <LuArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

/* ================= PROJECT SECTION ================= */

const Projects = () => {
  const [category, setCategory] = useState(CATEGORY_KEYS[0]);
  const [active, setActive] = useState(0);
  const [snapping, setSnapping] = useState([]);

  const drag = useRef({ startX: null, moved: false });

  const { items, blurb } = projects[category];
  const total = items.length;

  const switchCategory = (key) => {
    if (key === category) return;
    setCategory(key);
    setActive(0);
    setSnapping([]);
  };

  const goTo = (target) => {
    const next = ((target % total) + total) % total;
    if (next === active) return;

    const wrapped = items
      .map((_, i) => i)
      .filter(
        (i) =>
          Math.abs(offsetOf(i, next, total) - offsetOf(i, active, total)) >
          total / 2
      );

    setActive(next);

    if (wrapped.length) {
      setSnapping(wrapped);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setSnapping([]))
      );
    }
  };

  /* Drag / swipe */
  const onPointerDown = (e) => {
    drag.current = { startX: e.clientX, moved: false };
  };

  const onPointerMove = (e) => {
    const { startX } = drag.current;
    if (startX !== null && Math.abs(e.clientX - startX) > 8) {
      drag.current.moved = true;
    }
  };

  const onPointerUp = (e) => {
    const { startX } = drag.current;
    if (startX === null) return;

    const dx = e.clientX - startX;
    if (Math.abs(dx) > 50) goTo(active + (dx < 0 ? 1 : -1));

    drag.current.startX = null;
  };

  /* Keyboard */
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") goTo(active + 1);
    if (e.key === "ArrowLeft") goTo(active - 1);
  };

  return (
    <section
      id="projects"
      className="overflow-x-hidden bg-[#050505] px-2 pb-2 text-white min-[400px]:px-3 min-[400px]:pb-3 sm:px-6 sm:pb-6"
    >
      <style>{`
        @keyframes stageIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stage-in { animation: stageIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        @media (prefers-reduced-motion: reduce) {
          .stage-in { animation: none; }
        }

        /* Card size per screen: wide cards on phones so the active one fills the view,
           smaller relative to the viewport on tablets and desktops.
           --ch is taller than before so the stack chips and buttons fit on narrow cards. */
        .proj-stage {
          --cw: clamp(240px, 70vw, 300px);
          --ch: max(calc(var(--cw) * 1.5), 470px);
        }
        @media (min-width: 640px) {
          .proj-stage { --cw: clamp(250px, 48vw, 300px); }
        }
        @media (min-width: 1024px) {
          .proj-stage { --cw: clamp(260px, 26vw, 320px); }
        }
      `}</style>

      {/* Marble filters */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <filter id="marbleA" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="140" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="marbleB" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.011 0.007" numOctaves="2" seed="21" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="160" xChannelSelector="G" yChannelSelector="R" />
        </filter>
      </svg>

      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] py-10 sm:rounded-[28px] sm:py-16 lg:py-20 2xl:max-w-[1600px]">

        {/* Header */}
        <div className="flex flex-col gap-6 px-5 min-[400px]:px-7 sm:gap-8 sm:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-16">
          <FadeUp>
            <h2
              className="max-w-2xl text-3xl font-semibold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]"
              style={serif}
            >
              Things I've built
              <br />
              <span className="text-neutral-500">and shipped</span>
            </h2>

            <p
              key={category}
              className="stage-in mt-5 max-w-md text-sm leading-6 text-neutral-400 sm:mt-6 sm:text-[15px] sm:leading-7"
            >
              {blurb}
            </p>
          </FadeUp>

          {/* Category switch */}
          <FadeUp delay={0.1}>
            <div
              role="tablist"
              aria-label="Project type"
              className="relative grid w-full max-w-xs grid-cols-2 rounded-full border border-white/10 bg-white/[0.04] p-1"
            >
              <span
                aria-hidden
                className="absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform:
                    category === CATEGORY_KEYS[0]
                      ? "translateX(0)"
                      : "translateX(100%)",
                }}
              />

              {CATEGORY_KEYS.map((key) => {
                const selected = key === category;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => switchCategory(key)}
                    className={`relative z-10 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium transition-colors duration-300 ${
                      selected ? "text-black" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {projects[key].label}
                    <span
                      className={`text-[11px] ${
                        selected ? "text-black/50" : "text-neutral-600"
                      }`}
                    >
                      {projects[key].items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeUp>
        </div>

        {/* 3D stage */}
        <div key={category} className="stage-in proj-stage mt-8 sm:mt-10 lg:mt-14">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={`${projects[category].label} projects`}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={() => (drag.current.startX = null)}
            onPointerCancel={() => (drag.current.startX = null)}
            className="relative select-none outline-none [touch-action:pan-y] focus-visible:ring-1 focus-visible:ring-white/30"
            style={{
              height: "calc(var(--ch) + 40px)",
              perspective: "1600px",
            }}
          >
            {items.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                total={total}
                off={offsetOf(i, active, total)}
                snapping={snapping.includes(i)}
                onSelect={() => {
                  if (drag.current.moved) return;
                  goTo(i);
                }}
              />
            ))}

            {/* Edge fades (narrower on phones so the side cards still peek in) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#0c0c0c] to-transparent sm:w-24 lg:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#0c0c0c] to-transparent sm:w-24 lg:w-32" />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-center gap-4 sm:mt-8 sm:gap-6">
          <button
            onClick={() => goTo(active - 1)}
            aria-label="Previous project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <LuArrowLeft size={18} />
          </button>

          {/* Indicators: taller hit area (h-6) around the thin dot for touch */}
          <div className="flex items-center gap-1">
            {items.map((project, i) => (
              <button
                key={project.id}
                onClick={() => goTo(i)}
                aria-label={`Show ${project.title}`}
                aria-current={i === active}
                className="group flex h-6 items-center px-0.5"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    i === active
                      ? "w-8 bg-white"
                      : "w-1.5 bg-white/25 group-hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => goTo(active + 1)}
            aria-label="Next project"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <LuArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;