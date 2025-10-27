import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.18),rgba(59,130,246,0.1)_50%,rgba(249,115,22,0.1)_100%)]" />
          <div className="relative grid gap-6 p-8 sm:p-10 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Start building with Aerius today</h3>
              <p className="mt-2 text-white/70">Launch the agent in minutes, connect your tools, and watch work organize itself.</p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  className="w-full rounded-md border border-white/10 bg-neutral-950 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Get early access
                </button>
              </form>
              <p className="mt-3 text-xs text-white/50">Free 14‑day trial • No credit card • Cancel anytime</p>
            </div>
            <div className="relative h-48 rounded-xl border border-white/10 bg-gradient-to-tr from-purple-600/10 via-blue-600/10 to-orange-500/10 sm:h-56 md:h-full" aria-hidden>
              <div className="absolute inset-6 rounded-lg border border-white/10 bg-neutral-950/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
