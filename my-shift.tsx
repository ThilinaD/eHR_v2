import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"

export function MyShift() {
  return (
    <Card className="p-6 glass">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          My Current Shift
        </h2>
        <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30 border-green-500/30 animate-pulse-glow">
          Active
        </Badge>
      </div>

      <div className="space-y-6">
        {/* Current Shift */}
        <div className="relative overflow-hidden p-5 rounded-2xl glass-strong border border-border/50">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <Image
              src="/3d-factory-building-industrial-manufacturing.jpg"
              alt="Factory"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg mb-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Morning Shift
                </h3>
                <p className="text-sm text-muted-foreground">Production Line A</p>
              </div>
              <Badge variant="outline" className="border-primary/30 text-primary">
                Today
              </Badge>
            </div>

            <div className="grid gap-3">
              <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-background/50">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">08:00 AM - 04:00 PM</span>
                <span className="text-muted-foreground">(8 hours)</span>
              </div>

              <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-background/50">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span>Building 2, Floor 3, Section A</span>
              </div>

              <div className="flex items-center gap-3 text-sm p-2 rounded-lg bg-background/50">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <span>Supervisor: Sarah Johnson</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Shifts */}
        <div>
          <h3 className="font-medium mb-3 text-muted-foreground">Upcoming Shifts</h3>
          <div className="space-y-2">
            {[
              { day: "Tomorrow", shift: "Morning Shift", time: "08:00 AM - 04:00 PM" },
              { day: "Saturday", shift: "Morning Shift", time: "08:00 AM - 04:00 PM" },
              { day: "Sunday", shift: "Off Day", time: "Rest day" },
            ].map((shift) => (
              <div
                key={shift.day}
                className="flex items-center justify-between p-3 rounded-xl glass-strong border border-border/50 hover:shadow-lg transition-all hover:scale-[1.01]"
              >
                <div>
                  <p className="font-medium text-sm">{shift.day}</p>
                  <p className="text-xs text-muted-foreground">{shift.shift}</p>
                </div>
                <p className="text-sm text-muted-foreground">{shift.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
