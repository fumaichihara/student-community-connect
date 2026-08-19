import { useMemo, useState } from 'react'
import { Section, SectionHeading } from '../components/Section.jsx'
import InterviewCard from '../components/InterviewCard.jsx'
import { CATEGORIES, getInterviewsByCategory } from '../data/interviews.js'

export default function Interviews() {
  const [category, setCategory] = useState('すべて')
  const filtered = useMemo(() => getInterviewsByCategory(category), [category])

  return (
    <>
      <section className="bg-chevron-fade">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
          <p className="eyebrow">Interviews</p>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-slate-150 sm:text-4xl">
            業種別インタビュー
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-150/65 sm:text-base">
            商社・物流・IT・メーカーなど、
            <br />
            様々な業種の経営者・役員のリアルな声を届けます。
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="業種カテゴリで絞り込む">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                category === cat
                  ? 'border-accent bg-accent text-white'
                  : 'border-slate-150/12 text-slate-150/70 hover:border-accent/40 hover:text-slate-150'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((interview) => (
              <InterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        ) : (
          <div className="card-surface mt-10 rounded-2xl p-10 text-center text-sm text-slate-150/55">
            このカテゴリのインタビューは近日公開予定です。
          </div>
        )}

        <p className="mt-16 text-center text-xs tracking-wide text-slate-150/40">
          近日公開：商社・物流業界のトップインタビューを順次公開予定
        </p>
      </Section>
    </>
  )
}
