import { Code, Clock, Sparkles, HardDrive, Shield } from "lucide-react";

const PROJECTS = [
  { 
    name: "Cyber Dashboard UI", 
    desc: "A responsive React-based security operations center interface with real-time alerting features.",
    icon: Shield,
    tags: ["React", "TailwindCSS", "WebSocket"]
  },
  { 
    name: "Packet Sniffer CLI", 
    desc: "A high-performance Rust command-line tool for analyzing deep network packets.",
    icon: HardDrive,
    tags: ["Rust", "Networking", "CLI"]
  },
  { 
    name: "JWT Cracker", 
    desc: "An optimization-focused Python script to brute-force weak JWT secrets.",
    icon: Code,
    tags: ["Python", "Security", "Cryptography"]
  }
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-[#0F1115] transition-colors duration-200"
    >
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3858E9]">
          Portfolio &amp; Prototypes
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1E] dark:text-white mt-1 mb-4 inline-flex items-center justify-center gap-3">
          <Sparkles className="w-6 h-6 text-[#3858E9]" />
          Featured Projects
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          Sneak peek at what I am currently engineering. These projects are actively developed and documented.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          return (
            <div 
              key={index} 
              className="group relative bg-[#F6F7F7] dark:bg-[#16191F] p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-200 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-white dark:bg-[#0F1115] rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-[#3858E9]">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/40 text-[#3858E9] dark:text-blue-400 border border-blue-200 dark:border-blue-900/60 text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>In Development</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1E1E1E] dark:text-white mb-2 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-white dark:bg-[#0F1115] border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
