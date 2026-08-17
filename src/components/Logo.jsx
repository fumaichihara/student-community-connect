import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-1.5 ${className}`} aria-label="Connect ホームへ">
      <span className="font-display font-bold tracking-tight text-lg sm:text-xl text-slate-150">
        CONNECT
      </span>
      <span className="flex items-center -space-x-2 text-accent">
        <ChevronRight
          className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={3}
        />
        <ChevronRight
          className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 delay-75 group-hover:translate-x-1 opacity-70"
          strokeWidth={3}
        />
        <ChevronRight
          className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 delay-150 group-hover:translate-x-1 opacity-40"
          strokeWidth={3}
        />
      </span>
    </Link>
  )
}
