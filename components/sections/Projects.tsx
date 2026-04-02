"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const PROJECTS = [
  {
    title: "Arena Strive — Clinician Burnout Platform",
    category: "HealthTech · 0→1 Rebuild",
    description:
      "Led product strategy and a full rebuild of Arena Strive, a mobile app combining wearable data and 1:1 coaching to reduce clinician burnout. Shipped onboarding overhaul (+30% activation), implemented a metrics framework (+50% NPS), and designed a Mode 1/Mode 2 experience informed by research across 180+ clinical users.",
    tags: ["Product Strategy", "Mobile", "HealthTech", "User Research"],
    href: "#",
  },
  {
    title: "Telehealth Platform — \"Slack for Healthcare\"",
    category: "HealthTech · 0→1 Build",
    description:
      "Owned end-to-end product strategy and delivery of a HIPAA-compliant telehealth and secure messaging platform for 121 Health. Enabled care coordination for 220K+ patients by translating clinician insights into a prioritized roadmap and shipping a 0→1 product from discovery to launch.",
    tags: ["0→1", "Telehealth", "Care Coordination", "HIPAA"],
    href: "#",
  },
  {
    title: "Navigating Care — Oncology Workflow Improvements",
    category: "HealthTech · Enterprise SaaS",
    description:
      "Retained Navigating Care's largest customer (40–50% of ARR) by leading a suite of high-impact workflow improvements: batch attachments for bulk patient messaging, provider reassignment, message previews, and performance enhancements. Also avoided $5M+ in engineering investment through a structured third-party pilot.",
    tags: ["Oncology", "Stakeholder Management", "SaaS", "Cost Avoidance"],
    href: "#",
  },
  {
    title: "Auto Financing Marketplace — Data & Platform",
    category: "FinTech · Platform Optimization",
    description:
      "At The Savings Group, improved vehicle and credit data quality to increase conversion 4% and boost revenue by $6M. Migrated document generation in-house (saving $1M OPEX) and implemented automated tax calculations that increased per-transaction profit by 2.5%.",
    tags: ["FinTech", "Data Quality", "Experimentation", "Revenue Growth"],
    href: "#",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--card)]">
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
              Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Things I&apos;ve built
            </h2>
          </motion.div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof PROJECTS)[number];
}) {
  return (
    <motion.a
      variants={fadeUp}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--foreground)] transition-all duration-300 hover:shadow-sm"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-xs text-[var(--muted)] mb-1">{project.category}</p>
          <h3 className="font-semibold text-[var(--foreground)] text-lg leading-snug">
            {project.title}
          </h3>
        </div>
        <span className="shrink-0 mt-1 text-[var(--muted)] group-hover:text-[var(--foreground)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
          <ArrowUpRight size={18} />
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--muted)] leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs rounded-md bg-[var(--border)] text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
