import React, { useState } from 'react';
import { TECH_STACK_LAYERS } from '../data/mockData';
import { Layers, ShieldCheck, BrainCircuit, Database, Server, Layout, ArrowRight } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState(2); // Default to Agent Engine

  const getLayerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-amber-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="architecture" className="py-24 relative z-10 bg-slate-950/60 border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>THE CELESTIAL STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Production Software Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Every application built by Celestial Devs follows a strict 5-layer modular architectural pattern. Designed for complete fault isolation, horizontal scale, and sub-second performance.
          </p>
        </div>

        {/* Layer Interactive Navigator */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Layer List Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {TECH_STACK_LAYERS.map((layer, idx) => {
              const isActive = activeLayerIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/20 via-slate-900 to-slate-900 border-amber-400 shadow-[0_0_20px_rgba(226,184,89,0.2)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/30 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-950 border border-amber-500/20">
                      {getLayerIcon(layer.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                        Layer 0{idx + 1}
                      </span>
                      <span className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {layer.name}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-amber-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Layer Deep Dive Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 space-y-6 relative overflow-hidden border border-amber-500/30">
            
            {/* Layer Badge Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  {getLayerIcon(TECH_STACK_LAYERS[activeLayerIndex].icon)}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                    Layer 0{activeLayerIndex + 1} Deep Dive
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {TECH_STACK_LAYERS[activeLayerIndex].name}
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                Isolation SLA: 100%
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {TECH_STACK_LAYERS[activeLayerIndex].description}
            </p>

            {/* Tech Badges */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                Approved Production Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK_LAYERS[activeLayerIndex].techs.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-amber-500/20 text-xs font-mono text-amber-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Architecture Flow Indicator */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Status: Verified Enterprise Stack</span>
              <span className="text-amber-400">Zero Technical Debt</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
