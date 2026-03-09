import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
import type { SleepDiaryEntry } from '../types'
import {
  calculateTimeInBed,
  calculateTotalSleepTime,
  calculateSleepEfficiency,
} from '../utils/sleep-calculations'

/**
 * Hook for managing sleep diary entries.
 * Automatically calculates TIB, TST, and SE on entry creation.
 */
export function useSleepDiary() {
  const [entries, setEntries] = useLocalStorage<SleepDiaryEntry[]>(
    'san-sleep-diary',
    []
  )

  const addEntry = useCallback(
    (
      entry: Omit<
        SleepDiaryEntry,
        'id' | 'timeInBed' | 'totalSleepTime' | 'sleepEfficiency'
      >
    ) => {
      const timeInBed = calculateTimeInBed(entry.bedtime, entry.riseTime)
      const totalSleepTime = calculateTotalSleepTime(
        timeInBed,
        entry.sleepOnsetLatency,
        entry.wakeAfterSleepOnset
      )
      const sleepEfficiency = calculateSleepEfficiency(totalSleepTime, timeInBed)

      const newEntry: SleepDiaryEntry = {
        ...entry,
        id: crypto.randomUUID(),
        timeInBed,
        totalSleepTime,
        sleepEfficiency,
      }

      setEntries((prev) =>
        [...prev, newEntry].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      )
    },
    [setEntries]
  )

  const deleteEntry = useCallback(
    (id: string) => {
      setEntries((prev) => prev.filter((e) => e.id !== id))
    },
    [setEntries]
  )

  const getAverages = useCallback(
    (days: number = 7) => {
      const cutoff = new Date()
      cutoff.setDate(cutoff.getDate() - days)
      const cutoffStr = cutoff.toISOString().split('T')[0]

      const recent = entries.filter((e) => e.date >= cutoffStr)

      if (recent.length === 0) {
        return { avgSE: 0, avgTST: 0, avgSOL: 0, avgWASO: 0 }
      }

      const avgSE =
        recent.reduce((sum, e) => sum + (e.sleepEfficiency ?? 0), 0) /
        recent.length
      const avgTST =
        recent.reduce((sum, e) => sum + (e.totalSleepTime ?? 0), 0) /
        recent.length
      const avgSOL =
        recent.reduce((sum, e) => sum + e.sleepOnsetLatency, 0) / recent.length
      const avgWASO =
        recent.reduce((sum, e) => sum + e.wakeAfterSleepOnset, 0) /
        recent.length

      return {
        avgSE: Math.round(avgSE * 10) / 10,
        avgTST: Math.round(avgTST),
        avgSOL: Math.round(avgSOL),
        avgWASO: Math.round(avgWASO),
      }
    },
    [entries]
  )

  const latestEntries = useCallback(
    (count: number) => {
      return entries.slice(0, count)
    },
    [entries]
  )

  return useMemo(
    () => ({
      entries,
      addEntry,
      deleteEntry,
      getAverages,
      latestEntries,
    }),
    [entries, addEntry, deleteEntry, getAverages, latestEntries]
  )
}
