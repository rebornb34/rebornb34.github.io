import Link from "next/link";
import { getSortedPosts } from "@/lib/blog";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogIndex() {
  const posts = getSortedPosts();

  return (
    <div className="min-h-screen font-sans flex flex-col justify-between bg-white dark:bg-[#0F1115] transition-colors duration-200">
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full flex-1">
        <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-[#3858E9] dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>cd .. (Return Home)</span>
          </Link>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3858E9] block mb-2">
            Archive &amp; Research
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1E1E1E] dark:text-white mb-3">
            Security Write-ups &amp; Notes
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Personal repository for CTF solutions, vulnerability research, and technical explorations.
          </p>
        </div>

        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="p-8 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-center text-zinc-500 font-mono text-sm">
              No write-ups published yet.
            </div>
          ) : (
            posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
                <article className="p-6 rounded-lg bg-[#F6F7F7] dark:bg-[#16191F] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-2">
                    <span>{post.date}</span>
                    {post.readingTime && (
                      <>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {post.category && (
                      <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#3858E9]/10 text-[#3858E9]">
                        {post.category}
                      </span>
                    )}
                    {post.difficulty && (
                      <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                        {post.difficulty}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-[#1E1E1E] dark:text-white group-hover:text-[#3858E9] transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-3">
                    {post.description}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="text-[#3858E9] font-medium text-sm inline-flex items-center gap-1.5">
                    <span>Read Write-up</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
