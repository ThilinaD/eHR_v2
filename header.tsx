"use client"

import { Bell, Moon, Sun, User, Settings, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { RealTimeClock } from "@/components/real-time-clock"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 glass-strong glow">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-xl icon-3d">
            <Zap className="h-5 w-5 text-primary-foreground" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/50 to-accent/50 blur-lg -z-10" />
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-base bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Enterprise HR
            </div>
            <div className="text-xs text-muted-foreground">Employee Portal</div>
          </div>
        </div>

        {/* Real-time Clock */}
        <div className="hidden md:block">
          <RealTimeClock />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-muted/50 rounded-xl transition-all hover:scale-105"
          >
            {theme === "light" ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-accent" />}
          </Button>

          {/* Settings */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-muted/50 rounded-xl transition-all hover:scale-105 hidden sm:flex"
          >
            <Settings className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-muted/50 rounded-xl transition-all hover:scale-105"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-destructive border-2 border-background animate-pulse-glow">
              2
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 hover:bg-muted/50 rounded-xl transition-all">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <User className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-left hidden lg:block">
                  <div className="text-sm font-medium text-foreground">John Smith</div>
                  <div className="text-xs text-muted-foreground">Production Floor</div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 glass">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help & Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
