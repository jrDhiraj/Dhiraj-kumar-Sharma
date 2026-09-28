import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumePlainText = `DHIRAJ KUMAR SHARMA
India | Phone: 7762836569 | Email: jdhirajkumar7762@gmail.com
LinkedIn: https://www.linkedin.com/in/dhiraj-kumar-sharma-9054a5243/
GitHub: https://github.com/jrDhiraj/
Portfolio: https://dhiraj.techtis.in/

PROFESSIONAL SUMMARY
B.Tech graduate in Data Analytics and Data Science with hands-on experience in production planning, data analysis, reporting, and dashboard development using SAP, Excel, SQL, Python, Pandas, and Power BI. Currently working as Graduate Engineer Trainee (GET) at Pioneer with strong expertise in shop-floor production planning, KPI monitoring, target vs actual variance tracking, rejection/wastage, and machine downtime loss analysis. Comfortable analyzing structured datasets, identifying trends, and communicating findings through executive reports and interactive dashboards.

CORE SKILLS
- Production Analytics: Production KPI tracking, target vs actual analysis, rejection rate, wastage, downtime, loss analysis, SAP ERP production planning.
- Data Analysis: Advanced Excel, SQL, Python, Pandas, NumPy, data cleaning, exploratory data analysis (EDA).
- Reporting & BI: Power BI, Tableau, dashboards, KPI reporting, Pivot Tables, Power Query.
- Statistics & ML: Descriptive statistics, trend analysis, correlation, basic hypothesis testing, Scikit-learn.
- Tools: MySQL/PostgreSQL, Jupyter Notebook, VS Code, Streamlit, Git/GitHub, SAP ERP.

EXPERIENCE
Pioneer | Graduate Engineer Trainee (GET) - Production Planning & Analytics | Present
- Spearheading daily production planning and allocation using SAP ERP and Advanced Excel models.
- Tracking shift-wise and machine-wise Target vs. Actual outputs to identify performance gaps in real-time.
- Analyzing machine downtime, rejection rates, and scrap loss patterns to support operational efficiency.
- Generating daily and weekly executive MIS dashboards for plant management.

Pandit Soft Solutions | Data Analyst Intern | 1 Month
- Worked on data analysis tasks involving data cleaning, exploration, reporting, and visualization.
- Used analytical tools to identify trends and summarize business data for reporting.
- Applied Excel/Python-based analysis concepts to transform raw data into useful insights.

PySpider | Industrial Training – Data Analysis | 6 Months
- Completed hands-on industrial training focused on data analysis concepts and practical analytical workflows.
- Worked with Python, Pandas, SQL, and data visualization as part of data analysis practice.

SELECTED PROJECTS
Store Sales Analysis & Dashboard | Python, Pandas, SQL, Scikit-learn, Matplotlib, Streamlit
- Cleaned, processed, and analyzed 100,000+ rows of sales data to identify trends, patterns, and performance insights.
- Built analytical workflows and visualizations to support business-focused interpretation of sales data.
- Developed an interactive Streamlit application for presenting analysis and insights.

Production Analytics Project | Excel, SQL, Power BI
- Designed a production-analysis framework covering target vs actual output, rejection rate, wastage, downtime, and production loss.
- Planned product-wise, machine-wise, and shift-wise KPI reporting to identify performance gaps and potential root causes.
- Designed Power BI dashboard concepts for management reporting and production performance monitoring.

EDUCATION
Bachelor of Technology (B.Tech) | CGPA: 8.04
Baba Banda Singh Bahadur Engineering College
- Specialised in Data Analytics and Data Science with a CGPA of 8.04.

RELEVANT COURSEWORK / KNOWLEDGE
Data Analysis • SQL • Excel • Power BI • Statistics • Machine Learning • Data Visualization • Business Metrics

ADDITIONAL INFORMATION
- Available for full-time opportunities in Production Analytics, MIS/Reporting, Manufacturing Analytics, and Data Analysis.
- Willing to learn manufacturing processes, ERP systems, and production-specific KPIs.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(resumePlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([resumePlainText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dhiraj_Kumar_Sharma_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#0c0c0e] border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-black/80 shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Official Curriculum Vitae (ATS-Format)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              title="Copy resume text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors ml-1 cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Paper View */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-black font-sans text-neutral-200 print:bg-white print:text-black">
          {/* Header */}
          <div className="text-center pb-6 border-b border-neutral-800">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-400 mt-2 font-mono">
              <span>India</span>
              <span className="text-neutral-700">|</span>
              <span>Phone: {PERSONAL_INFO.phone}</span>
              <span className="text-neutral-700">|</span>
              <span>Email: {PERSONAL_INFO.email}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-cyan-400 mt-1 font-mono">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn Profile
              </a>
              <span className="text-neutral-700">|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub Repositories
              </a>
              <span className="text-neutral-700">|</span>
              <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noreferrer" className="hover:underline">
                Live Portfolio
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-neutral-800 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed text-justify">
              B.Tech graduate in Data Analytics and Data Science with hands-on experience in production planning, data analysis, reporting, and dashboard development using SAP, Excel, SQL, Python, Pandas, and Power BI. Currently working as Graduate Engineer Trainee (GET) at Pioneer with strong expertise in shop-floor production planning, KPI monitoring, target vs actual variance tracking, rejection/wastage, and machine downtime loss analysis. Comfortable analyzing structured datasets, identifying trends, comparing actual performance with targets, and communicating findings through executive reports and interactive dashboards.
            </p>
          </div>

          {/* Core Skills */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-neutral-800 pb-1 mb-2.5 font-mono">
              Core Skills
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-300">
              <p>
                <strong className="text-white font-semibold">Production Analytics:</strong> Production KPI tracking, target vs actual analysis, rejection rate, wastage, downtime, loss analysis, SAP ERP production planning.
              </p>
              <p>
                <strong className="text-white font-semibold">Data Analysis:</strong> Advanced Excel, SQL, Python, Pandas, NumPy, data cleaning, exploratory analysis.
              </p>
              <p>
                <strong className="text-white font-semibold">Reporting & BI:</strong> Power BI, Tableau, dashboards, KPI reporting, Pivot Tables, Power Query.
              </p>
              <p>
                <strong className="text-white font-semibold">Statistics:</strong> Descriptive statistics, trend analysis, correlation, basic hypothesis testing, Scikit-learn.
              </p>
              <p>
                <strong className="text-white font-semibold">Tools:</strong> MySQL/PostgreSQL, Jupyter Notebook, VS Code, Streamlit, Git/GitHub, SAP ERP.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-neutral-800 pb-1 mb-3 font-mono">
              Experience
            </h2>

            {/* Pioneer */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs mb-1">
                <span className="font-bold text-white text-sm">
                  Pioneer <span className="font-normal text-neutral-400">| Graduate Engineer Trainee (GET) - Production Planning</span>
                </span>
                <span className="text-neutral-400 font-mono">Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed">
                <li>Production planning and shift allocation using SAP ERP and Advanced Excel tracking models.</li>
                <li>Conducted shift-wise and machine-wise Target vs. Actual analysis to isolate bottlenecks in real-time.</li>
                <li>Tracked rejection rate, wastage, and machine downtime to minimize operational production loss.</li>
                <li>Generated daily and weekly management MIS reports and KPI dashboards.</li>
              </ul>
            </div>

            {/* Pandit Soft Solutions */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs mb-1">
                <span className="font-bold text-white text-sm">
                  Pandit Soft Solutions <span className="font-normal text-neutral-400">| Data Analyst Intern</span>
                </span>
                <span className="text-neutral-400 font-mono">1 Month</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed">
                <li>Worked on data analysis tasks involving data cleaning, exploration, reporting, and visualization.</li>
                <li>Used analytical tools to identify trends and summarize business data for reporting.</li>
                <li>Applied Excel/Python-based analysis concepts to transform raw data into useful insights.</li>
              </ul>
            </div>

            {/* PySpider */}
            <div className="mb-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs mb-1">
                <span className="font-bold text-white text-sm">
                  PySpider <span className="font-normal text-neutral-400">| Industrial Training – Data Analysis</span>
                </span>
                <span className="text-neutral-400 font-mono">6 Months</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed">
                <li>Completed hands-on industrial training focused on data analysis concepts and practical analytical workflows.</li>
                <li>Worked with Python, Pandas, SQL, and data visualization as part of data analysis practice.</li>
              </ul>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-neutral-800 pb-1 mb-3 font-mono">
              Selected Projects
            </h2>

            {/* Project 1 */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs mb-1">
                <span className="font-bold text-white text-sm">
                  Store Sales Analysis & Dashboard
                </span>
                <span className="text-neutral-400 font-mono">Python, Pandas, SQL, Scikit-learn, Matplotlib, Streamlit</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed">
                <li>Cleaned, processed, and analyzed 100,000+ rows of sales data to identify trends, patterns, and performance insights.</li>
                <li>Built analytical workflows and visualizations to support business-focused interpretation of sales data.</li>
                <li>Developed an interactive Streamlit application for presenting analysis and insights.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="mb-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs mb-1">
                <span className="font-bold text-white text-sm">
                  Production Analytics Project
                </span>
                <span className="text-neutral-400 font-mono">Excel, SQL, Power BI</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 leading-relaxed">
                <li>Designed a production-analysis framework covering target vs actual output, rejection rate, wastage, downtime, and production loss.</li>
                <li>Planned product-wise, machine-wise, and shift-wise KPI reporting to identify performance gaps and potential root causes.</li>
                <li>Designed Power BI dashboard concepts for management reporting and production performance monitoring.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-neutral-800 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
              <span className="font-bold text-white text-sm">
                Bachelor of Technology (B.Tech) - Data Analytics & Data Science
              </span>
              <span className="font-mono text-emerald-400 font-semibold">CGPA: 8.04</span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Baba Banda Singh Bahadur Engineering College · Graduated with a CGPA of 8.04.
            </p>
          </div>

          {/* Relevant Coursework */}
          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-neutral-800 pb-1 mb-2 font-mono">
              Relevant Coursework / Knowledge
            </h2>
            <p className="text-xs text-neutral-300 font-mono">
              Data Analysis · SQL · Excel · Power BI · Statistics · Machine Learning · Data Visualization · Business Metrics
            </p>
          </div>

          {/* Additional Information */}
          <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 space-y-1">
            <p>• Available for full-time opportunities in Production Analytics, MIS/Reporting, Manufacturing Analytics, and Data Analysis.</p>
            <p>• Willing to learn manufacturing processes, ERP systems, and production-specific KPIs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
