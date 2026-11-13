import Link from "next/link";
import { getSortedPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export function RecentBlogs() {
  const posts = getSortedPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      className="py-24 bg-[#F6F7F7] dark:bg-[#16191F] border-t border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3858E9]">
              Publications &amp; Notes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1E] dark:text-white mt-1 mb-2">
              Latest Security Write-ups
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-base">
              Hands-on vulnerability breakdowns, CTF walk-throughs, and technical research notes.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#0F1115] text-[#1E1E1E] dark:text-white rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-850 font-medium text-sm transition-colors"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group block h-full"
            >
              <div className="bg-white dark:bg-[#0F1115] border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg h-full flex flex-col hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                <time className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-3 block">
                  {post.date}
                </time>
                <h3 className="text-lg font-bold text-[#1E1E1E] dark:text-white mb-3 group-hover:text-[#3858E9] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-1 line-clamp-3 mb-6">
                  {post.description}
                </p>
                <div className="text-[#3858E9] text-sm font-medium flex items-center gap-1 mt-auto">
                  <span>Read Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 w-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#0F1115] text-[#1E1E1E] dark:text-white rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-850 font-medium text-sm transition-colors"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
