import { UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  light?: boolean
}

export default function Logo({ className = '', light = false }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-0.5 font-bold text-xl tracking-tight ${light ? 'text-white' : 'text-gray-900'} ${className}`}>
      <span>Ctrl</span>
      <span className="inline-flex items-center justify-center text-brand">
        <UtensilsCrossed className="w-5 h-5 rotate-45" strokeWidth={2.5} />
      </span>
      <span>Eat</span>
    </Link>
  )
}
