import React from 'react';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      <Hero />
      <Bio />
      <Projects />
      <CTA />
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Your Name — Flutter Developer & Mobile App Specialist
        </div>
      </footer>
    </div>
  );
}

export default App;
