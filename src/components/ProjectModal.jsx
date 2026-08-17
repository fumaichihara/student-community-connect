import { useEffect, useRef } from 'react'
import { X, MapPin, Clock, Briefcase, CheckCircle2 } from 'lucide-react'
import CTAButton from './CTAButton.jsx'

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    dialogRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-navy-950/80 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-white/10 bg-navy-900 p-6 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent-light">
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            aria-label="閉じる"
            className="shrink-0 rounded-full border border-white/10 p-1.5 text-slate-150/70 hover:bg-white/5"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h2 id="project-modal-title" className="mt-4 font-display text-xl font-bold leading-snug text-slate-150 sm:text-2xl">
          {project.title}
        </h2>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-150/60">
          <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" />{project.company}</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{project.location}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{project.duration}</span>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-slate-150/75">{project.summary}</p>

        <div className="mt-8">
          <h3 className="eyebrow mb-3">業務詳細</h3>
          <ul className="space-y-2">
            {project.details.tasks.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-150/75">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="eyebrow mb-3">求める学生像</h3>
          <ul className="space-y-2">
            {project.details.idealCandidate.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-150/75">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="eyebrow mb-3">応募フロー</h3>
          <div className="flex flex-wrap items-center gap-2">
            {project.details.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-accent/40 px-3 py-1.5 text-xs font-medium text-slate-150">
                  {i + 1}. {step}
                </span>
                {i < project.details.flow.length - 1 && <span className="text-accent-light/60">›</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <CTAButton to="/join" className="justify-center">この案件に応募する</CTAButton>
        </div>
      </div>
    </div>
  )
}
