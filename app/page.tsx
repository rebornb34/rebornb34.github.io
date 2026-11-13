import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { RecentBlogs } from "@/components/portfolio/recent-blogs";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans transition-colors duration-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <RecentBlogs />
      <Contact />
      <Footer />
    </main>
  );
}
