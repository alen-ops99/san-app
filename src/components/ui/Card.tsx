import type { ReactNode } from 'react'

interface CardProps {
  variant?: 'default' | 'interactive'
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function Card({
  variant = 'default',
  children,
  className = '',
  onClick,
}: CardProps) {
  const base = 'card'
  const interactive = variant === 'interactive' ? 'card-interactive' : ''
  const classes = `${interactive || base} p-4 ${className}`.trim()

  if (onClick) {
    return (
      <button type="button" className={`${classes} w-full text-left`} onClick={onClick}>
        {children}
      </button>
    )
  }

  return <div className={classes}>{children}</div>
}
