const labels: Record<number, string> = {
  1: 'Vrlo slabi',
  2: 'Slabi',
  3: 'Umjereni',
  4: 'Jaki',
  5: 'Vrlo jaki',
}

export function EvidenceBadge({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i <= rating ? 'bg-accent-gold' : 'bg-[var(--color-border)]'
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-[var(--color-text-secondary)]">{labels[rating]} dokazi</span>
    </div>
  )
}
