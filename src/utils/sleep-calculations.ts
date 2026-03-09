/**
 * Parses a HH:MM time string into total minutes from midnight.
 */
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

/**
 * Calculates time in bed (TIB) in minutes.
 * Handles overnight spans (e.g., 23:00 bedtime -> 07:00 rise time).
 */
export function calculateTimeInBed(bedtime: string, riseTime: string): number {
  const bedMinutes = timeToMinutes(bedtime)
  const riseMinutes = timeToMinutes(riseTime)

  if (riseMinutes >= bedMinutes) {
    return riseMinutes - bedMinutes
  }
  // Overnight: e.g., 23:00 to 07:00 = 480 min
  return 1440 - bedMinutes + riseMinutes
}

/**
 * Calculates total sleep time (TST) in minutes.
 * TST = TIB - SOL - WASO
 */
export function calculateTotalSleepTime(
  tib: number,
  sol: number,
  waso: number
): number {
  const tst = tib - sol - waso
  return Math.max(0, tst)
}

/**
 * Calculates sleep efficiency (SE) as a percentage.
 * SE = (TST / TIB) * 100
 */
export function calculateSleepEfficiency(tst: number, tib: number): number {
  if (tib <= 0) return 0
  return Math.round((tst / tib) * 100 * 10) / 10
}

/**
 * Calculates the recommended sleep window based on average TST.
 * Uses sleep restriction therapy principles:
 * - Window = max(avgTST, 5h) rounded to nearest 15min
 * - Default wake time: 07:00
 * - Bedtime calculated backwards from wake time
 */
export function calculateSleepWindow(avgTST: number): {
  bedtime: string
  wakeTime: string
  windowHours: number
} {
  // Minimum window is 5 hours (300 min) per clinical guidelines
  const windowMinutes = Math.max(avgTST, 300)
  // Round to nearest 15 minutes
  const roundedWindow = Math.round(windowMinutes / 15) * 15

  const wakeTime = '07:00'
  const wakeMinutes = timeToMinutes(wakeTime)

  let bedMinutes = wakeMinutes - roundedWindow
  if (bedMinutes < 0) {
    bedMinutes += 1440
  }

  const bedHours = Math.floor(bedMinutes / 60)
  const bedMins = bedMinutes % 60
  const bedtime = `${String(bedHours).padStart(2, '0')}:${String(bedMins).padStart(2, '0')}`

  return {
    bedtime,
    wakeTime,
    windowHours: roundedWindow / 60,
  }
}

/**
 * Formats minutes into a human-readable hours + minutes string.
 * e.g., 450 -> "7h 30min"
 */
export function formatMinutesToHours(minutes: number): string {
  if (minutes < 0) return '0min'
  const hours = Math.floor(minutes / 60)
  const mins = Math.round(minutes % 60)

  if (hours === 0) return `${mins}min`
  if (mins === 0) return `${hours}h`
  return `${hours}h ${mins}min`
}

/**
 * Returns a Tailwind-compatible color class based on sleep efficiency.
 * Green: SE >= 85% (good)
 * Orange: SE 75-84% (suboptimal)
 * Red: SE < 75% (poor)
 */
export function getSEColor(se: number): string {
  if (se >= 85) return 'text-green-600 dark:text-green-400'
  if (se >= 75) return 'text-orange-500 dark:text-orange-400'
  return 'text-red-600 dark:text-red-400'
}
