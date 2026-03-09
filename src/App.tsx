import { useState, useEffect, lazy, Suspense } from 'react'
import { Moon, Sun } from 'lucide-react'
import { BottomNav } from './components/BottomNav'
import { ErrorBoundary } from './components/ErrorBoundary'
import type { TabId } from './types/index'

const HomePage = lazy(() => import('./pages/Home').then(m => ({ default: m.HomePage })))
const ProgramPage = lazy(() => import('./pages/Program').then(m => ({ default: m.ProgramPage })))
const RelaxationPage = lazy(() => import('./pages/Relaxation').then(m => ({ default: m.RelaxationPage })))
const EducationPage = lazy(() => import('./pages/Education').then(m => ({ default: m.EducationPage })))

function PageSkeleton() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-accent-gold border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home')
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('san-dark-mode')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('san-dark-mode', String(isDark))
  }, [isDark])

  const [showDisclaimer, setShowDisclaimer] = useState(() => {
    return !localStorage.getItem('san-disclaimer-accepted')
  })

  const acceptDisclaimer = () => {
    localStorage.setItem('san-disclaimer-accepted', 'true')
    setShowDisclaimer(false)
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={setActiveTab} />
      case 'program':
        return <ProgramPage />
      case 'relaxation':
        return <RelaxationPage />
      case 'learn':
        return <EducationPage />
      default:
        return <HomePage onNavigate={setActiveTab} />
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-3 right-3 z-50 w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center transition-all hover:opacity-80 active:scale-95 safe-top"
        aria-label={isDark ? 'Uključi svijetli način' : 'Uključi tamni način'}
      >
        {isDark ? <Sun className="w-4 h-4 text-accent-gold" /> : <Moon className="w-4 h-4" />}
      </button>

      {/* Main content */}
      <main className="max-w-lg mx-auto pb-24">
        <div key={activeTab} className="page-transition">
          <ErrorBoundary>
            <Suspense fallback={<PageSkeleton />}>
              {renderPage()}
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* First visit disclaimer */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center overlay-backdrop bg-black/60">
          <div className="w-full max-w-lg bg-[var(--color-surface)] rounded-t-2xl p-6 overlay-enter safe-bottom">
            <div className="w-10 h-1 bg-[var(--color-border)] rounded-full mx-auto mb-4" />
            <h2 className="text-lg font-bold mb-3">Dobrodošli u San</h2>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
              Ova aplikacija pruža edukativne informacije o poboljšanju sna temeljene na kognitivno-bihevioralnoj terapiji nesanice (CBT-I).
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
              <strong className="text-[var(--color-text)]">Ovo nije zamjena za liječnički pregled.</strong> Ako imate
              ozbiljne probleme sa snom, obratite se svom liječniku obiteljske medicine ili specijalistu za medicinu spavanja.
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] mb-6">
              Sadržaj je namijenjen isključivo u edukativne svrhe. Autori ne preuzimaju odgovornost za
              primjenu tehnika bez stručnog nadzora.
            </p>
            <button
              onClick={acceptDisclaimer}
              className="btn-primary w-full text-center"
            >
              Razumijem, nastavi
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
