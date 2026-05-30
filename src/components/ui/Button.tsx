import { ChevronRight } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
  icon?: React.ReactNode
}

export default function Button({ children, variant = 'primary', className = '', icon }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold text-sm rounded-full transition-colors cursor-pointer'
  const variants = {
    primary: 'bg-brand hover:bg-brand-dark text-white px-6 py-3',
    outline: 'border border-gray-300 hover:border-gray-400 bg-white text-gray-900 px-6 py-3',
    ghost: 'border border-brand text-brand hover:bg-brand-light px-5 py-2.5',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {icon ?? (variant === 'primary' ? <ChevronRight className="w-4 h-4" /> : null)}
    </button>
  )
}
