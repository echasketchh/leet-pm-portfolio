"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
                <span className="block">Martin Echavarria</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[var(--muted)] leading-relaxed max-w-md"
            >
              Product leader with 8+ years of experience across HealthTech, FinTech, and SaaS. I specialize in 0→1 builds, data-driven roadmaps, and cross-functional execution — from early-stage startups to large enterprises. Outside of work, I&apos;m usually biking, hiking, or organizing outdoor adventures.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {["Product Manager", "HealthTech", "0→1 Builder", "Fractional PM"].map((tag) => (
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

          {/* Photo */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative">
              <Image
                src="/headshot.jpg"
                alt="Martin Echavarria"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
