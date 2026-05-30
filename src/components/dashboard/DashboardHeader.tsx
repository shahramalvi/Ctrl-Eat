import { Bell, ChevronDown } from 'lucide-react'

export default function DashboardHeader() {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Good evening, Ali! 👋
        </h1>
        <p className="text-gray-500 text-sm mt-1">Ready to fuel your day the smart way?</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900">
          <Bell className="w-5 h-5" strokeWidth={1.5} />
          <span className="absolute top-1 right-1 w-4 h-4 bg-brand text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80"
            alt="Ali Raza"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden sm:block text-left">
            <p className="text-sm font-bold text-gray-900">Ali Raza</p>
            <p className="text-xs text-gray-500">Student Plan</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
        </div>
      </div>
    </div>
  )
}
