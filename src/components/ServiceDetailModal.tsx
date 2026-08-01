import React from 'react';
import { X, CheckCircle2, ShieldCheck, Cpu, ArrowUpRight, Code2, Clock } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenContact: (prefillCategory?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenContact
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-black/90 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span>{service.badge}</span>
            <span>•</span>
            <span className="capitalize">{service.category} Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            {service.title}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            {service.fullDescription}
          </p>
        </div>

        {/* Core SLA & Fit Highlights */}
        <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block">Performance Target</span>
              <span className="text-sm font-semibold text-white">{service.sla}</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase block">Target Audience</span>
              <span className="text-sm text-slate-200">{service.idealFor}</span>
            </div>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider">
            Key Deliverables & Milestones
          </h3>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-950/50 border border-slate-800 text-xs text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Tech Stack */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider">
            Technical Stack & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Specification
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenContact(service.title);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 shadow-[0_0_20px_rgba(226,184,89,0.25)] transition-all"
          >
            <span>Initiate {service.title} Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
