import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Section } from '../components/Section.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { JOB_TYPES, WORK_STYLES, DURATIONS, filterProjects } from '../data/projects.js'

export default function Projects() {
  const [jobType, setJobType] = useState('すべて')
  const [workStyle, setWorkStyle] = useState('すべて')
  const [duration, setDuration] = useState('すべて')
  const [keyword, setKeyword] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const results = useMemo(
    () => filterProjects({ jobType, workStyle, duration, keyword }),
    [jobType, workStyle, duration, keyword]
  )

  const selectClass =
    'w-full rounded-xl border border-navy-950/12 bg-navy-800 px-3.5 py-2.5 text-sm text-slate-150 focus:border-accent focus:outline-none'

  return (
    <>
      <section className="bg-chevron-fade">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
          <p className="eyebrow">Projects &amp; Internships</p>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-slate-150 sm:text-4xl">
            掲載案件・インターン
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-150/65 sm:text-base">
            企業と連携した実践的なプロジェクト・インターン案件を掲載しています。気になる案件を見つけたら、詳細をチェックしてみましょう。
          </p>
        </div>
      </section>

      <Section>
        <div className="card-surface rounded-2xl p-5 sm:p-6">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-150/40" />
            <input
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="キーワードで検索（例：SNS、営業、あかひげ薬局）"
              className={`${selectClass} pl-10`}
              aria-label="案件をキーワードで検索"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <label className="block text-xs">
              <span className="mb-1.5 block font-medium text-slate-150/60">職種</span>
              <select value={jobType} onChange={(e) => setJobType(e.target.value)} className={selectClass}>
                {JOB_TYPES.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </label>
            <label className="block text-xs">
              <span className="mb-1.5 block font-medium text-slate-150/60">勤務形態</span>
              <select value={workStyle} onChange={(e) => setWorkStyle(e.target.value)} className={selectClass}>
                {WORK_STYLES.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </label>
            <label className="block text-xs">
              <span className="mb-1.5 block font-medium text-slate-150/60">期間</span>
              <select value={duration} onChange={(e) => setDuration(e.target.value)} className={selectClass}>
                {DURATIONS.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-150/45">{results.length}件の案件が見つかりました</p>

        {results.length > 0 ? (
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {results.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        ) : (
          <div className="card-surface mt-4 rounded-2xl p-10 text-center text-sm text-slate-150/55">
            条件に一致する案件が見つかりませんでした。条件を変更して再度お試しください。
          </div>
        )}
      </Section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
