import { useState } from 'react'
import { X, ChevronRight, RotateCcw } from 'lucide-react'
import { isiQuestions, isiInterpretation } from '../data/isi-questions'

export function ISIQuestionnaire({ onClose }: { onClose: () => void }) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
  const allAnswered = Object.keys(answers).length === isiQuestions.length
  const result = isiInterpretation(totalScore)

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = () => {
    if (!allAnswered) return
    // Save result to localStorage
    const results = JSON.parse(localStorage.getItem('san-isi-results') || '[]')
    results.push({
      score: totalScore,
      date: new Date().toISOString(),
      interpretation: result.level,
    })
    localStorage.setItem('san-isi-results', JSON.stringify(results))
    setShowResult(true)
  }

  const handleReset = () => {
    setAnswers({})
    setShowResult(false)
  }

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-background)] overflow-y-auto">
      <div className="overlay-enter">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)] px-4 py-3 safe-top">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">ISI upitnik</h1>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="px-4 py-6 max-w-lg mx-auto">
          {!showResult ? (
            <>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                Ocijenite sljedeće aspekte Vašeg spavanja u <strong className="text-[var(--color-text)]">posljednja 2 tjedna</strong>.
              </p>

              <div className="space-y-6">
                {isiQuestions.map((question) => (
                  <div key={question.id} className="card p-4">
                    <p className="font-medium text-sm mb-3">{question.text}</p>
                    <div className="space-y-2">
                      {question.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(question.id, option.value)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${
                            answers[question.id] === option.value
                              ? 'bg-accent-gold/15 text-accent-gold font-medium border border-accent-gold/30'
                              : 'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-transparent hover:bg-[var(--color-border)]'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="btn-primary w-full mt-6 flex items-center justify-center gap-2"
              >
                Prikaži rezultat
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="animate-scale-in">
              {/* Result */}
              <div className="card p-6 text-center mb-6">
                <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white ${result.color}`}>
                  {totalScore}
                </div>
                <h2 className="text-lg font-bold mb-1">{result.level}</h2>
                <p className="text-sm text-[var(--color-text-secondary)]">{result.description}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-3">
                  Raspon bodova: 0–28
                </p>
              </div>

              {/* Guidance */}
              <div className="card p-4 mb-6">
                <h3 className="font-semibold text-sm mb-2">Što to znači?</h3>
                {totalScore <= 7 && (
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Vaš rezultat ukazuje da nemate klinički značajnu nesanicu. Nastavite s dobrim navikama spavanja.
                  </p>
                )}
                {totalScore >= 8 && totalScore <= 14 && (
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Imate blagu nesanicu. Brzi program s osnovnim tehnikama higijene sna i kontrole stimulusa mogao bi Vam pomoći.
                  </p>
                )}
                {totalScore >= 15 && totalScore <= 21 && (
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Imate umjerenu nesanicu. Preporučujemo puni CBT-I program od 8 sesija. Ako se simptomi nastave nakon 4-6 tjedana, posavjetujte se s liječnikom.
                  </p>
                )}
                {totalScore >= 22 && (
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Imate tešku nesanicu. Svakako započnite CBT-I program, ali se <strong className="text-[var(--color-text)]">obavezno obratite liječniku</strong> za stručnu procjenu i individualizirani plan liječenja.
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button onClick={handleReset} className="btn-secondary flex-1 flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Ponovi
                </button>
                <button onClick={onClose} className="btn-primary flex-1 text-center">
                  Zatvori
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
