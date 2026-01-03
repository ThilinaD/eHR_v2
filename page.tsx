import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { EmployeeStatsOverview } from "@/components/employee-stats-overview"
import { MyShift } from "@/components/my-shift"
import { QuickActions } from "@/components/quick-actions"
import { MyLeaveBalance } from "@/components/my-leave-balance"
import { RecentActivity } from "@/components/recent-activity"
import { AttendanceHistory } from "@/components/attendance-history"
import { WelcomeHero } from "@/components/welcome-hero"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background mesh-gradient">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto space-y-6">
            <WelcomeHero />

            {/* Stats Overview */}
            <EmployeeStatsOverview />

            {/* Quick Actions */}
            <QuickActions />

            {/* Main Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <MyShift />
              </div>
              <MyLeaveBalance />
            </div>

            {/* Bottom Grid */}
            <div className="grid gap-6 lg:grid-cols-2">
              <AttendanceHistory />
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
