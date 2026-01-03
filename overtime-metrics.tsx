"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { dept: "Production", hours: 847, approved: 720 },
  { dept: "Logistics", hours: 542, approved: 480 },
  { dept: "Quality", hours: 328, approved: 310 },
  { dept: "Maintenance", hours: 612, approved: 590 },
  { dept: "Admin", hours: 218, approved: 200 },
  { dept: "IT", hours: 300, approved: 285 },
]

export function OvertimeMetrics() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-1">Overtime by Department</h2>
        <p className="text-sm text-muted-foreground">Current month breakdown</p>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.22 0.01 264)" />
            <XAxis dataKey="dept" stroke="oklch(0.65 0.01 264)" fontSize={12} tickLine={false} />
            <YAxis stroke="oklch(0.65 0.01 264)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "oklch(0.16 0.01 264)",
                border: "1px solid oklch(0.22 0.01 264)",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="hours" fill="oklch(0.70 0.19 162)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="approved" fill="oklch(0.65 0.24 264)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-2" />
          <span className="text-sm text-muted-foreground">Requested</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-chart-1" />
          <span className="text-sm text-muted-foreground">Approved</span>
        </div>
      </div>
    </Card>
  )
}
