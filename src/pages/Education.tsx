import { useState } from 'react'
import { ArrowLeft, Clock, Heart, Brain, Shield, Scale, BookOpen, Moon, Stethoscope } from 'lucide-react'
import { articles } from '../data/education-articles'
import type { Article } from '../data/education-articles'

const iconMap: Record<string, typeof Heart> = {
  'Heart': Heart,
  'Brain': Brain,
  'Shield': Shield,
  'Scale': Scale,
  'BookOpen': BookOpen,
  'Moon': Moon,
  'Clock': Clock,
  'Stethoscope': Stethoscope,
}

export function EducationPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  if (selectedArticle) {
    return (
      <ArticleView article={selectedArticle} onBack={() => setSelectedArticle(null)} />
    )
  }

  return (
    <div className="px-4 pt-12 safe-top">
      <h1 className="text-2xl font-bold mb-2">Učite</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Kratki članci o snu i zdravlju
      </p>

      <div className="grid grid-cols-2 gap-3 stagger-children">
        {articles.map((article) => {
          const Icon = iconMap[article.icon] || BookOpen
          return (
            <button
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="card-interactive p-4 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-accent-gold" />
              </div>
              <h3 className="font-semibold text-sm leading-tight mb-1">{article.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2">{article.subtitle}</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-[var(--color-text-secondary)]">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ArticleView({ article, onBack }: { article: Article; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="sticky top-0 z-10 bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)] px-4 py-3 safe-top">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-sm truncate">{article.title}</h1>
            <div className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <div className="prose-san text-sm" dangerouslySetInnerHTML={{ __html: formatArticle(article.content) }} />

        {article.sources && article.sources.length > 0 && (
          <div className="card p-4 mt-6">
            <h3 className="font-semibold text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Izvori</h3>
            <ul className="space-y-1">
              {article.sources.map((source, i) => (
                <li key={i} className="text-xs text-[var(--color-text-secondary)]">{source}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function formatArticle(text: string): string {
  return text
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('### ')) {
        return `<h3>${paragraph.slice(4)}</h3>`
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(line =>
          `<li>${line.replace(/^- /, '')}</li>`
        ).join('')
        return `<ul>${items}</ul>`
      }
      const formatted = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      return `<p>${formatted}</p>`
    })
    .join('')
}
