import React, { useState } from 'react';
import { Terminal, Play, Cpu, CheckCircle2, ShieldCheck, Database, Zap, RefreshCw, Layers } from 'lucide-react';

export const InteractiveSandbox: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(
    'Analyze Q2 Financial Disclosure for compliance anomalies and calculate EBIT margin.'
  );
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [logs, setLogs] = useState<string[]>([]);
  const [executionStats, setExecutionStats] = useState<{
    totalLatencyMs: number;
    vectorCacheHit: boolean;
    guardrailStatus: string;
    tokensProcessed: number;
  } | null>(null);

  const samplePrompts = [
    'Analyze Q2 Financial Disclosure for compliance anomalies and calculate EBIT margin.',
    'Route incoming tier-3 enterprise ticket and generate Contextual Resolution Plan.',
    'Scan patient clinical trial report, redact PII fields, and extract biomarker entities.'
  ];

  const executionSteps = [
    { title: 'Intent Classification & Model Selection', icon: Cpu, delay: 400 },
    { title: 'Semantic Vector Retrieval (Qdrant Index)', icon: Database, delay: 600 },
    { title: 'Zero-Trust Safety & PII Masking Check', icon: ShieldCheck, delay: 500 },
    { title: 'Gemini 2.5 Multi-Agent Reasoning', icon: Terminal, delay: 700 },
    { title: 'Response Verification & Format Validation', icon: CheckCircle2, delay: 400 }
  ];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);
    setLogs(['[00:00.000] Initializing Celestial Autonomous Agent Gateway...']);
    setExecutionStats(null);

    let step = 0;

    const executeNextStep = () => {
      if (step < executionSteps.length) {
        setCurrentStepIndex(step);
        const currentStep = executionSteps[step];
        setLogs((prev) => [
          ...prev,
          `[+${(step + 1) * 120}ms] Running: ${currentStep.title}...`
        ]);

        step++;
        setTimeout(executeNextStep, currentStep.delay);
      } else {
        // Complete
        setIsRunning(false);
        setCurrentStepIndex(executionSteps.length);
        setLogs((prev) => [
          ...prev,
          '[+248ms] Pipeline Execution Succeeded. Status: 200 OK. Guardrails Passed.'
        ]);
        setExecutionStats({
          totalLatencyMs: 248,
          vectorCacheHit: true,
          guardrailStatus: '100% Passed (Zero Hallucination)',
          tokensProcessed: 1420
        });
      }
    };

    setTimeout(executeNextStep, 300);
  };

  return (
    <section className="py-24 relative z-10 bg-slate-950/80 border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>LIVE AGENT SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            See How Celestial Agents Execute Tasks
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Test our agent orchestration framework in action. Experience how multi-agent routers, vector lookups, and zero-trust guardrails process enterprise prompts with microsecond latency.
          </p>
        </div>

        {/* Sandbox Console Interface */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                Select Simulation Scenario:
              </span>
              <div className="space-y-2">
                {samplePrompts.map((promptText, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPrompt(promptText)}
                    className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all ${
                      selectedPrompt === promptText
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Scenario 0{idx + 1}: {promptText}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-300 block">Prompt Payload:</span>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 leading-relaxed">
                "{selectedPrompt}"
              </div>
            </div>

            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="w-full py-3.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 shadow-[0_0_20px_rgba(226,184,89,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>{isRunning ? 'Running Agent Simulation...' : 'Run Agent Pipeline Simulation'}</span>
            </button>

          </div>

          {/* Console Execution Output Column */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 space-y-6 min-h-[420px]">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <span>celestial_agent_router.log</span>
              </div>
              <span>Protocol: SSE / HTTP2</span>
            </div>

            {/* Pipeline Visual Node Progress */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Execution Pipeline Nodes
              </span>
              <div className="grid grid-cols-5 gap-1.5">
                {executionSteps.map((stepItem, idx) => {
                  const StepIcon = stepItem.icon;
                  const isCompleted = currentStepIndex > idx;
                  const isCurrent = currentStepIndex === idx;

                  return (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        isCompleted
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : isCurrent
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300 animate-pulse'
                          : 'bg-slate-950/60 border-slate-800 text-slate-600'
                      }`}
                    >
                      <StepIcon className="w-4 h-4 mx-auto mb-1" />
                      <span className="text-[9px] font-mono block truncate">
                        Step 0{idx + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Terminal Log Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5 h-48 overflow-y-auto">
              {logs.length === 0 ? (
                <span className="text-slate-600 italic">
                  Press 'Run Agent Pipeline Simulation' to start execution sequence...
                </span>
              ) : (
                logs.map((logLine, idx) => (
                  <p
                    key={idx}
                    className={
                      logLine.includes('Succeeded')
                        ? 'text-emerald-400 font-bold'
                        : 'text-slate-300'
                    }
                  >
                    {logLine}
                  </p>
                ))
              )}
            </div>

            {/* Benchmark Stats Output */}
            {executionStats && (
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-800 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-amber-500/20">
                  <span className="text-slate-500 text-[10px] block">Execution Time</span>
                  <span className="text-amber-400 font-bold">{executionStats.totalLatencyMs} ms</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-amber-500/20">
                  <span className="text-slate-500 text-[10px] block">Vector Cache</span>
                  <span className="text-emerald-400 font-bold">Hit (Qdrant Index)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-amber-500/20">
                  <span className="text-slate-500 text-[10px] block">Guardrails</span>
                  <span className="text-white font-bold">100% Passed</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
