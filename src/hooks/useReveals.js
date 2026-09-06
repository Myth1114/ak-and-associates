import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useReveal = (scopeRef) => {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const revealGroups = gsap.utils.toArray("[data-reveal-group]");

      revealGroups.forEach((group) => {
        const items = gsap.utils.toArray(
          group.querySelectorAll("[data-reveal]")
        );

        if (!items.length) {
          return;
        }

        const isImmediate = group.hasAttribute("data-reveal-immediate");

        /* ========================================
           HERO / IMMEDIATE GROUP
        ======================================== */

        if (isImmediate) {
          gsap.from(items, {
            opacity: 0,
            y: 28,

            duration: 0.75,
            ease: "power2.out",

            stagger: 0.1,
          });

          return;
        }

        /* ========================================
           SCROLL-BASED ELEMENTS
        ======================================== */

        items.forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 28,

            duration: 0.7,
            ease: "power2.out",

            scrollTrigger: {
              trigger: item,

              start: "top 80%",

              once: true,
            },
          });
        });
      });
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  }, [scopeRef]);

  return null;
};

export default useReveal;
