import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  /*
   * Prevent the browser from trying to restore the previous
   * scroll position during React Router navigation.
   */
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  /*
   * Handle route changes before the browser paints.
   */
  useLayoutEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace("#", ""));

      requestAnimationFrame(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });

      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    // Additional fallback for browser inconsistencies.
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
