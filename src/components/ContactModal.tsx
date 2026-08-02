import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillCategory?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefillCategory
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: prefillCategory || 'Knowledge Retrieval & Data Systems',
    budget: '$50,000 - $100,000',
    timeline: '4 - 8 Weeks',
    details: ''
  });

  useEffect(() => {
    if (prefillCategory) {
      setFormData((prev) => ({ ...prev, projectType: prefillCategory }));
    }
  }, [prefillCategory]);

  const [loading, setLoading] = useState(false);
  const [receiptId, setReceiptId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in your name and work email.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/support@celestialdevs.in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New Celestial Devs Inquiry: ${formData.projectType}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await res.json();
      if (data.success) {
        setReceiptId(data.receiptId || `CD-${Math.floor(100000 + Math.random() * 900000)}`);
      } else {
        throw new Error(data.error || 'Failed to process inquiry.');
      }
    } catch (err) {
      setErrorMessage('Failed to send consultation request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setReceiptId(null);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Knowledge Retrieval & Data Systems',
      budget: '$50,000 - $100,000',
      timeline: '4 - 8 Weeks',
      details: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {receiptId ? (
          /* Success Receipt Card */
          <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 shadow-[0_0_20px_rgba(226,184,89,0.3)]">
              <CheckCircle2 className="w-8 h-8 text-amber-400" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                Inquiry Logged • Reference #{receiptId}
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">
                Architecture Review Requested
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Thank you, <span className="text-white font-medium">{formData.name}</span>. Our technical leadership team will review your project requirements for <span className="text-amber-300">{formData.projectType}</span> and contact you within 24 business hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400 space-y-1 text-left max-w-md mx-auto">
              <div><span className="text-slate-500">Company:</span> {formData.company || 'N/A'}</div>
              <div><span className="text-slate-500">Contact Email:</span> {formData.email}</div>
              <div><span className="text-slate-500">Budget Tier:</span> {formData.budget}</div>
              <div><span className="text-slate-500">Target Timeline:</span> {formData.timeline}</div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:brightness-110 shadow-[0_0_20px_rgba(226,184,89,0.3)] cursor-pointer"
            >
              Return to Celestial Devs Studio
            </button>
          </div>
        ) : (
          /* Intake Form */
          <div className="space-y-6">
            
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TECHNICAL INTAKE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Schedule an Architecture Review
              </h2>
              <p className="text-xs text-slate-300 font-light">
                Tell us about your product goals, technical constraints, or upcoming software initiative.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Work Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Enterprise Systems Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Project Category
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Knowledge Retrieval & Data Systems">Knowledge Retrieval & Data Systems</option>
                    <option value="High-Performance SaaS & Web Applications">High-Performance SaaS & Web Applications</option>
                    <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                    <option value="Workflow Automation & System Integration">Workflow Automation & System Integration</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Target Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000+">$100,000+ (Enterprise Custom)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Immediate (1-3 Weeks)">Immediate (1-3 Weeks)</option>
                    <option value="4 - 8 Weeks">4 - 8 Weeks</option>
                    <option value="Next Quarter (Q3/Q4)">Next Quarter (Q3/Q4)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Details & Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline key deliverables, integration targets, or technical benchmarks..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-rose-400 font-medium">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:brightness-110 shadow-[0_0_20px_rgba(226,184,89,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Logging Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Schedule Architecture Review</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <span>Prefer email?</span>
                <a
                  href="mailto:support@celestialdevs.in?subject=Project%20Inquiry%20-%20Celestial%20Devs"
                  className="text-amber-300 hover:text-amber-200 underline underline-offset-2"
                >
                  support@celestialdevs.in
                </a>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
