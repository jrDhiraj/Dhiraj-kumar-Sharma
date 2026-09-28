import React, { useState } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onNavigateToBlog: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenContact,
  onNavigateToBlog,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', isBlog: false },
    { label: 'Experience', href: '#experience', isBlog: false },
    { label: 'Skills', href: '#skills', isBlog: false },
    { label: 'GitHub Projects', href: '#projects', isBlog: false },
    { label: 'Blog Publication', href: '#blog', isBlog: true },
  ];

  const handleLinkClick = (link: { label: string; href: string; isBlog: boolean }) => {
    setMobileMenuOpen(false);
    if (link.isBlog) {
      onNavigateToBlog();
      return;
    }
    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 flex items-center justify-center text-white text-xs font-mono font-bold shadow-md">
              DK
            </div>
            <span>{PERSONAL_INFO.name}</span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                className="hover:text-white transition-colors duration-150 relative py-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700/80 rounded-lg hover:bg-neutral-800 hover:text-white hover:border-neutral-600 transition-all whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-900/40 hover:shadow-blue-800/60 whitespace-nowrap cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="sm:hidden px-2.5 py-1 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-700 rounded-md"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900/80 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-700 rounded-lg"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View & Download Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              <Send className="w-4 h-4" />
              <span>Contact Dhiraj</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
