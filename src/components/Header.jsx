import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import CTAButton from './CTAButton.jsx'
import { NAV_ITEMS } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="メインナビゲーション">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-accent-light' : 'text-slate-150/80 hover:text-slate-150'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton to="/join" className="!py-2.5">
            コミュニティに参加
          </CTAButton>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-150 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-navy-950 px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="モバイルナビゲーション">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-white/5 text-accent-light' : 'text-slate-150/85'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4">
            <CTAButton to="/join" className="w-full justify-center">
              コミュニティに参加
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  )
}
