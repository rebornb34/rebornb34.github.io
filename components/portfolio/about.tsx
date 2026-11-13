import { ShieldCheck, Code, Users } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#F6F7F7] dark:bg-[#16191F] border-t border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3858E9]">
              Background &amp; Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1E] dark:text-white leading-tight">
              My Journey in Cybersecurity &amp; Software Development
            </h2>
          </div>

          <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base sm:text-lg">
            <p>
              As a Software Development student focused on cybersecurity, I&apos;m passionate about protecting digital assets and building secure, resilient systems. My journey began with a fascination for how computers interact at a low level and evolved into a dedicated mission to safeguard applications and infrastructure.
            </p>
            <p>
              I combine foundational software engineering with hands-on practice: participating in CTF competitions, analyzing protocols, hardening web applications, and writing technical walkthroughs. Every challenge is an opportunity to strengthen defensive depth.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Network Security",
              "Penetration Testing",
              "Incident Response",
              "Risk Assessment",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#0F1115] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-4 w-full">
          <div className="bg-white dark:bg-[#0F1115] p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-[#3858E9] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] dark:text-white">
                Security First
              </h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Approaching every architecture with security as an immutable foundation, preventing vulnerabilities before they reach production.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0F1115] p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-[#3858E9] shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] dark:text-white">
                Technical Rigor
              </h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Writing clean, efficient code and continually studying modern security standards, cryptography, and defensive mechanics.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0F1115] p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-[#3858E9] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] dark:text-white">
                Community Driven
              </h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Publishing detailed write-ups, collaborating on open tooling, and contributing to the global cybersecurity community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
