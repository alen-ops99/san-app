import { useState, useMemo } from 'react'
import { Moon, ClipboardCheck, Zap, BookOpen, Pill } from 'lucide-react'
import { ISIQuestionnaire } from '../components/ISIQuestionnaire'
import { Supplements } from './Supplements'
import type { TabId } from '../types/index'

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 6) return 'Mirna noć'
  if (hour < 12) return 'Dobro jutro'
  if (hour < 18) return 'Dobar dan'
  if (hour < 22) return 'Dobra večer'
  return 'Mirna noć'
}

function getGreetingSubtext(): string {
  const hour = new Date().getHours()
  if (hour < 6) return 'Opustite se i prepustite snu.'
  if (hour < 12) return 'Kako ste spavali noćas?'
  if (hour < 18) return 'Vrijeme je za brigu o Vašem snu.'
  if (hour < 22) return 'Pripremite se za miran san.'
  return 'Opustite se i prepustite snu.'
}

export function HomePage({ onNavigate }: { onNavigate: (tab: TabId) => void }) {
  const [showISI, setShowISI] = useState(false)
  const [showSupplements, setShowSupplements] = useState(false)

  const greeting = useMemo(getGreeting, [])
  const subtext = useMemo(getGreetingSubtext, [])

  return (
    <div className="px-4 pt-12 safe-top">
      {/* Greeting */}
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center gap-2 mb-1">
          <Moon className="w-5 h-5 text-accent-gold" />
          <span className="text-sm text-[var(--color-text-secondary)] font-medium">{subtext}</span>
        </div>
        <h1 className="text-2xl font-bold">{greeting}</h1>
      </div>

      {/* ISI Quick Check */}
      <button
        onClick={() => setShowISI(true)}
        className="w-full card-interactive p-4 mb-6 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
          <ClipboardCheck className="w-6 h-6 text-accent-gold" />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-sm">ISI — Brza procjena nesanice</h3>
          <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
            7 pitanja — saznajte razinu Vaše nesanice
          </p>
        </div>
      </button>

      {/* Program cards */}
      <h2 className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-3">
        Programi
      </h2>
      <div className="space-y-3 mb-6 stagger-children">
        {/* Quick program */}
        <button
          onClick={() => {
            localStorage.setItem('san-program-type', 'quick')
            onNavigate('program')
          }}
          className="w-full card-interactive p-4 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-700/10 dark:bg-primary-400/10 flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-primary-600 dark:text-primary-300" />
          </div>
          <div className="text-left flex-1">
            <h3 className="font-semibold">Brzi program</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
              2 sesije — za blagu nesanicu i brze rezultate
            </p>
          </div>
          <span className="text-xs bg-primary-700/10 dark:bg-primary-400/10 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full font-medium">
            1-2 tj.
          </span>
        </button>

        {/* Full program */}
        <button
          onClick={() => {
            localStorage.setItem('san-program-type', 'full')
            onNavigate('program')
          }}
          className="w-full card-interactive p-4 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-accent-gold" />
          </div>
          <div className="text-left flex-1">
            <h3 className="font-semibold">Puni CBT-I program</h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
              8 sesija — cjeloviti protokol za kroničnu nesanicu
            </p>
          </div>
          <span className="text-xs bg-accent-gold/10 text-accent-gold px-2 py-1 rounded-full font-medium">
            6-8 tj.
          </span>
        </button>
      </div>

      {/* Supplements link */}
      <button
        onClick={() => setShowSupplements(true)}
        className="w-full card-interactive p-4 flex items-center gap-4 mb-8"
      >
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
          <Pill className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-sm">Prirodni dodaci za san</h3>
          <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
            Melatonin, magnezij, valerijana i drugi — što kaže znanost?
          </p>
        </div>
      </button>

      {/* About section */}
      <div className="card p-4 mb-6">
        <h3 className="font-semibold text-sm mb-2">O aplikaciji San</h3>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-2">
          San je besplatna aplikacija temeljena na kognitivno-bihevioralnoj terapiji nesanice (CBT-I) —
          zlatnom standardu u liječenju kronične nesanice prema svim međunarodnim smjernicama (AASM, ESRS, NICE).
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
          Sav sadržaj je na hrvatskom jeziku, temeljen na najnovijim znanstvenim dokazima, i prilagođen
          za pacijente koje je uputio liječnik obiteljske medicine.
        </p>
      </div>

      {/* ISI Questionnaire Modal */}
      {showISI && <ISIQuestionnaire onClose={() => setShowISI(false)} />}

      {/* Supplements Overlay */}
      {showSupplements && <Supplements onClose={() => setShowSupplements(false)} />}
    </div>
  )
}
