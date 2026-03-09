import { useState } from 'react'
import { X, Plus, Trash2, TrendingUp } from 'lucide-react'
import { useSleepDiary } from '../hooks/useSleepDiary'
import { formatMinutesToHours, getSEColor } from '../utils/sleep-calculations'

export function SleepDiary({ onClose }: { onClose: () => void }) {
  const { entries, addEntry, deleteEntry, getAverages } = useSleepDiary()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    bedtime: '23:00',
    tryToSleepTime: '23:15',
    sleepOnsetLatency: 20,
    numberOfAwakenings: 1,
    wakeAfterSleepOnset: 15,
    finalWakeTime: '06:30',
    riseTime: '07:00',
    sleepQuality: 3 as 1 | 2 | 3 | 4 | 5,
  })

  const handleSubmit = () => {
    addEntry(formData)
    setShowForm(false)
    setFormData(prev => ({
      ...prev,
      date: new Date().toISOString().split('T')[0],
    }))
  }

  const averages = getAverages(7)

  return (
    <div className="fixed inset-0 z-50 bg-[var(--color-background)] overflow-y-auto">
      <div className="overlay-enter">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)] px-4 py-3 safe-top">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-lg">Dnevnik spavanja</h1>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="px-4 py-6 max-w-lg mx-auto">
          {/* Averages (7-day) */}
          {entries.length > 0 && (
            <div className="card p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-accent-gold" />
                <h3 className="font-semibold text-sm">Prosjek (zadnjih 7 dana)</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-xs text-[var(--color-text-secondary)]">Učinkovitost sna</span>
                  <p className={`text-lg font-bold ${getSEColor(averages.avgSE)}`}>
                    {averages.avgSE.toFixed(0)}%
                  </p>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-text-secondary)]">Ukupno spavanja</span>
                  <p className="text-lg font-bold">{formatMinutesToHours(averages.avgTST)}</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-text-secondary)]">Latencija (SOL)</span>
                  <p className="text-lg font-bold">{averages.avgSOL.toFixed(0)} min</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-text-secondary)]">Budnost noću</span>
                  <p className="text-lg font-bold">{averages.avgWASO.toFixed(0)} min</p>
                </div>
              </div>
            </div>
          )}

          {/* Add entry button */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-6"
            >
              <Plus className="w-4 h-4" />
              Dodaj unos
            </button>
          )}

          {/* Entry form */}
          {showForm && (
            <div className="card p-4 mb-6 animate-fade-in">
              <h3 className="font-semibold text-sm mb-4">Novi unos</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Datum</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    className="input-field"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Legao/la u krevet</label>
                    <input
                      type="time"
                      value={formData.bedtime}
                      onChange={e => setFormData(prev => ({ ...prev, bedtime: e.target.value }))}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Pokušaj spavanja</label>
                    <input
                      type="time"
                      value={formData.tryToSleepTime}
                      onChange={e => setFormData(prev => ({ ...prev, tryToSleepTime: e.target.value }))}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">
                    Koliko minuta je trebalo da zaspite? (SOL)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={formData.sleepOnsetLatency}
                    onChange={e => setFormData(prev => ({ ...prev, sleepOnsetLatency: parseInt(e.target.value) || 0 }))}
                    className="input-field"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Broj buđenja</label>
                    <input
                      type="number"
                      min={0}
                      value={formData.numberOfAwakenings}
                      onChange={e => setFormData(prev => ({ ...prev, numberOfAwakenings: parseInt(e.target.value) || 0 }))}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Min budni noću (WASO)</label>
                    <input
                      type="number"
                      min={0}
                      value={formData.wakeAfterSleepOnset}
                      onChange={e => setFormData(prev => ({ ...prev, wakeAfterSleepOnset: parseInt(e.target.value) || 0 }))}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Konačno buđenje</label>
                    <input
                      type="time"
                      value={formData.finalWakeTime}
                      onChange={e => setFormData(prev => ({ ...prev, finalWakeTime: e.target.value }))}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[var(--color-text-secondary)] mb-1 block">Ustao/la iz kreveta</label>
                    <input
                      type="time"
                      value={formData.riseTime}
                      onChange={e => setFormData(prev => ({ ...prev, riseTime: e.target.value }))}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[var(--color-text-secondary)] mb-2 block">Kvaliteta sna</label>
                  <div className="flex gap-2">
                    {([1, 2, 3, 4, 5] as const).map((val) => (
                      <button
                        key={val}
                        onClick={() => setFormData(prev => ({ ...prev, sleepQuality: val }))}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                          formData.sleepQuality === val
                            ? 'bg-accent-gold/15 text-accent-gold border border-accent-gold/30'
                            : 'bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-transparent'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                    <span>Vrlo loše</span>
                    <span>Izvrsno</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setShowForm(false)} className="btn-secondary flex-1 text-center">
                    Odustani
                  </button>
                  <button onClick={handleSubmit} className="btn-primary flex-1 text-center">
                    Spremi
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Entry list */}
          {entries.length === 0 ? (
            <div className="text-center py-12 text-[var(--color-text-secondary)]">
              <p className="text-sm">Još nemate unosa u dnevniku.</p>
              <p className="text-xs mt-1">Dodajte prvi unos za praćenje sna.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {entries.slice().reverse().map((entry) => (
                <div key={entry.id} className="card p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-sm">
                        {new Date(entry.date).toLocaleDateString('hr-HR', { weekday: 'short', day: 'numeric', month: 'short' })}
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        {entry.bedtime} → {entry.riseTime}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteEntry(entry.id)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--color-text-secondary)] hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="text-xs text-[var(--color-text-secondary)]">SE</span>
                      <p className={`text-sm font-bold ${getSEColor(entry.sleepEfficiency || 0)}`}>
                        {entry.sleepEfficiency?.toFixed(0)}%
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-[var(--color-text-secondary)]">TST</span>
                      <p className="text-sm font-bold">{formatMinutesToHours(entry.totalSleepTime || 0)}</p>
                    </div>
                    <div>
                      <span className="text-xs text-[var(--color-text-secondary)]">SOL</span>
                      <p className="text-sm font-bold">{entry.sleepOnsetLatency} min</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
