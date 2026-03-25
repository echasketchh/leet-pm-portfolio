"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>© {year} [Your Name]. All rights reserved.</p>
        <div className="flex gap-6">
          {/* Add your social links here */}
          <a
            href="#"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Twitter / X
          </a>
          <a
            href="#"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
