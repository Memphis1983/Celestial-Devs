import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <footer className="relative z-10 bg-slate-950 border-t border-amber-500/15 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-slate-900 border border-amber-500/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="font-serif tracking-widest text-base font-bold text-gradient-gold block">
                  CELESTIAL DEVS
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-mono block">
                  AI Engineering Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed max-w-sm">
              Designing and engineering high-performance digital products, intelligent data systems, and cloud-native software infrastructure for forward-thinking organizations.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Verified Production Standards</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
              Studio Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('overview')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Services & Disciplines
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('estimator')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Architecture Builder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('architecture')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  The Celestial Stack
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Reference Blueprints
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Engineering Journal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  Engineering Principles
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Action */}
          <div className="md:col-span-4 space-y-4 p-6 rounded-2xl glass-card border border-amber-500/20">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
              Schedule an Engineering Review
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Schedule a technical consultation with our engineering team to evaluate architecture options, data storage, and custom software solutions.
            </p>
            <button
              onClick={onOpenContact}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 shadow-[0_0_15px_rgba(226,184,89,0.25)] transition-all cursor-pointer"
            >
              <span>Schedule Architecture Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:support@celestialdevs.in?subject=Engineering%20Consultation%20-%20Celestial%20Devs"
              className="block text-center text-xs text-slate-300 hover:text-amber-300 transition-colors font-mono"
            >
              support@celestialdevs.in
            </a>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Celestial Devs. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Engineering Principles</span>
            <span>•</span>
            <span>Security SLAs</span>
            <span>•</span>
            <span>Zero-Trust Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
