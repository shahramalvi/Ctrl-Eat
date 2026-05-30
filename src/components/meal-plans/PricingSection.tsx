import { Check, ChevronRight, GraduationCap, Shield, Clock, Package, Heart, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Weekly Plan',
    tagline: 'Perfect for trying us out.',
    price: 'Rs. 1,399',
    period: '/ week',
    meals: '10 meals (Lunch + Dinner)',
    popular: true,
    buttonLabel: 'Choose Weekly',
    filled: true,
  },
  {
    name: '2-Week Plan',
    tagline: 'More meals. More savings.',
    price: 'Rs. 2,599',
    period: '/ 2 weeks',
    meals: '20 meals (Lunch + Dinner)',
    popular: false,
    buttonLabel: 'Choose 2-Week',
    filled: false,
  },
  {
    name: 'Monthly Plan',
    tagline: 'Best value. Maximum savings.',
    price: 'Rs. 4,999',
    period: '/ month',
    meals: '20 meals (Lunch + Dinner)',
    popular: false,
    buttonLabel: 'Choose Monthly',
    filled: false,
  },
]

const features = [
  '5 Lunches + 5 Dinners',
  'Freshly cooked meals',
  'Free delivery on all orders',
  'Pause or cancel anytime',
]

const included = [
  { icon: Sparkles, text: 'High protein, balanced meals' },
  { icon: Package, text: 'New menu every week' },
  { icon: Shield, text: 'Hygienic & safe packaging' },
  { icon: Clock, text: 'On-time delivery, always' },
  { icon: Heart, text: 'Loved by 1000+ students' },
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-14">
          Choose <span className="text-brand">Your Plan</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border rounded-2xl p-6 flex flex-col ${
                  plan.popular
                    ? 'border-brand shadow-lg shadow-brand/10'
                    : 'border-brand-muted/60'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold tracking-wider px-4 py-1 rounded-full uppercase">
                    Most Popular
                  </div>
                )}

                <h3 className="font-bold text-lg text-gray-900 mt-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{plan.tagline}</p>

                <div className="mt-5 mb-1">
                  <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <p className="text-xs text-gray-500 mb-6">{plan.meals}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-brand shrink-0" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold text-sm transition-colors ${
                    plan.filled
                      ? 'bg-brand hover:bg-brand-dark text-white'
                      : 'border border-brand text-brand hover:bg-brand-light'
                  }`}
                >
                  {plan.buttonLabel}
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="bg-brand-light rounded-2xl p-6 border border-brand-muted/40">
              <h3 className="font-bold text-gray-900 mb-5">What&apos;s included?</h3>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm text-gray-700">
                    <item.icon className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-brand-muted/60 rounded-2xl p-6 bg-white">
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-brand shrink-0" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-gray-900">Student Perks</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Verify with your student ID and unlock exclusive offers!
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center gap-1 border border-brand-muted text-brand font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-brand-light transition-colors">
                Verify Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
