import { Card } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Users, Clock, UserCheck, AlertCircle } from "lucide-react"

const stats = [
  {
    label: "Active Employees",
    value: "1,284",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-chart-1",
  },
  {
    label: "Overtime Hours",
    value: "2,847",
    change: "-8.2%",
    trend: "down",
    icon: Clock,
    color: "text-chart-2",
  },
  {
    label: "Attendance Rate",
    value: "98.4%",
    change: "+2.1%",
    trend: "up",
    icon: UserCheck,
    color: "text-chart-3",
  },
  {
    label: "Pending Requests",
    value: "42",
    change: "+5",
    trend: "up",
    icon: AlertCircle,
    color: "text-chart-4",
  },
]

export function StatsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className={`h-10 w-10 rounded-lg bg-secondary flex items-center justify-center ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div className={`flex items-center gap-1 text-sm ${stat.trend === "up" ? "text-chart-2" : "text-chart-5"}`}>
              {stat.trend === "up" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
              <span>{stat.change}</span>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
