import Sidebar from '../components/dashboard/Sidebar'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import StatsCards from '../components/dashboard/StatsCards'
import StreakBanner from '../components/dashboard/StreakBanner'
import RecentOrders from '../components/dashboard/RecentOrders'
import SubscriptionPanel from '../components/dashboard/SubscriptionPanel'

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 overflow-auto">
        <DashboardHeader />
        <StatsCards />
        <StreakBanner />
        <div className="grid lg:grid-cols-[1fr_340px] gap-6">
          <RecentOrders />
          <SubscriptionPanel />
        </div>
      </main>
    </div>
  )
}
