import { Shield, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 bg-white dark:bg-[#0F1115] relative transition-colors duration-200"
    >
      <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-[#3858E9]">
            <Shield className="w-6 h-6" />
          </div>

          <div className="w-24 h-24 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-[#F6F7F7] dark:bg-[#16191F] flex items-center justify-center">
            <span className="text-2xl font-bold font-mono text-zinc-700 dark:text-zinc-300">
              BB
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-[#F6F7F7] dark:bg-[#16191F] text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Available for security research &amp; development
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1E1E1E] dark:text-white leading-[1.1]">
            Brian Bundi
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-700 dark:text-zinc-300 tracking-tight">
            Software Development student focused on cybersecurity
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Building secure digital solutions, breaking code ethically, and exploring the frontiers of cybersecurity and systems engineering.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-[#3858E9] hover:bg-[#2545D8] text-white font-medium text-sm transition-colors text-center"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-lg bg-white hover:bg-zinc-50 text-[#1E1E1E] border border-zinc-300 dark:bg-[#16191F] dark:hover:bg-zinc-800 dark:text-white dark:border-zinc-700 font-medium text-sm transition-colors text-center"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 text-zinc-400 dark:text-zinc-500 hover:text-[#1E1E1E] dark:hover:text-white transition-colors">
        <Link href="/#about" aria-label="Scroll to About section">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
