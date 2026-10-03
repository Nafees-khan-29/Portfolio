import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Scrolls to the top of the page whenever the route changes.
   If the URL has a #hash (e.g. /#projects) it scrolls to that section instead. */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }

    // "instant" overrides any `scroll-behavior: smooth` set in your CSS,
    // so the new page opens at the top without scrolling through the old one
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;