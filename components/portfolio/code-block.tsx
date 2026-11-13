"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  rawCode: string;
  language: string;
  highlightedHtml: string;
}

export function CodeBlock({ rawCode, language, highlightedHtml }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const getLanguageName = (lang: string) => {
    if (!lang) return "CODE";
    const mapping: { [key: string]: string } = {
      js: "JAVASCRIPT",
      javascript: "JAVASCRIPT",
      ts: "TYPESCRIPT",
      typescript: "TYPESCRIPT",
      py: "PYTHON",
      python: "PYTHON",
      bash: "BASH",
      sh: "SHELL",
      json: "JSON",
      html: "HTML",
      css: "CSS",
      md: "MARKDOWN",
      mdx: "MDX",
      yaml: "YAML",
      yml: "YAML",
    };
    return mapping[lang.toLowerCase()] || lang.toUpperCase();
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-[#F6F7F7] dark:bg-[#16191F] transition-colors duration-200">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-100 dark:bg-[#0F1115] border-b border-zinc-200 dark:border-zinc-800 select-none">
        <span className="font-mono text-xs font-semibold text-zinc-600 dark:text-zinc-400 tracking-wider">
          {getLanguageName(language)}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#16191F] hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="overflow-hidden">
        <pre className="!px-4 !pt-4 !pb-3 !m-0 font-mono text-xs md:text-sm leading-relaxed text-[#1E1E1E] dark:text-zinc-100 bg-[#F6F7F7] dark:bg-[#16191F] overflow-x-auto whitespace-pre transition-colors">
          <code
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            className={`language-${language}`}
          />
        </pre>
      </div>
    </div>
  );
}
