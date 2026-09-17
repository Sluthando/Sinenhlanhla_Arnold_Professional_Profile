import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <article className="card card-hover p-6 md:p-8 flex flex-col h-full group">
      {/* Project number */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-5xl font-extrabold text-slate-200 group-hover:text-blue-200 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Technologies &amp; Tools
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Skills Demonstrated
        </p>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          aria-label={`View project: ${project.title}`}
        >
          <ExternalLink className="w-4 h-4" />
          View Project
        </a>
        {project.hasGithub && project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            aria-label={`View GitHub repository: ${project.title}`}
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
