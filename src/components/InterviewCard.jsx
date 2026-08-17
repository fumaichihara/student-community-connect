import { ChevronRight, Sparkles } from 'lucide-react'

export default function InterviewCard({ interview }) {
  if (interview.comingSoon) {
    return (
      <div className="card-surface flex h-full flex-col justify-between rounded-2xl border-dashed p-6 opacity-80">
        <div>
          <span className="eyebrow inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" />
            Coming Soon
          </span>
          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-slate-150/80">
            {interview.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-150/45">{interview.excerpt}</p>
        </div>
        <div className="mt-6 text-xs font-medium text-slate-150/35">{interview.category} ・ 近日公開予定</div>
      </div>
    )
  }

  return (
    <article className="card-surface group flex h-full flex-col justify-between rounded-2xl p-6 transition-colors hover:border-accent/40">
      <div>
        <span className="eyebrow">{interview.category}</span>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-slate-150">
          {interview.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-150/60">{interview.excerpt}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs text-slate-150/50">
        <span>{interview.company} ・ {interview.role}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-accent-light">
          続きを読む
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  )
}
