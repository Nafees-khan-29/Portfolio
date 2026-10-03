import FadeUp from "../components/FadeUp";
import image from "../assets/portfolio-image.png";
import resume from "../assets/Nafees-Khan-DevOps-Resume.pdf";
// import Projects from  "../sections/Project";

const serif = { fontFamily: "'Lora', 'Playfair Display', Georgia, serif" };

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen overflow-x-hidden bg-[#050505] px-2 py-2 text-white min-[400px]:px-3 min-[400px]:py-3 sm:px-6 sm:py-6"
    >
      {/* Serif headline font (or move this <link> into index.html) */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&display=swap');`}</style>

      {/* Rounded hero card. dvh keeps the height correct when mobile browser bars show/hide */}
      <div className="relative mx-auto flex min-h-[calc(100dvh-1rem)] max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] min-[400px]:min-h-[calc(100dvh-1.5rem)] sm:min-h-[calc(100dvh-3rem)] sm:rounded-[28px] 2xl:max-w-[1600px]">

        {/* =========================
            RIGHT PORTRAIT PANEL
        ========================== */}
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[56%] lg:rounded-tl-[28px]">
          <img
            src={image}
            alt="Nafees Khan"
            className="h-full w-full origin-top-left scale-[1.12] object-cover object-[65%_top] opacity-40 md:opacity-50 lg:object-[60%_top] lg:opacity-100"
          />

          {/* Fade from the left so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/50 to-transparent lg:via-[#0c0c0c]/20" />

          {/* Fade the bottom of the photo into the card colour (also covers the bottom-right corner) */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/50 to-transparent" />
        </div>

        {/* =========================
            LEFT CONTENT
            md:pb-48 reserves room for the glass card; lg+ has it beside the text instead
        ========================== */}
        <div className="relative z-10 flex w-full items-center px-5 py-12 min-[400px]:px-7 sm:px-12 sm:py-16 md:pb-48 lg:w-1/2 lg:px-12 lg:pb-16 xl:px-16">
          <div className="w-full max-w-xl">

            {/* Compact availability badge for screens where the glass card is hidden */}
            <FadeUp delay={0.05}>
              <a
                href="/contact"
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs text-neutral-300 backdrop-blur-md md:hidden"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Open to work
              </a>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1
                className="text-4xl font-semibold leading-[1.05] tracking-tight text-white min-[420px]:text-5xl sm:text-6xl lg:text-5xl xl:text-[60px] 2xl:text-[64px]"
                style={serif}
              >
                DevOps Engineer
                <br />
                <span className="text-neutral-500">& Full Stack Dev</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-5 max-w-md text-sm leading-6 text-neutral-400 sm:mt-6 sm:text-[15px] sm:leading-7">
                I'm Nafees Khan. I build and automate cloud infrastructure,
                ship reliable CI/CD pipelines, orchestrate containers, and
                develop modern web applications.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              {/* Full-width stacked buttons on very small screens, inline from 400px up */}
              <div className="mt-7 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
                <a
                  href="#projects"
                  className="rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-black transition-colors duration-300 hover:bg-neutral-200 sm:py-2.5"
                >
                  View my work
                </a>

                <a
                  href={resume}
                  download
                  className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-neutral-200 transition-colors duration-300 hover:border-white/30 hover:bg-white/10 sm:py-2.5"
                >
                  Download resume
                </a>
              </div>
            </FadeUp>

          </div>
        </div>

        {/* =========================
            GLASS CARD (bottom right, md and up)
        ========================== */}
        <FadeUp
          delay={0.4}
          className="absolute bottom-6 right-6 z-20 hidden w-[300px] md:block lg:bottom-8 lg:right-8 lg:w-[340px]"
        >
          <div className="flex items-end justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl">
            <div>
              <p className="text-[11px] text-neutral-400">Open to work</p>
              <p className="mt-1 text-base font-medium text-white">
                Available for projects
              </p>
              <p className="mt-2 text-xs leading-5 text-neutral-400">
                Share a few details, and I'll get back with a clear direction.
              </p>
            </div>

            <a
              href="/contact"
              aria-label="Get in touch"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-black transition-transform duration-300 hover:scale-105"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
};

export default Hero;