import { useCallback, useEffect, useState } from 'react'
import { Bike, Wallet, Leaf } from 'lucide-react'
import Button from '../ui/Button'

const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=700&fit=crop&q=80',
    alt: 'Ctrl+Eat meal box with grilled chicken, rice and vegetables',
  },
  {
    src: '/images/hero-chickpea-bowl.avif',
    alt: 'Roasted chickpea and vegetable power bowl',
  },
  {
    src: '/images/hero-healthy-stock.jpg',
    alt: 'Healthy inexpensive student meal spread',
  },
]

const SLIDE_INTERVAL = 4000

const trustItems = [
  { icon: Bike, text: 'Fast Delivery Around Campus' },
  { icon: Wallet, text: 'Student Friendly Prices' },
  { icon: Leaf, text: 'Fresh & Nutritious' },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(nextSlide, SLIDE_INTERVAL)
    return () => window.clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="hero-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-brand font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              Quick Meals. Real Simple.
            </p>
            <h1 className="text-4xl lg:text-[3.25rem] font-bold leading-[1.15] text-gray-900 mb-5">
              Meals made for{' '}
              <span className="underline-sketch inline-block">deadlines, not diets.</span>
            </h1>
            <p className="text-gray-500 text-base lg:text-lg max-w-md mb-8 leading-relaxed">
              Affordable, tasty and filling meals for students who hustle hard and skip meals.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button>Explore Menu</Button>
              <button className="inline-flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm px-6 py-3 rounded-full transition-colors">
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {trustItems.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                  <item.icon className="w-4 h-4 text-brand" strokeWidth={1.5} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] lg:h-[480px]">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {heroSlides.map((slide) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full shrink-0 object-cover"
                    draggable={false}
                  />
                ))}
              </div>
            </div>

            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goToSlide(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-6 bg-brand' : 'w-2.5 bg-white/80 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
