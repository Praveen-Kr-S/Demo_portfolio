import { Github, ArrowUpRight, Check, Code, ShieldCheck, Database } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 shadow-xl shadow-black/30 group">
      <div>
        {/* Category & Badge Header */}
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="font-mono text-emerald-400 font-semibold tracking-wide">
            {project.categoryLabel}
          </span>
          <span className="text-slate-400 font-mono text-[11px] truncate max-w-[140px]">
            {project.highlight}
          </span>
        </div>

        {/* Project Title & Subtitle */}
        <div className="space-y-1.5 mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/90 text-slate-200 border border-slate-700/70"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 text-[11px] font-mono rounded-md bg-slate-900 text-slate-400 border border-slate-800">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Key Features List */}
        <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Key Highlights
          </div>
          <div className="space-y-1.5">
            {project.features.slice(0, 4).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons: View GitHub & View Details */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 rounded-lg transition-colors cursor-pointer"
        >
          <Github className="w-4 h-4 text-slate-300" />
          <span>View GitHub</span>
        </a>

        <button
          onClick={() => onOpenDetails(project)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-500/20 transition-all cursor-pointer"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
