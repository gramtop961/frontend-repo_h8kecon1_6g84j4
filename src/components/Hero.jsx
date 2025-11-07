import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, MessageSquare, Rocket, Shield, Star } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/90">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-white/70 text-xs uppercase tracking-widest">{label}</p>
      <p className="text-white font-semibold">{value}</p>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-1/2 translate-x-1/2 md:right-10 md:translate-x-0 h-64 w-64 md:h-80 md:w-80 bg-fuchsia-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 h-64 w-64 md:h-80 md:w-80 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Star className="h-3.5 w-3.5 text-yellow-300" />
              Premium Flutter · Mobile-first · MVPs at speed
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Crafting world‑class Flutter apps for founders who move fast
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl">
              I design and build elegant, scalable mobile experiences — from social and chat products to polished MVPs that impress investors. Thoughtful UX, lightning performance, and brand‑level finish.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:founder@yourdomain.com?subject=Build%20my%20Flutter%20app"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition"
              >
                Let's collaborate <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-semibold hover:bg-white/15 border border-white/10"
              >
                View featured work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-5 max-w-lg">
              <Stat icon={Rocket} label="MVPs launched" value="30+" />
              <Stat icon={MessageSquare} label="Chat/Social" value="Realtime & scalable" />
              <Stat icon={Shield} label="Quality" value="Pixel‑perfect UI" />
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[500px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-10" />
    </section>
  );
}
