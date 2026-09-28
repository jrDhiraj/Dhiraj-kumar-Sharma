import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  Building,
  User,
  Sparkles,
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    purpose: 'Full-time Opportunity (Production / Data Analytics)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.purpose} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Dhiraj,\n\nMy name is ${formData.name} from ${formData.organization || 'our team'}.\n\n` +
      `Inquiry Category: ${formData.purpose}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name} (${formData.email})`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-black border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono">
              <MessageSquare className="w-4 h-4" />
              <span>Professional Networking</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Let's Discuss Analytics, Operations &amp; Opportunities
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              Currently open for full-time opportunities in Production Analytics, MIS/Reporting, Manufacturing Analytics, and Data Science.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-emerald-400">
            Fast Response · India Standard Time
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Reachout Coordinates - 5 Cols */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Contact Card */}
            <div className="bg-[#0c0c0e] border border-neutral-800 rounded-xl p-6">
              <h3 className="text-base font-bold text-white mb-2">
                Direct Contact Information
              </h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Feel free to connect directly via email, phone, or LinkedIn for interview schedules, job opportunities, or analytical consulting.
              </p>

              <div className="space-y-4 text-xs">
                {/* Email */}
                <div className="flex items-start justify-between p-3 bg-black/60 border border-neutral-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <div className="text-[11px] text-neutral-500 font-medium">Primary Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-white hover:text-cyan-400 transition-colors font-mono"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedField === 'email' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between p-3 bg-black/60 border border-neutral-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[11px] text-neutral-500 font-medium">Direct Phone &amp; WhatsApp</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-white hover:text-cyan-400 transition-colors font-mono"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedField === 'phone' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-3 bg-black/60 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-[11px] text-neutral-500 font-medium">LinkedIn Profile</div>
                      <div className="text-white group-hover:text-cyan-400 transition-colors font-mono text-[11.5px]">
                        linkedin.com/in/dhiraj-kumar-sharma
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-3 bg-black/60 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-purple-400 shrink-0" />
                    <div>
                      <div className="text-[11px] text-neutral-500 font-medium">GitHub Code Repositories</div>
                      <div className="text-white group-hover:text-cyan-400 transition-colors font-mono text-[11.5px]">
                        github.com/jrDhiraj
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300" />
                </a>
              </div>
            </div>

            {/* Target Role Preferences Box */}
            <div className="bg-[#0c0c0e] border border-neutral-800 rounded-xl p-5 text-xs text-neutral-300 space-y-2">
              <div className="flex items-center gap-2 text-neutral-400 font-medium uppercase tracking-wider text-[11px] font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Target Roles &amp; Relocation</span>
              </div>
              <p className="leading-relaxed">
                Available for full-time on-site, hybrid, or remote roles in Production Analytics, MIS Reporting, Manufacturing Operations, and Data Analytics across India.
              </p>
            </div>
          </div>

          {/* Interactive Networking Contact Form - 7 Cols */}
          <div className="lg:col-span-7 bg-[#0c0c0e] border border-neutral-800 rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Message Prepared Successfully
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your message regarding{' '}
                  <span className="text-cyan-400">{formData.purpose}</span> has been formatted.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getMailtoLink()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shadow-md shadow-blue-900/40"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Mail Client</span>
                  </a>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `Inquiry from ${formData.name} (${formData.email}) - ${formData.organization}\nPurpose: ${formData.purpose}\n\n${formData.message}`
                      );
                      handleCopy('copied', 'message-body');
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedField === 'message-body' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-neutral-400" />
                        <span>Copy Message Text</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        purpose: 'Full-time Opportunity (Production / Data Analytics)',
                        message: '',
                      });
                    }}
                    className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-white mb-1">
                  Send a Professional Inquiry
                </h3>
                <p className="text-xs text-neutral-400 mb-4">
                  Fill in the details below to initiate contact directly with Dhiraj.
                </p>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Hiring Lead"
                        className="w-full pl-9 pr-3 py-2 bg-black border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full pl-9 pr-3 py-2 bg-black border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Company / Organization & Purpose */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Manufacturing Co. / Tech Corp"
                        className="w-full pl-9 pr-3 py-2 bg-black border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full bg-black border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Full-time Opportunity (Production / Data Analytics)">
                        Full-time Role (Production / Analytics)
                      </option>
                      <option value="MIS & Reporting / Power BI Project">
                        MIS &amp; Power BI Dashboard Project
                      </option>
                      <option value="Technical Collaboration / Open Source">
                        Technical Collaboration
                      </option>
                      <option value="Coffee Chat / General Networking">
                        General Professional Networking
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the opportunity, line optimization project, or discussion agenda..."
                    className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500 font-mono">
                    All communications kept strictly confidential
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer shadow-md shadow-blue-900/40"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
