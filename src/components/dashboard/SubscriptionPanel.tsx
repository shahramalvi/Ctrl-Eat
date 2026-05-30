import { Calendar, Plus } from 'lucide-react'

const recommendations = [
  {
    name: 'All-Nighter Box',
    price: 'Rs. 249',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Deadline Pack',
    price: 'Rs. 329',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278dfe799?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Protein Brownie',
    price: 'Rs. 149',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=120&h=120&fit=crop&q=80',
  },
]

export default function SubscriptionPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <h2 className="font-bold text-gray-900 mb-4">Your Subscription</h2>

        <div className="bg-warm rounded-xl p-5 mb-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center">
                <Calendar className="w-5 h-5 text-brand" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Weekly Student Plan</p>
                <p className="text-xs text-gray-500 mt-0.5">10 Meals / Week · Lunch + Dinner</p>
              </div>
            </div>
            <span className="bg-brand-light text-brand text-xs font-semibold px-2.5 py-1 rounded-full">
              Active
            </span>
          </div>
          <p className="text-lg font-bold text-gray-900">Rs. 1,399 / week</p>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-5">
          <span>Renews on 25 May, 2024</span>
          <span>
            Meals left this week: <strong className="text-gray-900">4 / 10</strong>
          </span>
        </div>

        <button className="w-full bg-brand hover:bg-brand-dark text-white font-semibold text-sm py-3.5 rounded-xl transition-colors">
          Manage Subscription
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-gray-900">Recommended for You</h2>
          <button className="text-sm text-brand font-medium hover:underline flex items-center gap-1">
            View Menu →
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {recommendations.map((item) => (
            <div key={item.name} className="text-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full aspect-square rounded-xl object-cover mb-2"
              />
              <p className="text-xs font-semibold text-gray-900 leading-tight mb-2">{item.name}</p>
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold text-gray-900">{item.price}</span>
                <button className="w-7 h-7 bg-brand hover:bg-brand-dark rounded-lg flex items-center justify-center transition-colors">
                  <Plus className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
