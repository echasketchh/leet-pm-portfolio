"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const TIMELINE_ITEMS = [
  {
    year: "2025",
    side: "right" as const,
    tags: ["HealthTech", "Fractional PM"],
    title: "Head of Product (Fractional)",
    company: "Arena Labs",
    description:
      "Joined early-stage B2B healthtech startup as fractional Head of Product. Built a data-backed case for a full product rebuild, increased activation 30% through onboarding improvements, improved NPS by 50% via a metrics framework, and avoided low-ROI investment through rapid experimentation.",
  },
  {
    year: "2024",
    side: "left" as const,
    tags: ["HealthTech", "Consulting"],
    title: "Senior Product Manager (Contract)",
    company: "FortyAU · Navigating Care, 121 Health, Bloom Healthcare",
    description:
      "Led product strategy across multiple HealthTech engagements. Retained Navigating Care's largest customer (40–50% of ARR) through high-impact workflow improvements. Owned 0→1 delivery of a telehealth platform enabling care coordination for 220K+ patients. Avoided $5M+ in engineering investment through a structured third-party pilot.",
  },
  {
    year: "2022",
    side: "right" as const,
    tags: ["FinTech", "Platform"],
    title: "Product Manager",
    company: "The Savings Group",
    description:
      "Owned product strategy for a FinTech auto financing marketplace. Increased conversion 4% and boosted revenue by $6M through data quality improvements. Reduced OPEX by $1M by migrating document generation in-house and increased per-transaction profit 2.5% via automated tax calculations.",
  },
  {
    year: "2021",
    side: "left" as const,
    tags: ["Enterprise", "Consulting"],
    title: "Product Management Consultant",
    company: "Propeller Consulting · Ball Corporation, GAP",
    description:
      "Led enterprise digital transformation initiatives. Saved 2,900+ hours annually by automating financial planning for a $45M budget at Ball Corporation. Led identity resolution platform selection, forecasting $20M in potential revenue uplift for GAP.",
  },
  {
    year: "2019",
    side: "right" as const,
    tags: ["Enterprise", "0→1"],
    title: "Product Management Consultant",
    company: "Accenture · Hewlett Packard Enterprise",
    description:
      "Delivered 0→1 digital case management and PSA platforms deployed to 3,000+ employees. Reduced ticket submission time 50% and saved $2.7M annually through a sales forecasting platform.",
  },
  {
    year: "2016",
    side: "left" as const,
    tags: ["Manufacturing", "Analytics"],
    title: "Product Optimization Analyst",
    company: "BASF",
    description:
      "Supported product strategy and cost optimization across engineering and commercial teams. Saved $500K by identifying production bottlenecks and launched 2 new products contributing to a 10% increase in market share.",
  },
  {
    year: "Education",
    side: "right" as const,
    tags: ["MBA", "Engineering"],
    title: "MBA, Business Administration & Entrepreneurship",
    company: "University of Colorado · BS Chemical Engineering, University of Pittsburgh",
    description:
      "Certified Scrum Product Owner. Reforge Mastering Product Management alumnus.",
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
            {/* Vertical center line — desktop only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-[var(--border)]" />

            <div className="space-y-10">
              {TIMELINE_ITEMS.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof TIMELINE_ITEMS)[number];
  index: number;
}) {
  const isLeft = item.side === "left";

  return (
    <motion.div
      variants={fadeUp}
      className="relative md:grid md:grid-cols-2 md:gap-8 items-start"
    >
      {/* LEFT SIDE — card when side=left, empty otherwise */}
      <div className={`hidden md:flex ${isLeft ? "justify-end pr-10" : ""}`}>
        {isLeft && <Card item={item} />}
      </div>

      {/* CENTER — year badge */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
        <div className="w-12 h-12 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
          <span className="text-xs font-semibold text-[var(--foreground)] text-center leading-tight px-1">
            {item.year}
          </span>
        </div>
      </div>

      {/* RIGHT SIDE — card when side=right, empty otherwise */}
      <div className={`hidden md:flex ${!isLeft ? "justify-start pl-10" : ""}`}>
        {!isLeft && <Card item={item} />}
      </div>

      {/* MOBILE — always stacked, year + card */}
      <div className="md:hidden flex gap-4">
        {/* Vertical line + dot */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 shrink-0 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center">
            <span className="text-[10px] font-semibold text-[var(--foreground)] text-center leading-tight px-1">
              {item.year}
            </span>
          </div>
          {index < TIMELINE_ITEMS.length - 1 && (
            <div className="w-px flex-1 min-h-[1.5rem] bg-[var(--border)] mt-2" />
          )}
        </div>
        <div className="pb-8 flex-1">
          <Card item={item} />
        </div>
      </div>
    </motion.div>
  );
}

function Card({ item }: { item: (typeof TIMELINE_ITEMS)[number] }) {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 space-y-3">
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-xs rounded-md bg-[var(--border)] text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-[var(--foreground)] leading-snug">
        {item.title}
      </h3>

      {/* Company */}
      <p className="text-xs text-[var(--muted)]">{item.company}</p>

      {/* Divider */}
      <div className="border-t border-[var(--border)]" />

      {/* Description */}
      <p className="text-sm text-[var(--muted)] leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
