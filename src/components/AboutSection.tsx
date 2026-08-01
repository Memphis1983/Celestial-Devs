import React from 'react';
import { Sparkles, ShieldCheck, Zap, Layers, Compass, Code2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      title: 'Simplicity scales.',
      description: 'Complex abstractions introduce hidden failure modes. We favor straightforward, predictable architectures that are easy to reason about, debug, and maintain over time.',
      icon: ShieldCheck
    },
    {
      title: 'Every dependency has a cost.',
      description: 'We rigorously evaluate third-party packages and external integrations. Unchecked dependencies inflate bundle size, expand the attack surface, and complicate long-term maintenance.',
      icon: Zap
    },
    {
      title: 'Maintainability beats cleverness.',
      description: 'Code is read far more often than it is written. Clear, strictly typed, and well-structured codebases empower software teams to ship features with speed and confidence.',
      icon: Code2
    },
    {
      title: 'Reliability is a feature.',
      description: 'System uptime, deterministic error boundaries, and self-healing fallback mechanisms are non-negotiable requirements for any production application.',
      icon: Layers
    },
    {
      title: 'AI should reduce complexity—not create it.',
      description: 'Language models and automated processing pipelines are valuable when they simplify workflows, not when they introduce unneeded fragility or unverified outputs.',
      icon: Compass
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>CORE TENETS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Engineering Principles
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Celestial Devs operates as an engineering studio guided by strict technical tenets. We prioritize software craftsmanship, maintainability, and operational stability.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 space-y-4 border border-amber-500/15 group hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 w-fit text-amber-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Studio Engineering Highlights */}
        <div className="glass-card rounded-2xl p-8 border border-amber-500/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-serif font-bold text-gradient-gold block">
              Strict TypeScript
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              100% Type-Safe Codebases
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-serif font-bold text-gradient-gold block">
              Modular Architecture
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              5-Layer Fault Isolation
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-serif font-bold text-gradient-gold block">
              Cloud-Native
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Containerized Infrastructure
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-serif font-bold text-gradient-gold block">
              Deterministic Output
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Validated Execution Pipelines
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
