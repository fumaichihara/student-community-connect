import { useState } from 'react'
import { Handshake, Rocket, Users2 } from 'lucide-react'
import { Section, SectionHeading, Stat } from '../components/Section.jsx'
import CTAButton from '../components/CTAButton.jsx'
import ChevronRule from '../components/ChevronRule.jsx'
import InterviewCard from '../components/InterviewCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import { interviews } from '../data/interviews.js'
import { projects } from '../data/projects.js'
import { SITE } from '../data/site.js'

const aboutPoints = [
  {
    icon: Handshake,
    title: '企業と学生をつなぐ',
    text: '商社・物流をはじめとする企業の経営者・役員インタビューを通じて、学生にリアルなビジネスの現場を届けます。',
  },
  {
    icon: Rocket,
    title: '実践的な機会を提供',
    text: '営業・SNS運用など、実際の企業案件に学生が参加できるプロジェクト・インターンを継続的に紹介しています。',
  },
  {
    icon: Users2,
    title: '共に成長するコミュニティ',
    text: `アクティブメンバー${SITE.memberCount}名が互いに刺激し合いながら、挑戦と成長を続けるコミュニティです。`,
  },
]

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)
  const featuredInterviews = interviews.slice(0, 3)
  const featuredProjects = projects.slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-chevron-fade">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-accent-dark/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
          <p className="eyebrow">Student Community Connect</p>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight text-slate-150 sm:text-5xl lg:text-6xl">
            企業と学生をつなぎ、
            <br />
            新しい可能性へ前進する。
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-150/65 sm:text-base">
            学生コミュニティConnectは、経営者インタビューや実践的なプロジェクトを通じて、若者と社会をダイレクトに結びつけます。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/join">コミュニティに参加する</CTAButton>
            <CTAButton to="/interviews" variant="outline">
              インタビューを見る
            </CTAButton>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-3">
            <Stat value={`${SITE.memberCount}名`} label="アクティブメンバー" />
            <Stat value={`${SITE.interviewTargetCount}社+`} label="インタビュー掲載予定企業数" />
            <Stat value={`${SITE.projectCount}件+`} label="提供プロジェクト数" />
          </div>
        </div>

        <ChevronRule className="border-t border-white/5 py-3" />
      </section>

      {/* About */}
      <Section>
        <SectionHeading
          eyebrow="About Connect"
          title="企業と学生の間に、実践的な架け橋をつくる"
          description="設立以来、Connectは「聞く」だけでなく「動く」機会を学生に届けることを大切にしてきました。"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {aboutPoints.map(({ icon: Icon, title, text }) => (
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

      {/* Featured Interviews */}
      <Section className="bg-navy-900/50">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Interviews" title="最新の経営者インタビュー" />
          <CTAButton to="/interviews" variant="ghost" className="!px-0">
            すべて見る
          </CTAButton>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredInterviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Projects & Internships" title="注目の募集案件・インターン" />
          <CTAButton to="/projects" variant="ghost" className="!px-0">
            すべて見る
          </CTAButton>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="pb-24 pt-4 sm:pb-32">
        <div className="card-surface relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
          <p className="eyebrow justify-center">Join Us</p>
          <h2 className="mt-4 font-display text-2xl font-bold text-slate-150 sm:text-3xl lg:text-4xl">
            次に前進するのは、あなたの番です。
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-150/60 sm:text-base">
            共に挑戦し、成長する学生メンバーを募集しています。まずはお気軽にご応募ください。
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton to="/join">コミュニティに参加する</CTAButton>
          </div>
        </div>
      </Section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
