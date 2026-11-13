import { HTBStats } from "./htb-stats";

export function Skills() {
  const experienceYears = 1;
  const stats = [
    { label: "Projects Completed", value: "3+" },
    { label: "Certifications Earned", value: "2+" },
    {
      label: Number(experienceYears) === 1 ? "Year of Experience" : "Years of Experience",
      value: String(experienceYears),
    },
  ];

  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        "React / Next.js",
        "Node.js",
        "Tailwind CSS",
        "TypeScript",
        "REST APIs",
      ],
    },
    {
      title: "Network Security",
      skills: [
        "Firewalls",
        "VPN Configurations",
        "Network Monitoring",
        "Packet Analysis",
        "IDS / IPS",
      ],
    },
    {
      title: "Ethical Hacking",
      skills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Exploitation",
        "OSINT",
        "CTF Challenges",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-[#0F1115] transition-colors duration-200"
    >
      <div className="text-center mb-16">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3858E9]">
          Capabilities &amp; Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1E] dark:text-white mt-2 mb-4">
          Skills &amp; Technical Expertise
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          A structured breakdown of my technical proficiencies, development toolchains, and hands-on security practices.
        </p>

        <div className="mt-12">
          <HTBStats />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#F6F7F7] dark:bg-[#16191F] border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg text-center transition-colors"
          >
            <div className="text-4xl font-bold text-[#1E1E1E] dark:text-white tracking-tight mb-2">
              {stat.value}
            </div>
            <div className="text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider text-xs">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-[#F6F7F7] dark:bg-[#16191F] border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 transition-colors"
          >
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3858E9] mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white dark:bg-[#0F1115] border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
