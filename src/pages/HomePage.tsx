import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import MoodCards from '../components/home/MoodCards'
import GreenFeatureBar from '../components/layout/GreenFeatureBar'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <MoodCards />
      <GreenFeatureBar />
    </div>
  )
}
