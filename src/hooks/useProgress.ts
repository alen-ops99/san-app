import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import type { Progress, ProgramType } from '../types'

const QUICK_TOTAL_SESSIONS = 2
const FULL_TOTAL_SESSIONS = 8

const DEFAULT_PROGRESS: Progress = {
  programType: 'quick',
  completedSessions: [],
  currentSession: 1,
}

/**
 * Hook for tracking CBT-I program progress.
 * Persists to localStorage via useLocalStorage.
 */
export function useProgress() {
  const [progress, setProgress] = useLocalStorage<Progress>(
    'san-progress',
    DEFAULT_PROGRESS
  )

  const totalSessions =
    progress.programType === 'quick' ? QUICK_TOTAL_SESSIONS : FULL_TOTAL_SESSIONS

  const completedCount = progress.completedSessions.length

  const completeSession = useCallback(
    (sessionId: number) => {
      setProgress((prev) => {
        if (prev.completedSessions.includes(sessionId)) return prev

        const newCompleted = [...prev.completedSessions, sessionId].sort(
          (a, b) => a - b
        )
        const total =
          prev.programType === 'quick'
            ? QUICK_TOTAL_SESSIONS
            : FULL_TOTAL_SESSIONS
        const nextSession = Math.min(sessionId + 1, total)

        return {
          ...prev,
          completedSessions: newCompleted,
          currentSession: Math.max(prev.currentSession, nextSession),
        }
      })
    },
    [setProgress]
  )

  const isSessionCompleted = useCallback(
    (sessionId: number) => {
      return progress.completedSessions.includes(sessionId)
    },
    [progress.completedSessions]
  )

  const resetProgress = useCallback(() => {
    setProgress({
      ...DEFAULT_PROGRESS,
      programType: progress.programType,
    })
  }, [setProgress, progress.programType])

  const switchProgram = useCallback(
    (type: ProgramType) => {
      setProgress({
        programType: type,
        completedSessions: [],
        currentSession: 1,
      })
    },
    [setProgress]
  )

  return useMemo(
    () => ({
      progress,
      completeSession,
      isSessionCompleted,
      resetProgress,
      switchProgram,
      completedCount,
      totalSessions,
    }),
    [
      progress,
      completeSession,
      isSessionCompleted,
      resetProgress,
      switchProgram,
      completedCount,
      totalSessions,
    ]
  )
}
