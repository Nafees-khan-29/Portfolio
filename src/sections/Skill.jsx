import { useEffect, useRef, useState } from "react";
import FadeUp from "../components/FadeUp";

import {
  SiLinux, SiGnubash, SiGit, SiGithub, SiDocker, SiKubernetes, SiHelm,
  SiTerraform, SiAnsible, SiJenkins, SiGithubactions, SiArgo, SiApachemaven,
  SiPrometheus, SiGrafana, SiReact, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiNodedotjs, SiExpress, SiPython, SiC, SiMongodb, SiMysql,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbLambda, TbSql } from "react-icons/tb";
import {
  LuWorkflow, LuCloud, LuLayoutDashboard, LuServerCog, LuCode, LuDatabase,
  LuServer, LuBellRing, LuNetwork, LuSplit, LuMaximize, LuArchive, LuRoute,
  LuKeyRound, LuLock, LuCloudLightning, LuActivity, LuSend, LuDatabaseZap,
  LuWebhook,
} from "react-icons/lu";

const serif = { fontFamily: "'Lora', 'Playfair Display', Georgia, serif" };

/* name, icon, brand color (tuned to read on a dark background) */
const s = (name, icon, color) => ({ name, icon, color });

// AWS category colours
const AWS = {
  orange: "#ff9900",
  compute: "#ed7100",
  network: "#8c4fff",
  storage: "#7aa116",
  db: "#527fff",
  security: "#dd344c",
  mgmt: "#e7157b",
};

const skillCategories = [
  {
    title: "DevOps",
    description: "Automation, containers, orchestration & CI/CD",
    icon: LuWorkflow,
    skills: [
      s("Linux", SiLinux, "#fcc624"),
      s("Shell Scripting", SiGnubash, "#4eaa25"),
      s("Git", SiGit, "#f05032"),
      s("GitHub", SiGithub, "#ffffff"),
      s("Docker", SiDocker, "#2496ed"),
      s("Kubernetes", SiKubernetes, "#4f83f1"),
      s("Helm", SiHelm, "#3fa9e8"),
      s("Terraform", SiTerraform, "#a26ee0"),
      s("Ansible", SiAnsible, "#ee3b3b"),
      s("Jenkins", SiJenkins, "#d24939"),
      s("GitHub Actions", SiGithubactions, "#2088ff"),
      s("Argo CD", SiArgo, "#ef7b4d"),
      s("Maven", SiApachemaven, "#e0304f"),
      s("Prometheus", SiPrometheus, "#e6522c"),
      s("Grafana", SiGrafana, "#f46800"),
      s("Alertmanager", LuBellRing, "#e6522c"),
    ],
  },
  {
    title: "Cloud",
    description: "Cloud infrastructure & AWS services",
    icon: LuCloud,
    skills: [
      s("AWS", FaAws, AWS.orange),
      s("EC2", LuServer, AWS.compute),
      s("VPC", LuNetwork, AWS.network),
      s("ALB", LuSplit, AWS.network),
      s("Auto Scaling", LuMaximize, AWS.compute),
      s("EKS", SiKubernetes, AWS.compute),
      s("S3", LuArchive, AWS.storage),
      s("RDS", LuDatabase, AWS.db),
      s("Route 53", LuRoute, AWS.network),
      s("IAM", LuKeyRound, AWS.security),
      s("Secrets Manager", LuLock, AWS.security),
      s("CloudFront", LuCloudLightning, AWS.network),
      s("CloudWatch", LuActivity, AWS.mgmt),
      s("SNS", LuSend, AWS.mgmt),
      s("Lambda", TbLambda, AWS.compute),
      s("DynamoDB", LuDatabaseZap, AWS.db),
    ],
  },
  {
    title: "Frontend",
    description: "Modern responsive web interfaces",
    icon: LuLayoutDashboard,
    skills: [
      s("React.js", SiReact, "#61dafb"),
      s("JavaScript", SiJavascript, "#f7df1e"),
      s("HTML5", SiHtml5, "#e34f26"),
      s("CSS3", SiCss, "#3d9be9"),
      s("Tailwind CSS", SiTailwindcss, "#06b6d4"),
    ],
  },
  {
    title: "Backend",
    description: "Server-side development & APIs",
    icon: LuServerCog,
    skills: [
      s("Node.js", SiNodedotjs, "#68a063"),
      s("Express.js", SiExpress, "#ffffff"),
      s("RESTful APIs", LuWebhook, "#a78bfa"),
    ],
  },
  {
    title: "Programming",
    description: "Programming & scripting",
    icon: LuCode,
    skills: [
      s("Python", SiPython, "#4b8bbe"),
      s("Java", FaJava, "#f89820"),
      s("C", SiC, "#a8b9cc"),
    ],
  },
  {
    title: "Database",
    description: "Data storage & management",
    icon: LuDatabase,
    skills: [
      s("MongoDB", SiMongodb, "#47a248"),
      s("MySQL", SiMysql, "#4a9fd0"),
      s("SQL", TbSql, "#38bdf8"),
    ],
  },
];

/* Fires once when the element scrolls into view */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
};

const SkillCard = ({ category, className = "", delay = 0 }) => {
  // Tall cards on phones can be taller than the viewport, so use a lower threshold
  const [ref, visible] = useInView(0.05);
  const Icon = category.icon;

  // Cursor-following spotlight
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={`group/card relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/20 min-[400px]:p-5 sm:p-6 ${
        visible ? "card-in" : "opacity-0"
      } ${className}`}
    >
      {/* Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.07), transparent 65%)",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition-transform duration-500 group-hover/card:rotate-[-6deg] group-hover/card:scale-105 sm:h-11 sm:w-11">
              <Icon size={20} />
            </span>

            <div className="min-w-0">
              <h3 className="text-base font-medium text-white sm:text-lg">
                {category.title}
              </h3>
              <p className="mt-0.5 text-[13px] leading-5 text-neutral-500 sm:text-sm sm:leading-6">
                {category.description}
              </p>
            </div>
          </div>

          <span className="mt-1 shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-neutral-400">
            {category.skills.length}
          </span>
        </div>

        {/* Skill chips */}
        <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
          {category.skills.map((skill, i) => {
            const SkillIcon = skill.icon;
            return (
              <span
                key={skill.name}
                style={{
                  "--c": skill.color,
                  animationDelay: `${delay + 200 + i * 40}ms`,
                }}
                className={`group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-neutral-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--c)_50%,transparent)] hover:bg-[color-mix(in_srgb,var(--c)_12%,transparent)] hover:text-white hover:shadow-[0_10px_28px_-14px_var(--c)] sm:gap-2 sm:px-3 sm:py-2 sm:text-[13px] ${
                  visible ? "chip-in" : "opacity-0"
                }`}
              >
                <SkillIcon
                  size={16}
                  style={{ color: skill.color }}
                  className="shrink-0 transition-transform duration-300 group-hover:scale-125"
                />
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [devops, cloud, frontend, backend, programming, database] =
    skillCategories;

  return (
    <section
      id="skills"
      className="overflow-x-hidden bg-[#050505] px-2 pb-2 text-white min-[400px]:px-3 min-[400px]:pb-3 sm:px-6 sm:pb-6"
    >
      {/* Entrance animations (transform-free after they finish, so hovers still work) */}
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chipIn {
          from { opacity: 0; transform: translateY(10px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .card-in { animation: cardIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
        .chip-in { animation: chipIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards; }
        @media (prefers-reduced-motion: reduce) {
          .card-in, .chip-in { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0c0c0c] px-4 py-10 min-[400px]:px-5 sm:rounded-[28px] sm:px-10 sm:py-16 lg:px-16 lg:py-20 2xl:max-w-[1600px]">

        {/* Header */}
        <FadeUp>
          <h2
            className="max-w-2xl text-3xl font-semibold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]"
            style={serif}
          >
            Technologies
            <br />
            <span className="text-neutral-500">I work with</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-400 sm:mt-6 sm:text-[15px] sm:leading-7">
            Tools I use across software development, cloud infrastructure,
            automation, CI/CD, and deployment.
          </p>
        </FadeUp>

        {/* Bento grid: 1 column → 2 (md) → 6-column bento (lg) */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          <SkillCard category={devops} className="md:col-span-2 lg:col-span-4" />

          <div className="flex min-w-0 flex-col gap-3 sm:gap-4 md:col-span-2 md:flex-row lg:col-span-2 lg:flex-col">
            <SkillCard category={frontend} delay={100} className="flex-1" />
            <SkillCard category={backend} delay={200} className="flex-1" />
          </div>

          <SkillCard category={cloud} delay={100} className="md:col-span-2 lg:col-span-4" />

          <div className="flex min-w-0 flex-col gap-3 sm:gap-4 md:col-span-2 md:flex-row lg:col-span-2 lg:flex-col">
            <SkillCard category={programming} delay={100} className="flex-1" />
            <SkillCard category={database} delay={200} className="flex-1" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;