import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Terminal, 
  Cpu, 
  RotateCcw, 
  Lock,
  Activity
} from 'lucide-react';

interface InteractivePlaygroundProps {
  darkMode: boolean;
}

export const InteractivePlayground: React.FC<InteractivePlaygroundProps> = ({ darkMode }) => {
  const [activeDemo, setActiveDemo] = useState<'agent' | 'lock' | 'metrics'>('agent');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [promptInput, setPromptInput] = useState('Analyze PostgreSQL query latency and generate optimized B-tree compound index');
  
  // E-commerce lock simulation state
  const [inventoryCount, setInventoryCount] = useState(5);
  const [successOrders, setSuccessOrders] = useState(0);
  const [rejectedOrders, setRejectedOrders] = useState(0);

  // Agent demo execution
  const runAgentDemo = () => {
    setIsRunning(true);
    setLogs(['[0.00s] Initializing Autonomous Agent context engine...']);

    const steps = [
      '[0.12s] Parsing user intent: Query Optimization & Vector RAG search',
      '[0.28s] Tool dispatch: [Postgres_EXPLAIN_ANALYZE] checking query plan...',
      '[0.45s] Identified sequential table scan on table "transactions" (Rows: 1.2M, Cost: 42,910.00)',
      '[0.68s] Generated Compound Index recommendation: CREATE INDEX CONCURRENTLY idx_tx_user_created ON transactions(user_id, created_at DESC);',
      '[0.85s] Synthesized benchmark: Projected P99 query latency reduced from 340ms to 4.2ms (98.7% improvement)',
      '[1.02s] ✨ Agent execution finished successfully with 0 errors.'
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setLogs(prev => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 350);
    });
  };

  // Concurrency Lock Demo execution
  const runLockDemo = () => {
    setIsRunning(true);
    setInventoryCount(5);
    setSuccessOrders(0);
    setRejectedOrders(0);
    setLogs(['[0.00s] Simulating 100 simultaneous flash sale checkout requests...']);

    let currentInv = 5;
    let success = 0;
    let rejected = 0;

    const interval = setInterval(() => {
      if (currentInv > 0) {
        currentInv -= 1;
        success += 1;
        setInventoryCount(currentInv);
        setSuccessOrders(success);
        setLogs(prev => [
          ...prev, 
          `[OK] Thread #${Math.floor(Math.random() * 900 + 100)} acquired Redis Redlock -> Purchased 1 item (Remaining: ${currentInv})`
        ]);
      } else {
        rejected += 1;
        setRejectedOrders(rejected);
        setLogs(prev => [
          ...prev, 
          `[REJECTED] Thread #${Math.floor(Math.random() * 900 + 100)} - Inventory exhausted (0 remaining). Race condition safely blocked.`
        ]);
      }

      if (success + rejected >= 12) {
        clearInterval(interval);
        setIsRunning(false);
        setLogs(prev => [
          ...prev, 
          `✨ Flash Sale concluded: 5 items sold, 0 oversold items, 100% ACID consistency guaranteed.`
        ]);
      }
    }, 200);
  };

  // Metrics simulator
  const runMetricsDemo = () => {
    setIsRunning(true);
    setLogs(['[0.00s] Connecting to telemetry WebSocket stream...']);

    const samples = [
      '[0.15s] [Service: auth-api] CPU: 12.4% | Memory: 142MB | P99: 14ms | Status: 200 OK',
      '[0.30s] [Service: checkout-worker] Ingesting 2,450 events/sec | Queue: 0 lag',
      '[0.45s] [Service: pgvector-search] Cache Hit Ratio: 94.2% | Vector Similarity avg: 0.89',
      '[0.60s] [Anomaly Watchdog] All 14 microservice health checks reporting GREEN.',
      '[0.75s] ✨ Live observability heartbeat healthy (Uptime: 99.98%).'
    ];

    samples.forEach((sample, idx) => {
      setTimeout(() => {
        setLogs(prev => [...prev, sample]);
        if (idx === samples.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 300);
    });
  };

  const executeCurrentDemo = () => {
    if (isRunning) return;
    if (activeDemo === 'agent') runAgentDemo();
    if (activeDemo === 'lock') runLockDemo();
    if (activeDemo === 'metrics') runMetricsDemo();
  };

  useEffect(() => {
    setLogs([]);
    setIsRunning(false);
  }, [activeDemo]);

  return (
    <section id="playground" className="py-20 md:py-28 relative border-t border-slate-900 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest font-bold mb-3 rounded-full">
            04 // INTERACTIVE_SIMULATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Live Architecture Sandbox
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-light">
            Test Yasir's engineered algorithms, autonomous agent pipelines, and concurrency handling in real time.
          </p>
        </div>

        {/* Sandbox Container */}
        <div className="rounded-sm bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          {/* Top Demo Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveDemo('agent')}
                className={`px-3.5 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeDemo === 'agent'
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Autonomous Agent</span>
              </button>

              <button
                onClick={() => setActiveDemo('lock')}
                className={`px-3.5 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeDemo === 'lock'
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Redis Distributed Lock</span>
              </button>

              <button
                onClick={() => setActiveDemo('metrics')}
                className={`px-3.5 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeDemo === 'metrics'
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Telemetry Stream</span>
              </button>
            </div>

            {/* Execute Button */}
            <button
              onClick={executeCurrentDemo}
              disabled={isRunning}
              id="sandbox-execute-btn"
              className="px-6 py-2.5 bg-white text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_-3px_rgba(34,211,238,0.4)] disabled:opacity-50 flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin" />
                  <span>Executing...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Run Simulation</span>
                </>
              )}
            </button>
          </div>

          {/* Context Controls */}
          {activeDemo === 'agent' && (
            <div className="mb-4">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1.5 font-bold">
                Task Prompt to Agent Orchestrator:
              </label>
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
          )}

          {activeDemo === 'lock' && (
            <div className="grid grid-cols-3 gap-3 mb-4 font-mono">
              <div className="p-3 bg-slate-950 border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Available Stock</div>
                <div className="text-xl font-bold text-white">{inventoryCount}</div>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Orders Confirmed</div>
                <div className="text-xl font-bold text-cyan-400">{successOrders}</div>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Blocked Oversells</div>
                <div className="text-xl font-bold text-rose-400">{rejectedOrders}</div>
              </div>
            </div>
          )}

          {/* Terminal Output Screen */}
          <div className="rounded-sm bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-300 min-h-[220px] max-h-[300px] overflow-y-auto flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="text-slate-500 flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>runtime@yasir-cluster:~$ execution_stream --verbose</span>
                </div>
                <span className="text-[10px] text-cyan-400 uppercase tracking-wider font-bold">STATUS: READY</span>
              </div>

              {logs.length === 0 ? (
                <div className="text-slate-500 italic py-8 text-center">
                  Click "Run Simulation" above to execute this live architecture workflow.
                </div>
              ) : (
                logs.map((log, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {log.includes('✨') ? (
                      <span className="text-cyan-400 font-bold">{log}</span>
                    ) : log.includes('[REJECTED]') ? (
                      <span className="text-rose-400">{log}</span>
                    ) : log.includes('[OK]') ? (
                      <span className="text-emerald-300">{log}</span>
                    ) : (
                      <span className="text-slate-300">{log}</span>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="pt-2 mt-2 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
              <span>Environment: Node.js 20 • TypeScript 5.8 • Redis 7 • Postgres 16</span>
              <span className="text-cyan-500/80">Memory Footprint: 28MB</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
