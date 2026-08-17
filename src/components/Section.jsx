export function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-2xl font-bold leading-tight text-slate-150 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-sm leading-relaxed text-slate-150/60 sm:text-base">{description}</p>}
    </div>
  )
}

export function Stat({ value, label }) {
  return (
    <div className="card-surface rounded-2xl p-6 text-center sm:p-8">
      <div className="font-display text-3xl font-bold text-accent-light sm:text-4xl">{value}</div>
      <div className="mt-2 text-xs font-medium tracking-wide text-slate-150/55 sm:text-sm">{label}</div>
    </div>
  )
}
