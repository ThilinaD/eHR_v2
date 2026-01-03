import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogIn, LogOut, Calendar, FileText, Clock, MessageSquare } from "lucide-react"
import Image from "next/image"

const actions = [
  {
    icon: LogIn,
    label: "Clock In",
    color: "from-green-500 to-emerald-500",
    image: "/3d-login-icon-entry-access.jpg",
  },
  {
    icon: LogOut,
    label: "Clock Out",
    color: "from-red-500 to-rose-500",
    image: "/3d-logout-icon-exit-signout.jpg",
  },
  {
    icon: Calendar,
    label: "Request Leave",
    color: "from-blue-500 to-cyan-500",
    image: "/3d-calendar-icon-schedule-planning.jpg",
  },
  {
    icon: FileText,
    label: "View Payslip",
    color: "from-purple-500 to-violet-500",
    image: "/3d-document-icon-file-paper.jpg",
  },
  {
    icon: Clock,
    label: "Overtime",
    color: "from-orange-500 to-amber-500",
    image: "/3d-clock-icon-time-management.jpg",
  },
  {
    icon: MessageSquare,
    label: "Support",
    color: "from-teal-500 to-cyan-500",
    image: "/3d-chat-icon-message-support.jpg",
  },
]

export function QuickActions() {
  return (
    <Card className="p-6 glass">
      <h2 className="text-lg font-semibold mb-5 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto flex-col gap-3 py-5 glass border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-transparent"
          >
            <div className="relative">
              <div
                className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg icon-3d`}
              >
                <Image
                  src={action.image || "/placeholder.svg"}
                  alt={action.label}
                  width={32}
                  height={32}
                  className="drop-shadow-lg"
                />
              </div>
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity`}
              />
            </div>
            <span className="text-xs font-medium">{action.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  )
}
