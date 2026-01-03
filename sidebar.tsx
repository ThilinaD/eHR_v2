"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  User,
  Clock,
  Calendar,
  FileText,
  DollarSign,
  MessageSquare,
  Settings,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: User, label: "My Profile" },
  { icon: Clock, label: "Attendance" },
  { icon: Calendar, label: "My Schedule" },
  { icon: FileText, label: "Leave Requests", badge: "2" },
  { icon: Clock, label: "Overtime" },
  { icon: DollarSign, label: "Payslips" },
  { icon: MessageSquare, label: "Support" },
  { icon: Settings, label: "Settings" },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "sticky top-16 h-[calc(100vh-4rem)] border-r border-border/50 glass transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-1 px-2">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 relative rounded-xl transition-all hover:scale-[1.02]",
                  item.active &&
                    "bg-gradient-to-r from-primary/10 to-accent/10 text-primary hover:from-primary/20 hover:to-accent/20 shadow-lg",
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium animate-pulse-glow">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-border/50">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="w-full rounded-xl hover:bg-muted/50"
          >
            <ChevronRight className={cn("h-4 w-4 transition-transform", !collapsed && "rotate-180")} />
            {!collapsed && <span className="ml-2">Collapse</span>}
          </Button>
        </div>
      </div>
    </aside>
  )
}
