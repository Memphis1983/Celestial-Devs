import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { Cpu, Layout, Cloud, Zap, ArrowRight, Sparkles, Code2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (prefillCategory?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'ai', label: 'AI & Autonomous Agents' },
    { id: 'web', label: 'SaaS & Web Systems' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'automation', label: 'Workflow Automation' }
  ];

  const filteredServices = SERVICES_DATA.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-amber-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 bg-slate-950/40 border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Architectural Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              We design, build, and deploy end-to-end intelligent software systems. Every component is engineered with enterprise security, sub-second latency, and long-term maintainability.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-amber-500/15 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold shadow-[0_0_15px_rgba(226,184,89,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 group"
            >
              <div className="space-y-4">
                
                {/* Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-400/50 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-300 text-[11px] font-mono">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed mt-2">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Deliverables Preview */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Key Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.slice(0, 4).map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-slate-300 truncate"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400">
                  {service.sla}
                </span>

                <button
                  onClick={() => setActiveModalService(service)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-200 group-hover:translate-x-1 transition-all"
                >
                  <span>Detailed Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
