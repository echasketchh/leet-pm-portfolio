"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const TIMELINE_ITEMS = [
  {
    year: "2025",
    role: "Head of Product (Fractional)",
    company: "Arena Labs",
    description:
      "Joined early-stage B2B healthtech startup as fractional Head of Product. Built a data-backed case for a full product rebuild, increased activation 30% through onboarding improvements, improved NPS by 50% via a metrics framework, and avoided low-ROI investment through rapid experimentation.",
  },
  {
    year: "2024",
    role: "Senior Product Manager (Contract)",
    company: "FortyAU · Notable clients: Navigating Care, 121 Health, Bloom Healthcare",
    description:
      "Led product strategy across multiple HealthTech engagements. Retained Navigating Care's largest customer (40–50% of ARR) through high-impact workflow improvements. Owned 0→1 delivery of a telehealth platform enabling secure care coordination for 220K+ patients. Avoided $5M+ in engineering investment through a structured third-party pilot.",
  },
  {
    year: "2022",
    role: "Product Manager",
    company: "The Savings Group",
    description:
      "Owned product strategy for a FinTech auto financing marketplace. Increased conversion 4% and boosted revenue by $6M through data quality improvements. Reduced OPEX by $1M by migrating document generation in-house and increased per-transaction profit 2.5% via automated tax calculations.",
  },
  {
    year: "2021",
    role: "Product Management Consultant",
    company: "Propeller Consulting · Clients: Ball Corporation, GAP",
    description:
      "Led enterprise digital transformation initiatives. Saved 2,900+ hours annually by automating financial planning for a $45M budget at Ball Corporation. Led identity resolution platform selection, forecasting $20M in potential revenue uplift for GAP.",
  },
  {
    year: "2019",
    role: "Product Management Consultant",
    company: "Accenture · Client: Hewlett Packard Enterprise",
    description:
      "Delivered 0→1 digital case management and PSA platforms deployed to 3,000+ employees. Reduced ticket submission time 50% and saved $2.7M annually through a sales forecasting platform.",
  },
  {
    year: "2016",
    role: "Product Optimization Analyst",
    company: "BASF",
    description:
      "Supported product strategy and cost optimization across engineering and commercial teams. Saved $500K by identifying production bottlenecks and launched 2 new products contributing to a 10% increase in market share.",
  },
  {
    year: "Education",
    role: "MBA, Business Administration & Entrepreneurship",
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
