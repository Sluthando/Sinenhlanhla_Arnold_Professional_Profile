import { Cpu, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, contactInfo } from "@/data/portfolio";

export default function Footer() {
  const socials = [
    { icon: Github, label: "GitHub", href: contactInfo.githubUrl },
    { icon: Linkedin, label: "LinkedIn", href: contactInfo.linkedinUrl },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${contactInfo.email}`,
    },
  ];

  return (
    <footer className="relative border-t border-slate-200 bg-slate-50" aria-label="Footer">
      {/* Technical line accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name & tagline */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
              <Cpu className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900">{personalInfo.name}</p>
              <p className="text-xs text-slate-500">{personalInfo.positioning}</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
