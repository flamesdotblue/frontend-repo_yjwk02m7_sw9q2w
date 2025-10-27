import React from 'react';
import { Rocket, Shield, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 blur-sm opacity-70 group-hover:opacity-100 transition" />
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-neutral-900 ring-1 ring-white/10">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
          </div>
          <span className="text-lg font-semibold tracking-tight">Aerius</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#security" className="hover:text-white transition flex items-center gap-1">
            <Shield className="h-4 w-4" /> Security
          </a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-md text-sm text-white/90 hover:text-white transition">Sign in</a>
          <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50">
            <Rocket className="h-4 w-4" /> Start free
          </a>
        </div>
      </div>
    </header>
  );
}
