import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-black py-12 text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          <div>
            <div className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-neutral-400 mt-1 max-w-md">
              Industrial Production Planning &amp; Data Science Portfolio
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium text-neutral-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              GitHub Projects
            </a>
            <a href="#blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Resume
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-mono">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
            <span aria-hidden="true">·</span>
            <span className="text-cyan-400/80">dhiraj.techtis.in</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              title="Phone"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4 text-purple-400" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors cursor-pointer ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
