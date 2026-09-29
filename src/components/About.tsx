import { Server, Database, Shield, Cpu, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { DEVELOPER_PROFILE, HIGHLIGHTS_METRICS } from '../data/portfolioData';
import { ProfilePhoto } from './ProfilePhoto';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            Professional Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Backend software engineer dedicated to building resilient REST APIs, reliable databases, and clean application architecture.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Developer Portrait & Contact Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0c1220] border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Developer Profile Header with Portrait Photo */}
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <ProfilePhoto size="md" showStatus={false} showBadge={false} interactive />
                  <div className="space-y-0.5">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {DEVELOPER_PROFILE.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400">
                      {DEVELOPER_PROFILE.title}
                    </p>
                    <p className="text-xs text-slate-400">
                      {DEVELOPER_PROFILE.subTitle}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{DEVELOPER_PROFILE.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <a
                      href={`mailto:${DEVELOPER_PROFILE.email}`}
                      className="hover:text-emerald-400 transition-colors truncate"
                    >
                      {DEVELOPER_PROFILE.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <a
                      href={`tel:${DEVELOPER_PROFILE.phone}`}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {DEVELOPER_PROFILE.formattedPhone}
                    </a>
                  </div>
                </div>

                {/* Primary Position Statement */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    Primary Role
                  </div>
                  <div className="text-xs font-medium text-slate-200">
                    Python Backend Developer / Python Full Stack Developer
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Focus Pillar Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <Server className="w-5 h-5 text-emerald-400 mb-1.5" />
                <div className="text-xs font-semibold text-white">DRF REST APIs</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Clean endpoints & serializers</div>
              </div>
              <div className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <Database className="w-5 h-5 text-cyan-400 mb-1.5" />
                <div className="text-xs font-semibold text-white">PostgreSQL</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Relational models & ORM</div>
              </div>
              <div className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <Shield className="w-5 h-5 text-indigo-400 mb-1.5" />
                <div className="text-xs font-semibold text-white">JWT & RBAC</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Role permissions</div>
              </div>
              <div className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <Cpu className="w-5 h-5 text-teal-400 mb-1.5" />
                <div className="text-xs font-semibold text-white">Docker & AWS</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Containers & EC2/S3</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Prose & Verified Achievements */}
          <div className="lg:col-span-8 space-y-8">
            {/* Bio Prose strictly grounded in CV */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              {DEVELOPER_PROFILE.aboutParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Core Competencies Quick Checklist */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Professional Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "RESTful API design with Django REST Framework",
                  "JWT stateless token authentication & RBAC authorization",
                  "Database modeling with PostgreSQL, MySQL & SQLite3",
                  "Django ORM optimization & transactional CRUD operations",
                  "Decoupled React.js frontend integration",
                  "Razorpay payment gateway integration with webhook security",
                  "Docker containerization & AWS cloud fundamentals",
                  "Agile & Scrum software development lifecycle"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified CV Metrics & Experience Highlights */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Verified Experience Highlights
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {HIGHLIGHTS_METRICS.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 space-y-1 hover:border-slate-700 transition-colors"
                  >
                    <div className="text-2xl font-extrabold text-white font-mono tabular-nums text-emerald-400">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-200">
                      {metric.label}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-snug">
                      {metric.description}
                    </div>
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
