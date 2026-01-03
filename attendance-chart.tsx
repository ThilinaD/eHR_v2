"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { time: "00:00", present: 120, late: 5, absent: 3 },
  { time: "02:00", present: 140, late: 8, absent: 4 },
  { time: "04:00", present: 180, late: 12, absent: 6 },
  { time: "06:00", present: 280, late: 15, absent: 8 },
  { time: "08:00", present: 520, late: 42, absent: 15 },
  { time: "10:00", present: 890, late: 28, absent: 12 },
  { time: "12:00", present: 1180, late: 18, absent: 10 },
  { time: "14:00", present: 1220, late: 14, absent: 8 },
  { time: "16:00", present: 1150, late: 22, absent: 12 },
  { time: "18:00", present: 680, late: 35, absent: 18 },
  { time: "20:00", present: 320, late: 18, absent: 10 },
  { time: "22:00", present: 180, late: 8, absent: 5 },
]

export function AttendanceChart() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Attendance Overview</h2>
        <p className="text-sm text-muted-foreground">Real-time workforce presence</p>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.01 264)" />
            <XAxis dataKey="time" stroke="oklch(0.65 0.01 264)" fontSize={12} tickLine={false} />
            <YAxis stroke="oklch(0.65 0.01 264)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.16 0.01 264)",
                border: "1px solid oklch(0.22 0.01 264)",
                borderRadius: "8px",
              }}
            />
            <Line type="monotone" dataKey="present" stroke="oklch(0.65 0.24 264)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="late" stroke="oklch(0.77 0.19 70)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="absent" stroke="oklch(0.58 0.24 27)" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-1" />
          <span className="text-sm text-muted-foreground">Present</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-3" />
          <span className="text-sm text-muted-foreground">Late</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-destructive" />
          <span className="text-sm text-muted-foreground">Absent</span>
        </div>
      </div>
    </Card>
  )
}
