import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, SPOKEN_LANGUAGES, CLOUDFLARE_CAPABILITIES, PROJECTS } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainTextResume = `
YASIR ALI
${PERSONAL_INFO.title}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
Website: ${PERSONAL_INFO.website}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

CORE TECHNICAL SKILLS
Languages: Python, JavaScript, C++, HTML5, CSS/CSS3
Frameworks & Libraries: Django, Django REST Framework, React.js, Express.js, Tailwind CSS, Recharts
Cloudflare & Edge Infrastructure: Cloudflare Workers & Pages (Serverless), DNS, CDN, SSL/TLS, Caching, WAF, DDoS Protection, Rate Limiting, Zero Trust, CI/CD GitHub Actions, Cloudflare Analytics & Observability
Databases & Tools: PostgreSQL, MySQL, REST APIs, Git, GitHub
Generative AI & Tools: ChatGPT, Claude, GitHub Copilot / Codex, Cursor IDE, Google AI Studio, Hugging Face
AI & Machine Learning: Fundamentals of AI, Machine Learning Concepts, Data Analysis, Neural Networks, Problem Solving
Management & Marketing: Project Management, CMS Management, Meta Ads Manager, Social Media Analytics

EXPERIENCE
${EXPERIENCES.map(e => `
${e.role} | ${e.company}
${e.period} | ${e.location}
${e.description}
Achievements:
${e.achievements.map(a => `- ${a}`).join('\n')}
Tech: ${e.techStack.join(', ')}
`).join('\n')}

FEATURED PROJECTS
${PROJECTS.map(p => `
${p.title}
${p.description}
Tech: ${p.technologies.join(', ')}
GitHub: ${p.githubUrl}
`).join('\n')}

EDUCATION
${EDUCATION.map(ed => `
${ed.degree}
${ed.institution} | ${ed.period} | ${ed.location}
${ed.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

CERTIFICATES
${CERTIFICATIONS.map(c => `- ${c.title} (${c.issuer})`).join('\n')}

LANGUAGES
${SPOKEN_LANGUAGES.map(l => `- ${l.name}: ${l.proficiency}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-4xl rounded-sm bg-slate-900 border border-slate-800 shadow-2xl my-6 flex flex-col max-h-[92vh]"
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between no-print bg-slate-950">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider">
              Curriculum Vitae — Yasir Ali
            </h2>
            <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              BS IT Verified
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono">
            <button
              onClick={handleCopyText}
              id="resume-copy-txt-btn"
              className="px-3 py-1.5 bg-slate-900 hover:border-cyan-500 border border-slate-800 text-slate-300 hover:text-cyan-400 text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
              title="Copy plain text version"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="px-4 py-1.5 bg-white hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              id="resume-close-btn"
              className="p-1.5 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto text-slate-200 bg-slate-900 print:bg-white print:text-black print:p-0 print:m-0 space-y-7 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-white print:text-black tracking-tight uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-cyan-400 print:text-cyan-800 mt-1 font-mono uppercase tracking-wider">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-slate-400 print:text-slate-700 mt-1 font-mono">
                  {PERSONAL_INFO.subtitle}
                </p>
              </div>

              <div className="text-xs text-slate-400 print:text-black space-y-1 text-left sm:text-right font-mono">
                <div><strong>Phone:</strong> {PERSONAL_INFO.phone}</div>
                <div><strong>Email:</strong> {PERSONAL_INFO.email}</div>
                <div><strong>Location:</strong> {PERSONAL_INFO.location}</div>
                <div><strong>Website:</strong> {PERSONAL_INFO.websiteDisplay}</div>
                <div><strong>GitHub:</strong> github.com/{PERSONAL_INFO.githubUsername}</div>
                <div><strong>LinkedIn:</strong> linkedin.com/in/yasir-ali-064-</div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-2 pb-1 border-b border-slate-800 print:border-black">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed font-light">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Technical Matrix */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-3 pb-1 border-b border-slate-800 print:border-black">
              Technical Skills &amp; Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-light">
              <div>
                <strong className="text-white print:text-black font-bold font-mono">Languages:</strong>{' '}
                <span className="text-slate-300 print:text-black">Python, JavaScript, C++, HTML5, CSS / CSS3</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-bold font-mono">Frameworks &amp; Libraries:</strong>{' '}
                <span className="text-slate-300 print:text-black">Django, Django REST Framework, React.js, Express.js, Tailwind CSS, Recharts</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-bold font-mono">Cloudflare &amp; Serverless:</strong>{' '}
                <span className="text-slate-300 print:text-black">Cloudflare Workers &amp; Pages, DNS, CDN, SSL/TLS, Caching, WAF, DDoS Protection, Rate Limiting, Zero Trust</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-bold font-mono">Databases &amp; APIs:</strong>{' '}
                <span className="text-slate-300 print:text-black">PostgreSQL, MySQL, REST APIs, Git, GitHub, CI/CD GitHub Actions</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-bold font-mono">Generative AI Tools:</strong>{' '}
                <span className="text-slate-300 print:text-black">ChatGPT, Claude, GitHub Copilot / Codex, Cursor, Google AI Studio, Hugging Face</span>
              </div>
              <div>
                <strong className="text-white print:text-black font-bold font-mono">AI &amp; Management:</strong>{' '}
                <span className="text-slate-300 print:text-black">Fundamentals of AI, Machine Learning, Data Analysis, Neural Networks, Project Management, Meta Ads Manager</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-4 pb-1 border-b border-slate-800 print:border-black">
              Work Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div>
                      <strong className="text-sm text-white print:text-black font-bold uppercase tracking-wide">{exp.role}</strong>
                      <span className="text-cyan-400 print:text-cyan-900 font-semibold font-mono"> — {exp.company}</span>
                    </div>
                    <div className="text-slate-400 print:text-black font-mono text-xs">
                      {exp.period} | {exp.location}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed font-light">
                    {exp.description}
                  </p>

                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 print:text-black space-y-1 font-light">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="leading-relaxed">{ach}</li>
                    ))}
                  </ul>

                  <div className="text-[11px] font-mono text-slate-400 print:text-black pt-1">
                    <strong>Technologies:</strong> {exp.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-4 pb-1 border-b border-slate-800 print:border-black">
              Key Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black uppercase tracking-wide">
                    <span>{proj.title}</span>
                    <span className="font-mono text-slate-400 print:text-black font-normal text-xs">{proj.technologies.slice(0, 4).join(', ')}</span>
                  </div>
                  <p className="text-slate-300 print:text-black font-light leading-relaxed text-xs">
                    {proj.description}
                  </p>
                  <div className="text-[11px] font-mono text-cyan-400 print:text-slate-800">
                    GitHub: {proj.githubUrl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-3 pb-1 border-b border-slate-800 print:border-black">
              Education
            </h2>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between font-bold text-white print:text-black uppercase tracking-wide">
                  <span>{edu.degree}</span>
                  <span className="font-mono text-slate-400 print:text-black font-normal">{edu.period}</span>
                </div>
                <div className="text-cyan-400 print:text-black font-mono text-xs">{edu.institution}, {edu.location}</div>
                <ul className="list-disc list-inside text-slate-300 print:text-black text-xs space-y-0.5 pt-1 font-light">
                  {edu.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Spoken Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-3 pb-1 border-b border-slate-800 print:border-black">
                Certificates
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-300 print:text-black font-mono">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 print:bg-black rounded-full shrink-0"></span>
                    <span><strong>{cert.title}</strong> — {cert.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 print:text-black font-bold mb-3 pb-1 border-b border-slate-800 print:border-black">
                Languages
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-300 print:text-black font-mono">
                {SPOKEN_LANGUAGES.map((lang, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 print:bg-black rounded-full shrink-0"></span>
                    <span><strong>{lang.name}:</strong> {lang.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

