import { ChevronRight } from 'lucide-react'

/**
 * Signature motif: a marching row of chevrons used as a section divider.
 * Encodes the brand idea of "forward motion" (>>>) wherever a section transitions.
 */
export default function ChevronRule({ count = 40, className = '' }) {
  return (
    <div className={`chevron-rule ${className}`} aria-hidden="true">
      <div className="flex animate-drift">
        {Array.from({ length: count }).map((_, i) => (
          <ChevronRight key={i} className="h-3 w-3 shrink-0" strokeWidth={2.5} />
        ))}
      </div>
    </div>
  )
}
