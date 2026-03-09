import { Home, BookOpen, Wind, GraduationCap } from 'lucide-react'
import type { TabId } from '../types/index'

const tabs: { id: TabId; label: string; icon: typeof Home }[] = [
  { id: 'home', label: 'Početna', icon: Home },
  { id: 'program', label: 'Program', icon: BookOpen },
  { id: 'relaxation', label: 'Opuštanje', icon: Wind },
  { id: 'learn', label: 'Učite', icon: GraduationCap },
]

export function BottomNav({ activeTab, onTabChange }: { activeTab: TabId; onTabChange: (tab: TabId) => void }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-surface)]/95 backdrop-blur-sm border-t border-[var(--color-border)] safe-bottom">
      <div className="max-w-lg mx-auto flex">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex-1 flex flex-col items-center justify-center py-2 pt-3 transition-colors touch-target ${
              activeTab === id
                ? 'text-accent-gold'
                : 'text-[var(--color-text-secondary)]'
            }`}
          >
            <Icon className="w-5 h-5 mb-0.5" strokeWidth={activeTab === id ? 2.5 : 1.5} />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
