import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-[#0F1115] transition-colors duration-200"
    >
      <div className="flex flex-col md:flex-row gap-16">
        <div className="flex-1 space-y-8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3858E9]">
              Reach Out
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1E] dark:text-white mt-1 mb-4">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed">
              I&apos;m always open to discussing new security projects, bug hunting, collaboration opportunities, or technical inquiries.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-lg flex items-center justify-center text-[#3858E9] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Email
                </div>
                <div className="font-medium text-[#1E1E1E] dark:text-white">
                  bundibrian36@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-lg flex items-center justify-center text-[#3858E9] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Phone
                </div>
                <div className="font-medium text-[#1E1E1E] dark:text-white">
                  +254 116 996 557
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/brian-bundi-745845354/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-[#F6F7F7] dark:bg-[#16191F] flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-[#3858E9] hover:border-[#3858E9] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/RebornB34"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-[#F6F7F7] dark:bg-[#16191F] flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-[#3858E9] hover:border-[#3858E9] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex-1 w-full bg-[#F6F7F7] dark:bg-[#16191F] p-8 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors">
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
            <input type="hidden" name="access_key" value="cc69284c-5971-4fb5-b7a3-5de7d21aa95d" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white dark:bg-[#0F1115] border border-zinc-300 dark:border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-[#1E1E1E] dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#3858E9] focus:border-[#3858E9] transition-colors"
                  placeholder="Alex Mercer"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white dark:bg-[#0F1115] border border-zinc-300 dark:border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-[#1E1E1E] dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#3858E9] focus:border-[#3858E9] transition-colors"
                  placeholder="alex@domain.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full bg-white dark:bg-[#0F1115] border border-zinc-300 dark:border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-[#1E1E1E] dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#3858E9] focus:border-[#3858E9] transition-colors"
                placeholder="Collaboration / Security Query"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                required
                className="w-full bg-white dark:bg-[#0F1115] border border-zinc-300 dark:border-zinc-700 rounded-lg px-3.5 py-2.5 text-sm text-[#1E1E1E] dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#3858E9] focus:border-[#3858E9] transition-colors resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#3858E9] hover:bg-[#2545D8] text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
