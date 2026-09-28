import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Building, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-black border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono">
              <Briefcase className="w-4 h-4" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Professional Experience &amp; Education
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              From academic specialization in data science to shop-floor production planning at Pioneer. Every role focused on turning raw numbers into operational clarity.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-neutral-400 font-mono">
            Full-time · Internships · Rigorous Industrial Training
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#0c0c0e] border border-neutral-800 rounded-xl p-6 sm:p-7 hover:border-neutral-700 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1 font-mono">
                    {exp.type === 'Education' ? (
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <Building className="w-3.5 h-3.5 text-cyan-400" />
                    )}
                    <span className={exp.type === 'Education' ? 'text-amber-400' : 'text-cyan-400'}>
                      {exp.organization}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                </div>

                {/* Unboxed Metadata Line with typographic separators */}
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono shrink-0">
                  <span className="text-emerald-400 font-semibold">{exp.period}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-2 mb-6">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tools Used Strip - Unboxed clean typography */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-400">
                <span className="text-neutral-500 font-medium">Applied Tools &amp; Environments:</span>
                {exp.toolsUsed.map((tool, idx) => (
                  <React.Fragment key={tool}>
                    <span className="text-neutral-200 font-mono bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">{tool}</span>
                    {idx < exp.toolsUsed.length - 1 && (
                      <span aria-hidden="true" className="text-neutral-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
