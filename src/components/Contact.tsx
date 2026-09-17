import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { contactInfo, personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ============================================================
    // FORM HANDLING — Frontend only at this stage.
    // To connect a backend later, integrate a form service
    // (e.g. Formspree, EmailJS) or a Supabase edge function here.
    // ============================================================
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: contactInfo.github,
      href: contactInfo.githubUrl,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: contactInfo.linkedin,
      href: contactInfo.linkedinUrl,
    },
  ];

  return (
    <section id="contact" className="section-padding relative bg-white" aria-label="Contact">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <p className="section-subheading">07 — Contact</p>
          <h2 className="section-heading">{contactInfo.heading}</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Info */}
          <div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10">
              {contactInfo.text}
            </p>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card card-hover p-5 flex items-center gap-4 group"
                    aria-label={`${method.label}: ${method.value}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">{method.label}</p>
                      <p className="text-slate-800 font-medium">{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-3 text-slate-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>

          </div>

          {/* Right: Form */}
          <div className="card p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Send a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm" role="status">
                Thank you! Your message has been recorded. This form is a demo — connect a form service to enable real email delivery.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Your message..."
                  aria-required="true"
                />
              </div>

              <button type="submit" className="btn-primary w-full group">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
