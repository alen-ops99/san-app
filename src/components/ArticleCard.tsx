import { Clock, type LucideIcon } from 'lucide-react'
import Card from './ui/Card'

interface ArticleData {
  id: string
  title: string
  subtitle: string
  readTime: string
  icon: LucideIcon
}

interface ArticleCardProps {
  article: ArticleData
  onClick: () => void
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  const IconComponent = article.icon

  return (
    <Card variant="interactive" onClick={onClick}>
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-xl bg-[#b8860b]/10 text-[#b8860b]">
          <IconComponent size={22} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-[#1a2744] dark:text-[#f5f3ef] leading-snug">
            {article.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {article.subtitle}
          </p>

          {/* Read time */}
          <div className="flex items-center gap-1 mt-2 text-xs text-gray-400 dark:text-gray-500">
            <Clock size={12} />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
