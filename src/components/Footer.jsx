import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import { SITE } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-150/60">
              {SITE.orgName}は、企業と学生をつなぎ、共に前進するアクティブメンバー{SITE.memberCount}名の学生団体です。
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Menu</h3>
            <ul className="space-y-2.5 text-sm text-slate-150/70">
              <li><Link to="/about" className="hover:text-accent-light">Connectについて</Link></li>
              <li><Link to="/interviews" className="hover:text-accent-light">業種別インタビュー</Link></li>
              <li><Link to="/projects" className="hover:text-accent-light">掲載案件・インターン</Link></li>
              <li><Link to="/join" className="hover:text-accent-light">コミュニティに参加</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Support</h3>
            <ul className="space-y-2.5 text-sm text-slate-150/70">
              <li><Link to="/contact" className="hover:text-accent-light">お問い合わせ</Link></li>
              <li><Link to="/privacy" className="hover:text-accent-light">プライバシーポリシー</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Follow</h3>
            <ul className="space-y-2.5 text-sm text-slate-150/70">
              {SITE.sns.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent-light">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/50 px-4 py-2 text-xs font-medium text-slate-150 hover:bg-accent/10"
            >
              <Mail className="h-3.5 w-3.5" />
              お問い合わせ
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-150/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.orgName}. All rights reserved.</p>
          <p className="tracking-widest">CONNECT — つなぐ、前進する。</p>
        </div>
      </div>
    </footer>
  )
}
