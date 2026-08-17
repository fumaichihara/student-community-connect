import { ChevronRight, MapPin, Clock, Briefcase } from 'lucide-react'

export default function ProjectCard({ project, onSelect }) {
  return (
    <button
      onClick={() => onSelect(project)}
      className="card-surface group flex h-full flex-col justify-between rounded-2xl p-6 text-left transition-colors hover:border-accent/40"
    >
      <div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent-light"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-base font-semibold leading-snug text-slate-150 sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-150/60 line-clamp-3">{project.summary}</p>
      </div>

      <div className="mt-6 space-y-1.5 text-xs text-slate-150/50">
        <div className="flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5 shrink-0" />
          {project.company}
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {project.location}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 shrink-0" />
          {project.duration}
        </div>
      </div>

      <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-accent-light">
        詳細を見る
        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </button>
  )
}
