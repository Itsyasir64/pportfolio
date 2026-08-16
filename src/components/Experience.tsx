import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION, TESTIMONIALS } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  MessageSquareQuote,
  Award
} from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'testimonials'>('work');

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest font-bold mb-3 rounded-full">
              05 // TRACK_RECORD
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Work Experience &amp; Impact
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl font-light">
              Proven career trajectory driving technical excellence, system migrations, and product stability.
            </p>
          </div>

          {/* Navigation Pill Switcher */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 self-start sm:self-auto font-mono text-xs">
            <button
              onClick={() => setActiveTab('work')}
              id="tab-work-experience"
              className={`px-3.5 py-2 uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'work'
                  ? 'bg-cyan-500 text-slate-950 font-black shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience ({EXPERIENCES.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              id="tab-education"
              className={`px-3.5 py-2 uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-cyan-500 text-slate-950 font-black shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('testimonials')}
              id="tab-testimonials"
              className={`px-3.5 py-2 uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeTab === 'testimonials'
                  ? 'bg-cyan-500 text-slate-950 font-black shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Testimonials</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'work' && (
          <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-none bg-cyan-400 border-4 border-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.6)] group-hover:scale-125 transition-transform"></div>

                {/* Main Card */}
                <div className="rounded-sm bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md hover:border-cyan-500/50 transition-colors shadow-lg">
                  
                  {/* Top metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 mt-0.5 font-mono">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                      <div className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Role summary */}
                  <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed font-light">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6 space-y-2.5">
                    <h4 className="text-[10px] font-mono uppercase text-slate-400 tracking-[0.2em] font-bold mb-2">
                      Key Technical Deliverables &amp; Impact
                    </h4>
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-1.5 font-mono">
                    <span className="text-xs text-slate-500 mr-2 uppercase tracking-wider">Technologies:</span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="rounded-sm bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
                <div className="w-10 h-10 border border-slate-800 flex items-center justify-center text-cyan-400 mb-6">
                  <GraduationCap className="w-5 h-5" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mb-4 font-mono">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {edu.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Certifications & Continuous Learning Box */}
            <div className="rounded-sm bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-slate-800 flex items-center justify-center text-cyan-400 mb-6">
                  <Award className="w-5 h-5" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase tracking-tight">
                  Accreditations &amp; Cloud Mastery
                </h3>
                <p className="text-xs text-slate-400 mb-6 font-mono">
                  Continuous investment in enterprise cloud and distributed systems mastery.
                </p>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="p-3 bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">AWS Certified Solutions Architect</div>
                      <div className="text-xs text-slate-400 font-mono">Amazon Web Services</div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">Verified</span>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Full-Stack Microservices &amp; Docker Mastery</div>
                      <div className="text-xs text-slate-400 font-mono">Distributed Systems Architecture</div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">Verified</span>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Generative AI Engineering &amp; Vector Databases</div>
                      <div className="text-xs text-slate-400 font-mono">RAG &amp; Autonomous LLM Workflows</div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">Verified</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between font-mono">
                <span>Verified technical transcripts</span>
                <span className="text-cyan-400 font-semibold">UET Lahore Alumnus</span>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="rounded-sm bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="text-cyan-400 mb-4">
                    <MessageSquareQuote className="w-8 h-8" />
                  </div>

                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6 font-light">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-sm object-cover border border-slate-700"
                  />
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-wider">{t.name}</div>
                    <div className="text-xs text-cyan-400 font-mono">{t.role}, {t.company}</div>
                    <div className="text-[10px] text-slate-500 font-mono">{t.relationship}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
