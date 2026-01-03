"use client"

import { Card } from "@/components/ui/card"
import { Clock, Calendar, TrendingUp, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function EmployeeStatsOverview() {
  const stats = [
    {
      label: "Hours This Week",
      value: "38.5",
      subtitle: "of 40 hours",
      icon: Clock,
      trend: "+5.2h from last week",
      color: "from-blue-500 to-cyan-500",
      image: "/3d-clock-icon-time-management.jpg",
    },
    {
      label: "Attendance Rate",
      value: "98%",
      subtitle: "This month",
      icon: CheckCircle2,
      trend: "Excellent performance",
      color: "from-green-500 to-emerald-500",
      image: "/3d-checkmark-icon-success-approval.jpg",
    },
    {
      label: "Leave Balance",
      value: "12",
      subtitle: "days remaining",
      icon: Calendar,
      trend: "3 days pending approval",
      color: "from-purple-500 to-pink-500",
      image: "/3d-calendar-icon-schedule-planning.jpg",
    },
    {
      label: "Overtime Hours",
      value: "4.5",
      subtitle: "This month",
      icon: TrendingUp,
      trend: "+2h from last month",
      color: "from-orange-500 to-amber-500",
      image: "/3d-chart-icon-analytics-growth.jpg",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card
            key={stat.label}
            className="relative overflow-hidden p-5 glass hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="relative">
                  {/* 3D Icon with Image */}
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center border border-border/50 icon-3d">
                    <Image
                      src={stat.image || "/placeholder.svg"}
                      alt={stat.label}
                      width={36}
                      height={36}
                      className="drop-shadow-lg"
                    />
                  </div>
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-20 blur-xl -z-10`}
                  />
                </div>
                <Icon className={`h-5 w-5 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className={`text-4xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </h3>
                  <span className="text-sm text-muted-foreground">{stat.subtitle}</span>
                </div>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
