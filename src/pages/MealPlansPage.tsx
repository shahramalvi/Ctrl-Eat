import Navbar from '../components/layout/Navbar'
import MealPlansHero from '../components/meal-plans/MealPlansHero'
import PromoBar from '../components/meal-plans/PromoBar'
import PricingSection from '../components/meal-plans/PricingSection'
import FeaturesFooter from '../components/meal-plans/FeaturesFooter'

const mealPlanNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '#' },
  { label: 'Meal Plans', href: '/meal-plans' },
  { label: 'Meal Kits', href: '#' },
  { label: 'How It Works', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function MealPlansPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar extraLinks={mealPlanNavLinks} />
      <MealPlansHero />
      <PromoBar />
      <PricingSection />
      <FeaturesFooter />
    </div>
  )
}
