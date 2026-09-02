"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const stages = [
  {
    label: "Tender",
    title: "Review requirements and access scope.",
    body: "Review scope, programme and site constraints before practical access advice is priced.",
  },
  {
    label: "Design",
    title: "Coordinate scaffold and temporary works requirements.",
    body: "Confirm scaffold strategy, temporary works requirements and sequencing before site start.",
  },
  {
    label: "Erection",
    title: "Mobilise and install safely around programme.",
    body: "Install around site logistics and live programme constraints.",
  },
  {
    label: "Control",
    title: "Inspect, adapt and coordinate through the works.",
    body: "Maintain scaffold records, inspections and practical site coordination.",
  },
];

export function ProcessTimeline() {
  const [scrollActive, setScrollActive] = useState(0);
  const [intentActive, setIntentActive] = useState<number | null>(null);
  const refs = useRef<Array<HTMLElement | null>>([]);
  const active = intentActive ?? scrollActive;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setScrollActive(Number(visible.target.getAttribute("data-stage") || 0));
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    refs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="timeline-shell"
      style={{ "--process-progress": `${(active + 1) / stages.length}` } as CSSProperties}
      onMouseLeave={() => setIntentActive(null)}
    >
      <div className="timeline-track" aria-hidden="true">
        <span />
      </div>
      <div className="timeline-steps">
        {stages.map((stage, index) => (
          <button
            type="button"
            className={active === index ? "timeline-step active" : "timeline-step"}
            data-stage={index}
            key={stage.label}
            onFocus={() => setIntentActive(index)}
            onBlur={() => setIntentActive(null)}
            onMouseEnter={() => setIntentActive(index)}
            ref={(node) => {
              refs.current[index] = node;
            }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{stage.label}</h3>
            <h4>{stage.title}</h4>
            <p>{stage.body}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
