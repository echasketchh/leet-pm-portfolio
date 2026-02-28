"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

// Placeholder timeline items — replace with your real history
const TIMELINE_ITEMS = [
  {
    year: "20XX",
    role: "[Role Title]",
    company: "[Company or Organization]",
    description: "[Brief description of what you did and the impact you made.]",
  },
  {
    year: "20XX",
    role: "[Role Title]",
    company: "[Company or Organization]",
    description: "[Brief description of what you did and the impact you made.]",
  },
  {
    year: "20XX",
    role: "[Role Title]",
    company: "[Company or Organization]",
    description: "[Brief description of what you did and the impact you made.]",
  },
  {
    year: "20XX",
    role: "[Education or Milestone]",
    company: "[Institution or Context]",
    description: "[Brief description of this chapter in your journey.]",
  },
];

export function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 space-y-3">
            <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
              My Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Where I&apos;ve been
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-[7.5rem] top-0 bottom-0 w-px bg-[var(--border)]" />

            <div className="space-y-12">
              {TIMELINE_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative pl-8 md:pl-0 md:grid md:grid-cols-[7.5rem_1fr] md:gap-12"
                >
                  {/* Year */}
                  <div className="md:text-right md:pt-1">
                    <span className="text-sm font-medium text-[var(--muted)]">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative pl-8 md:pl-12 pb-2">
                    {/* Dot */}
                    <span className="absolute left-0 md:-left-[0.4rem] top-[0.35rem] w-2 h-2 rounded-full bg-[var(--foreground)] ring-4 ring-[var(--background)]" />

                    <h3 className="font-medium text-[var(--foreground)] leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-sm text-[var(--muted)] mt-0.5 mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
