"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>© {year} Martin Echavarria. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/mechavarria1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/echasketchh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
