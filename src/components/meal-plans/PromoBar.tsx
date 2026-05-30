import { GraduationCap, Star } from 'lucide-react'

export default function PromoBar() {
  return (
    <section className="bg-cream border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-bold text-gray-900">Made for students.</span>{' '}
            Affordable plans. No hidden fees. Just real food.
          </p>
        </div>

        <div className="flex items-center gap-2 border border-brand-muted bg-brand-light/50 rounded-lg px-4 py-2.5">
          <Star className="w-4 h-4 text-brand fill-brand" />
          <span className="text-sm font-medium text-gray-800">
            Extra 10% off for 3-month & 6-month plans!
          </span>
        </div>
      </div>
    </section>
  )
}
