import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background aura gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-600/30 via-blue-500/20 to-orange-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
              Central AI for teams & projects
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Run your business with one smart agent
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              Aerius is your company’s always‑on AI that plans sprints, coordinates people,
              answers questions, and keeps every project on track — automatically.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Try Aerius free
              </a>
              <a href="#features" className="inline-flex justify-center rounded-md bg-transparent ring-1 ring-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:text-white hover:ring-white/30 transition">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">✓</span>
                Faster delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-[10px]">✓</span>
                Fewer meetings
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/20 text-purple-300 text-[10px]">✓</span>
                Clear ownership
              </div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
            <div className="absolute inset-0 rounded-xl border border-white/10 bg-neutral-900/20">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
