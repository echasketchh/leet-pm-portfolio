"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          {/* Text side */}
          <div className="space-y-8">
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
                About
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                {/* Name placeholder */}
                <span className="block">[Your Name]</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[var(--muted)] leading-relaxed max-w-md"
            >
              {/* Bio placeholder */}
              [Short bio — who you are, what you do, and what you care about.]
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {/* Role tags placeholder */}
              {["Product Manager", "Builder", "Consultant"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-sm border border-[var(--border)] rounded-full text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4">
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-full hover:opacity-80 transition-opacity"
              >
                Get in touch
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 text-sm font-medium rounded-full border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
              >
                See my work
              </button>
            </motion.div>
          </div>

          {/* Visual side — avatar placeholder */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-[var(--border)] flex items-center justify-center text-[var(--muted)] text-sm">
              {/* Replace with <Image> when you have a photo */}
              Photo
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
