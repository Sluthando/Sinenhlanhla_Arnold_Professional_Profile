import { Briefcase, Clock } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-slate-50" aria-label="Experience">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="section-subheading">06 — Experience</p>
          <h2 className="section-heading">Experience</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 via-slate-300/50 to-transparent" />

          <div className="space-y-8 md:space-y-10">
            {experience.map((role, idx) => (
              <div key={idx} className="relative pl-14 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-1 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>

                {/* Content */}
                <div className="card card-hover p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{role.position}</h3>
                    {role.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full whitespace-nowrap self-start md:self-auto">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 font-medium mb-2">{role.organisation}</p>

                  {role.period && (
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
                      <Clock className="w-3.5 h-3.5" />
                      {role.period}
                    </p>
                  )}

                  <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                    {role.description}
                  </p>

                  {/* Skills */}
                  {role.skills && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
