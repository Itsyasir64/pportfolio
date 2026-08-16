import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Star, 
  GitFork, 
  ExternalLink, 
  Activity, 
  ArrowUpRight,
  Code2
} from 'lucide-react';

interface GitHubActivityProps {
  darkMode: boolean;
}

export const GitHubActivity: React.FC<GitHubActivityProps> = ({ darkMode }) => {
  const [stats] = useState({
    publicRepos: 28,
    totalStars: 142,
    totalForks: 49,
    contributionsThisYear: 840,
    topLanguage: 'TypeScript'
  });

  const pinnedRepos = [
    {
      name: 'nexus-ai-agents',
      description: 'Distributed multi-agent orchestration engine with streaming memory, RAG, and dynamic tool calling.',
      language: 'TypeScript',
      languageColor: 'bg-cyan-400',
      stars: 64,
      forks: 18,
      url: 'https://github.com/Itsyasir64/nexus-ai-agents',
      updated: '3 days ago'
    },
    {
      name: 'omnistore-core',
      description: 'High-throughput e-commerce microservices with Redis distributed locks and Stripe payment workflows.',
      language: 'TypeScript',
      languageColor: 'bg-cyan-400',
      stars: 45,
      forks: 12,
      url: 'https://github.com/Itsyasir64/omnistore-core',
      updated: '1 week ago'
    },
    {
      name: 'devpulse-telemetry',
      description: 'Real-time cloud observability and log streaming hub with TimescaleDB and D3.js visualization.',
      language: 'Go',
      languageColor: 'bg-cyan-300',
      stars: 33,
      forks: 9,
      url: 'https://github.com/Itsyasir64/devpulse-telemetry',
      updated: '2 weeks ago'
    },
    {
      name: 'fastapi-rag-starter',
      description: 'Production-ready Python FastAPI RAG template with pgvector embeddings and Gemini integration.',
      language: 'Python',
      languageColor: 'bg-amber-400',
      stars: 29,
      forks: 10,
      url: 'https://github.com/Itsyasir64/fastapi-rag-starter',
      updated: '3 weeks ago'
    }
  ];

  // Generate 28 weeks of mock/realistic git contribution data for visually stunning heatmap
  const weeks = 28;
  const daysPerWeek = 7;
  const contributionGrid: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const weekData: number[] = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const seed = Math.sin(w * 0.4 + d * 0.8);
      let val = 0;
      if (seed > 0.6) val = 4;
      else if (seed > 0.2) val = 3;
      else if (seed > -0.2) val = 2;
      else if (seed > -0.6) val = 1;
      weekData.push(val);
    }
    contributionGrid.push(weekData);
  }

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 4: return 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]';
      case 3: return 'bg-cyan-500';
      case 2: return 'bg-cyan-700/80';
      case 1: return 'bg-cyan-950';
      default: return 'bg-slate-900 border border-slate-800';
    }
  };

  return (
    <section id="github" className="py-20 md:py-28 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest font-bold mb-3 rounded-full">
              06 // OPEN_SOURCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              GitHub Repositories &amp; Cadence
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl font-light">
              Consistent open-source contributions, developer tooling, and publicly shared architectures.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            id="github-profile-cta-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_-3px_rgba(34,211,238,0.4)] self-start sm:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>Follow @Itsyasir64</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub Contribution Heatmap Card */}
        <div className="rounded-sm bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md mb-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-slate-800 bg-slate-950 flex items-center justify-center text-cyan-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                  Commit &amp; Contribution Frequency
                  <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-sm">
                    Active
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {stats.contributionsThisYear}+ commits and code merges across production repositories
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-500">Repos: </span>
                <span className="text-white font-bold">{stats.publicRepos}+</span>
              </div>
              <div>
                <span className="text-slate-500">Stars: </span>
                <span className="text-cyan-400 font-bold">{stats.totalStars}</span>
              </div>
              <div>
                <span className="text-slate-500">Top Lang: </span>
                <span className="text-white font-bold">{stats.topLanguage}</span>
              </div>
            </div>
          </div>

          {/* Grid of contribution squares */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[620px]">
              {contributionGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3.5 h-3.5 rounded-none transition-all hover:scale-125 ${getHeatmapColor(level)}`}
                      title={`Activity level: ${level}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between mt-4 pt-3 text-[11px] text-slate-400 border-t border-slate-800 font-mono">
            <span>Continuous delivery cadence on GitHub (@Itsyasir64)</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-2.5 h-2.5 bg-slate-900 border border-slate-800"></div>
              <div className="w-2.5 h-2.5 bg-cyan-950"></div>
              <div className="w-2.5 h-2.5 bg-cyan-700/80"></div>
              <div className="w-2.5 h-2.5 bg-cyan-500"></div>
              <div className="w-2.5 h-2.5 bg-cyan-400"></div>
              <span>More</span>
            </div>
          </div>

        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-slate-900/70 border border-slate-800 p-5 hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>Itsyasir64/{repo.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed font-light">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 ${repo.languageColor}`}></span>
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-cyan-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
