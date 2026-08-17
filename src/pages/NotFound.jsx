import { Section } from '../components/Section.jsx'
import CTAButton from '../components/CTAButton.jsx'

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-slate-150 sm:text-3xl">
        お探しのページが見つかりませんでした
      </h1>
      <p className="mt-4 max-w-md text-sm text-slate-150/60">
        URLが変更・削除されたか、入力に誤りがある可能性があります。
      </p>
      <div className="mt-8">
        <CTAButton to="/">ホームに戻る</CTAButton>
      </div>
    </Section>
  )
}
