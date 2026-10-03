import FadeUp from "../components/FadeUp";
import resume from "../assets/Nafees-Khan-DevOps-Resume.pdf";
import {
  LuBriefcase,
  LuCalendar,
  LuMapPin,
  LuHammer,
  LuServerCog,
  LuBug,
  LuAward,
  LuGraduationCap,
  LuTrophy,
  LuUsers,
  LuArrowUpRight,
  LuBadgeCheck,
} from "react-icons/lu";

const serif = { fontFamily: "'Lora', 'Playfair Display', Georgia, serif" };

/* ------------------------------------------------------------------
   Add another entry here if you take on a new role — the timeline
   renders however many are in this array.
------------------------------------------------------------------- */
const experience = [
  {
    role: "DevOps Intern",
    company: "Qspiders (JSpiders)",
    location: "Bangalore",
    period: "Feb 2026 – Jul 2026",
    current: false,
    points: [
      {
        icon: LuHammer,
        text: "Built Jenkins CI/CD pipelines automating build, test, and deployment stages, improving consistency across environments.",
      },
      {
        icon: LuServerCog,
        text: "Provisioned multi-AZ AWS infrastructure with Terraform (EC2, ALB, Auto Scaling) to support reliable, scalable deployments under fluctuating workloads.",
      },
      {
        icon: LuBug,
        text: "Troubleshot Linux, Docker, Kubernetes, and AWS issues through hands-on infrastructure and deployment exercises.",
      },
    ],
  },
];

const certifications = [
  {
    icon: LuBadgeCheck,
    title: "DevOps Internship Program Certificate",
    issuer: "Qspiders (JSpiders) · Jul 2026",
    detail:
      "Linux, Git/GitHub, Maven, Jenkins, Docker, Kubernetes, Ansible, Terraform, AWS.",
  },
  {
    icon: LuAward,
    title: "Full-Stack Web Development Certification",
    issuer: "2025 · 120+ hours",
    detail: "MERN stack, RESTful API design, and deployment pipelines.",
  },
];

const achievements = [
  {
    icon: LuTrophy,
    title: "1st Place, Intra-College Technical Round",
    detail: "Ranked #1 of 150+ participants in coding and problem solving.",
  },
  {
    icon: LuUsers,
    title: "Sambhram 2025 website team",
    detail:
      "Part of a Sambhram 2025 website team that built the official event site, handling registration and promotion with a focus on page load performance.",
  },
];

const education = {
  degree: "B.E. Computer Science & Engineering",
  school: "Shree Devi Institute of Technology, Mangalore",
  period: "2022 – 2026",
  detail: "CGPA: 8.4 / 10",
};

const TimelineItem = ({ item, isLast, delay }) => (
  <FadeUp delay={delay}>
    <div className="relative pb-8 pl-10 last:pb-0 sm:pb-10 sm:pl-12">
      {/* Rail (offsets follow the node size: 32px on phones, 40px from sm) */}
      {!isLast && (
        <span className="absolute left-[15px] top-8 h-[calc(100%-1.5rem)] w-px bg-white/10 sm:left-[19px] sm:top-10 sm:h-[calc(100%-2rem)]" />
      )}

      {/* Node */}
      <span className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#0c0c0c] text-white sm:h-10 sm:w-10">
        <LuBriefcase size={15} />
      </span>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/20 min-[400px]:p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div className="min-w-0">
            <h3 className="text-base font-medium text-white min-[400px]:text-lg sm:text-xl">
              {item.role}
            </h3>
            <p className="mt-0.5 text-sm text-neutral-400">{item.company}</p>
          </div>

          {item.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Current
            </span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-neutral-500">
          <span className="inline-flex items-center gap-1.5">
            <LuCalendar size={13} />
            {item.period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LuMapPin size={13} />
            {item.location}
          </span>
        </div>

        <ul className="mt-4 space-y-3 sm:mt-5">
          {item.points.map((point, i) => {
            const Icon = point.icon;
            return (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-neutral-300">
                  <Icon size={13} />
                </span>
                <span className="min-w-0 break-words text-[13px] leading-6 text-neutral-300 sm:text-sm">
                  {point.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </FadeUp>
);

const SideCard = ({ heading, entries, delay }) => (
  <FadeUp delay={delay}>
    <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <p className="text-xs text-neutral-400">{heading}</p>

      <div className="mt-4 space-y-5">
        {entries.map((entry, i) => {
          const Icon = entry.icon;
          return (
            <div key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white">
                <Icon size={15} />
              </span>
              <div className="min-w-0">
                <p className="break-words text-sm font-medium leading-5 text-white">
                  {entry.title}
                </p>
                {entry.issuer && (
                  <p className="mt-0.5 text-xs text-neutral-500">
                    {entry.issuer}
                  </p>
                )}
                <p className="mt-1 text-xs leading-5 text-neutral-400">
                  {entry.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </FadeUp>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="overflow-x-hidden bg-[#050505] px-2 pb-2 text-white min-[400px]:px-3 min-[400px]:pb-3 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#0c0c0c] px-4 py-10 min-[400px]:px-5 sm:rounded-[28px] sm:px-10 sm:py-16 lg:px-16 lg:py-20 2xl:max-w-[1600px]">

        {/* Header */}
        <FadeUp>
          <h2
            className="max-w-2xl text-3xl font-semibold leading-[1.1] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]"
            style={serif}
          >
            Where I've
            <br />
            <span className="text-neutral-500">worked & learned</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-400 sm:mt-6 sm:text-[15px] sm:leading-7">
            Hands-on experience shipping infrastructure and pipelines,
            alongside the certifications and milestones along the way.
          </p>
        </FadeUp>

        {/* Body: stacked below lg, timeline + side column from lg */}
        <div className="mt-8 grid gap-10 sm:mt-12 sm:gap-12 lg:mt-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16">

          {/* Timeline */}
          <div className="min-w-0">
            {experience.map((item, i) => (
              <TimelineItem
                key={item.company}
                item={item}
                isLast={i === experience.length - 1}
                delay={0.1 + i * 0.1}
              />
            ))}
          </div>

          {/* Side: one column on phones, two on tablets, one again in the lg side column */}
          <div className="grid min-w-0 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-1">
            <FadeUp delay={0.15}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <p className="text-xs text-neutral-400">Education</p>

                <div className="mt-4 flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white">
                    <LuGraduationCap size={15} />
                  </span>
                  <div className="min-w-0">
                    <p className="break-words text-sm font-medium leading-5 text-white">
                      {education.degree}
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      {education.school}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-neutral-400">
                      {education.period} · {education.detail}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <SideCard
              heading="Certifications"
              entries={certifications}
              delay={0.2}
            />

            <SideCard
              heading="Achievements"
              entries={achievements}
              delay={0.25}
            />

            <FadeUp delay={0.3}>
              <a
                href={resume}
                download
                className="flex h-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-medium text-white transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
              >
                Download full resume
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                  <LuArrowUpRight size={14} />
                </span>
              </a>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;