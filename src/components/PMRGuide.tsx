import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, Play, Pause, RotateCcw, SkipForward } from 'lucide-react'

interface PMRStep {
  instruction: string
  duration?: number
}

interface PMRGuideProps {
  steps: PMRStep[]
  onClose: () => void
}

export function PMRGuide({ steps, onClose }: PMRGuideProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isAutoMode, setIsAutoMode] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isDone = currentStep >= steps.length

  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    return cleanup
  }, [cleanup])

  useEffect(() => {
    if (!isRunning || !isAutoMode || isDone) return

    const step = steps[currentStep]
    const duration = step.duration || 20
    setTimer(duration)

    cleanup()
    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          // Auto-advance
          if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
          } else {
            setIsRunning(false)
            setCurrentStep(steps.length) // done state
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return cleanup
  }, [currentStep, isRunning, isAutoMode, steps, isDone, cleanup])

  const handleStart = () => {
    setIsAutoMode(true)
    setIsRunning(true)
    setCurrentStep(0)
  }

  const handlePause = () => {
    setIsRunning(false)
    cleanup()
  }

  const handleResume = () => {
    setIsRunning(true)
  }

  const handleSkip = () => {
    cleanup()
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(steps.length)
      setIsRunning(false)
    }
  }

  const handleReset = () => {
    cleanup()
    setCurrentStep(0)
    setTimer(0)
    setIsRunning(false)
    setIsAutoMode(false)
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
      {/* Header */}
      <div className="px-4 py-3 safe-top">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="font-bold text-sm">Progresivna mišićna relaksacija</h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col px-4 py-6">
        {/* Progress */}
        {!isDone && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)] mb-2">
              <span>Korak {currentStep + 1} od {steps.length}</span>
              {isAutoMode && timer > 0 && <span>{timer}s</span>}
            </div>
            <div className="h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
              <div
                className="h-full bg-accent-gold rounded-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Current instruction */}
        <div className="flex-1 flex items-center justify-center">
          {isDone ? (
            <div className="text-center animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧘</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Vježba završena</h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Odlično! Ostanite u ovom opuštenom stanju. Vaše tijelo je sada spremno za san.
              </p>
            </div>
          ) : (
            <div className="card p-6 w-full animate-fade-in" key={currentStep}>
              <p className="text-base leading-relaxed text-center">
                {steps[currentStep].instruction}
              </p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center mt-8">
          {!isAutoMode && !isDone && (
            <button onClick={handleStart} className="btn-primary flex items-center gap-2 px-8">
              <Play className="w-4 h-4" />
              Započni automatski
            </button>
          )}
          {isRunning && !isDone && (
            <>
              <button onClick={handlePause} className="btn-secondary flex items-center gap-2 px-6">
                <Pause className="w-4 h-4" />
              </button>
              <button onClick={handleSkip} className="btn-secondary flex items-center gap-2 px-6">
                <SkipForward className="w-4 h-4" />
              </button>
            </>
          )}
          {!isRunning && isAutoMode && !isDone && (
            <>
              <button onClick={handleResume} className="btn-primary flex items-center gap-2 px-6">
                <Play className="w-4 h-4" />
              </button>
              <button onClick={handleReset} className="btn-secondary flex items-center gap-2 px-6">
                <RotateCcw className="w-4 h-4" />
              </button>
            </>
          )}
          {isDone && (
            <>
              <button onClick={handleReset} className="btn-secondary flex items-center gap-2 px-6">
                <RotateCcw className="w-4 h-4" />
                Ponovi
              </button>
              <button onClick={onClose} className="btn-primary px-6">
                Zatvori
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
