"use client";

import { useEffect } from "react";

export function SiteInteractions() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateHeader = () => {
      document.body.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (reduceMotion) {
      return () => window.removeEventListener("scroll", updateHeader);
    }

    document.body.classList.add("motion-ready");
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .reveal-image, .rule-reveal, .proof-strip div, .capability-module, .planning-list article"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.18 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      window.removeEventListener("scroll", updateHeader);
      observer.disconnect();
      document.body.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
