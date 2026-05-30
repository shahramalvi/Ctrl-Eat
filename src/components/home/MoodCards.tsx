import { ChevronRight, UtensilsCrossed, Moon, GraduationCap, Dumbbell } from 'lucide-react'

const moods = [
  {
    icon: UtensilsCrossed,
    title: 'Daily Fuel Meals',
    description: 'Balanced meals for your everyday grind.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop&q=80',
  },
  {
    icon: Moon,
    title: 'Late Night Cravings',
    description: "Because deadlines don't sleep.",
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278dfe799?w=200&h=200&fit=crop&q=80',
  },
  {
    icon: GraduationCap,
    title: 'Exam Survival Packs',
    description: 'Stay awake. Stay fueled. Stay unstoppable.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&h=200&fit=crop&q=80',
  },
  {
    icon: Dumbbell,
    title: 'Gym Fuel',
    description: 'High protein meals for your gains.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop&q=80',
  },
]

export default function MoodCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-14">
          Meals for{' '}
          <span className="text-brand underline-sketch inline-block">Every Mood</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moods.map((mood) => (
            <div
              key={mood.title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
            >
              <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center mb-4">
                <mood.icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{mood.title}</h3>
              <p className="text-sm text-gray-500 mb-16 leading-relaxed">{mood.description}</p>

              <div className="absolute bottom-4 right-4">
                <img
                  src={mood.image}
                  alt={mood.title}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              <ChevronRight className="absolute bottom-6 left-6 w-5 h-5 text-brand group-hover:translate-x-0.5 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
