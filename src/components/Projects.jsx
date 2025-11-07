import React from 'react';
import { ExternalLink, MessageCircle, Users, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Circles — Social micro‑communities',
    description:
      'A beautifully branded social app with private circles, realtime chat, and creator tools. Built to scale with clean architecture and secure auth.',
    badges: ['Flutter', 'Firebase', 'Realtime', 'Design System'],
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop',
    link: '#',
    icon: Users,
  },
  {
    title: 'Pulse — Team chat for fast startups',
    description:
      'High‑performance messaging with threads, presence, reactions, and file sharing. Production‑ready MVP delivered in weeks, not months.',
    badges: ['Flutter', 'WebSockets', 'Encryption', 'CI/CD'],
    image:
      'https://images.unsplash.com/photo-1558888400-16b61d49a1fb?q=80&w=1600&auto=format&fit=crop',
    link: '#',
    icon: MessageCircle,
  },
  {
    title: 'LaunchKit — MVP accelerator',
    description:
      'A modular starter for idea‑stage founders: auth, profiles, payments, and analytics. Opinionated UX and a premium brand out of the box.',
    badges: ['Flutter', 'Supabase', 'Payments', 'Analytics'],
    image:
      'https://images.unsplash.com/photo-1551650995-de6a6b95f441?q=80&w=1600&auto=format&fit=crop',
    link: '#',
    icon: Zap,
  },
];

const Card = ({ project }) => {
  const Icon = project.icon;
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-white/80">
          <Icon className="h-4 w-4" />
          <p className="text-xs uppercase tracking-widest">Featured</p>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-white/80 leading-relaxed">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.badges.map((b) => (
            <span key={b} className="text-[11px] rounded-full px-2.5 py-1 bg-white/10 text-white/80 border border-white/10">
              {b}
            </span>
          ))}
        </div>
        <a href={project.link} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 hover:text-cyan-200">
          See case study <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured projects</h2>
            <p className="mt-2 text-white/70">Select work spanning social, chat, and MVP accelerators.</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
