import { useState } from 'react';
import { ArrowRight, FileDown, Mail, Github, Check, Database, ShieldCheck, Layers } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import { ProfilePhoto } from './ProfilePhoto';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [selectedEndpoint, setSelectedEndpoint] = useState<number>(0);
  const [copiedCurl, setCopiedCurl] = useState(false);

  const apiEndpoints = [
    {
      method: "GET",
      path: "/api/v1/jobs/?status=active",
      project: "Job Portal System",
      status: 200,
      time: "28ms",
      response: {
        count: 24,
        next: "https://api.praveen.dev/v1/jobs/?page=2",
        results: [
          {
            id: "job-104",
            title: "Python Backend Engineer",
            company: "TechScale Systems",
            role_type: "Full-Time",
            location: "Remote / Bengaluru",
            salary_currency: "INR",
            required_skills: ["Python", "Django", "DRF", "PostgreSQL"],
            posted_by: "recruiter_42"
          }
        ]
      }
    },
    {
      method: "POST",
      path: "/api/v1/auth/token/",
      project: "JWT Auth Service",
      status: 200,
      time: "45ms",
      response: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        user: {
          id: 18,
          username: "praveen_dev",
          role: "BACKEND_DEVELOPER",
          is_active: true
        }
      }
    },
    {
      method: "POST",
      path: "/checkout/payment/",
      project: "ShopEasy Razorpay",
      status: 200,
      time: "74ms",
      response: {
        order_id: "order_K7x9QwL12m9s",
        amount_paise: 249900,
        currency: "INR",
        razorpay_key_id: "rzp_test_livewire_sec",
        status: "created"
      }
    },
    {
      method: "GET",
      path: "/api/v1/students/records/?roll_no=21ME102",
      project: "Student Management",
      status: 200,
      time: "32ms",
      response: {
        roll_no: "21ME102",
        name: "Praveen Kumar",
        course: "Full Stack Python & Django",
        attendance_percentage: 96.5,
        academic_standing: "Distinction",
        registered_courses: ["Django REST Framework", "PostgreSQL Modeling"]
      }
    }
  ];

  const currentApi = apiEndpoints[selectedEndpoint];

  const handleCopyCurl = () => {
    const curlCommand = `curl -X ${currentApi.method} "https://api.praveen.dev${currentApi.path}" -H "Authorization: Bearer <token>"`;
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Developer Positioning & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Developer Portrait & Identity Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-2">
              <ProfilePhoto size="lg" showBadge showStatus interactive />
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">{DEVELOPER_PROFILE.experienceLabel}</span>
                </div>
                <h2 className="text-base sm:text-lg font-medium text-slate-400">
                  Hi, I'm <span className="text-white font-semibold">{DEVELOPER_PROFILE.shortName}</span>
                </h2>
                <div className="text-xs font-mono text-emerald-400">
                  Django & DRF Backend Specialist
                </div>
              </div>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white text-balance leading-[1.15]">
                Python Backend <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {DEVELOPER_PROFILE.tagline}
            </p>

            {/* Core Capability Pills (Clean, unboxed metadata separators) */}
            <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-slate-400">
              <span className="text-slate-200">Python 3.12</span>
              <span>·</span>
              <span className="text-slate-200">Django & DRF</span>
              <span>·</span>
              <span className="text-slate-200">PostgreSQL</span>
              <span>·</span>
              <span className="text-slate-200">JWT & RBAC</span>
              <span>·</span>
              <span className="text-slate-200">Docker</span>
              <span>·</span>
              <span className="text-slate-200">AWS</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-lg shadow-emerald-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
                title="GitHub: Praveen-Kr-S"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Trust Indicator Quote */}
            <div className="pt-2 text-xs text-slate-400 border-l-2 border-emerald-500/60 pl-3 py-0.5">
              Available for immediate backend engineering roles in Python, Django, DRF, and full-stack solutions.
            </div>
          </div>

          {/* Right Column: Interactive Developer Backend & REST API Visual */}
          <div className="lg:col-span-6">
            <div className="bg-[#0b101c] border border-slate-800 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800/90 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="ml-2 text-slate-300 font-medium">drf-rest-api-explorer.py</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCurl}
                    className="text-[11px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
                    title="Copy cURL command"
                  >
                    {copiedCurl ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400">
                        <Check className="w-3 h-3" /> Copied cURL
                      </span>
                    ) : (
                      "Copy cURL"
                    )}
                  </button>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    200 OK
                  </span>
                </div>
              </div>

              {/* Endpoint Selector Tabs */}
              <div className="px-3 pt-2.5 pb-2 bg-[#090d17] border-b border-slate-800/80 flex items-center gap-1 overflow-x-auto text-xs font-mono scrollbar-none">
                {apiEndpoints.map((ep, idx) => (
                  <button
                    key={ep.path}
                    onClick={() => setSelectedEndpoint(idx)}
                    className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                      selectedEndpoint === idx
                        ? 'bg-slate-800 text-white font-medium border border-slate-700 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold ${
                        ep.method === 'GET' ? 'text-emerald-400' : 'text-cyan-400'
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="truncate max-w-[130px] sm:max-w-[170px]">{ep.path}</span>
                  </button>
                ))}
              </div>

              {/* Live Request / Response Inspector */}
              <div className="p-4 sm:p-5 space-y-4">
                {/* Request Header Bar */}
                <div className="flex items-center justify-between text-xs font-mono bg-slate-900/90 rounded-lg p-2.5 border border-slate-800">
                  <div className="flex items-center gap-2 truncate">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                        currentApi.method === 'GET'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      }`}
                    >
                      {currentApi.method}
                    </span>
                    <span className="text-slate-200 truncate">{currentApi.path}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 shrink-0">
                    <span className="text-slate-500">{currentApi.project}</span>
                    <span>·</span>
                    <span className="text-emerald-400 tabular-nums">{currentApi.time}</span>
                  </div>
                </div>

                {/* JSON Response Body */}
                <div className="relative font-mono text-xs text-slate-300 bg-[#080c15] p-3.5 rounded-lg border border-slate-800/90 overflow-x-auto max-h-[260px]">
                  <pre className="text-slate-300 leading-relaxed">
                    <code>{JSON.stringify(currentApi.response, null, 2)}</code>
                  </pre>
                </div>

                {/* Architecture Highlights Bar */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>JWT & RBAC</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Role Validation</div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-200">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      <span>PostgreSQL</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Django ORM</div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-200">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>REST APIs</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">DRF ViewSets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
