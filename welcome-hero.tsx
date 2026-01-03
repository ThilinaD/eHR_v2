"use client"

import { RealTimeClock } from "@/components/real-time-clock"
import Image from "next/image"

export function WelcomeHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl glass-strong p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl overflow-hidden ring-2 ring-primary/30 shadow-lg">
              <Image
                src="/professional-employee-portrait-avatar.jpg"
                alt="Employee Avatar"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Welcome back,</p>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">John Smith</h1>
            </div>
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            Production Floor Operator · Employee ID: EMP-2024-0847
          </p>

          {/* Clock Display */}
          <div className="pt-2">
            <RealTimeClock variant="hero" />
          </div>
        </div>

        {/* Right Visual - 3D Style Illustration */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
          <Image
            src="/3d-isometric-office-workspace-with-desk-computer-p.jpg"
            alt="Workspace Illustration"
            width={256}
            height={256}
            className="relative z-10 animate-float drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </div>
  )
}
