import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, TrendingUp, Layers, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedClone, setCopiedClone] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyClone = () => {
    if (project.githubUrl) {
      navigator.clipboard.writeText(`git clone ${project.githubUrl}.git`);
      setCopiedClone(true);
      setTimeout(() => setCopiedClone(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#0c0c0e] border border-neutral-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer border border-neutral-800"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="mb-6 pr-10">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono">
            Detailed Case Study · {project.category.toUpperCase()}
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h2>
          <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Quantified Metrics Row */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-black/80 border border-neutral-800 rounded-xl mb-6">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-lg sm:text-xl font-bold font-mono tabular-nums text-white">
                {metric.value}
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge vs Solution Breakdown */}
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-black/50 border border-neutral-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1.5 font-mono">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Operational Challenge</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 bg-black/50 border border-neutral-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1.5 font-mono">
              <Terminal className="w-4 h-4 shrink-0" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="p-4 bg-black/50 border border-neutral-800 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1.5 font-mono">
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span>Demonstrated Business Impact</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Execution Workflow Steps */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3 font-mono">
            Analytical &amp; Engineering Workflow
          </h4>
          <div className="space-y-2">
            {project.workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 bg-black/40 border border-neutral-800 rounded-lg text-xs text-neutral-300"
              >
                <span className="font-mono text-xs text-cyan-400 font-semibold w-5 shrink-0">
                  {idx + 1}.
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Repository Actions */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <span className="text-neutral-500 font-medium">Stack:</span>
            {project.tools.map((tool, idx) => (
              <span key={tool} className="text-neutral-300 font-mono">
                {tool}
                {idx < project.tools.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyClone}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>{copiedClone ? 'Clone Command Copied!' : 'Copy Clone Command'}</span>
            </button>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-900/40"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Open Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
