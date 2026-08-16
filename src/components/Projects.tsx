import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  Zap, 
  ArrowUpRight, 
  Check, 
  X, 
  Code2, 
  Sparkles,
  Search
} from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Full Stack', 'AI & LLM', 'Cloud & APIs', 'DevOps & Systems'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest font-bold mb-3 rounded-full">
              03 // FEATURED_SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Selected Engineering Builds
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl font-light">
              Architectural blueprints, production full-stack systems, and distributed applications built for performance, resilience, and scale.
            </p>
          </div>

          {/* GitHub repos link */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            id="projects-view-all-github"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:border-cyan-500 border border-slate-800 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 hover:text-cyan-400 transition-all self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub Profile (@Itsyasir64)</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900/80 border border-slate-800 overflow-x-auto max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                id={`project-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-slate-950 font-black shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64 font-mono">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, keyword..."
              id="project-search-input"
              className="w-full pl-9 pr-4 py-1.5 bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-sm bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Image & Category Pill */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest font-bold bg-slate-950/90 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Featured Tag */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest font-bold bg-white text-slate-950 shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-500" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Live Metrics Overlay on Card */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="px-2 py-1 bg-slate-950/90 border border-slate-800 text-[10px] font-mono">
                        <span className="text-slate-400 mr-1">{metric.label}:</span>
                        <span className="text-cyan-400 font-bold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 uppercase tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 text-slate-500 border border-slate-800">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProject(project)}
                  id={`project-deep-dive-btn-${project.id}`}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Source Code"
                    id={`project-github-btn-${project.id}`}
                    className="p-2 border border-slate-800 bg-slate-950 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Live Project"
                      id={`project-demo-btn-${project.id}`}
                      className="p-2 bg-white text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm"
                      title="Live Interactive Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 font-mono">
            <p className="text-slate-400 text-sm mb-2">No projects found matching current filter query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-cyan-400 hover:underline uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Architecture Deep Dive Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div 
            className="relative w-full max-w-3xl rounded-sm bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl my-8 overflow-hidden"
            id="project-detail-modal"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              id="close-project-modal-btn"
              className="absolute top-4 right-4 p-2 border border-slate-800 bg-slate-950 text-slate-400 hover:text-white hover:border-cyan-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pr-8">
              <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-2 inline-block">
                {activeProject.category} // Architecture Breakdown
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 uppercase tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-sm text-cyan-300 font-mono mt-1">
                {activeProject.tagline}
              </p>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {activeProject.metrics.map((m, idx) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-800 text-center font-mono">
                  <div className="text-lg sm:text-xl font-bold text-cyan-400">{m.value}</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="space-y-4 mb-6 text-sm text-slate-300 leading-relaxed font-light">
              <h4 className="text-[10px] font-mono uppercase text-slate-400 tracking-[0.2em] font-bold">System Overview</h4>
              <p>{activeProject.longDescription}</p>
            </div>

            {/* Architecture Highlights */}
            <div className="mb-6">
              <h4 className="text-[10px] font-mono uppercase text-slate-400 tracking-[0.2em] font-bold mb-3">Architectural Pillars</h4>
              <div className="space-y-2">
                {activeProject.architecture.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950 p-2.5 border border-slate-800">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Accomplishments / Highlights */}
            <div className="mb-6">
              <h4 className="text-[10px] font-mono uppercase text-slate-400 tracking-[0.2em] font-bold mb-3">Engineering Highlights</h4>
              <div className="space-y-2">
                {activeProject.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-[10px] font-mono uppercase text-slate-400 tracking-[0.2em] font-bold mb-2">Technology Stack</h4>
              <div className="flex flex-wrap gap-1.5 font-mono">
                {activeProject.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs bg-slate-950 text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-950 hover:border-cyan-500 border border-slate-800 text-slate-200 hover:text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>

                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-white"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
