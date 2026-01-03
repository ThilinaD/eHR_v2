import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"

export function MyLeaveBalance() {
  const leaveTypes = [
    { type: "Annual Leave", used: 8, total: 20, color: "from-blue-500 to-cyan-500" },
    { type: "Sick Leave", used: 2, total: 10, color: "from-red-500 to-rose-500" },
    { type: "Personal Leave", used: 1, total: 5, color: "from-purple-500 to-violet-500" },
  ]

  return (
    <Card className="p-6 glass relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <Image
          src="/3d-vacation-icon-holiday-travel.jpg"
          alt="Vacation"
          width={128}
          height={128}
          className="object-contain"
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Leave Balance
          </h2>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Calendar className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>

        <div className="space-y-6">
          {leaveTypes.map((leave) => {
            const percentage = (leave.used / leave.total) * 100
            const remaining = leave.total - leave.used

            return (
              <div key={leave.type} className="space-y-3 p-4 rounded-xl glass-strong">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{leave.type}</span>
                  <span className={`font-bold bg-gradient-to-r ${leave.color} bg-clip-text text-transparent`}>
                    {remaining} of {leave.total} left
                  </span>
                </div>
                <div className="relative h-3 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${leave.color} rounded-full transition-all duration-500 shadow-lg`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{leave.used} days used</p>
              </div>
            )
          })}

          <Button className="w-full mt-4 rounded-xl bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all hover:scale-[1.02]">
            Request Leave
          </Button>
        </div>
      </div>
    </Card>
  )
}
