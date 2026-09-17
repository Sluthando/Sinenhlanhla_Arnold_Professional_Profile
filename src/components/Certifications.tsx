import { Award, ExternalLink, Briefcase } from "lucide-react";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative bg-white" aria-label="Certifications">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="section-subheading">05 — Certifications</p>
          <h2 className="section-heading">Certifications &amp; Programmes</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="card card-hover p-6 md:p-8 flex flex-col h-full group">
              {/* Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  {cert.isVirtualInternship ? (
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Award className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                {cert.isVirtualInternship && (
                  <span className="text-xs font-medium text-cyan-700 bg-cyan-50 border border-cyan-200 px-2.5 py-1 rounded-full">
                    Virtual Internship
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-slate-900 mb-1">{cert.name}</h3>

              {/* Organisation */}
              <p className="text-sm text-blue-600 font-medium mb-3">{cert.organisation}</p>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{cert.description}</p>

              {/* Year */}
              <p className="text-xs text-slate-400 mb-4">
                <span className="uppercase tracking-wider">Year: </span>
                {cert.year}
              </p>

              {/* Link */}
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors pt-4 border-t border-slate-100"
                aria-label={`View certificate: ${cert.name}`}
              >
                <ExternalLink className="w-4 h-4" />
                View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-sm text-slate-400">
          Certificate links and years are placeholders — replace them with actual information when available.
        </p>
      </div>
    </section>
  );
}
