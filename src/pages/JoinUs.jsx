import { useState } from 'react'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { Section } from '../components/Section.jsx'
import { SITE } from '../data/site.js'

const steps = [
  '以下のフォームに必要事項を入力',
  '公式コミュニケーションチャネルへのご案内',
  'コミュニティへようこそ！活動キックオフ',
]

export default function JoinUs() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <section className="bg-chevron-fade">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
          <p className="eyebrow">Join Us</p>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-slate-150 sm:text-4xl">
            Connectに参加する
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-150/65 sm:text-base">
            学生コミュニティConnectでは、共に成長し挑戦する学生メンバーを募集しています。以下のフォームより必要事項をご入力の上、お申し込みください。
          </p>
        </div>
      </section>

      <Section className="pt-10 sm:pt-12">
        <div className="grid gap-3 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step} className="card-surface flex items-start gap-3 rounded-2xl p-5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent-light">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-slate-150/75">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="card-surface overflow-hidden rounded-3xl">
          <div className="border-b border-slate-150/12 px-6 py-5">
            <h2 className="font-display text-lg font-semibold text-slate-150">参加申し込みフォーム</h2>
            <p className="mt-1 text-xs text-slate-150/50">
              フォームの読み込みに数秒かかる場合があります。
            </p>
          </div>

          <div className="relative w-full bg-white" style={{ height: '800px' }}>
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-navy-900">
                <span className="flex items-center gap-2 text-sm text-slate-150/50">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
                  フォームを読み込み中…
                </span>
              </div>
            )}
            <iframe
              src={SITE.googleFormUrl}
              title="学生コミュニティConnect 参加申し込みフォーム"
              className="h-full w-full"
              onLoad={() => setLoaded(true)}
            >
              読み込んでいます…
            </iframe>
          </div>

          <div className="flex flex-col items-center gap-3 border-t border-slate-150/12 px-6 py-6 text-center">
            <p className="flex items-center gap-1.5 text-xs text-slate-150/50">
              <CheckCircle2 className="h-3.5 w-3.5" />
              フォームがうまく表示されない場合は、以下のボタンから直接開いてご回答ください。
            </p>
            <a
              href={SITE.googleFormUrlDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-6 py-3 text-sm font-semibold text-slate-150 hover:bg-accent/10"
            >
              別タブでGoogleフォームを開いて回答する
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
