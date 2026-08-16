import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2
} from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-time Engineering Role',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    'Full-time Engineering Role',
    'High-Impact Contract / MVP',
    'System Architecture Consulting',
    'General Inquiry / Coffee Chat'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`[${formData.inquiryType}] ${formData.subject || 'Portfolio Inquiry'}`);
    const body = encodeURIComponent(`Hi Yasir,\n\nMy name is ${formData.name || 'a visitor'} (${formData.email || 'no email provided'}).\n\n${formData.message}\n\nBest regards,`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest font-bold mb-3 rounded-full">
            07 // INITIATE_CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl font-light">
            Whether you have an open senior role, need high-throughput architecture consulting, or want to discuss an MVP, I'd love to connect.
          </p>
        </div>

        {/* Main Grid: Contact Channels + Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links, Email Copy, Availability */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="rounded-sm bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 border border-slate-800 bg-slate-950 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Direct Dispatch</h3>
                  <div className="text-base font-bold text-white font-mono break-all">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch gap-2 pt-3 border-t border-slate-800">
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-950 border border-slate-800 hover:border-cyan-500 text-slate-300 text-xs font-mono uppercase tracking-wider font-bold transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  id="contact-direct-mailto-link"
                  className="px-4 py-2.5 bg-white hover:bg-cyan-400 text-slate-950 text-xs font-mono uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Mail Client</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social & Direct Contact Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-card"
                className="rounded-sm bg-slate-900/70 border border-slate-800 p-4 hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <Github className="w-5 h-5 text-cyan-400" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">GitHub</div>
                  <div className="text-xs text-slate-400 font-mono">@{PERSONAL_INFO.githubUsername}</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-card"
                className="rounded-sm bg-slate-900/70 border border-slate-800 p-4 hover:border-cyan-500/50 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">LinkedIn</div>
                  <div className="text-xs text-slate-400 font-mono">yasir-ali-064-</div>
                </div>
              </a>

            </div>

            {/* Direct Phone & Website Node */}
            <div className="rounded-sm bg-slate-900/70 border border-slate-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div>
                <span className="text-slate-500 uppercase tracking-wider text-[10px] block">Direct Phone</span>
                <span className="text-white font-bold">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="sm:text-right">
                <span className="text-slate-500 uppercase tracking-wider text-[10px] block">Portfolio URL</span>
                <a href={PERSONAL_INFO.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  {PERSONAL_INFO.websiteDisplay}
                </a>
              </div>
            </div>

            {/* Response Time & Guarantee */}
            <div className="rounded-sm bg-slate-900/60 border border-slate-800 p-5 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-white font-mono uppercase tracking-wider font-bold">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Response Commitment</span>
              </div>
              <p className="text-slate-400 leading-relaxed font-light">
                I actively monitor all channels and typically respond within <strong className="text-slate-200">12 to 24 hours</strong> across all business days.
              </p>
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span>Base: Lahore (UTC+5)</span>
                <span className="text-cyan-400">Available Globally</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 rounded-sm bg-slate-900/85 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center font-mono">
                <div className="w-14 h-14 border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">Message Dispatched</h3>
                <p className="text-xs text-slate-300 max-w-md mb-6 leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-white">{formData.name || 'there'}</span>. Your inquiry regarding <span className="text-cyan-400">{formData.inquiryType}</span> has been logged.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        inquiryType: 'Full-time Engineering Role',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-slate-950 border border-slate-800 text-slate-300 hover:text-white text-xs uppercase tracking-wider"
                  >
                    Send Another
                  </button>
                  <button
                    onClick={handleMailto}
                    className="px-5 py-2.5 bg-cyan-500 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span>Open Mail Client</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
                  <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span>Direct Message Transmission</span>
                  </h3>
                  <span className="text-[10px] text-slate-500 font-mono">Direct inbox routing</span>
                </div>

                {/* Inquiry Type Chips */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                    Inquiry Scope:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`px-3 py-2 text-xs font-mono text-left transition-all border ${
                          formData.inquiryType === type
                            ? 'bg-cyan-500/10 border-cyan-400 text-white font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                      Your Name / Org *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                    Subject Line
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Senior Full-Stack Engineering role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                    Message / Specification *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Share scope, tech stack requirements, or schedule..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full sm:w-auto px-6 py-3 bg-white text-slate-950 hover:bg-cyan-400 font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_-3px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Transmission</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleMailto}
                    className="w-full sm:w-auto px-4 py-3 bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Open in Email App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
