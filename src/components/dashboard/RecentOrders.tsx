import { ChevronRight, Plus } from 'lucide-react'

const orders = [
  {
    name: 'Chicken Rice Bowl',
    category: 'Daily Fuel Meals',
    status: 'Delivered',
    date: '22 May, 2024 · 1:30 PM',
    price: 'Rs. 299',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb851?w=80&h=80&fit=crop&q=80',
  },
  {
    name: 'Grilled Chicken Wrap',
    category: 'Gym Fuel',
    status: 'Delivered',
    date: '21 May, 2024 · 7:45 PM',
    price: 'Rs. 349',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=80&h=80&fit=crop&q=80',
  },
  {
    name: 'All-Nighter Box',
    category: 'Exam Survival Packs',
    status: 'Delivered',
    date: '20 May, 2024 · 11:00 PM',
    price: 'Rs. 449',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=80&h=80&fit=crop&q=80',
  },
  {
    name: 'Veggie Power Bowl',
    category: 'Daily Fuel Meals',
    status: 'Delivered',
    date: '19 May, 2024 · 12:15 PM',
    price: 'Rs. 279',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=80&h=80&fit=crop&q=80',
  },
]

export default function RecentOrders() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-gray-900">Recent Orders</h2>
        <button className="text-sm text-brand font-medium hover:underline flex items-center gap-1">
          View All Orders
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-1">
        {orders.map((order) => (
          <div
            key={order.name + order.date}
            className="flex items-center gap-4 py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 rounded-lg px-2 -mx-2 cursor-pointer transition-colors"
          >
            <img
              src={order.image}
              alt={order.name}
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-gray-900 truncate">{order.name}</p>
              <p className="text-xs text-gray-400">{order.category}</p>
            </div>
            <div className="hidden sm:block text-right shrink-0">
              <span className="inline-block bg-brand-light text-brand text-xs font-medium px-2.5 py-1 rounded-full">
                {order.status}
              </span>
              <p className="text-xs text-gray-400 mt-1">{order.date}</p>
            </div>
            <p className="font-bold text-sm text-gray-900 shrink-0">{order.price}</p>
            <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
          </div>
        ))}
      </div>

      <button className="w-full mt-4 border border-brand-muted text-brand font-semibold text-sm py-3 rounded-xl hover:bg-brand-light transition-colors flex items-center justify-center gap-2">
        <Plus className="w-4 h-4" />
        Order Again
      </button>
    </div>
  )
}
