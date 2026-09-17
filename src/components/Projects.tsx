import { FolderOpen } from "lucide-react";
import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative bg-white" aria-label="Projects">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="section-subheading">03 — Projects</p>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-sm text-slate-400 flex items-center gap-2">
          <FolderOpen className="w-4 h-4" />
          Project links will be added as they become available.
        </p>
      </div>
    </section>
  );
}
