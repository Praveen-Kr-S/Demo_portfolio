import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    // Simulate swift client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I am actively exploring opportunities for Python Backend Developer, Django & DRF Developer, and Python Full Stack roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Quick Copy Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl shadow-black/20">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {DEVELOPER_PROFILE.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-400 mt-1">
                  {DEVELOPER_PROFILE.title} | {DEVELOPER_PROFILE.subTitle}
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Ready to contribute to your engineering team with scalable API design, resilient database models, and test-driven Django development.
                </p>
              </div>

              {/* Direct Details with Click-to-Copy */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                {/* Location */}
                <div className="flex items-center gap-3.5 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                    <div className="text-slate-200 font-medium">{DEVELOPER_PROFILE.location}</div>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-center justify-between gap-3 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-slate-800 text-emerald-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Email</div>
                      <a
                        href={`mailto:${DEVELOPER_PROFILE.email}`}
                        className="text-white hover:text-emerald-300 font-medium truncate block"
                      >
                        {DEVELOPER_PROFILE.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(DEVELOPER_PROFILE.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors shrink-0 cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between gap-3 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Phone</div>
                      <a
                        href={`tel:${DEVELOPER_PROFILE.phone}`}
                        className="text-white hover:text-emerald-300 font-medium block"
                      >
                        {DEVELOPER_PROFILE.formattedPhone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(DEVELOPER_PROFILE.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors shrink-0 cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Item */}
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">GitHub Profile</div>
                      <div className="text-white font-medium">github.com/Praveen-Kr-S</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0" />
                </a>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span>Notice Period & Relocation</span>
              </div>
              <p>Available for immediate joining or short notice period. Open to both on-site (Bengaluru, Chennai, Hyderabad, Coimbatore) and remote opportunities.</p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below and I will get back to you promptly.
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Thank you for your message! Praveen will review your inquiry and respond shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-300">
                    Subject / Role Opportunity
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Python Backend Developer Role / Django Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-slate-500"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Describe your project, team requirements, or role specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors placeholder:text-slate-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 disabled:opacity-50 rounded-lg shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
