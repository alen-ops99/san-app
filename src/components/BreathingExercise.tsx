import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react'

type Phase = 'idle' | 'inhale' | 'hold' | 'exhale' | 'done'

const INHALE_DURATION = 4
const HOLD_DURATION = 7
const EXHALE_DURATION = 8
const TOTAL_CYCLES = 4

const phaseLabels: Record<Phase, string> = {
  idle: 'Pritisnite za početak',
  inhale: 'Udahnite...',
  hold: 'Zadržite...',
  exhale: 'Izdahnite...',
  done: 'Završeno',
}

export function BreathingExercise({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [cycle, setCycle] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const phaseDuration = phase === 'inhale' ? INHALE_DURATION
    : phase === 'hold' ? HOLD_DURATION
    : phase === 'exhale' ? EXHALE_DURATION
    : 0

  const circleScale = phase === 'inhale' ? 1
    : phase === 'hold' ? 1
    : phase === 'exhale' ? 0.6
    : 0.6

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
    if (!isRunning || phase === 'idle' || phase === 'done') return

    cleanup()
    setTimer(phaseDuration)

    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          // Move to next phase
          if (phase === 'inhale') {
            setPhase('hold')
          } else if (phase === 'hold') {
            setPhase('exhale')
          } else if (phase === 'exhale') {
            const nextCycle = cycle + 1
            if (nextCycle >= TOTAL_CYCLES) {
              setPhase('done')
              setIsRunning(false)
            } else {
              setCycle(nextCycle)
              setPhase('inhale')
            }
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return cleanup
  }, [phase, cycle, isRunning, phaseDuration, cleanup])

  const handleStart = () => {
    setCycle(0)
    setPhase('inhale')
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
    cleanup()
  }

  const handleResume = () => {
    setIsRunning(true)
  }

  const handleReset = () => {
    cleanup()
    setPhase('idle')
    setCycle(0)
    setTimer(0)
    setIsRunning(false)
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
          <h1 className="font-bold text-sm">4-7-8 Disanje</h1>
        </div>
      </div>

      {/* Breathing circle */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Cycle counter */}
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          {phase === 'done' ? 'Svi ciklusi završeni' : phase === 'idle' ? `${TOTAL_CYCLES} ciklusa` : `Ciklus ${cycle + 1} od ${TOTAL_CYCLES}`}
        </p>

        {/* Circle */}
        <div className="relative w-56 h-56 flex items-center justify-center mb-8">
          <div
            className={`w-full h-full rounded-full border-4 border-accent-gold/30 flex items-center justify-center transition-transform ${
              phase !== 'idle' && phase !== 'done' ? 'animate-gentle-pulse' : ''
            }`}
            style={{
              transform: `scale(${circleScale})`,
              transition: phase === 'inhale' ? `transform ${INHALE_DURATION}s ease-in-out`
                : phase === 'exhale' ? `transform ${EXHALE_DURATION}s ease-in-out`
                : 'transform 0.3s ease',
              backgroundColor: `rgba(184, 134, 11, ${phase === 'hold' ? 0.15 : 0.08})`,
            }}
          >
            <div className="text-center">
              {timer > 0 && (
                <span className="text-4xl font-bold text-accent-gold">{timer}</span>
              )}
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">{phaseLabels[phase]}</p>
            </div>
          </div>
        </div>

        {/* Phase indicators */}
        {phase !== 'idle' && phase !== 'done' && (
          <div className="flex gap-6 mb-8 text-xs text-[var(--color-text-secondary)]">
            <span className={phase === 'inhale' ? 'text-accent-gold font-semibold' : ''}>
              Udah ({INHALE_DURATION}s)
            </span>
            <span className={phase === 'hold' ? 'text-accent-gold font-semibold' : ''}>
              Zadrži ({HOLD_DURATION}s)
            </span>
            <span className={phase === 'exhale' ? 'text-accent-gold font-semibold' : ''}>
              Izdah ({EXHALE_DURATION}s)
            </span>
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-3">
          {phase === 'idle' && (
            <button onClick={handleStart} className="btn-primary flex items-center gap-2 px-8">
              <Play className="w-4 h-4" />
              Započni
            </button>
          )}
          {isRunning && phase !== 'done' && (
            <button onClick={handlePause} className="btn-secondary flex items-center gap-2 px-8">
              <Pause className="w-4 h-4" />
              Pauza
            </button>
          )}
          {!isRunning && phase !== 'idle' && phase !== 'done' && (
            <>
              <button onClick={handleResume} className="btn-primary flex items-center gap-2 px-6">
                <Play className="w-4 h-4" />
                Nastavi
              </button>
              <button onClick={handleReset} className="btn-secondary flex items-center gap-2 px-6">
                <RotateCcw className="w-4 h-4" />
              </button>
            </>
          )}
          {phase === 'done' && (
            <div className="flex gap-3">
              <button onClick={handleReset} className="btn-secondary flex items-center gap-2 px-6">
                <RotateCcw className="w-4 h-4" />
                Ponovi
              </button>
              <button onClick={onClose} className="btn-primary px-6">
                Zatvori
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="px-4 pb-6">
        <div className="card p-4">
          <h3 className="font-semibold text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Kako vježbati</h3>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            Sjednite ili lezite udobno. Udahnite kroz nos 4 sekunde, zadržite dah 7 sekundi,
            polako izdahnite kroz usta 8 sekundi. Ponovite 4 ciklusa.
          </p>
        </div>
      </div>
    </div>
  )
}
