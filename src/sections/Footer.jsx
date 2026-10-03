import { LuArrowUp, LuMail, LuMapPin, LuArrowUpRight } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

const serif = { fontFamily: "'Lora', 'Playfair Display', Georgia, serif" };

/* ---- Edit your details here ---- */
const EMAIL = "nafeeskhan7627@gmail.com";
const LOCATION = "India · Open to remote";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skill" },
  { label: "Projects", href: "/project" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Nafees-khan-29",
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nafeeskhan29/",
    // Simple Icons ships no dedicated LinkedIn export under this build,
    // so this is drawn as a raw path instead of an imported icon.
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
];

const scrollToTop = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-x-hidden bg-[#050505] px-2 pb-2 text-white min-[400px]:px-3 min-[400px]:pb-3 sm:px-6 sm:pb-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] sm:rounded-[28px] 2xl:max-w-[1600px]">

        {/* Soft light from the top, same as Contact */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 0%, rgba(255,255,255,0.08), transparent 70%)",
          }}
        />

        <div className="relative px-5 pb-8 pt-10 min-[400px]:px-7 sm:px-10 sm:pb-10 sm:pt-16 lg:px-16">

          {/* CTA row */}
          <div className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:gap-8 sm:pb-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs text-neutral-400">Have something in mind?</p>
              <h2
                className="mt-3 text-2xl font-semibold leading-[1.1] tracking-tight min-[400px]:text-3xl sm:text-4xl lg:text-5xl"
                style={serif}
              >
                Let's build something
                <br />
                <span className="text-neutral-500">reliable, together.</span>
              </h2>
            </div>

            {/* Full-width on the smallest phones, content-width from 400px up */}
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-neutral-200 min-[400px]:w-fit"
            >
              Get in touch
              <LuArrowUpRight size={16} />
            </a>
          </div>

          {/* Links grid: 1 column → 2 (sm, identity spans the top row) → 3 (lg) */}
          <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr_1.4fr]">

            {/* Identity */}
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-semibold tracking-[0.25em] text-white">
                NAFEES<span className="text-neutral-500">.</span>KHAN
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-400">
                DevOps Engineer & Full Stack Developer, building and
                automating cloud infrastructure.
              </p>

              <div className="mt-5 flex items-center gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-neutral-300 transition-colors duration-300 hover:border-white/25 hover:bg-white hover:text-black sm:h-9 sm:w-9"
                    >
                      {Icon ? (
                        <Icon size={15} />
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d={s.path} />
                        </svg>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Navigate
              </p>
              {/* py-1 on each link gives a larger tap target without changing the look */}
              <ul className="mt-3 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block py-1 text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Contact
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  {/* break-all lets the long email wrap instead of overflowing narrow columns */}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-start gap-2 break-all text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                  >
                    <LuMail size={14} className="mt-1 shrink-0" />
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-400">
                  <LuMapPin size={14} className="mt-1 shrink-0" />
                  {LOCATION}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col-reverse items-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
            <p className="text-center text-xs text-neutral-500 sm:text-left">
              © {year} Nafees Khan. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-neutral-300 transition-colors duration-300 hover:border-white/25 hover:bg-white hover:text-black sm:h-9 sm:w-9"
            >
              <LuArrowUp size={15} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;