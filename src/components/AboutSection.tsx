import React from 'react';
import { Sparkles, ShieldCheck, Zap, Layers, Compass, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      title: 'Precision Engineering Over Hype',
      description: 'We do not build speculative wrappers or unmaintainable prototypes. Every line of code is typed, tested, and optimized for long-term production stability.',
      icon: ShieldCheck
    },
    {
      title: 'Zero-Noise Architecture',
      description: 'Complex software should feel simple. We eliminate redundant microservices, unneeded dependencies, and bloated UI components to maximize speed.',
      icon: Zap
    },
    {
      title: 'Security-First AI Guardrails',
      description: 'Generative AI must never leak customer data or hallucinate mission-critical decisions. We embed deterministic validation layers into every LLM pipeline.',
      icon: Layers
    },
    {
      title: 'Scalable Cloud Foundations',
      description: 'Built on Google Cloud Run and Kubernetes, our infrastructures scale automatically from zero to millions of active requests with minimal cloud overhead.',
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
            <span>STUDIO MANIFESTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Crafting Software with Celestial Precision
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Celestial Devs is a specialized AI Engineering Studio. We operate at the intersection of modern full-stack engineering, cloud infrastructure, and artificial intelligence.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
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

        {/* Studio Operating Stats */}
        <div className="glass-card rounded-2xl p-8 border border-amber-500/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-gradient-gold block">
              99.99%
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              System Uptime Target
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-gradient-gold block">
              &lt; 50ms
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              API Edge Latency Target
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-gradient-gold block">
              100%
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Typed TypeScript
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-gradient-gold block">
              Zero
            </span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Unverifiable AI Hallucinations
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
