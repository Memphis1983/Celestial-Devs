import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { ArrowRight, X, Sparkles } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="portfolio" className="py-24 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>REFERENCE SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Example Solution Blueprints
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Architectural reference solutions engineered for enterprise workloads, document processing, and real-time event telemetry.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-amber-500/15 group transition-all duration-300 hover:border-amber-400/40"
            >
              <div>
                {/* Thumbnail Header */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[10px] font-mono">
                    {study.architectureType}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      {study.clientCategory}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {study.summary}
                  </p>

                  {/* Results metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800">
                    {study.results.map((res, idx) => (
                      <div key={idx} className="text-center p-2 rounded bg-slate-950/60 border border-slate-800">
                        <span className="text-xs font-bold text-amber-400 block">{res.value}</span>
                        <span className="text-[9px] text-slate-400 font-mono block truncate">{res.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveStudy(study)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-amber-500/20 hover:border-amber-400 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Examine Technical Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <button
              onClick={() => setActiveStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                {activeStudy.clientCategory}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {activeStudy.title}
              </h2>
              <p className="text-sm text-amber-400 font-mono">
                {activeStudy.tagline}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase block">The Challenge</span>
                <p className="text-xs text-slate-300 leading-relaxed">{activeStudy.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase block">The Architectural Solution</span>
                <p className="text-xs text-slate-300 leading-relaxed">{activeStudy.solution}</p>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
                Architecture Specification Highlights
              </span>
              <div className="grid grid-cols-3 gap-3">
                {activeStudy.results.map((res, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center">
                    <span className="text-sm font-bold text-white block">{res.value}</span>
                    <span className="text-[10px] text-slate-300 font-mono block">{res.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveStudy(null)}
                className="px-6 py-2.5 rounded-full text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 cursor-pointer"
              >
                Close Specification
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
