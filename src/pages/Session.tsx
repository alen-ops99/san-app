import { useState } from 'react'
import { ArrowLeft, Check, Clock, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react'
import { SleepDiary } from '../components/SleepDiary'
import { SleepWindowCalculator } from '../components/SleepWindowCalculator'
import { ISIQuestionnaire } from '../components/ISIQuestionnaire'
import type { Session as SessionType } from '../data/sessions'

interface SessionProps {
  session: SessionType
  isCompleted: boolean
  onComplete: () => void
  onBack: () => void
}

export function Session({ session, isCompleted, onComplete, onBack }: SessionProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]))
  const [showInteractive, setShowInteractive] = useState<string | null>(null)

  const toggleSection = (index: number) => {
    setExpandedSections(prev => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)] px-4 py-3 safe-top">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-sm truncate">
              Sesija {session.id}: {session.title}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
              <Clock className="w-3 h-3" />
              {session.duration}
            </div>
          </div>
          {isCompleted && (
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <Check className="w-4 h-4 text-emerald-500" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">{session.subtitle}</p>

        {/* Sections accordion */}
        <div className="space-y-3">
          {session.sections.map((section, index) => (
            <div key={index} className="card overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <h3 className="font-semibold text-sm flex-1 pr-2">{section.title}</h3>
                {expandedSections.has(index)
                  ? <ChevronUp className="w-4 h-4 text-[var(--color-text-secondary)] flex-shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-[var(--color-text-secondary)] flex-shrink-0" />
                }
              </button>
              {expandedSections.has(index) && (
                <div className="px-4 pb-4 animate-fade-in">
                  <div className="prose-san text-sm" dangerouslySetInnerHTML={{ __html: formatContent(section.content) }} />
                  {section.tip && (
                    <div className="tip-box mt-3">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-[var(--color-text-secondary)]">{section.tip}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive component button */}
        {session.interactiveComponent && (
          <button
            onClick={() => setShowInteractive(session.interactiveComponent!)}
            className="btn-primary w-full mt-6 flex items-center justify-center gap-2"
          >
            {session.interactiveComponent === 'sleep-diary' && 'Otvori dnevnik spavanja'}
            {session.interactiveComponent === 'sleep-window-calculator' && 'Izračunaj prozor spavanja'}
            {session.interactiveComponent === 'isi-recheck' && 'Ponovite ISI upitnik'}
          </button>
        )}

        {/* Key takeaways */}
        <div className="card p-4 mt-6">
          <h3 className="font-semibold text-sm mb-3">Ključne poruke</h3>
          <ul className="space-y-2">
            {session.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--color-text-secondary)]">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Complete button */}
        {!isCompleted && (
          <button
            onClick={onComplete}
            className="btn-primary w-full mt-6"
          >
            Označi sesiju kao završenu
          </button>
        )}

        {isCompleted && (
          <div className="flex items-center justify-center gap-2 mt-6 text-emerald-500 text-sm font-medium">
            <Check className="w-4 h-4" />
            Sesija završena
          </div>
        )}
      </div>

      {/* Interactive overlays */}
      {showInteractive === 'sleep-diary' && (
        <SleepDiary onClose={() => setShowInteractive(null)} />
      )}
      {showInteractive === 'sleep-window-calculator' && (
        <SleepWindowCalculator onClose={() => setShowInteractive(null)} />
      )}
      {showInteractive === 'isi-recheck' && (
        <ISIQuestionnaire onClose={() => setShowInteractive(null)} />
      )}
    </div>
  )
}

function formatContent(text: string): string {
  return text
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('### ')) {
        return `<h3>${paragraph.slice(4)}</h3>`
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(line =>
          `<li>${line.replace(/^- /, '')}</li>`
        ).join('')
        return `<ul>${items}</ul>`
      }
      // Bold text
      const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      return `<p>${formatted}</p>`
    })
    .join('')
}
