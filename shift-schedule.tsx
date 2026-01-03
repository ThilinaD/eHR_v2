import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react"

const shifts = [
  {
    time: "06:00 - 14:00",
    department: "Production A",
    employees: 85,
    status: "active",
    supervisor: "John Smith",
  },
  {
    time: "08:00 - 16:00",
    department: "Quality Control",
    employees: 24,
    status: "active",
    supervisor: "Maria Garcia",
  },
  {
    time: "14:00 - 22:00",
    department: "Production B",
    employees: 78,
    status: "scheduled",
    supervisor: "David Lee",
  },
  {
    time: "16:00 - 00:00",
    department: "Logistics",
    employees: 42,
    status: "scheduled",
    supervisor: "Emily Chen",
  },
  {
    time: "22:00 - 06:00",
    department: "Maintenance",
    employees: 18,
    status: "scheduled",
    supervisor: "Robert Johnson",
  },
]

export function ShiftSchedule() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Today's Shift Schedule</h2>
          <p className="text-sm text-muted-foreground">January 3, 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="space-y-3">
        {shifts.map((shift, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="text-sm font-mono text-muted-foreground min-w-[120px]">{shift.time}</div>
              <div className="flex-1">
                <div className="font-medium mb-1">{shift.department}</div>
                <div className="text-sm text-muted-foreground">
                  {shift.supervisor} • {shift.employees} employees
                </div>
              </div>
            </div>
            <Badge
              variant={shift.status === "active" ? "default" : "secondary"}
              className={shift.status === "active" ? "bg-chart-2 text-accent-foreground" : ""}
            >
              {shift.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
