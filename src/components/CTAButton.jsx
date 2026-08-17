import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * to: internal route (uses react-router Link) — mutually exclusive with href
 * href: external link
 * variant: "solid" | "outline" | "ghost"
 */
export default function CTAButton({ to, href, children, variant = 'solid', className = '', ...rest }) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200'
  const variants = {
    solid: 'bg-accent text-white hover:bg-accent-dark',
    outline: 'border border-accent/60 text-slate-150 hover:bg-accent/10',
    ghost: 'text-slate-150 hover:text-accent-light',
  }
  const cls = `${base} ${variants[variant]} ${className}`
  const inner = (
    <>
      {children}
      <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
      {inner}
    </a>
  )
}
