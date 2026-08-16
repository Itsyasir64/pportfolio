import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  Sun,
  Moon,
  Terminal
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'playground', 'experience', 'github', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Architecture', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interactive Lab', href: '#playground' },
    { name: 'Experience', href: '#experience' },
    { name: 'Activity', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3.5'
            : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Sleek Logo Mark */}
        <a 
          href="#" 
          id="nav-brand-logo"
          className="group flex items-center focus:outline-none"
        >
          <div className="w-8 h-8 bg-cyan-500 rounded-sm mr-2.5 flex items-center justify-center text-slate-950 text-base font-black shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:scale-105 transition-transform">
            Y
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-tighter transition-colors ${darkMode ? 'text-white' : 'text-slate-950'}`}>
              ASIR ALI
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-cyan-400 font-mono font-bold -mt-0.5">
              SYSTEMS ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Sleek Uppercase Tracking */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] font-bold uppercase tracking-[0.18em]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`transition-all duration-200 py-1 ${
                  isActive
                    ? darkMode
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-cyan-600 border-b-2 border-cyan-600 font-extrabold'
                    : darkMode
                      ? 'text-slate-400 hover:text-cyan-400'
                      : 'text-slate-600 hover:text-cyan-600'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* GitHub Icon */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-link"
            aria-label="GitHub Profile"
            className={`w-9 h-9 border flex items-center justify-center transition-all cursor-pointer ${
              darkMode 
                ? 'border-slate-800 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5' 
                : 'border-slate-300 text-slate-600 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50'
            }`}
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-linkedin-link"
            aria-label="LinkedIn Profile"
            className={`w-9 h-9 border flex items-center justify-center transition-all cursor-pointer ${
              darkMode 
                ? 'border-slate-800 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5' 
                : 'border-slate-300 text-slate-600 hover:border-cyan-500 hover:text-cyan-600 hover:bg-cyan-50'
            }`}
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            id="theme-toggle-button"
            aria-label="Toggle Theme"
            className={`w-9 h-9 border flex items-center justify-center transition-all cursor-pointer ${
              darkMode 
                ? 'border-slate-800 text-slate-400 hover:border-cyan-500 hover:text-amber-400 hover:bg-cyan-500/5' 
                : 'border-slate-300 text-slate-600 hover:border-cyan-500 hover:text-indigo-600 hover:bg-cyan-50'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* CV / Resume Sleek Button */}
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="px-4 py-2 bg-white text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_-3px_rgba(34,211,238,0.4)] flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-slate-400 hover:text-cyan-400"
            aria-label="Toggle Mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-cyan-400 hover:bg-slate-900 border-l-2 border-transparent hover:border-cyan-400 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 bg-white text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Curriculum Vitae</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
