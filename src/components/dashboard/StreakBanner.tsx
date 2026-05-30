import { Flame } from 'lucide-react'

export default function StreakBanner() {
  return (
    <div className="bg-warm border border-gray-100 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center gap-5">
      <div className="flex items-center gap-4 shrink-0">
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="28" fill="none" stroke="#e5e7eb" strokeWidth="4" />
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="#9ab948"
              strokeWidth="4"
              strokeDasharray="140 176"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-bold text-gray-900">12</span>
          </div>
        </div>
        <span className="text-xs font-semibold text-gray-600">Day Streak</span>
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-bold text-gray-900">You&apos;re on a roll! 🔥</h3>
        <p className="text-sm text-gray-500 mt-0.5">Keep your streak going and fuel your potential.</p>
      </div>

      <button className="border border-brand text-brand font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-brand-light transition-colors shrink-0">
        View Streak
      </button>
    </div>
  )
}
