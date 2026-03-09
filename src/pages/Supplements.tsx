import { X, AlertTriangle } from 'lucide-react'
import { supplements } from '../data/supplements'
import { EvidenceBadge } from '../components/EvidenceBadge'

export function Supplements({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-background)] overflow-y-auto">
      <div className="overlay-enter">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)] px-4 py-3 safe-top">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Prirodni dodaci</h1>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="px-4 py-6">
          {/* Disclaimer */}
          <div className="card p-4 mb-6 border-amber-500/30 bg-amber-500/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Važna napomena</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Prirodni dodaci <strong className="text-[var(--color-text)]">NISU zamjena za CBT-I</strong>.
                  Nijedan dodatak nema razinu dokaza usporedivu s kognitivno-bihevioralnom terapijom.
                  Uvijek se posavjetujte s liječnikom prije uzimanja bilo kakvog dodatka.
                </p>
              </div>
            </div>
          </div>

          {/* Supplement cards */}
          <div className="space-y-4 stagger-children">
            {supplements.map((supplement) => (
              <div key={supplement.id} className="card p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-base">{supplement.name}</h3>
                  <EvidenceBadge rating={supplement.evidenceRating} />
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Mehanizam</span>
                    <p className="text-[var(--color-text-secondary)] mt-0.5">{supplement.mechanism}</p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Dokazi</span>
                    <p className="text-[var(--color-text-secondary)] mt-0.5">{supplement.evidenceSummary}</p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Doziranje</span>
                    <p className="text-[var(--color-text-secondary)] mt-0.5">{supplement.dosing}</p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Ograničenja</span>
                    <p className="text-[var(--color-text-secondary)] mt-0.5">{supplement.limitations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
