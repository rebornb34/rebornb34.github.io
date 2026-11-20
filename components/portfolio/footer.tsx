"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0F1115] transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p className="text-zinc-500 text-xs sm:text-sm">
            &copy; {currentYear} RebornB34
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RebornB34"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#3858E9] dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-bundi-745845354/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-[#3858E9] dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:bundibrian36@gmail.com"
            className="text-zinc-500 hover:text-[#3858E9] dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
