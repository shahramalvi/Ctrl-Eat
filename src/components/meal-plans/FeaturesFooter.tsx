import { Calendar, Smartphone, XCircle, Headphones } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Skip or Reschedule',
    description: 'Skip a day or reschedule whenever you want.',
  },
  {
    icon: Smartphone,
    title: 'Easy Management',
    description: 'Manage your subscription from your dashboard.',
  },
  {
    icon: XCircle,
    title: 'Cancel Anytime',
    description: 'No lock-ins. Cancel anytime, no questions.',
  },
  {
    icon: Headphones,
    title: 'Need Help?',
    description: "We're here for you! Chat with us anytime.",
  },
]

export default function FeaturesFooter() {
  return (
    <section className="bg-cream border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <feature.icon className="w-6 h-6 text-brand shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <h3 className="font-bold text-sm text-gray-900">{feature.title}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
