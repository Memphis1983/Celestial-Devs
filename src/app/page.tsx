import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-[#07090E] text-slate-100">
      <div className="max-w-md p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Project Initialized</span>
        </div>
        <h1 className="text-xl font-bold font-serif text-slate-100">
          Celestial Devs Architecture
        </h1>
        <p className="text-xs text-slate-400 leading-relaxed font-mono">
          Next.js 15 App Router structure configured. Ready for UI implementation upon approval.
        </p>
      </div>
    </main>
  );
}
