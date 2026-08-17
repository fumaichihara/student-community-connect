import { Section } from '../components/Section.jsx'
import { SITE } from '../data/site.js'

export default function Privacy() {
  return (
    <Section className="pt-16 sm:pt-24">
      <p className="eyebrow">Privacy Policy</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-slate-150 sm:text-3xl">プライバシーポリシー</h1>
      <div className="mt-8 max-w-2xl space-y-6 text-sm leading-relaxed text-slate-150/65">
        <p>
          {SITE.orgName}（以下「当団体」）は、本サイトを通じて取得する個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
        </p>
        <div>
          <h2 className="mb-2 font-display text-base font-semibold text-slate-150">1. 取得する情報</h2>
          <p>お問い合わせフォームおよび参加申し込みフォームを通じて、お名前・メールアドレス・その他ご入力いただいた情報を取得します。</p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-base font-semibold text-slate-150">2. 利用目的</h2>
          <p>取得した情報は、お問い合わせへの回答、コミュニティ活動のご案内、参加申し込みの手続きのために利用します。</p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-base font-semibold text-slate-150">3. 第三者提供</h2>
          <p>法令に基づく場合を除き、ご本人の同意なく取得した情報を第三者へ提供することはありません。</p>
        </div>
        <div>
          <h2 className="mb-2 font-display text-base font-semibold text-slate-150">4. お問い合わせ</h2>
          <p>
            本ポリシーに関するお問い合わせは、
            <a href={`mailto:${SITE.contactEmail}`} className="text-accent-light hover:underline">
              {SITE.contactEmail}
            </a>
            までご連絡ください。
          </p>
        </div>
      </div>
    </Section>
  )
}
