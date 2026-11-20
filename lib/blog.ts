import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags?: string[];
  category?: string;
  difficulty?: string;
  readingTime?: string;
}

export function getSortedPosts(): Omit<BlogPost, 'content'>[] {
  if (!fs.existsSync(blogDirectory)) return [];
  
  const fileNames = fs.readdirSync(blogDirectory);
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || "Unknown Date",
      description: matterResult.data.description || "",
      tags: matterResult.data.tags || [],
      category: matterResult.data.category || "",
      difficulty: matterResult.data.difficulty || "",
      readingTime: Math.max(1, Math.ceil(matterResult.content.split(/\s+/).length / 200)) + " min read",
    };
  });

  return allPosts.sort((a, b) => {
    if (a.date < b.date) return 1;
    return -1;
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      content: matterResult.content,
      tags: matterResult.data.tags || [],
      category: matterResult.data.category || "",
      difficulty: matterResult.data.difficulty || "",
      readingTime: Math.max(1, Math.ceil(matterResult.content.split(/\s+/).length / 200)) + " min read",
    };
  } catch (e) {
    return null;
  }
}
