"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle hash scrolling for static exports
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    if (mounted) {
      setTimeout(handleHashScroll, 500);
    }

    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, [mounted]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-[#0F1115] border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-[#1E1E1E] dark:text-white flex items-center gap-2 transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#3858E9]" />
              <span>RebornB34</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-6 lg:gap-8">
              <Link
                href="/#home"
                className="text-zinc-600 hover:text-[#1E1E1E] dark:text-zinc-400 dark:hover:text-white transition-colors py-1 font-medium text-sm hover:text-[#3858E9] dark:hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-zinc-600 hover:text-[#1E1E1E] dark:text-zinc-400 dark:hover:text-white transition-colors py-1 font-medium text-sm hover:text-[#3858E9] dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="text-zinc-600 hover:text-[#1E1E1E] dark:text-zinc-400 dark:hover:text-white transition-colors py-1 font-medium text-sm hover:text-[#3858E9] dark:hover:text-white"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="text-zinc-600 hover:text-[#1E1E1E] dark:text-zinc-400 dark:hover:text-white transition-colors py-1 font-medium text-sm hover:text-[#3858E9] dark:hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-zinc-600 hover:text-[#1E1E1E] dark:text-zinc-400 dark:hover:text-white transition-colors py-1 font-medium text-sm hover:text-[#3858E9] dark:hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/#contact"
                className="text-zinc-600 hover:text-[#1E1E1E] dark:text-zinc-400 dark:hover:text-white transition-colors py-1 font-medium text-sm hover:text-[#3858E9] dark:hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#16191F] transition-colors flex items-center justify-center w-9 h-9"
              aria-label="Toggle Theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <div className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 rounded-lg font-mono text-xs text-zinc-700 dark:text-zinc-300 bg-[#F6F7F7] dark:bg-[#16191F]">
              {mounted ? time : "\u00A0"}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#16191F] transition-colors flex items-center justify-center w-9 h-9"
              aria-label="Toggle Theme"
            >
              {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#16191F] transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0F1115] border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200">
          <div className="px-3 pt-2 pb-3 space-y-1">
            <Link
              href="/#home"
              onClick={() => setIsOpen(false)}
              className="text-zinc-700 hover:text-[#1E1E1E] dark:text-zinc-300 dark:hover:text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-zinc-100 dark:hover:bg-[#16191F]"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="text-zinc-700 hover:text-[#1E1E1E] dark:text-zinc-300 dark:hover:text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-zinc-100 dark:hover:bg-[#16191F]"
            >
              About
            </Link>
            <Link
              href="/#skills"
              onClick={() => setIsOpen(false)}
              className="text-zinc-700 hover:text-[#1E1E1E] dark:text-zinc-300 dark:hover:text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-zinc-100 dark:hover:bg-[#16191F]"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="text-zinc-700 hover:text-[#1E1E1E] dark:text-zinc-300 dark:hover:text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-zinc-100 dark:hover:bg-[#16191F]"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="text-zinc-700 hover:text-[#1E1E1E] dark:text-zinc-300 dark:hover:text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-zinc-100 dark:hover:bg-[#16191F]"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="text-zinc-700 hover:text-[#1E1E1E] dark:text-zinc-300 dark:hover:text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-zinc-100 dark:hover:bg-[#16191F]"
            >
              Contact
            </Link>
            <div className="text-zinc-500 dark:text-zinc-400 px-3 py-2 font-mono text-xs border-t border-zinc-200 dark:border-zinc-800 mt-2">
              {mounted ? time : "\u00A0"}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
