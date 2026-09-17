import { Lightbulb, BookOpen, Shield, BrainCircuit } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const icons = [Lightbulb, BookOpen, Shield, BrainCircuit];

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-white" aria-label="About Me">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="section-subheading">01 — About</p>
          <h2 className="section-heading">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              {personalInfo.bio.bioIntro}
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {personalInfo.bio.bioExperience}
            </p>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {personalInfo.bio.bioGrowth}
            </p>
          </div>

          {/* Quick facts */}
          <div className="lg:col-span-1">
            <div className="card p-6 space-y-4">
              <h3 className="text-sm font-semibold text-slate-700 tracking-widest uppercase">
                Profile
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-slate-800 font-medium">{personalInfo.location}</p>
                </div>
                <div className="h-px bg-slate-100" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Focus</p>
                  <p className="text-slate-800 font-medium">Engineering &amp; Technology</p>
                </div>
                <div className="h-px bg-slate-100" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Background</p>
                  <p className="text-slate-800 font-medium">Aeronautical Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Bring */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            What I Bring
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInfo.whatIBring.map((item, idx) => {
              const Icon = icons[idx];
              return (
                <div key={item.title} className="card card-hover p-6 group">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
