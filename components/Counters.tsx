"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const facts = [
  {
    value: 4,
    label: "Towns served",
    detail: "Windhoek, Ondangwa, Oshakati, Ongwediva",
  },
  {
    value: 6,
    label: "Service groups",
    detail: "Published on the services page",
  },
  {
    value: 2,
    label: "Direct phone lines",
    detail: "081 267 2044 and 081 781 7312",
  },
];

export function Counters() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState(facts.map(() => 0));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let frame = 0;
    const start = performance.now();
    if (reduce) {
      frame = requestAnimationFrame(() => setValues(facts.map((fact) => fact.value)));
      return () => cancelAnimationFrame(frame);
    }
    const duration = 900;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValues(facts.map((fact) => Math.round(fact.value * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduce, visible]);

  return (
    <section className="stats" ref={ref} aria-label="Facts published on this site">
      <div className="wrap">
        <ul>
          {facts.map((fact, index) => (
            <li key={fact.label}>
              <strong>{values[index]}</strong>
              <span>{fact.label}</span>
              <small>{fact.detail}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
