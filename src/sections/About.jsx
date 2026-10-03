import FadeUp from "../components/FadeUp";
import image from "../assets/about-image.png";

// Change these two to re-theme the section
const ACCENT_BG = "bg-[#f2b824]";
const ACCENT_TEXT = "text-[#f2b824]";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Nafees-khan-29",
    path: "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nafeeskhan29/",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="overflow-x-hidden bg-[#050505] px-2 pb-2 text-white min-[400px]:px-3 min-[400px]:pb-3 sm:px-6 sm:pb-6"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] sm:rounded-[28px] 2xl:max-w-[1600px]">

        {/* Top bar: wordmark */}
        <div className="flex items-center justify-between px-5 pt-6 min-[400px]:px-7 sm:px-12 sm:pt-8 lg:px-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-white sm:text-sm">
            NAFEES<span className={ACCENT_TEXT}>.</span>KHAN
          </p>
        </div>

        {/* Vertical section label (desktop) */}
        <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="flex -rotate-90 items-center gap-3 whitespace-nowrap">
            <span className={`h-px w-6 ${ACCENT_BG}`} />
            <span className="text-[11px] tracking-[0.2em] text-white">about</span>
          </div>
        </div>

        {/* Main grid: single column below lg, two columns from lg up */}
        <div className="grid items-center gap-10 px-5 pb-12 pt-8 min-[400px]:px-7 sm:gap-12 sm:px-12 sm:pb-16 sm:pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-20 lg:pb-24 lg:pt-14 xl:gap-20 xl:px-24">

          {/* Portrait with offset light panel */}
          <FadeUp>
            <div className="relative mx-auto w-full max-w-[260px] min-[400px]:max-w-[300px] sm:max-w-[360px] lg:mx-0 lg:max-w-[400px]">
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm bg-[#c9cbef] sm:translate-x-4 sm:translate-y-4" />
              {/* Slight zoom from the top-centre pushes only the bottom edge
                  (where the watermark is) out of view, so the subject stays centred */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#0a0a0a] ring-1 ring-white/10">
                <img
                  src={image}
                  alt="Nafees Khan"
                  className="h-full w-full origin-top scale-[1.08] object-cover object-top"
                />
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <div className="min-w-0 max-w-2xl lg:max-w-xl">
            <FadeUp delay={0.1}>
              <span className={`block h-[2px] w-16 ${ACCENT_BG}`} />

              <h2 className="mt-5 text-3xl font-bold tracking-tight min-[400px]:text-4xl sm:mt-6 sm:text-5xl">
                Nafees Khan
              </h2>

              <p className="mt-2 text-sm text-neutral-400">
                DevOps Engineer / Full Stack Developer
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 text-sm leading-6 text-neutral-300 sm:mt-8 sm:text-[15px] sm:leading-7">
                I build, deploy, and maintain modern applications across the
                development and cloud lifecycle. I write React, Node.js, and
                Express, and use AWS, Docker, Kubernetes, and Terraform to run
                them on scalable environments.
              </p>

              <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-[15px] sm:leading-7">
                My work spans CI/CD automation, containerization, cloud
                infrastructure, and Kubernetes orchestration: pipelines with
                GitHub Actions, Jenkins, and Argo CD, AWS infrastructure with
                Terraform, and containerized apps on Kubernetes and EKS.
              </p>

              <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-[15px] sm:leading-7">
                B.E. in Computer Science & Engineering, Shree Devi Institute of
                Technology, Mangalore, 2026.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                {["DevOps", "Cloud", "CI/CD", "Kubernetes", "Automation", "Full Stack"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-neutral-300 sm:px-3.5"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              {/* Padded links give icons a comfortable tap target; -ml keeps the first icon aligned with the text */}
              <div className="-ml-2.5 mt-5 flex items-center gap-1 sm:mt-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className={`${ACCENT_TEXT} p-2.5 transition-opacity duration-300 hover:opacity-70`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
                <a
                  href="mailto:your@email.com"
                  aria-label="Email"
                  className={`${ACCENT_TEXT} p-2.5 transition-opacity duration-300 hover:opacity-70`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </a>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;