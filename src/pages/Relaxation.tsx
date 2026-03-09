import { useState } from 'react'
import { Wind, Zap, ScanLine, Sunset, Brain, Clock, ArrowLeft } from 'lucide-react'
import { relaxationTechniques } from '../data/relaxation'
import { BreathingExercise } from '../components/BreathingExercise'
import { PMRGuide } from '../components/PMRGuide'
import type { RelaxationTechnique } from '../data/relaxation'

const iconMap: Record<string, typeof Wind> = {
  'Wind': Wind,
  'Zap': Zap,
  'ScanLine': ScanLine,
  'Sunset': Sunset,
  'Brain': Brain,
}

export function RelaxationPage() {
  const [activeTechnique, setActiveTechnique] = useState<RelaxationTechnique | null>(null)

  if (activeTechnique) {
    // Breathing exercise
    if (activeTechnique.type === 'breathing') {
      return <BreathingExercise onClose={() => setActiveTechnique(null)} />
    }
    // PMR guide
    if (activeTechnique.type === 'muscle') {
      return <PMRGuide steps={activeTechnique.steps} onClose={() => setActiveTechnique(null)} />
    }
    // Text-based techniques (body scan, imagery, autogenic)
    return (
      <TextTechnique technique={activeTechnique} onClose={() => setActiveTechnique(null)} />
    )
  }

  return (
    <div className="px-4 pt-12 safe-top">
      <h1 className="text-2xl font-bold mb-2">Opuštanje</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Tehnike opuštanja za bolju pripremu za san
      </p>

      <div className="space-y-3 stagger-children">
        {relaxationTechniques.map((technique) => {
          const Icon = iconMap[technique.icon] || Wind
          return (
            <button
              key={technique.id}
              onClick={() => setActiveTechnique(technique)}
              className="w-full card-interactive p-4 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-accent-gold" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-sm">{technique.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{technique.subtitle}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
                <Clock className="w-3 h-3" />
                {technique.duration}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function TextTechnique({ technique, onClose }: { technique: RelaxationTechnique; onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="sticky top-0 z-10 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)] px-4 py-3 safe-top">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="font-bold text-sm">{technique.title}</h1>
        </div>
      </div>

      <div className="px-4 py-6">
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">{technique.description}</p>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-[var(--color-text-secondary)]">
            Korak {currentStep + 1} od {technique.steps.length}
          </span>
          <div className="flex-1 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-gold rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / technique.steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current step */}
        <div className="card p-6 mb-6 animate-fade-in" key={currentStep}>
          <p className="text-base leading-relaxed">{technique.steps[currentStep].instruction}</p>
          {technique.steps[currentStep].duration && (
            <p className="text-sm text-accent-gold mt-3 font-medium">
              ~{technique.steps[currentStep].duration} sekundi
            </p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="btn-secondary flex-1 text-center disabled:opacity-40"
          >
            Prethodni
          </button>
          {currentStep < technique.steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="btn-primary flex-1 text-center"
            >
              Sljedeći
            </button>
          ) : (
            <button
              onClick={onClose}
              className="btn-primary flex-1 text-center"
            >
              Završi
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
