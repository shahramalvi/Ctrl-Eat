import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  ShoppingBag,
  Calendar,
  Heart,
  Wallet,
  MapPin,
  Gift,
  Headphones,
  LogOut,
  Menu,
  UtensilsCrossed,
} from 'lucide-react'
import Logo from '../layout/Logo'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: ShoppingBag, label: 'My Orders', href: '#' },
  { icon: Calendar, label: 'Subscriptions', href: '#' },
  { icon: UtensilsCrossed, label: 'Meal Plans', href: '/meal-plans' },
  { icon: Heart, label: 'Favorites', href: '#' },
  { icon: Wallet, label: 'Wallet', href: '#' },
  { icon: MapPin, label: 'Addresses', href: '#' },
  { icon: Gift, label: 'Refer & Earn', href: '#' },
  { icon: Headphones, label: 'Support', href: '#' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-[260px] shrink-0 bg-white border-r border-gray-100 flex flex-col min-h-screen">
      <div className="p-6 flex items-center justify-between">
        <Logo />
        <button className="p-1 text-gray-500 hover:text-gray-700 lg:hidden">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = item.href !== '#' && location.pathname === item.href
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-light text-brand font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mx-4 mb-4 rounded-2xl overflow-hidden relative h-36">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop&q=80"
          alt="Ctrl+Eat promo"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
          <p className="text-white text-[10px] font-bold leading-tight tracking-wide uppercase">
            Ctrl Your Hunger. Focus On What Matters.
          </p>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-100">
        <button className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 transition-colors">
          <LogOut className="w-5 h-5" strokeWidth={1.5} />
          Logout
        </button>
      </div>
    </aside>
  )
}
