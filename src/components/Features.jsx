import React from 'react';
import { Brain, Bot, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Understands your org',
    desc: 'Connects to tools and knowledge to reason about goals, dependencies, and priorities.'
  },
  {
    icon: Bot,
    title: 'Coordinates work',
    desc: 'Creates and assigns tasks, updates statuses, and drives projects to completion.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade privacy',
    desc: 'Granular controls, audit trails, SOC2-ready practices, and on-prem options.'
  },
  {
    icon: Rocket,
    title: 'Deliver twice as fast',
    desc: 'Automations reduce busywork so teams focus on outcomes, not process.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your AI Chief of Staff</h2>
          <p className="mt-3 text-white/70">
            Aerius sits at the center of your operations to plan, coordinate, and communicate.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600/20 via-blue-600/20 to-orange-500/20 ring-1 ring-white/10">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="security" className="mt-12 rounded-xl border border-white/10 bg-gradient-to-tr from-purple-600/10 via-blue-600/10 to-orange-500/10 p-6 text-sm text-white/70">
          <p>
            Aerius is built for modern security: data encryption in transit and at rest, role-based access, and
            private knowledge boundaries so information stays exactly where it should.
          </p>
        </div>
      </div>
    </section>
  );
}
