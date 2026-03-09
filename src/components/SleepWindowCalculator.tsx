import { useState } from 'react'
import { X, Calculator, AlertTriangle, Clock } from 'lucide-react'
import { useSleepDiary } from '../hooks/useSleepDiary'
import { calculateSleepWindow, formatMinutesToHours, getSEColor } from '../utils/sleep-calculations'

export function SleepWindowCalculator({ onClose }: { onClose: () => void }) {
  const { entries, getAverages } = useSleepDiary()
  const [manualTST, setManualTST] = useState('')
  const [manualWakeTime, setManualWakeTime] = useState('07:00')
  const [result, setResult] = useState<{ bedtime: string; wakeTime: string; windowHours: number } | null>(null)

  const hasEntries = entries.length >= 3
  const averages = hasEntries ? getAverages(7) : null

  const handleCalculateFromDiary = () => {
    if (!averages) return
    const window = calculateSleepWindow(averages.avgTST)
    setResult({
      ...window,
      wakeTime: manualWakeTime,
    })
  }

  const handleCalculateManual = () => {
    const tst = parseInt(manualTST)
    if (isNaN(tst) || tst < 60) return
    const window = calculateSleepWindow(tst)
    // Calculate bedtime based on wake time and window
    const [wakeH, wakeM] = manualWakeTime.split(':').map(Number)
    const wakeMins = wakeH * 60 + wakeM
    let bedMins = wakeMins - window.windowHours * 60
    if (bedMins < 0) bedMins += 24 * 60
    const bedH = Math.floor(bedMins / 60)
    const bedM = Math.floor(bedMins % 60)
    setResult({
      bedtime: `${bedH.toString().padStart(2, '0')}:${bedM.toString().padStart(2, '0')}`,
      wakeTime: manualWakeTime,
      windowHours: window.windowHours,
    })
  }

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-background)] overflow-y-auto">
      <div className="overlay-enter">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)] px-4 py-3 safe-top">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-accent-gold" />
              <h1 className="font-bold text-lg">Prozor spavanja</h1>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="px-4 py-6 max-w-lg mx-auto">
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            Restrikcija sna ograničava Vaše vrijeme u krevetu na stvarno vrijeme spavanja,
            čime se povećava pritisak za spavanje i poboljšava učinkovitost sna.
          </p>

          {/* From diary */}
          {hasEntries && averages && (
            <div className="card p-4 mb-4">
              <h3 className="font-semibold text-sm mb-3">Iz dnevnika spavanja</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <span className="text-xs text-[var(--color-text-secondary)]">Prosj. TST</span>
                  <p className="font-bold">{formatMinutesToHours(averages.avgTST)}</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-text-secondary)]">Prosj. SE</span>
                  <p className={`font-bold ${getSEColor(averages.avgSE)}`}>{averages.avgSE.toFixed(0)}%</p>
                </div>
              </div>
              <div className="mb-4">
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Željeno vrijeme buđenja</label>
                <input
                  type="time"
                  value={manualWakeTime}
                  onChange={e => setManualWakeTime(e.target.value)}
                  className="input-field"
                />
              </div>
              <button onClick={handleCalculateFromDiary} className="btn-primary w-full text-center">
                Izračunaj iz dnevnika
              </button>
            </div>
          )}

          {/* Manual input */}
          <div className="card p-4 mb-6">
            <h3 className="font-semibold text-sm mb-3">
              {hasEntries ? 'Ili unesite ručno' : 'Unesite podatke'}
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">
                  Prosječno ukupno vrijeme spavanja (minute)
                </label>
                <input
                  type="number"
                  min={60}
                  max={600}
                  placeholder="npr. 360 (= 6 sati)"
                  value={manualTST}
                  onChange={e => setManualTST(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Željeno vrijeme buđenja</label>
                <input
                  type="time"
                  value={manualWakeTime}
                  onChange={e => setManualWakeTime(e.target.value)}
                  className="input-field"
                />
              </div>
              <button onClick={handleCalculateManual} className="btn-primary w-full text-center">
                Izračunaj
              </button>
            </div>
          </div>

          {/* Result */}
          {result && (
            <div className="card p-6 animate-scale-in mb-6">
              <h3 className="font-semibold text-center mb-4">Vaš prozor spavanja</h3>
              <div className="flex items-center justify-center gap-6 mb-4">
                <div className="text-center">
                  <span className="text-xs text-[var(--color-text-secondary)]">Krevet</span>
                  <p className="text-2xl font-bold text-accent-gold">{result.bedtime}</p>
                </div>
                <Clock className="w-5 h-5 text-[var(--color-text-secondary)]" />
                <div className="text-center">
                  <span className="text-xs text-[var(--color-text-secondary)]">Buđenje</span>
                  <p className="text-2xl font-bold text-accent-gold">{result.wakeTime}</p>
                </div>
              </div>
              <p className="text-center text-sm text-[var(--color-text-secondary)]">
                Prozor: <strong className="text-[var(--color-text)]">{result.windowHours.toFixed(1)} sati</strong>
              </p>
            </div>
          )}

          {/* Safety warning */}
          <div className="card p-4 border-amber-500/30 bg-amber-500/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Važna upozorenja</h3>
                <ul className="text-xs text-[var(--color-text-secondary)] space-y-1">
                  <li>• Minimalni prozor spavanja je <strong className="text-[var(--color-text)]">5 sati</strong> (sigurnosni pod)</li>
                  <li>• Očekujte privremenu dnevnu pospanost prvih tjedan dana</li>
                  <li>• Nije preporučeno za vozače i radnike na strojevima</li>
                  <li>• Kontraindicirano kod epilepsije i bipolarnog poremećaja</li>
                  <li>• Tjedni prilagodite: SE &gt;90% → dodajte 15-30 min, SE 85-90% → zadržite, SE &lt;85% → smanjite 15 min</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
