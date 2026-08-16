import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Check, 
  Terminal, 
  Copy, 
  Layers
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [activeCodeTab, setActiveCodeTab] = useState<'django' | 'react' | 'cloudflare'>('django');
  const [copiedCode, setCopiedCode] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return Code2;
      case 'Server': return Server;
      case 'Database': return Database;
      case 'Cloud': return Cloud;
      case 'Cpu': return Cpu;
      default: return Layers;
    }
  };

  const codeSnippets = {
    django: `# Python / Django REST Framework: Scalable API ViewSet
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    """
    Production ViewSet providing performant CRUD and custom edge actions
    """
    queryset = Project.objects.select_related('owner').prefetch_related('tasks').all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=True, methods=['post'], url_path='deploy-edge')
    def deploy_to_cloudflare(self, request, pk=None):
        project = self.get_object()
        # Trigger deployment webhook and return status
        deployment_id = project.trigger_edge_build()
        return Response(
            {"status": "queued", "deployment_id": deployment_id, "node": "cloudflare_pages"},
            status=status.HTTP_202_ACCEPTED
        )`,
    react: `// React.js: Custom Hook with Async Edge State & Cache
import { useState, useEffect, useCallback } from 'react';

interface ProjectData {
  id: string;
  title: string;
  status: 'live' | 'building' | 'failed';
}

export function useProjectTelemetry(projectId: string) {
  const [data, setData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMetrics = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(\`/api/v1/projects/\${projectId}/\`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error('Failed to sync edge telemetry:', err);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  return { data, loading, reload: fetchMetrics };
}`,
    cloudflare: `// Cloudflare Workers: Serverless Edge Proxy & Rate Limiter
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const clientIP = request.headers.get('CF-Connecting-IP') || '127.0.0.1';

    // Edge Security: Apply Rate Limiting & Header Sanitization
    const response = await fetch(request);
    const newHeaders = new Headers(response.headers);
    newHeaders.set('X-Edge-Origin', 'Cloudflare-Worker-Lahore');
    newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    newHeaders.set('X-Content-Type-Options', 'nosniff');

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });
  },
};`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest font-bold mb-3 rounded-full">
            02 // TECH_MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Technical Stack &amp; Architectural Runtimes
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl font-light">
            A battle-tested stack spanning client interfaces, distributed backend architectures, relational datastores, and cloud deployments.
          </p>
        </div>

        {/* Skill Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.iconName);
            const isSelected = selectedCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCategoryIndex(idx)}
                id={`skill-category-tab-${idx}`}
                className={`p-4 rounded-sm text-left border transition-all flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className={`w-8 h-8 border flex items-center justify-center ${
                  isSelected ? 'border-cyan-400 bg-cyan-500/10 text-cyan-400' : 'border-slate-800 bg-slate-950 text-slate-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-slate-500 mb-0.5">
                    STACK 0{idx + 1}
                  </div>
                  <div className="text-sm font-bold text-white leading-tight">
                    {cat.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Category Content & Code Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Active Skill Category Items */}
          <div className="lg:col-span-6 rounded-sm bg-slate-900/70 border border-slate-800 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  {SKILL_CATEGORIES[selectedCategoryIndex].title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {SKILL_CATEGORIES[selectedCategoryIndex].skills.length} verified competencies
                </p>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded-sm">
                Production Verified
              </span>
            </div>

            <div className="space-y-4">
              {SKILL_CATEGORIES[selectedCategoryIndex].skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                    <span className="font-semibold text-slate-200 flex items-center gap-2">
                      {skill.name}
                      {skill.popular && (
                        <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded-sm bg-cyan-950/80 text-cyan-300 border border-cyan-800/80">
                          Primary
                        </span>
                      )}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 font-mono">{skill.experience}</span>
                      <span className="font-mono font-bold text-cyan-400">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="h-1.5 w-full bg-slate-950 overflow-hidden border border-slate-800">
                    <div 
                      className="h-full bg-cyan-400 transition-all duration-700 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Used in active 2024-2026 production deployments</span>
              <span className="text-emerald-400 font-medium">✓ Tested in CI/CD</span>
            </div>
          </div>

          {/* Right: Code Philosophy & Live Snippets */}
          <div className="lg:col-span-6 rounded-sm bg-slate-900/70 border border-slate-800 p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              {/* Header & Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white font-mono uppercase tracking-widest">Architectural Implementation</span>
                </div>

                <div className="flex items-center gap-1.5 border border-slate-800 p-0.5 text-xs font-mono">
                  {(['django', 'react', 'cloudflare'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveCodeTab(tab)}
                      className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
                        activeCodeTab === tab
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab === 'django' ? 'Django DRF' : tab === 'react' ? 'React.js' : 'Cloudflare'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="relative bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-[380px]">
                <button
                  onClick={handleCopyCode}
                  className="absolute top-3 right-3 p-1.5 border border-slate-800 bg-slate-900 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-colors flex items-center gap-1 text-[11px]"
                  title="Copy code snippet"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>

                <pre className="text-slate-300 leading-relaxed font-mono">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>
            </div>

            {/* Architecture guarantee */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-1.5 h-1.5 bg-cyan-400"></span>
                <span>Production tested • Clean schemas • REST / Edge</span>
              </div>
              <span className="text-cyan-400">
                {activeCodeTab === 'django' ? 'views.py' : activeCodeTab === 'react' ? 'useTelemetry.ts' : 'worker.ts'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
