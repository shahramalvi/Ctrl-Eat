import { ShoppingBag, Calendar, Bike, Wallet, ChevronRight } from 'lucide-react'

const stats = [
  {
    icon: ShoppingBag,
    value: '12',
    label: 'Total Orders',
    sub: 'All time',
  },
  {
    icon: Calendar,
    value: 'Weekly Plan',
    label: 'Active Subscription',
    sub: 'Renews on 25 May, 2024',
  },
  {
    icon: Bike,
    value: '36',
    label: 'Meals Delivered',
    sub: 'This month',
  },
  {
    icon: Wallet,
    value: 'Rs. 1,320',
    label: 'You Saved',
    sub: 'vs Foodpanda',
  },
]

export default function StatsCards() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-sm transition-shadow cursor-pointer relative"
        >
          <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
            <stat.icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500">{stat.label}</p>
            <p className="text-xl font-bold text-gray-900 mt-0.5 truncate">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-0.5">{stat.sub}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-300 absolute top-5 right-4" />
        </div>
      ))}
    </div>
  )
}
