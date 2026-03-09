interface ProgressBarProps {
  completed: number
  total: number
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Napredak</span>
        <span className="text-sm text-[var(--color-text-secondary)]">
          {completed}/{total} sesija
        </span>
      </div>
      <div className="h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
        <div
          className="h-full bg-accent-gold rounded-full animate-progress"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {percentage > 0 && (
        <p className="text-xs text-[var(--color-text-secondary)] mt-1.5">{percentage}% završeno</p>
      )}
    </div>
  )
}
