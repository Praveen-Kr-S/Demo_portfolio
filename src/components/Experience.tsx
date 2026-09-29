import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { EXPERIENCE_HISTORY } from '../data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering hands-on backend solutions, architecting demonstration systems, and conducting deep technical code reviews.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCE_HISTORY.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700/80 transition-all shadow-xl shadow-black/20 relative overflow-hidden"
            >
              {/* Accent subtle glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-slate-300">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Developer-oriented Overview */}
              <div className="py-5 text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.description}
              </div>

              {/* Key Technical Responsibilities from CV */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Developer Responsibilities & Deliverables
                </div>
                <div className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-normal">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-2">
                  Technologies Applied:
                </span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
