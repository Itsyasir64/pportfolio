import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Globe2, 
  Terminal, 
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const pillars = [
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'Building clean, end-to-end web apps with Python, Django, Django REST Framework, React.js, and modern Tailwind CSS.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/20',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: Globe2,
      title: 'Cloudflare & Edge Systems',
      description: 'Deploying serverless Workers & Pages, managing DNS, SSL/TLS, CDN caching, WAF, DDoS protection, and rate limiting.',
      color: 'text-cyan-300',
      bgColor: 'bg-slate-900/60',
      borderColor: 'border-slate-800',
    },
    {
      icon: Cpu,
      title: 'AI & Rapid Tooling',
      description: 'Leveraging AI-assisted development tools (ChatGPT, Claude, Copilot, Cursor, Google AI Studio) for rapid prototyping and debugging.',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/20',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: ShieldCheck,
      title: 'Databases & Reliability',
      description: 'Relational data modeling with PostgreSQL and MySQL, structured RESTful API schemas, version control, and CI/CD pipelines.',
      color: 'text-emerald-400',
      bgColor: 'bg-slate-900/60',
      borderColor: 'border-slate-800',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Sleek Tag */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest font-bold mb-3 rounded-full">
            01 // SYSTEM_ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Bridging Architectural Rigor with Digital Precision
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-3xl font-light">
            A software engineer dedicated to building clean, maintainable systems that scale seamlessly under heavy workloads while delivering uncompromising digital aesthetics.
          </p>
        </div>

        {/* Main Grid: Narrative Story + Quick Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Narrative & Technical Mindset */}
          <div className="lg:col-span-7 rounded-sm bg-slate-900/70 border border-slate-800 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Engineering Philosophy &amp; Journey</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  I'm <strong className="text-white font-semibold">Yasir Ali</strong>, a BS Information Technology graduate from the <span className="text-cyan-400 font-medium">University of Gujrat</span>, specializing in Python, Django REST Framework, React.js, and Cloudflare edge infrastructure.
                </p>
                <p>
                  At <strong className="text-white font-semibold">Nexthon Technologies</strong>, I built full-stack features using Python/Django for backend logic and React.js with Tailwind CSS for dynamic, responsive user interfaces. I leverage modern AI-assisted tools (ChatGPT, Claude, Copilot, Google AI Studio) to accelerate prototyping, debugging, and software documentation.
                </p>
                <p>
                  My goal is simple: <span className="text-cyan-400 font-medium">continually master cutting-edge software technologies, write clean modular code, and build high-performance, user-friendly applications that solve real-world problems</span>.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <h4 className="text-[10px] font-mono uppercase text-slate-400 mb-3 tracking-[0.2em] font-bold">
                  Core Technical Commitments
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Python & Django REST Framework backend APIs',
                    'Interactive, stateful React.js interfaces',
                    'Serverless edge deployments on Cloudflare Pages & Workers',
                    'Relational database design in PostgreSQL & MySQL',
                    'Tailwind CSS responsive design with fluid aesthetics',
                    'AI-augmented development & prompt engineering'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-cyan-500 flex items-center justify-center text-slate-950 font-black text-sm">
                  Y
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Yasir Ali</div>
                  <div className="text-xs text-slate-400 font-mono">yasir.media64@gmail.com • {PERSONAL_INFO.phone}</div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Quick Profile Facts & Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Quick Profile Summary Box */}
            <div className="rounded-sm bg-slate-900/70 border border-slate-800 p-6 backdrop-blur-md">
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-[0.2em] font-bold mb-4 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>Profile Snapshot</span>
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm font-mono">
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Primary Focus</span>
                  <span className="text-white font-medium text-right">Python, Django &amp; React Developer</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Location</span>
                  <span className="text-white font-medium">Lahore, Pakistan</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Phone / Contact</span>
                  <span className="text-cyan-400 font-medium">{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Education</span>
                  <span className="text-white font-medium">BS IT (Univ of Gujrat)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Portfolio Domain</span>
                  <span className="text-cyan-400 font-medium">yasirali.uk</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Languages</span>
                  <span className="text-emerald-400 font-medium">English (Fluent) • Urdu (Native)</span>
                </div>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="rounded-sm bg-cyan-950/20 border border-cyan-500/30 p-5">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Immediate Project / Role Availability</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                Open for software development roles, Python/Django &amp; React engineering positions, and innovative web projects.
              </p>
            </div>

          </div>

        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-sm bg-slate-900/60 border border-slate-800 p-5 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 border border-slate-800 flex items-center justify-center text-cyan-400 mb-4 group-hover:border-cyan-500 group-hover:bg-cyan-500/5 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
