import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Zap, Play, Terminal, Layers } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  heroBgPath?: string;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenContact, heroBgPath }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Orbital Lights & Subtle Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-indigo-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(226,184,89,0.15)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI ENGINEERING STUDIO</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">ACCEPTING Q3/Q4 PARTNERSHIPS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.12]">
              We Engineer <br />
              <span className="text-gradient-gold">Intelligence</span> <br />
              Into Everything.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              Celestial Devs builds high-performance digital products, autonomous multi-agent pipelines, and cloud-native software that automate complex workflows, elevate customer experiences, and scale with your ambition.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('estimator')}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(226,184,89,0.3)] hover:shadow-[0_0_35px_rgba(226,184,89,0.5)] cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-slate-950" />
                <span>AI Architecture Builder</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium text-slate-200 bg-slate-900/80 border border-amber-500/20 hover:border-amber-400/50 hover:bg-slate-800/80 transition-all duration-300"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Feature Highlights Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">AI-First Core</span>
                  <span className="text-[11px] text-slate-400">Agents & RAG Pipelines</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Zero-Trust SLA</span>
                  <span className="text-[11px] text-slate-400">Enterprise Guardrails</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Sub-50ms Target</span>
                  <span className="text-[11px] text-slate-400">Edge Optimization</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Feature Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Frame Glow */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900/80 p-2 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group">
              
              {/* Asset Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-amber-500/15 bg-slate-950/80 rounded-t-xl text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  <span>celestial_studio_core.v2</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  <span className="text-[10px] text-emerald-400 uppercase">Live Node</span>
                </div>
              </div>

              {/* Generated Visual Asset or Celestial Rendering */}
              <div className="relative aspect-[4/3] rounded-b-xl overflow-hidden bg-slate-950">
                {heroBgPath ? (
                  <img
                    src={heroBgPath}
                    alt="Celestial Devs Studio Visual"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 flex items-center justify-center p-6 text-center">
                    <Sparkles className="w-12 h-12 text-amber-400 animate-pulse" />
                  </div>
                )}

                {/* Overlay Floating Specs Widget */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-amber-500/20 shadow-2xl flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                      Autonomous Intelligence Gateway
                    </span>
                    <span className="text-xs font-medium text-white">
                      Multi-LLM Routing & Deterministic RAG
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('estimator')}
                    className="p-2.5 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-300 hover:bg-amber-500/30 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Orbiting Ring graphic ornament */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-amber-500/20 border-dashed animate-spin [animation-duration:30s] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
