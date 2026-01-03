"use client"

import { useEffect, useState } from "react"

interface RealTimeClockProps {
  variant?: "default" | "hero"
}

export function RealTimeClock({ variant = "default" }: RealTimeClockProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  }

  if (variant === "hero") {
    return (
      <div className="inline-flex flex-col gap-1 p-4 rounded-xl glass border border-border/50">
        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tabular-nums">
          {formatTime(time)}
        </div>
        <div className="text-xs md:text-sm text-muted-foreground">{formatDate(time)}</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-end">
      <div className="text-sm font-medium tabular-nums">{formatTime(time)}</div>
      <div className="text-xs text-muted-foreground">{formatDate(time)}</div>
    </div>
  )
}
