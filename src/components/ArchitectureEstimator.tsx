import React, { useState } from 'react';
import { Cpu, Sparkles, Send, CheckCircle2, AlertTriangle, Layers, Clock, ShieldCheck, Download, ArrowRight, Loader2, RefreshCw } from 'lucide-react';
import { ArchitectureBlueprint } from '../types';

interface ArchitectureEstimatorProps {
  onOpenContact: (blueprintTitle?: string) => void;
}

export const ArchitectureEstimator: React.FC<ArchitectureEstimatorProps> = ({ onOpenContact }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [targetScale, setTargetScale] = useState<'Standard' | 'Advanced' | 'Enterprise'>('Advanced');
  const [keyRequirements, setKeyRequirements] = useState<string[]>([
    'High Availability (99.9%)',
    'AI Agent Workflows',
    'Sub-100ms Latency'
  ]);

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [blueprint, setBlueprint] = useState<ArchitectureBlueprint | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleRequirement = (req: string) => {
    if (keyRequirements.includes(req)) {
      setKeyRequirements(keyRequirements.filter((r) => r !== req));
    } else {
      setKeyRequirements([...keyRequirements, req]);
    }
  };

  const handleQuickPreset = (title: string, desc: string, scale: 'Standard' | 'Advanced' | 'Enterprise') => {
    setProjectTitle(title);
    setProjectDescription(desc);
    setTargetScale(scale);
  };

  const handleGenerateBlueprint = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectDescription.trim()) {
      setErrorMsg('Please enter a brief project description or select a preset.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    const steps = [
      'Parsing product requirements & functional goals...',
      'Evaluating LLM model selection & RAG context limits...',
      'Designing vector indexing strategy & database schema...',
      'Synthesizing cloud infrastructure & zero-trust security model...'
    ];

    let currentStepIndex = 0;
    setLoadingStep(steps[0]);

    const stepInterval = setInterval(() => {
      currentStepIndex++;
      if (currentStepIndex < steps.length) {
        setLoadingStep(steps[currentStepIndex]);
      }
    }, 800);

    try {
      const response = await fetch('/api/generate-architecture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectTitle: projectTitle || 'AI-Powered Digital System',
          projectDescription,
          targetScale,
          keyRequirements: keyRequirements.join(', ')
        })
      });

      const data = await response.json();
      clearInterval(stepInterval);

      if (data.success && data.blueprint) {
        setBlueprint(data.blueprint);
      } else {
        throw new Error(data.error || 'Failed to generate blueprint.');
      }
    } catch (err: any) {
      clearInterval(stepInterval);
      setErrorMsg('Could not connect to AI Architecture Generator. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="estimator" className="py-24 relative z-10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>INTERACTIVE AI STUDIO TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            AI Architecture Blueprint Generator
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Describe your product concept or select an archetype below. Celestial Devs’ AI Studio Engine will synthesize a tailored technical architecture, stack recommendation, timeline, and risk mitigation plan in real time.
          </p>
        </div>

        {/* Generator Workbench */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Input Panel */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                1. System Parameters
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Powered by Gemini 2.5
              </span>
            </div>

            {/* Quick Presets */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-slate-300 block">Quick Archetype Presets:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    handleQuickPreset(
                      'Aegis Financial Audit Agent',
                      'Autonomous multi-agent platform for real-time SEC document parsing, clause verification, and vector search with RAG.',
                      'Enterprise'
                    )
                  }
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-500/20 text-[11px] text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-colors"
                >
                  Fintech RAG Agent
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleQuickPreset(
                      'SaaS High-Throughput Analytics Dashboard',
                      'Edge-rendered Next.js dashboard with WebSockets streaming and micro-frontend architecture for high-concurrency event telemetry.',
                      'Advanced'
                    )
                  }
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-500/20 text-[11px] text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-colors"
                >
                  SaaS Analytics Platform
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleQuickPreset(
                      'Intelligent Customer Service Bot Engine',
                      'Multi-modal AI support hub integrated with CRM, ticket routing, and zero-retention privacy guardrails.',
                      'Standard'
                    )
                  }
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-500/20 text-[11px] text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-colors"
                >
                  Automated Customer Hub
                </button>
              </div>
            </div>

            <form onSubmit={handleGenerateBlueprint} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Project Title (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. NextGen Autonomous Analytics Engine"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Product Vision & Goals <span className="text-amber-400">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your target application, key features, user flow, or business challenges you want to solve with code and AI..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              {/* Target Scale Selection */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Target Operating Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Standard', 'Advanced', 'Enterprise'] as const).map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => setTargetScale(scale)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                        targetScale === scale
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-semibold'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Requirements Checklist */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Key Technical Mandates
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'High Availability (99.9%)',
                    'AI Agent Workflows',
                    'Sub-100ms Latency',
                    'SOC2 / HIPAA Guardrails',
                    'Multi-Modal Vision/Audio',
                    'Real-Time WebSockets'
                  ].map((req) => {
                    const isSelected = keyRequirements.includes(req);
                    return (
                      <button
                        key={req}
                        type="button"
                        onClick={() => toggleRequirement(req)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] border transition-all ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-300'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {req}
                      </button>
                    );
                  })}
                </div>
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-400 font-medium">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 shadow-[0_0_20px_rgba(226,184,89,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Synthesizing Architecture...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Generate Technical Blueprint</span>
                  </>
                )}
              </button>
            </form>

          </div>

          {/* Blueprint Output Panel */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-6 min-h-[520px] flex flex-col justify-between">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                2. Generated Architectural Specification
              </span>
              {blueprint && (
                <button
                  onClick={() => setBlueprint(null)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Specification</span>
                </button>
              )}
            </div>

            {loading ? (
              <div className="my-auto py-16 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto animate-pulse">
                  <Cpu className="w-8 h-8 text-amber-400 animate-spin" />
                </div>
                <div className="space-y-2 max-w-sm mx-auto">
                  <span className="text-sm font-semibold text-white block">
                    Celestial Devs Architecture Engine
                  </span>
                  <p className="text-xs font-mono text-amber-300 animate-pulse">
                    {loadingStep}
                  </p>
                </div>
              </div>
            ) : blueprint ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {/* Header overview */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-white">
                      {blueprint.projectTitle}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                      {blueprint.estimatedComplexity} Complexity
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {blueprint.summary}
                  </p>
                </div>

                {/* Tech Stack Matrix */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                    Recommended Tech Stack
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-500 font-mono block">Frontend</span>
                      <span className="text-slate-200 font-medium block truncate">
                        {blueprint.recommendedStack.frontend.join(', ')}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-500 font-mono block">Backend</span>
                      <span className="text-slate-200 font-medium block truncate">
                        {blueprint.recommendedStack.backend.join(', ')}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-500 font-mono block">AI & ML</span>
                      <span className="text-slate-200 font-medium block truncate">
                        {blueprint.recommendedStack.aiAndMl.join(', ')}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-[10px] text-slate-500 font-mono block">Database</span>
                      <span className="text-slate-200 font-medium block truncate">
                        {blueprint.recommendedStack.databaseAndVector.join(', ')}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1 col-span-2 sm:col-span-2">
                      <span className="text-[10px] text-slate-500 font-mono block">Cloud & DevOps</span>
                      <span className="text-slate-200 font-medium block truncate">
                        {blueprint.recommendedStack.cloudAndDevOps.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Components */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                    Core Architectural Modules
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {blueprint.keyComponents.map((comp, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs space-y-1"
                      >
                        <span className="font-semibold text-white block">{comp.name}</span>
                        <p className="text-slate-400 text-[11px] leading-snug">{comp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline & Risk Mitigations */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Estimated Delivery</span>
                      <span className="text-sm font-bold text-white">
                        ~{blueprint.estimatedTimelineWeeks} Weeks Sprint Cycle
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">Security Protocol</span>
                      <span className="text-sm font-bold text-white">
                        {blueprint.securityAndCompliance[0] || 'Enterprise Encrypted'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Next Action */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    Ready to build this architecture with Celestial Devs?
                  </span>
                  <button
                    onClick={() => onOpenContact(blueprint.projectTitle)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:brightness-110 shadow-[0_0_15px_rgba(226,184,89,0.3)] transition-all cursor-pointer"
                  >
                    <span>Execute This Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ) : (
              <div className="my-auto py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-amber-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="max-w-xs mx-auto space-y-1">
                  <span className="text-sm font-medium text-slate-300 block">
                    No Architecture Generated Yet
                  </span>
                  <p className="text-xs text-slate-500">
                    Fill in your product vision on the left or select a preset to generate a full technical specification.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
