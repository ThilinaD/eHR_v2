import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

const activities = [
  {
    action: "Clocked in for morning shift",
    detail: "Production Line A",
    time: "2 hours ago",
    type: "success",
  },
  {
    action: "Leave request submitted",
    detail: "Annual Leave - 2 days",
    time: "Yesterday",
    type: "pending",
  },
  {
    action: "Overtime approved",
    detail: "4.5 hours for this week",
    time: "2 days ago",
    type: "success",
  },
  {
    action: "Shift schedule updated",
    detail: "Next week schedule available",
    time: "3 days ago",
    type: "info",
  },
  {
    action: "Payslip generated",
    detail: "December 2025",
    time: "5 days ago",
    type: "success",
  },
  {
    action: "Profile updated",
    detail: "Emergency contact information",
    time: "1 week ago",
    type: "info",
  },
]

export function RecentActivity() {
  return (
    <Card className="p-6 glass">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-1 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My Activity
          </h2>
          <p className="text-sm text-muted-foreground">Your recent actions</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Clock className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0 hover:bg-muted/30 -mx-2 px-2 py-2 rounded-lg transition-colors"
          >
            <div
              className={`h-3 w-3 rounded-full mt-2 flex-shrink-0 shadow-lg ${
                activity.type === "success"
                  ? "bg-gradient-to-br from-green-500 to-emerald-500"
                  : activity.type === "warning"
                    ? "bg-gradient-to-br from-orange-500 to-amber-500"
                    : activity.type === "pending"
                      ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                      : "bg-gradient-to-br from-purple-500 to-violet-500"
              }`}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="font-medium text-sm">{activity.action}</p>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{activity.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
