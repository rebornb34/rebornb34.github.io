import { getPostBySlug, getSortedPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { CodeBlock } from "@/components/portfolio/code-block";

import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";

export async function generateStaticParams() {
  const posts = getSortedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const mdxComponents = {
  pre: ({ children, ...props }: any) => {
    if (children && children.type === "code") {
      const codeText = children.props.children || "";
      const className = children.props.className || "";
      const lang = className.replace("language-", "");
      
      let highlightedHtml = "";
      if (lang && Prism.languages[lang]) {
        highlightedHtml = Prism.highlight(codeText, Prism.languages[lang], lang);
      } else {
        highlightedHtml = Prism.highlight(
          codeText,
          Prism.languages.markup || Prism.languages.html,
          "markup"
        );
      }

      return (
        <CodeBlock
          rawCode={codeText}
          language={lang || "text"}
          highlightedHtml={highlightedHtml}
        />
      );
    }
    
    return <pre {...props}>{children}</pre>;
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen font-sans flex flex-col justify-between bg-white dark:bg-[#0F1115] transition-colors duration-200">
      <Navbar />
      <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full flex-1">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-[#3858E9] dark:hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Posts</span>
        </Link>

        <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-[#3858E9] mb-3">
            <span className="font-semibold uppercase tracking-wider">Research Write-up</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1E1E1E] dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-3">
            <time>{post.date}</time>
            <span>•</span>
            <span>brian@labs</span>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-4">
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
            {post.tags && post.tags.length > 0 && post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#1E1E1E] dark:prose-headings:text-white prose-a:text-[#3858E9] hover:prose-a:underline prose-pre:bg-transparent prose-pre:p-0 prose-pre:border-none prose-p:text-zinc-700 dark:prose-p:text-zinc-300">
          <MDXRemote 
            source={post.content} 
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </article>
      <Footer />
    </div>
  );
}
