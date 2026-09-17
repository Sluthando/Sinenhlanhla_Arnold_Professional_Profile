import { Wrench, Users } from "lucide-react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-slate-50" aria-label="Skills">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="section-subheading">02 — Skills</p>
          <h2 className="section-heading">Skills &amp; Competencies</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Technical Skills */}
          <div className="card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.technical.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Professional Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.professional.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
