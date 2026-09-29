import { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, FileDown, ExternalLink } from 'lucide-react';
import { DEVELOPER_PROFILE, PROJECTS, EXPERIENCE_HISTORY, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { ProfilePhoto } from './ProfilePhoto';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copiedText, setCopiedText] = useState(false);

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

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const markdown = `# ${DEVELOPER_PROFILE.name}
**${DEVELOPER_PROFILE.title} | ${DEVELOPER_PROFILE.subTitle}**
- Location: ${DEVELOPER_PROFILE.location}
- Email: ${DEVELOPER_PROFILE.email}
- Phone: ${DEVELOPER_PROFILE.phone}
- GitHub: ${DEVELOPER_PROFILE.github}

## Professional Summary
${DEVELOPER_PROFILE.aboutParagraphs.join('\n\n')}

## Core Technical Skills
- Backend: Python, Django, Django REST Framework, REST APIs, JWT Authentication, CRUD, MVT/MVC, RBAC
- Database: PostgreSQL, MySQL, SQLite3
- Frontend: HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS
- Cloud & DevOps: AWS EC2, AWS S3, AWS RDS, Docker, Containerization
- Tools: Git, GitHub, Postman, VS Code, Eclipse
- Other: Razorpay Payment Gateway, Agile, Scrum Framework, Core Java, Power BI

## Experience
**${EXPERIENCE_HISTORY[0].role} — ${EXPERIENCE_HISTORY[0].company}** (${EXPERIENCE_HISTORY[0].period})
${EXPERIENCE_HISTORY[0].responsibilities.map(r => `- ${r}`).join('\n')}

## Projects
${PROJECTS.map(p => `### ${p.title}
Technology: ${p.technologies.join(', ')}
GitHub: ${p.githubUrl}
${p.description}
${p.features.map(f => `- ${f}`).join('\n')}`).join('\n\n')}

## Education
**${EDUCATION[0].degree}**
${EDUCATION[0].institution} (${EDUCATION[0].period})

## Certification
**${CERTIFICATIONS[0].title}** — ${CERTIFICATIONS[0].issuer} (${CERTIFICATIONS[0].date})
`;

    navigator.clipboard.writeText(markdown);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl my-6 bg-[#0b101c] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e1526] border-b border-slate-800 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm" id="resume-modal-title">
              Resume Preview & ATS Export
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-emerald-400 font-mono">Praveen_Kumar_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors cursor-pointer"
              title="Copy markdown text for ATS"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors cursor-pointer shadow-sm"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div
          id="printable-resume"
          className="p-6 sm:p-10 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 space-y-7 bg-[#0d1322] text-slate-200 font-sans text-xs sm:text-sm leading-relaxed"
        >
          {/* Header Zone */}
          <div className="border-b border-slate-700/80 pb-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <ProfilePhoto size="sm" showStatus={false} showBadge={false} interactive={false} />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {DEVELOPER_PROFILE.name}
                  </h1>
                  <div className="text-sm font-semibold text-emerald-400">
                    {DEVELOPER_PROFILE.title} | {DEVELOPER_PROFILE.subTitle}
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-400 font-mono self-start sm:self-center">
                {DEVELOPER_PROFILE.experienceLabel}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono pt-1">
              <span>{DEVELOPER_PROFILE.location}</span>
              <span>·</span>
              <a href={`mailto:${DEVELOPER_PROFILE.email}`} className="text-slate-300 hover:underline">
                {DEVELOPER_PROFILE.email}
              </a>
              <span>·</span>
              <a href={`tel:${DEVELOPER_PROFILE.phone}`} className="text-slate-300 hover:underline">
                {DEVELOPER_PROFILE.formattedPhone}
              </a>
              <span>·</span>
              <a href={DEVELOPER_PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                github.com/Praveen-Kr-S
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1">
              Professional Summary
            </h2>
            <div className="space-y-2 text-slate-300 text-xs leading-relaxed">
              {DEVELOPER_PROFILE.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-white">Backend & APIs:</span>{" "}
                <span className="text-slate-300">Python, Django, Django REST Framework, REST APIs, JWT Auth, CRUD, MVT/MVC, RBAC</span>
              </div>
              <div>
                <span className="font-semibold text-white">Databases:</span>{" "}
                <span className="text-slate-300">PostgreSQL, MySQL, SQLite3, Django ORM</span>
              </div>
              <div>
                <span className="font-semibold text-white">Cloud & DevOps:</span>{" "}
                <span className="text-slate-300">AWS EC2, AWS S3, AWS RDS, Docker, Containerization</span>
              </div>
              <div>
                <span className="font-semibold text-white">Frontend & Tools:</span>{" "}
                <span className="text-slate-300">React.js, JavaScript, HTML5/CSS3, Tailwind, Git/GitHub, Postman, Razorpay</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1">
              Professional Experience
            </h2>
            {EXPERIENCE_HISTORY.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="text-slate-400"> — {exp.company}, {exp.location}</span>
                  </div>
                  <span className="font-mono text-emerald-400 text-xs">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1">
              Key Production & Full-Stack Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="font-mono text-[11px] text-slate-400">{proj.technologies.slice(0, 4).join(', ')}</span>
                  </div>
                  <p className="text-slate-300">{proj.description}</p>
                  <div className="text-slate-400 text-[11px]">
                    <span className="font-semibold text-slate-300">GitHub:</span> {proj.githubUrl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 pb-1">
                Education
              </h2>
              <div className="text-xs">
                <div className="font-bold text-white">{EDUCATION[0].degree}</div>
                <div className="text-slate-300">{EDUCATION[0].institution}</div>
                <div className="font-mono text-slate-400 text-[11px]">{EDUCATION[0].period}</div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 pb-1">
                Certification
              </h2>
              <div className="text-xs">
                <div className="font-bold text-white">{CERTIFICATIONS[0].title}</div>
                <div className="text-slate-300">{CERTIFICATIONS[0].issuer}</div>
                <div className="font-mono text-slate-400 text-[11px]">{CERTIFICATIONS[0].date}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
