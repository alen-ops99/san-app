import { Check, Clock, ChevronRight } from 'lucide-react'
import type { Session } from '../data/sessions'

interface SessionCardProps {
  session: Session
  isCompleted: boolean
  onClick: () => void
}

export function SessionCard({ session, isCompleted, onClick }: SessionCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full card-interactive p-4 flex items-center gap-4"
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${
        isCompleted
          ? 'bg-emerald-500/10 text-emerald-500'
          : 'bg-accent-gold/10 text-accent-gold'
      }`}>
        {isCompleted ? <Check className="w-5 h-5" /> : session.id}
      </div>
      <div className="text-left flex-1 min-w-0">
        <h3 className="font-semibold text-sm truncate">{session.title}</h3>
        <p className="text-xs text-[var(--color-text-secondary)] truncate mt-0.5">{session.subtitle}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
          <Clock className="w-3 h-3" />
          {session.duration}
        </div>
        <ChevronRight className="w-4 h-4 text-[var(--color-text-secondary)]" />
      </div>
    </button>
  )
}
