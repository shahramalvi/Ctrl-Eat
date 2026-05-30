import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Menu, User, X } from 'lucide-react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

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

        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/dashboard" className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <User className="w-5 h-5" strokeWidth={1.5} />
          </Link>
          <button className="hidden sm:inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            Order Now
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[72px] bg-black/30 lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <nav className="lg:hidden absolute left-0 right-0 top-[72px] bg-white border-b border-gray-100 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((link) => {
                const isActive = link.href !== '#' && location.pathname === link.href
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-light text-brand font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <button className="mt-2 sm:hidden inline-flex items-center justify-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors">
                Order Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
