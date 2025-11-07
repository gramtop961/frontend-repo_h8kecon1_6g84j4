import React from 'react';

export default function Bio() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Mobile app specialist with a brand designer's eye</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I'm a freelance Flutter developer focused on crafting premium, high‑performing apps. I partner with funded startups and ambitious founders to ship social platforms, chat experiences, and scalable MVPs that feel like finished products from day one.
            </p>
            <p className="mt-3 text-white/80 leading-relaxed">
              Expect crisp UX, clean architecture, and a detail‑first approach to motion and micro‑interactions. I obsess over onboarding, empty states, and the little touches that make your product memorable.
            </p>
          </div>
          <div className="md:pl-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/70">Core strengths</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />Realtime chat & social graphs</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />MVP architecture and clean state management</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />Luxury branding and UI polish</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />App Store/Play Store readiness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
