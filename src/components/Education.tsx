import { GraduationCap, Award } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-padding relative bg-slate-50" aria-label="Education">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="section-subheading">04 — Education</p>
          <h2 className="section-heading">Education</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 via-slate-300/50 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {education.map((item) => (
              <div key={item.institution} className="relative pl-14 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-1 w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                  {item.isPrimary ? (
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Award className="w-5 h-5 text-slate-500" />
                  )}
                </div>

                {/* Content */}
                <div className="card card-hover p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900">{item.institution}</h3>
                      <p className="text-slate-600 text-sm md:text-base mt-1">{item.programme}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full whitespace-nowrap self-start md:self-auto">
                      {item.period}
                    </span>
                  </div>

                  {item.status && (
                    <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 mb-4">
                      {item.status}
                    </p>
                  )}

                  {item.highlights && (
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        {item.isPrimary ? "Relevant Academic Areas" : "Academic Highlights"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span key={highlight} className="skill-badge text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>
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
