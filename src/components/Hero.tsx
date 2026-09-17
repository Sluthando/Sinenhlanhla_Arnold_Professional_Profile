import { ArrowRight, Mail, Cpu, Zap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg bg-slate-50"
      aria-label="Home"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-200/15 rounded-full blur-[100px]" />
        {/* Technical line accents */}
        <svg className="absolute top-0 right-0 w-full h-full opacity-[0.06]" aria-hidden="true">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40 L30 40 L30 20 L60 20 L60 50 L80 50" stroke="#2563eb" strokeWidth="1" fill="none" />
              <circle cx="30" cy="40" r="2" fill="#2563eb" />
              <circle cx="60" cy="20" r="2" fill="#2563eb" />
              <circle cx="60" cy="50" r="2" fill="#2563eb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-50 border border-blue-200 rounded-full animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-blue-700 font-medium">Open to opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up">
            {personalInfo.name.toUpperCase()}
          </h1>

          {/* Roles */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            {personalInfo.roles.map((role) => (
              <span
                key={role}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm md:text-base text-slate-700 font-medium shadow-sm"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Intro */}
          <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            {personalInfo.intro}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <a href="#projects" onClick={handleScrollToProjects} className="btn-primary group">
              View My Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" onClick={handleScrollToContact} className="btn-secondary group">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>

          {/* Engineering visual accent */}
          <div className="mt-16 flex items-center gap-6 animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <div className="flex items-center gap-3 text-slate-500">
              <Cpu className="w-5 h-5 text-blue-500" />
              <span className="text-xs font-medium tracking-widest uppercase">Engineering</span>
            </div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-blue-400/40 to-transparent" />
            <div className="flex items-center gap-3 text-slate-500">
              <Zap className="w-5 h-5 text-cyan-600" />
              <span className="text-xs font-medium tracking-widest uppercase">Technology</span>
            </div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-cyan-400/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
