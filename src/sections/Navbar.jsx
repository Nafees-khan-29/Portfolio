import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-5v-6h-5v6h-5A1.5 1.5 0 0 1 3 19.5v-9Z" />
      </svg>
    ),
  },

  {
    name: "Projects",
    path: "/project",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h3" />
      </svg>
    ),
  },

  {
    name: "Contact",
    path: "/contact",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" />
      </svg>
    ),
  },
];

const BottomNav = () => {
  return (
    <nav
      aria-label="Main navigation"
      // bottom offset respects the iPhone home-indicator area (needs viewport-fit=cover in index.html)
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[380px] -translate-x-1/2 min-[400px]:w-[calc(100%-2.5rem)] sm:bottom-[max(1rem,env(safe-area-inset-bottom))] md:max-w-[420px]"
    >
      <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/[0.025] p-1 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl min-[400px]:p-1.5">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            // icon-only when inactive, so every link needs a text name for screen readers
            aria-label={item.name}
            className={({ isActive }) =>
              `flex h-11 min-w-0 flex-1 items-center justify-center rounded-full transition-all duration-300 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50 ${
                isActive
                  ? "mx-0.5 bg-white/[0.08] text-white"
                  : "text-white/50 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex min-w-0 items-center gap-1.5 min-[400px]:gap-2">
                <span
                  className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
                    isActive ? "scale-105" : ""
                  }`}
                >
                  {item.icon}
                </span>

                {isActive && (
                  <span className="truncate text-[10px] font-medium tracking-wide sm:text-xs">
                    {item.name}
                  </span>
                )}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;