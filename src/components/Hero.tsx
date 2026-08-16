import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDown, 
  Check, 
  Copy, 
  Download, 
  Sparkles, 
  Terminal, 
  ExternalLink,
  MapPin,
  Briefcase,
  Code2,
  Cpu,
  Layers,
  Camera,
  ArrowUpRight
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  customAvatar: string | null;
  onUploadAvatar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResume, 
  customAvatar, 
  onUploadAvatar,
  darkMode 
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const avatarSource = customAvatar 
    ? customAvatar 
    : !imgError 
      ? `https://github.com/${PERSONAL_INFO.githubUsername}.png`
      : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-bg"
    >
      {/* Sleek Cyan Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Sleek Interface Bio & Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Sleek Pill Badge */}
            <div className="inline-block px-3.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] uppercase tracking-[0.25em] font-bold mb-6 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              {PERSONAL_INFO.availability}
            </div>

            {/* Giant Sleek Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tight mb-6 text-white">
              SOFTWARE<br />
              <span className="text-cyan-400">DEVELOPER.</span>
            </h1>

            {/* Sub-headline & Description */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed font-light">
              Building robust backend architectures with <strong className="text-white font-semibold">Python &amp; Django</strong>, modern interactive frontends with <strong className="text-white font-semibold">React.js</strong>, and scalable serverless edge deployments on <strong className="text-white font-semibold">Cloudflare</strong>.
            </p>

            {/* Metric Nodes Row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg mb-8">
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-sm">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold font-mono">Experience</div>
                <div className="text-xl font-black text-white font-mono mt-0.5">{PERSONAL_INFO.yearsOfExperience} Years</div>
              </div>
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-sm">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold font-mono">Shipped</div>
                <div className="text-xl font-black text-cyan-400 font-mono mt-0.5">{PERSONAL_INFO.projectsCompleted} Builds</div>
              </div>
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-sm">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold font-mono">Domain</div>
                <div className="text-xl font-black text-emerald-400 font-mono mt-0.5">{PERSONAL_INFO.websiteDisplay}</div>
              </div>
            </div>

            {/* Sleek Action Buttons & Social Boxes */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                id="hero-view-projects-btn"
                className="px-8 py-4 bg-white text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_30px_-5px_rgba(34,211,238,0.4)] flex items-center gap-2"
              >
                <span>View Showcase</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                id="hero-resume-btn"
                className="px-6 py-4 border border-slate-800 bg-slate-900/80 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume / CV</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-square"
                  className="w-12 h-12 border border-slate-800 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/5 transition-all text-slate-400 hover:text-cyan-400"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-square"
                  className="w-12 h-12 border border-slate-800 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/5 transition-all text-slate-400 hover:text-cyan-400"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  id="hero-email-square"
                  className="h-12 px-4 border border-slate-800 flex items-center gap-2 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all text-slate-400 hover:text-cyan-400 text-xs font-mono"
                  title="Copy email address"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
                  {copiedEmail && <Check className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>
            </div>

            {/* Quick Meta Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono text-slate-400 tracking-wider uppercase">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>Node: Lahore, PK (UTC+5)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Remote Protocol: Active</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Cyber Bracket Frame with Headshot */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm flex items-center justify-center py-6">
              
              {/* Outer Cyber Framing with Sharp Cyan Bracket Accents */}
              <div className="w-72 sm:w-80 h-[420px] relative border border-slate-800 p-2.5 bg-slate-950 shadow-2xl">
                {/* Cyber Corner Brackets */}
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-cyan-400 pointer-events-none"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-cyan-400 pointer-events-none"></div>

                {/* Inner Image Frame */}
                <div className="w-full h-full bg-slate-900 overflow-hidden flex items-center justify-center relative group">
                  <img
                    src={avatarSource}
                    alt="Yasir Ali — Senior Full-Stack Engineer"
                    id="hero-profile-image"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Gradient bottom shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 pointer-events-none"></div>

                  {/* Photo Customizer Tag / Switch */}
                  <label 
                    htmlFor="avatar-upload"
                    className="absolute top-3 right-3 px-2.5 py-1 bg-slate-950/90 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 backdrop-blur-md cursor-pointer transition-all shadow-md flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider"
                    title="Upload custom portrait"
                  >
                    <Camera className="w-3 h-3 text-cyan-400" />
                    <span>Upload</span>
                    <input
                      id="avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={onUploadAvatar}
                      className="hidden"
                    />
                  </label>

                  {/* Sleek Identification Tag */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[10px] text-cyan-400 uppercase tracking-[0.25em] font-bold font-mono">
                      Yasir Ali // 064
                    </p>
                    <p className="text-xs text-white font-extrabold tracking-tight mt-0.5">
                      Python, Django &amp; React.js Developer
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Tech Stack Horizontal Ticker Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.25em] font-bold mb-4">
            Core Engineering Toolchain &amp; Cloud Runtimes
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {[
              'Python',
              'Django & DRF',
              'React.js',
              'Tailwind CSS',
              'Cloudflare Workers & Pages',
              'PostgreSQL',
              'MySQL',
              'REST APIs',
              'JavaScript (ESNext)',
              'HTML5 / CSS3',
              'Generative AI / Copilot',
              'Git & GitHub'
            ].map((tech) => (
              <div 
                key={tech}
                className="px-3 py-1.5 bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              >
                <span className="text-cyan-400 mr-1.5 font-bold">#</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
