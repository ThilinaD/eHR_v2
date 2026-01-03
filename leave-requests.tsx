import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Check, X } from "lucide-react"

const requests = [
  {
    name: "Alice Cooper",
    type: "Annual Leave",
    dates: "Jan 15-19",
    avatar: "AC",
  },
  {
    name: "Bob Wilson",
    type: "Sick Leave",
    dates: "Jan 8-9",
    avatar: "BW",
  },
  {
    name: "Carol Martinez",
    type: "Personal",
    dates: "Jan 22",
    avatar: "CM",
  },
  {
    name: "Dan Brown",
    type: "Annual Leave",
    dates: "Jan 25-Feb 2",
    avatar: "DB",
  },
]

export function LeaveRequests() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Leave Requests</h2>
          <p className="text-sm text-muted-foreground">Pending approval</p>
        </div>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {requests.map((request, index) => (
          <div key={index} className="flex items-start gap-3">
            <Avatar className="h-10 w-10 bg-primary">
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">{request.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm mb-0.5">{request.name}</div>
              <div className="text-xs text-muted-foreground mb-1">{request.type}</div>
              <div className="text-xs text-muted-foreground">{request.dates}</div>
            </div>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-chart-2 hover:text-chart-2 hover:bg-chart-2/10"
              >
                <Check className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
