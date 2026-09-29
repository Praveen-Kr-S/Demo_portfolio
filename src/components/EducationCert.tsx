import { GraduationCap, Award, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS, HIGHLIGHTS_METRICS } from '../data/portfolioData';

export function EducationCert() {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            Qualifications & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certification
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering foundation and industry-standard technical certification in Python Full Stack Development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <span>Formal Education</span>
            </h3>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-700/80 transition-colors shadow-lg shadow-black/20"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-xl font-bold text-white leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-emerald-400 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {edu.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80 shrink-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                  {edu.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400 font-mono">
                  <span>Engineering Analytics</span>
                  <span>·</span>
                  <span>Applied Problem Solving</span>
                  <span>·</span>
                  <span>Algorithmic Thinking</span>
                </div>
              </div>
            ))}

            {/* Transition Note */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              <span className="font-semibold text-slate-200">Career Trajectory:</span> Transitioned from an analytical engineering degree directly into professional software development, channeling a rigorous systems-engineering discipline into Python backend and relational database architecture.
            </div>
          </div>

          {/* Certification & Achievements Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Technical Certification</span>
            </h3>

            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4 hover:border-slate-700/80 transition-colors shadow-lg shadow-black/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wide">
                      {cert.credentialId}
                    </span>
                    <h4 className="text-xl font-bold text-white leading-snug mt-1">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80 shrink-0">
                    {cert.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                  {cert.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {["Python Core", "Django MVT", "Django REST Framework", "PostgreSQL", "React.js"].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Developer Experience Summary */}
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Verified Resume Milestones</span>
              </h4>
              <div className="space-y-2">
                {HIGHLIGHTS_METRICS.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">{item.value} {item.label}:</strong> {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
