import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { BlogSection } from './components/BlogSection';
import { BlogPage } from './components/BlogPage';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'blog'>('portfolio');
  const [blogInitialSlug, setBlogInitialSlug] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#blog')) {
        const parts = hash.split('/');
        const slug = parts[1] || null;
        setBlogInitialSlug(slug);
        setCurrentPage('blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#portfolio' || hash === '' || hash.startsWith('#about') || hash.startsWith('#experience') || hash.startsWith('#skills') || hash.startsWith('#projects') || hash.startsWith('#contact')) {
        setCurrentPage('portfolio');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToBlog = (slug?: string) => {
    setBlogInitialSlug(slug || null);
    setCurrentPage('blog');
    window.location.hash = slug ? `#blog/${slug}` : '#blog';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPortfolio = () => {
    setCurrentPage('portfolio');
    setBlogInitialSlug(null);
    window.location.hash = '#portfolio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    if (currentPage !== 'portfolio') {
      setCurrentPage('portfolio');
      window.location.hash = '#contact';
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If on Blog Page, render full dedicated Blog View
  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        <BlogPage
          onBackToPortfolio={navigateToPortfolio}
          initialPostSlug={blogInitialSlug}
        />
        <Footer
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => {
            navigateToPortfolio();
            setTimeout(scrollToContact, 200);
          }}
        />
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    );
  }

  // Otherwise, render full Portfolio Page
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
        onNavigateToBlog={() => navigateToBlog()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={scrollToContact}
          onNavigateToBlog={() => navigateToBlog()}
        />

        {/* Experience & Education */}
        <ExperienceTimeline />

        {/* Core Skills & Tools - Zero Progress Bars */}
        <SkillsSection />

        {/* Selected GitHub Projects */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Technical Blog Preview */}
        <BlogSection
          onNavigateToBlog={navigateToBlog}
          onOpenWriter={() => navigateToBlog()}
        />

        {/* Professional Contact & Networking */}
        <ContactSection />
      </main>

      {/* Reciprocal Clean Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
