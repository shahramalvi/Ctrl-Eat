import { Calendar, Heart, Pause, Bike } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Weekly Subscriptions',
    description: 'Save more every week',
  },
  {
    icon: Bike,
    title: 'Delivery Around Campus',
    description: 'Fast, reliable & on time',
  },
  {
    icon: Pause,
    title: 'Skip or Cancel Anytime',
    description: '100% flexible',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Cooked fresh daily',
  },
]

export default function GreenFeatureBar() {
  return (
    <section className="bg-brand py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <feature.icon className="w-7 h-7 text-white shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="text-white font-semibold text-sm leading-tight">{feature.title}</h3>
                <p className="text-white/80 text-xs mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
