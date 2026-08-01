import React, { useState } from 'react';
import { INSIGHTS_ARTICLES } from '../data/mockData';
import { Article } from '../types';
import { BookOpen, ArrowRight, X, Sparkles, Clock, Tag } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="insights" className="py-24 relative z-10 bg-slate-950/40 border-t border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>ENGINEERING SPECS & INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Whitepapers & Technical Research
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              In-depth analysis on RAG determinism, serverless container cold starts, and luxury AI-native UI design systems. Written by Celestial Devs engineers.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {INSIGHTS_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-6 border border-amber-500/15 group hover:border-amber-400/40 transition-all duration-300"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-300">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[10px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-white block">{article.author.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono block">{article.author.role}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(article)}
                  className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Drawer Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                {selectedArticle.category} • {selectedArticle.date}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {selectedArticle.title}
              </h2>
              <div className="text-xs text-slate-400 font-mono pt-1">
                By {selectedArticle.author.name} ({selectedArticle.author.role})
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light border-t border-b border-slate-800 py-4">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-amber-300 text-xs font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2 rounded-full text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
