import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { Section } from '../components/Section.jsx'
import { SITE } from '../data/site.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: このフォームはUIのみのサンプル実装です。
    // 実際に送信するには、Formspree等のフォーム送信サービスや
    // 独自のバックエンドAPIのエンドポイントをここに接続してください。
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-chevron-fade">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-slate-150 sm:text-4xl">
            お問い合わせ
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-150/65 sm:text-base">
            取材のご依頼、案件掲載のご相談、その他Connectに関するお問い合わせはこちらから。
          </p>
        </div>
      </section>

      <Section className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="card-surface rounded-2xl p-6">
            <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent-light">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="mt-4 font-display text-base font-semibold text-slate-150">メールでのお問い合わせ</h2>
            <a href={`mailto:${SITE.contactEmail}`} className="mt-2 block text-sm text-accent-light hover:underline">
              {SITE.contactEmail}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-150/60">
              通常2〜3営業日以内にご返信いたします。案件掲載やインタビューのご相談も歓迎です。
            </p>
          </div>
        </div>

        <div className="card-surface rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="rounded-full bg-accent/15 p-3 text-accent-light">
                <Send className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-slate-150">送信しました</h3>
              <p className="mt-2 text-sm text-slate-150/60">
                お問い合わせありがとうございます。担当より折り返しご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-slate-150/70">お名前</span>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-navy-800 px-3.5 py-2.5 text-sm text-slate-150 focus:border-accent focus:outline-none"
                  placeholder="山田 太郎"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-slate-150/70">メールアドレス</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-navy-800 px-3.5 py-2.5 text-sm text-slate-150 focus:border-accent focus:outline-none"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-slate-150/70">お問い合わせ内容</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-navy-800 px-3.5 py-2.5 text-sm text-slate-150 focus:border-accent focus:outline-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:w-auto"
              >
                送信する
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}
