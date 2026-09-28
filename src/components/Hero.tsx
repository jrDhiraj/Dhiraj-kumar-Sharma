import React from 'react';
import {
  FileText,
  ArrowRight,
  Mail,
  BookOpen,
  Sliders,
  Cpu,
  BarChart3,
  Database,
  Radio
} from 'lucide-react';
import { HIGHLIGHT_STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onNavigateToBlog: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onOpenContact,
  onNavigateToBlog,
}) => {
  return (
    <section id="about" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-black text-white">
      {/* High-end ambient glow fields */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#26262615_1px,transparent_1px),linear-gradient(to_bottom,#26262615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_10%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Main Hero Copy - 7 Cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Executive Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 mb-6 font-medium shadow-sm w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold tracking-wide uppercase text-[11px] font-mono">
                Active Industrial Role
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-200">GET at Pioneer (Production Planning &amp; SAP)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
              Engineering Industrial Precision into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Data-Driven Production.
              </span>
            </h1>

            {/* Bio Narrative - Clean & Non-Redundant */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Graduate Engineer Trainee at <strong className="text-white font-semibold">Pioneer</strong> specializing in shop-floor production planning, SAP ERP, and industrial data analytics. Transforming shift schedules, downtime variances, and manufacturing datasets into actionable operational intelligence.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-800/60 cursor-pointer whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-neutral-600 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap backdrop-blur-sm"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </button>

              <button
                onClick={onNavigateToBlog}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Technical Blog</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume (CV)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Telemetry Card & High-Contrast Metrics - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Live Industrial Console Preview Card */}
            <div className="bg-[#0c0c0e] backdrop-blur-md border border-neutral-800 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold tracking-wider shadow-inner shrink-0 border border-cyan-400/30">
                    <Sliders className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">
                      Production &amp; Operations Console
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium">
                      Pioneer Manufacturing Analytics
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Operational
                </span>
              </div>

              {/* Live Plant Telemetry Bar */}
              <div className="p-3.5 bg-black/80 border border-neutral-800 rounded-xl mb-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span>Shop-Floor Telemetry</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">Active Run</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                  <div className="bg-[#141418] p-2 rounded-lg border border-neutral-800">
                    <span className="text-[10.5px] text-neutral-400 block">Shift Target</span>
                    <span className="text-white font-bold text-sm tabular-nums">1,400 Units</span>
                  </div>
                  <div className="bg-[#141418] p-2 rounded-lg border border-neutral-800">
                    <span className="text-[10.5px] text-neutral-400 block">Current Variance</span>
                    <span className="text-emerald-400 font-bold text-sm tabular-nums">+99.2% Target</span>
                  </div>
                </div>
              </div>

              {/* Core Analytical Strengths */}
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">SAP ERP &amp; Excel Modeling:</strong> Shift allocation, daily schedule sequencing, and shop-floor constraint optimization.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <BarChart3 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">OEE &amp; Downtime Analytics:</strong> Isolating root causes across machine breakdowns, changeover lag, and scrap rates.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Database className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white font-medium">Data Pipelines &amp; BI:</strong> Exploratory analytics and automated reporting with Python, Pandas, SQL, and Power BI.
                  </span>
                </div>
              </div>
            </div>

            {/* High-Impact Stat Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {HIGHLIGHT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0c0c0e] backdrop-blur-sm border border-neutral-800 rounded-xl p-4 flex flex-col justify-between hover:border-neutral-700 transition-colors"
                >
                  <span className="text-xl sm:text-2xl font-black text-white font-mono tabular-nums tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-400 mt-2 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
