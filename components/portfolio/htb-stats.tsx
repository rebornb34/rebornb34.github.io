import { Target, Trophy, Crosshair, Award } from "lucide-react";

async function getHTBStats() {
  const token = process.env.HTB_API_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch("https://labs.hackthebox.com/api/v4/user/profile/basic/2252974", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.profile;
  } catch (error) {
    return null;
  }
}

export async function HTBStats() {
  const buildDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const profile = await getHTBStats();
  
  if (!profile) return null;

  const stats = [
    { label: "Rank", value: profile.rank || "Unranked", icon: Trophy, color: "text-amber-600 dark:text-amber-400" },
    { label: "System Owns", value: profile.system_owns !== undefined ? profile.system_owns : 0, icon: Target, color: "text-[#3858E9] dark:text-blue-400" },
    { label: "User Owns", value: profile.user_owns !== undefined ? profile.user_owns : 0, icon: Crosshair, color: "text-teal-600 dark:text-teal-400" },
    { label: "Respect", value: profile.respects !== undefined ? profile.respects : 0, icon: Award, color: "text-emerald-600 dark:text-emerald-400" },
  ];

  return (
    <div className="bg-[#F6F7F7] dark:bg-[#16191F] border border-zinc-200 dark:border-zinc-800 p-8 rounded-lg mb-12 text-left transition-colors duration-200">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-[#3858E9]">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#1E1E1E] dark:text-white tracking-tight">
            Hack The Box Activity
          </h3>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
            Synced verification: {buildDate}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-[#0F1115] p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-sans font-medium">
                {stat.label}
              </span>
            </div>
            <div className="text-2xl font-bold text-[#1E1E1E] dark:text-white">
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
