import { useEffect, useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-200/40"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group"
            aria-label="Sinenhlanhla Arnold — Home"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <Cpu className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-bold text-slate-900 text-sm md:text-base tracking-tight">
              Sinenhlanhla<span className="text-blue-600">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-blue-700 bg-blue-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden pb-4 animate-fade-in"
            role="menu"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-blue-700 bg-blue-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                      role="menuitem"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
