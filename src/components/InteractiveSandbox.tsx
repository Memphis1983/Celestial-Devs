import React, { useState } from 'react';
import { Terminal, Play, Cpu, CheckCircle2, ShieldCheck, Database } from 'lucide-react';

export const InteractiveSandbox: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(
    'Extract structured compliance data and verify clauses from a document payload.'
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
    'Extract structured compliance data and verify clauses from a document payload.',
    'Route incoming support request and synthesize resolution context.',
    'Process unstructured record payload, sanitize fields, and extract target entities.'
  ];

  const executionSteps = [
    { title: 'Intent Classification & Model Selection', icon: Cpu, delay: 400 },
    { title: 'Semantic Vector Retrieval (Vector Index)', icon: Database, delay: 500 },
    { title: 'Zero-Trust Safety & PII Masking Check', icon: ShieldCheck, delay: 400 },
    { title: 'Structured Model Pipeline Execution', icon: Terminal, delay: 600 },
    { title: 'Response Verification & Format Validation', icon: CheckCircle2, delay: 400 }
  ];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);
    setLogs(['[00:00.000] Initializing Execution Gateway...']);
    setExecutionStats(null);

    let step = 0;

    const executeNextStep = () => {
      if (step < executionSteps.length) {
        setCurrentStepIndex(step);
        const currentStep = executionSteps[step];
        setLogs((prev) => [
          ...prev,
          `[+${(step + 1) * 110}ms] Running: ${currentStep.title}...`
        ]);

        step++;
        setTimeout(executeNextStep, currentStep.delay);
      } else {
        // Complete
        setIsRunning(false);
        setCurrentStepIndex(executionSteps.length);
        setLogs((prev) => [
          ...prev,
          '[+240ms] Pipeline Execution Succeeded. Status: 200 OK. Guardrails Passed.'
        ]);
        setExecutionStats({
          totalLatencyMs: 240,
          vectorCacheHit: true,
          guardrailStatus: 'Passed Verification',
          tokensProcessed: 1420
        });
      }
    };

    setTimeout(executeNextStep, 250);
  };

  return (
    <section className="py-24 relative z-10 bg-slate-950/80 border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Terminal className="w-4 h-4 text-amber-400" />
            <span>INTERACTIVE EXECUTION PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Observe Pipeline Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Test our task orchestration framework in action. Observe how model routing, semantic vector search, and safety validation layers execute structured workflows.
          </p>
        </div>

        {/* Sandbox Console Interface */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                Select Test Scenario:
              </span>
              <div className="space-y-2">
                {samplePrompts.map((promptText, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPrompt(promptText)}
                    className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer ${
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
              <span>{isRunning ? 'Executing Pipeline Simulation...' : 'Run Pipeline Simulation'}</span>
            </button>

          </div>

          {/* Console Execution Output Column */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 space-y-6 min-h-[420px]">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <span>celestial_execution_router.log</span>
              </div>
              <span>Protocol: SSE / HTTP2</span>
            </div>

            {/* Pipeline Visual Node Progress */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Pipeline Execution Nodes
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
                  Press 'Run Pipeline Simulation' to start execution sequence...
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
                  <span className="text-emerald-400 font-bold">Search Hit</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-amber-500/20">
                  <span className="text-slate-500 text-[10px] block">Guardrails</span>
                  <span className="text-white font-bold">{executionStats.guardrailStatus}</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
