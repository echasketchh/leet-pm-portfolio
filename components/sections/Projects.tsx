"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

// Placeholder project cards — replace with your real projects
const PROJECTS = [
  {
    title: "[Project Name]",
    category: "[Category / Type]",
    description:
      "[One or two sentences describing what this project is, the problem it solves, and your role in it.]",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    href: "#",
  },
  {
    title: "[Project Name]",
    category: "[Category / Type]",
    description:
      "[One or two sentences describing what this project is, the problem it solves, and your role in it.]",
    tags: ["Tag 1", "Tag 2"],
    href: "#",
  },
  {
    title: "[Project Name]",
    category: "[Category / Type]",
    description:
      "[One or two sentences describing what this project is, the problem it solves, and your role in it.]",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    href: "#",
  },
  {
    title: "[Project Name]",
    category: "[Category / Type]",
    description:
      "[One or two sentences describing what this project is, the problem it solves, and your role in it.]",
    tags: ["Tag 1", "Tag 2"],
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
