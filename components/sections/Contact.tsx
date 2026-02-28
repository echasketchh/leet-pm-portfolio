"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // TODO: Connect to your preferred form backend
    // e.g. Resend, Formspree, EmailJS, a Next.js API route, etc.
    console.log("Form data:", data);

    // Simulate async submission
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          {/* Left: copy */}
          <div className="space-y-6">
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-xs font-medium tracking-widest text-[var(--muted)] uppercase">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Let&apos;s talk
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[var(--muted)] leading-relaxed max-w-sm"
            >
              [Short invite — whether it&apos;s a project, opportunity, or just
              a conversation, reach out and I&apos;ll get back to you.]
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3 pt-2">
              <p className="text-sm text-[var(--muted)]">
                Or reach me directly at{" "}
                <a
                  href="mailto:[your@email.com]"
                  className="text-[var(--foreground)] underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  [your@email.com]
                </a>
              </p>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div variants={fadeUp}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <CheckCircle size={40} className="text-[var(--foreground)]" />
                <div>
                  <p className="font-medium text-[var(--foreground)]">
                    Message sent!
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-1">
                    I&apos;ll be in touch soon.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)] transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[var(--foreground)]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--foreground)] transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[var(--foreground)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--foreground)] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-[var(--foreground)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="What's on your mind?"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-full hover:opacity-80 disabled:opacity-40 transition-opacity"
                >
                  {isSubmitting ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
