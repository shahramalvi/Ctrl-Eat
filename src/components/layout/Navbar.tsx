import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, User } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '#' },
  { label: 'Meal Plans', href: '/meal-plans' },
  { label: 'How It Works', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact', href: '#' },
]

interface NavbarProps {
  extraLinks?: { label: string; href: string }[]
}

export default function Navbar({ extraLinks }: NavbarProps) {
  const location = useLocation()
  const links = extraLinks ?? navLinks

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const isActive = link.href !== '#' && location.pathname === link.href
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  isActive
                    ? 'text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand after:rounded-full'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <User className="w-5 h-5" strokeWidth={1.5} />
          </Link>
          <button className="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            Order Now
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
