import { type ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#1a2744] text-[#f5f3ef] hover:bg-[#243352] active:bg-[#0f1a2e] dark:bg-[#f5f3ef] dark:text-[#1a2744] dark:hover:bg-[#e8e5df] dark:active:bg-[#dbd7d0]',
  secondary:
    'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-500',
  ghost:
    'bg-transparent text-[#1a2744] hover:bg-[#1a2744]/10 active:bg-[#1a2744]/20 dark:text-[#f5f3ef] dark:hover:bg-[#f5f3ef]/10 dark:active:bg-[#f5f3ef]/20',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-[48px] px-4 py-2 text-sm',
  md: 'min-h-[48px] px-6 py-3 text-base',
  lg: 'min-h-[48px] px-8 py-4 text-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center
          rounded-xl font-medium
          transition-all duration-200 ease-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b8860b] focus-visible:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
          select-none touch-manipulation
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `.trim()}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
