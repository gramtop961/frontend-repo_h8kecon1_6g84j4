import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                  Booking new projects
                </div>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">
                  Ready to launch a premium Flutter app?
                </h3>
                <p className="mt-2 text-white/80 max-w-xl">
                  If you value clean UX, fast execution, and a brand‑level finish, let's talk. I collaborate closely with founders and product teams.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:founder@yourdomain.com?subject=Project%20Inquiry%20—%20Flutter%20App"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition"
                >
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 font-semibold hover:bg-white/15 border border-white/10"
                >
                  Book a 20‑min intro <Calendar className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
