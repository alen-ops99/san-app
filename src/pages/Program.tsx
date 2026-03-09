import { useState } from 'react'
import { sessions } from '../data/sessions'
import { quickSessions } from '../data/quick-program'
import { SessionCard } from '../components/SessionCard'
import { ProgressBar } from '../components/ProgressBar'
import { Session } from './Session'
import { useProgress } from '../hooks/useProgress'
import type { ProgramType } from '../types/index'

export function ProgramPage() {
  const [selectedSession, setSelectedSession] = useState<number | null>(null)
  const { progress, completeSession, isSessionCompleted, switchProgram, completedCount, totalSessions } = useProgress()

  const programType = progress.programType
  const currentSessions = programType === 'quick' ? quickSessions : sessions

  const handleProgramSwitch = (type: ProgramType) => {
    switchProgram(type)
  }

  if (selectedSession !== null) {
    const session = currentSessions.find(s => s.id === selectedSession)
    if (session) {
      return (
        <Session
          session={session}
          isCompleted={isSessionCompleted(session.id)}
          onComplete={() => completeSession(session.id)}
          onBack={() => setSelectedSession(null)}
        />
      )
    }
  }

  return (
    <div className="px-4 pt-12 safe-top">
      <h1 className="text-2xl font-bold mb-2">Program</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        {programType === 'quick'
          ? 'Brzi program za osnove boljeg sna'
          : 'Cjeloviti CBT-I protokol u 8 sesija'}
      </p>

      {/* Program toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => handleProgramSwitch('quick')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
            programType === 'quick'
              ? 'bg-[var(--color-text)] text-[var(--color-background)]'
              : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]'
          }`}
        >
          Brzi (2 sesije)
        </button>
        <button
          onClick={() => handleProgramSwitch('full')}
          className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
            programType === 'full'
              ? 'bg-[var(--color-text)] text-[var(--color-background)]'
              : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]'
          }`}
        >
          Puni (8 sesija)
        </button>
      </div>

      {/* Progress */}
      <ProgressBar completed={completedCount} total={totalSessions} />

      {/* Session list */}
      <div className="space-y-3 mt-6 stagger-children">
        {currentSessions.map((session) => (
          <SessionCard
            key={session.id}
            session={session}
            isCompleted={isSessionCompleted(session.id)}
            onClick={() => setSelectedSession(session.id)}
          />
        ))}
      </div>
    </div>
  )
}
