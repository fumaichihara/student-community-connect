import { Target, Compass, Users2, TrendingUp } from 'lucide-react'
import { Section, SectionHeading, Stat } from '../components/Section.jsx'
import CTAButton from '../components/CTAButton.jsx'
import ChevronRule from '../components/ChevronRule.jsx'
import { SITE } from '../data/site.js'

const activities = [
  {
    icon: Target,
    title: '経営者インタビュー企画・発信',
    text: '商社・物流をはじめとした企業の経営者・役員にインタビューを実施し、記事として発信しています。',
  },
  {
    icon: Compass,
    title: 'プロジェクト・インターン紹介',
    text: '営業代行やSNS運用など、実践的に取り組める企業案件をメンバーに紹介し、実行を支援します。',
  },
  {
    icon: Users2,
    title: 'メンバー同士の学び合い',
    text: '定例ミーティングや振り返りの場を通じて、メンバー同士が知見を共有し合う文化を大切にしています。',
  },
  {
    icon: TrendingUp,
    title: '継続的なコンテンツ拡充',
    text: 'インタビュー記事・案件情報は今後も継続的に追加し、学生と企業の接点を増やし続けます。',
  },
]

export default function About() {
  return (
    <>
      <section className="bg-chevron-fade">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <p className="eyebrow">About Connect</p>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-slate-150 sm:text-4xl lg:text-5xl">
            就活を一歩先に。
            <br />
 　　　　　　君と成功をつなげる。
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-150/65 sm:text-base">
            {SITE.orgName}（{SITE.orgNameEn}）は、企業と学生、ビジネスと若者の可能性を「つなぐ（Connect）」架け橋となることを目指す学生団体です。
          </p>
        </div>
        <ChevronRule className="border-t border-white/5 py-3" />
      </section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-3">
          <Stat value={`${SITE.memberCount}名`} label="アクティブメンバー" />
          <Stat value={`${SITE.interviewTargetCount}社+`} label="インタビュー掲載予定企業数" />
          <Stat value={`${SITE.projectCount}件+`} label="提供プロジェクト数" />
        </div>
      </Section>

      <Section className="bg-navy-900/50">
        <SectionHeading eyebrow="Mission" title="設立理念" />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-150/65 sm:text-base">
          「学生は、社会に出るまで社会を知る機会が少ない。」——そんな課題意識から{SITE.orgName}は生まれました。経営者への直接インタビューや、実際の企業案件への参加を通じて、学生が在学中から「働く」「価値を生む」という感覚を掴める場をつくることを理念としています。私たちは、企業と学生の間に立つ架け橋として、双方の可能性を前進させ続けます。
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Activities" title="主な取り組み" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {activities.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-surface rounded-2xl p-6">
              <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent-light">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-slate-150">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-150/60">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24 pt-4 sm:pb-32">
        <div className="card-surface rounded-3xl px-6 py-14 text-center sm:px-16 sm:py-20">
          <h2 className="font-display text-2xl font-bold text-slate-150 sm:text-3xl">
            Connectの一員として、共に前進しませんか。
          </h2>
          <div className="mt-8 flex justify-center">
            <CTAButton to="/join">コミュニティに参加する</CTAButton>
          </div>
        </div>
      </Section>
    </>
  )
}
