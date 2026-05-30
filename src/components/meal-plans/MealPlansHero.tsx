import { Wallet, Calendar, Leaf } from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Budget Friendly',
    description: 'More savings, better meals.',
  },
  {
    icon: Calendar,
    title: 'Flexible Plans',
    description: 'Pause, skip or cancel anytime.',
  },
  {
    icon: Leaf,
    title: 'Healthy & Filling',
    description: 'Balanced meals for better you.',
  },
]

const heroImage =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop&q=80'

export default function MealPlansHero() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          <div className="text-left">
            <p className="text-brand font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              Subscribe. Save. Stay Fueled.
            </p>
            <h1 className="text-4xl lg:text-[2.75rem] font-bold leading-[1.2] text-gray-900 mb-5">
              Meals you love,{' '}
              <span className="underline-sketch inline-block">delivered your way.</span>
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-sm">
              Choose a plan that fits your lifestyle and let us take care of the cooking.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-8 lg:gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3 min-w-[180px]">
                <feature.icon className="w-6 h-6 text-brand shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="text-left">
                  <h3 className="font-bold text-sm text-gray-900">{feature.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroImage}
                alt="Healthy grain bowl with Ctrl+Eat branding"
                className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
