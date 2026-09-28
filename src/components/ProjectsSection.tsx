import React, { useState } from 'react';
import {
  FolderGit2,
  ArrowUpRight,
  Github,
  Star,
  GitFork,
  ExternalLink,
  Layers,
  Sparkles,
  Bot,
  Database,
  BarChart3,
  Cpu
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'datascience' | 'production' | 'bi'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const categories = [
    { id: 'all', label: `All Projects (${PROJECTS.length})` },
    { id: 'datascience', label: 'Data Science & Python (100K+)' },
    { id: 'production', label: 'Production Analytics & SAP' },
    { id: 'ai', label: 'AI & Generative Models' },
    { id: 'bi', label: 'Supply Chain & BI' },
  ];

  return (
    <section id="projects" className="py-24 bg-black border-b border-neutral-800/80 relative">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-cyan-400 mb-3 font-mono">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider">GitHub Engineering Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Featured Projects &amp; Repositories
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-3 max-w-2xl leading-relaxed">
              Open-source machine learning models, 100k+ row data engineering pipelines, autonomous RL agents, and SAP production planning suites from my GitHub (<span className="text-cyan-400 font-mono">@jrDhiraj</span>).
            </p>
          </div>

          {/* Direct GitHub Profile Link */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 hover:border-neutral-600 rounded-xl transition-all duration-200 cursor-pointer shadow-sm group"
            >
              <Github className="w-4 h-4 text-cyan-400 group-hover:text-white" />
              <span>Explore GitHub (@jrDhiraj)</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#0c0c0e] backdrop-blur-md border border-neutral-800 rounded-xl overflow-x-auto mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                filter === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0c0c0e] hover:bg-[#121216] border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-cyan-950/20"
            >
              <div>
                {/* Top Bar: Repo Name + Stars / Forks */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-800 font-mono text-xs">
                  <div className="flex items-center gap-1.5 text-cyan-400 truncate">
                    <Github className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate font-semibold">{project.repoName}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-neutral-400 shrink-0 text-[11px]">
                    {project.stars && (
                      <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" />
                        <span>{project.stars}</span>
                      </span>
                    )}
                    {project.forks && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{project.forks}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-3">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Quantified Metrics Highlight Bar */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-black/80 border border-neutral-800 rounded-xl mb-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span className="block text-xs sm:text-sm font-bold font-mono tabular-nums text-white truncate">
                        {metric.value}
                      </span>
                      <span className="block text-[10.5px] text-neutral-400 truncate mt-0.5 font-medium">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Applied Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[11px] font-mono text-neutral-300 bg-neutral-950 border border-neutral-800 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

