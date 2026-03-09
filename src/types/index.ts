export type TabId = 'home' | 'program' | 'relaxation' | 'learn'
export type ProgramType = 'quick' | 'full'

export interface SleepDiaryEntry {
  id: string
  date: string // YYYY-MM-DD
  bedtime: string // HH:MM
  tryToSleepTime: string // HH:MM
  sleepOnsetLatency: number // minutes
  numberOfAwakenings: number
  wakeAfterSleepOnset: number // minutes (total WASO)
  finalWakeTime: string // HH:MM
  riseTime: string // HH:MM
  sleepQuality: 1 | 2 | 3 | 4 | 5
  // Calculated:
  timeInBed?: number // minutes
  totalSleepTime?: number // minutes
  sleepEfficiency?: number // percentage
}

export interface Progress {
  programType: ProgramType
  completedSessions: number[]
  currentSession: number
}

export interface ISIResult {
  score: number
  date: string
  interpretation: string
}
