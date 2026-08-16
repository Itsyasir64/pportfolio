import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  Globe 
} from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, darkMode }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-500 flex items-center justify-center font-black text-slate-950 font-mono text-sm tracking-tighter shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                YA
              </div>
              <div>
                <span className="font-bold text-sm tracking-[0.25em] uppercase text-white font-mono">
                  Yasir Ali
                </span>
                <p className="text-xs text-cyan-400 font-mono">Python, Django &amp; React Developer</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-light">
              Building robust backend systems with Python &amp; Django, modern dynamic interfaces in React.js, and serverless edge deployments on Cloudflare.
            </p>

            <div className="space-y-1.5 font-mono text-xs text-slate-400">
              <div>Phone: <span className="text-slate-200">{PERSONAL_INFO.phone}</span></div>
              <div>Domain: <a href={PERSONAL_INFO.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.websiteDisplay}</a></div>
            </div>

            {/* Live Time in Lahore */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono bg-slate-900/80 px-3 py-1.5 border border-slate-800 w-fit">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Lahore (PK): <strong className="text-cyan-400">{time || '12:00 PM'}</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-bold">
              Index
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">01 // Profile</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">02 // Capabilities</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">03 // Showcase</a></li>
              <li><a href="#playground" className="hover:text-cyan-400 transition-colors">04 // Simulation</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">05 // Experience</a></li>
              <li><a href="#github" className="hover:text-cyan-400 transition-colors">06 // GitHub</a></li>
              <li>
                <button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors text-left uppercase">
                  ATS Resume / Spec
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4 space-y-3 font-mono">
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-bold">
              Channels
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>github.com/Itsyasir64</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>linkedin.com/in/yasir-ali-064-</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse"></span>
                Open for Q2/Q3 Roles &amp; Contracts
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Yasir Ali. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              id="footer-back-to-top-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 uppercase tracking-wider text-[11px] transition-colors"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
