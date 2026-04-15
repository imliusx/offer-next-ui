"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  BookOpen,
  History,
  MessageSquare,
  User,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CornerPlus } from "@/components/ui/corner-plus";

const menuItems = [
  { label: "概览", href: "/workspace", icon: LayoutDashboard },
  { label: "计划安排", href: "/workspace/schedule", icon: Calendar },
  { label: "简历制作", href: "/workspace/resume", icon: FileText },
  { label: "刷题进度", href: "/workspace/questions", icon: BookOpen },
  { label: "项目复盘", href: "/workspace/project-review", icon: History },
  { label: "HR 面试", href: "/workspace/hr-prep", icon: MessageSquare },
  { label: "个人中心", href: "/workspace/profile", icon: User },
];

export function Sidebar({ className }: { className?: string }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-4 left-4 z-50 rounded-full border border-border bg-background/80 backdrop-blur-sm shadow-lg lg:hidden"
        onClick={toggleMobile}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-border/60 bg-white/5 dark:bg-black/5 backdrop-blur-md transition-all duration-300 lg:relative lg:z-30 lg:h-full lg:bg-white/5 lg:dark:bg-black/5 lg:backdrop-blur-sm",
          collapsed ? "w-[72px]" : "w-56",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          className
        )}
      >
        {/* Corner Decorations for Sidebar */}
        <CornerPlus className="-right-1.5 -top-1.5" />
        <CornerPlus className="-right-1.5 -bottom-1.5" />

        {/* Collapse Button on the border */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-4 top-1/2 z-40 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md shadow-md transition-all hover:bg-muted lg:flex"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>

        <nav className={cn(
          "flex-1 space-y-1 px-3 py-6 mt-2 transition-all",
          collapsed ? "overflow-visible" : "overflow-y-auto"
        )}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-9 items-center gap-3 rounded-md transition-all duration-200 relative group",
                  collapsed ? "justify-center px-0 mx-auto w-9" : "px-3",
                  isActive
                    ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(var(--primary),0.1)]"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:translate-x-0.5"
                )}
                onClick={() => setMobileOpen(false)}
              >
                <Icon className={cn("h-4 w-4 shrink-0 transition-transform group-hover:scale-110", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
                {collapsed && (
                  <span className="absolute left-14 z-50 hidden group-hover:flex whitespace-nowrap rounded-md bg-popover/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-xl ring-1 ring-border animate-in fade-in zoom-in-95 duration-200">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
