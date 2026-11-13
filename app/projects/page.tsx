import { Navbar } from "@/components/portfolio/navbar";
import { Projects } from "@/components/portfolio/projects";
import { Footer } from "@/components/portfolio/footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen font-sans transition-colors duration-200 flex flex-col justify-between">
      <Navbar />
      <div className="pt-16 flex-1">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
