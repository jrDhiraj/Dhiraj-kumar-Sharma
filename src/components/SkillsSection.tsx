import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  Database,
  BarChart3,
  Terminal,
  Activity,
  Award,
  CheckCircle2,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'production', label: 'Production Analytics & SAP' },
    { id: 'analysis', label: 'Data Analysis & SQL' },
    { id: 'bi', label: 'BI & Executive Reporting' },
    { id: 'stats', label: 'Statistics & Predictive ML' },
    { id: 'tools', label: 'Engineering Toolchain' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden border-b border-neutral-800/80">
      {/* Premium ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-cyan-400 mb-3 font-mono">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="uppercase tracking-wider">Engineered Competency Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Technical Prowess &amp; Industrial Rigor
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 mt-3 leading-relaxed">
              Bridging continuous assembly operations and modern data science. Evaluated by practical plant impact, reproducible code pipelines, and enterprise ERP governance.
            </p>
          </div>

          <div className="mt-6 lg:mt-0 flex items-center gap-3">
            <div className="p-3 bg-[#0c0c0e] border border-neutral-800 rounded-xl flex items-center gap-3 text-xs text-neutral-300">
              <Award className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white font-semibold">Dual Rigor:</strong> Shop-Floor SAP + Data Science (CGPA 8.04)
              </span>
            </div>
          </div>
        </div>

        {/* Category Segmented Control */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#0c0c0e] backdrop-blur-md border border-neutral-800 rounded-xl overflow-x-auto mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - Zero Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-[#0c0c0e] hover:bg-[#121216] border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-cyan-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Top Level and Context Line */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase border ${
                      skill.level === 'Production-Grade'
                        ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60'
                        : skill.level === 'Advanced'
                        ? 'bg-cyan-950/40 text-cyan-400 border-cyan-800/60'
                        : 'bg-indigo-950/40 text-indigo-300 border-indigo-800/60'
                    }`}
                  >
                    {skill.level}
                  </span>

                  <span className="text-[11px] text-neutral-400 font-mono truncate">
                    {skill.yearsOrContext}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {skill.name}
                </h3>

                {/* Practical Highlight Text */}
                <p className="text-xs text-neutral-300 leading-relaxed mb-5">
                  {skill.highlight}
                </p>
              </div>

              {/* Verified Tools Badges */}
              {skill.keyTools && skill.keyTools.length > 0 && (
                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Key Execution Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.keyTools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-[11px] font-mono text-neutral-300 bg-neutral-950 border border-neutral-800 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Executive Applied Rigor Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0c0c0e] via-[#111115] to-black border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack Operational Engineering Mindset</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Trained in rigorous data structures, statistical analysis, and machine learning at BBSBEC (CGPA 8.04), combined with active plant-floor responsibility at Pioneer for SAP master scheduling, loss metrics, and scrap reduction.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 shrink-0">
            <div className="text-left sm:text-right">
              <span className="block text-emerald-400 font-bold text-sm">Pioneer GET</span>
              <span className="text-neutral-400">Daily Production Planning</span>
            </div>
            <div className="w-px h-8 bg-neutral-800" />
            <div className="text-left sm:text-right">
              <span className="block text-cyan-400 font-bold text-sm">100K+ Data</span>
              <span className="text-neutral-400">Pandas &amp; SQL Pipelines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
