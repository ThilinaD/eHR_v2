import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock } from "lucide-react"

export function AttendanceHistory() {
  const history = [
    { date: "Jan 3, 2026", status: "present", clockIn: "08:02 AM", clockOut: "04:05 PM", hours: "8h 3m" },
    { date: "Jan 2, 2026", status: "present", clockIn: "07:58 AM", clockOut: "04:01 PM", hours: "8h 3m" },
    { date: "Jan 1, 2026", status: "present", clockIn: "08:05 AM", clockOut: "04:10 PM", hours: "8h 5m" },
    { date: "Dec 31, 2025", status: "present", clockIn: "08:00 AM", clockOut: "04:00 PM", hours: "8h 0m" },
    { date: "Dec 30, 2025", status: "late", clockIn: "08:35 AM", clockOut: "04:30 PM", hours: "7h 55m" },
  ]

  return (
    <Card className="p-6 glass">
      <h2 className="text-xl font-semibold mb-5 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        Recent Attendance
      </h2>
      <div className="space-y-3">
        {history.map((record, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-xl glass-strong border border-border/50 hover:shadow-lg transition-all hover:scale-[1.01]"
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                  record.status === "present"
                    ? "bg-gradient-to-br from-green-500 to-emerald-500"
                    : record.status === "late"
                      ? "bg-gradient-to-br from-orange-500 to-amber-500"
                      : "bg-gradient-to-br from-red-500 to-rose-500"
                }`}
              >
                {record.status === "present" ? (
                  <CheckCircle2 className="h-5 w-5 text-white" />
                ) : record.status === "late" ? (
                  <Clock className="h-5 w-5 text-white" />
                ) : (
                  <XCircle className="h-5 w-5 text-white" />
                )}
              </div>
              <div>
                <p className="font-medium text-sm">{record.date}</p>
                <p className="text-xs text-muted-foreground">
                  {record.clockIn} - {record.clockOut}
                </p>
              </div>
            </div>
            <div className="text-right">
              <Badge
                variant={record.status === "present" ? "default" : "secondary"}
                className={
                  record.status === "present"
                    ? "bg-green-500/20 text-green-500 hover:bg-green-500/30 border-green-500/30"
                    : "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30 border-orange-500/30"
                }
              >
                {record.status === "present" ? "On Time" : "Late"}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">{record.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
