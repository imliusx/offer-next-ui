"use client";

import { useState, useRef, useEffect } from "react";
import { LayoutGrid, BookOpen, FileText, User, LogOut, Settings, CreditCard, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandMark } from "@/components/brand-mark";
import { BrandWordmark } from "@/components/brand-wordmark";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CornerPlus } from "@/components/ui/corner-plus";

const navItems = [
  { label: "工作台", href: "/workspace", icon: LayoutGrid },
  { label: "题库", href: "/questions", icon: BookOpen },
  { label: "简历库", href: "/resumes", icon: FileText },
];

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const actionsRef = useRef<HTMLDivElement>(null);
  
  const isAuthPage = pathname === "/login" || pathname === "/register";
  const isHomePage = pathname === "/";
  const isLoggedIn = !isHomePage && !isAuthPage;

  // Handle clicking outside to close the menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (actionsRef.current && !actionsRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isAuthPage) return null;

  return (
    <nav className={cn(
      "fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-border/60 bg-background/80 pl-2 pr-2 shadow-sm backdrop-blur sm:pl-3 sm:pr-3 lg:pl-5 lg:pr-5 transition-all duration-300",
      className
    )}>
      {/* Corner Decorations */}
      <CornerPlus className="left-2 top-2 opacity-10" />
      <CornerPlus className="right-2 top-2 opacity-10" />

      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 group">
          <BrandMark className="h-14 w-14 shrink-0 transition-transform group-hover:scale-105" priority />
          <div className="-ml-1 flex min-w-0 items-center gap-2.5">
            <BrandWordmark className="truncate text-[1.45rem] text-foreground/80" />
            <span className="hidden items-center gap-1.5 rounded-full border border-border/30 bg-background/35 px-2 py-0.5 text-[0.62rem] font-normal tracking-[0.06em] text-muted-foreground/80 shadow-sm backdrop-blur-sm xl:inline-flex">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              你的一站式面试备战平台
            </span>
          </div>
        </Link>
      </div>
      
      {/* Center: Navigation Items (Absolute Centered) */}
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-md px-4 text-sm font-medium transition-all hover:bg-muted/40",
                isActive 
                  ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(var(--primary),0.1)]" 
                  : "text-muted-foreground hover:text-foreground hover:translate-y-[-1px]"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3" ref={actionsRef}>
        {!isLoggedIn ? (
          <>
            <div className="hidden sm:flex items-center gap-2">
              <Link className={buttonVariants({ variant: "ghost", className: "text-sm hover:bg-muted/60" })} href="/login">登录</Link>
              <Link className={buttonVariants({ variant: "outline", className: "text-sm bg-white/10 dark:bg-black/10 hover:bg-muted/60 backdrop-blur-sm" })} href="/register">注册</Link>
            </div>
            <div className="h-4 w-px bg-border/60 mx-1 hidden sm:block" />
            <ThemeToggle />
            <button
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/40 bg-background/50 shadow-sm backdrop-blur-sm transition-colors hover:bg-muted/70 lg:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              type="button"
            >
              <Menu className="h-4.5 w-4.5 text-muted-foreground" />
            </button>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <button
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/40 bg-background/50 shadow-sm backdrop-blur-sm transition-colors hover:bg-muted/70 lg:hidden"
              onClick={() => {
                setIsUserMenuOpen(false);
                setIsMobileMenuOpen((open) => !open);
              }}
              type="button"
            >
              <Menu className="h-4.5 w-4.5 text-muted-foreground" />
            </button>
            <ThemeToggle />
            
            <div className="h-4 w-px bg-border/60 mx-1" />

            {/* User Profile at the very right */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsUserMenuOpen(!isUserMenuOpen);
                }}
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-200 shadow-sm",
                  isUserMenuOpen 
                    ? "bg-primary/10 border-primary/30 ring-2 ring-primary/10" 
                    : "bg-white/10 dark:bg-black/10 border-border/50 hover:border-border/80 hover:bg-white/20 dark:hover:bg-black/20"
                )}
              >
                <User className={cn("h-4.5 w-4.5 transition-colors", isUserMenuOpen ? "text-primary" : "text-muted-foreground")} />
              </button>

              {/* Custom Glassmorphic Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-3 w-56 origin-top-right overflow-hidden rounded-xl border border-border/60 bg-white/80 dark:bg-black/80 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 z-50">
                  <div className="p-2 border-b border-border/40 bg-muted/30">
                    <div className="px-2 py-1.5">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">账户信息</p>
                      <p className="text-sm font-semibold mt-1">面试候选人</p>
                      <p className="text-[11px] text-muted-foreground truncate">candidate@example.com</p>
                    </div>
                  </div>
                  <div className="p-1.5">
                    <Link 
                      href="/workspace/profile"
                      className="flex items-center gap-2.5 px-2.5 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Settings className="h-4 w-4" />
                      账号设置
                    </Link>
                    <Link 
                      href="#"
                      className="flex items-center gap-2.5 px-2.5 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <CreditCard className="h-4 w-4" />
                      我的订阅
                    </Link>
                  </div>
                  <div className="p-1.5 border-t border-border/40">
                    <Link 
                      href="/" 
                      className="flex items-center gap-2.5 px-2.5 py-2 text-sm font-bold rounded-md hover:bg-destructive/10 transition-colors text-destructive"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <LogOut className="h-4 w-4" />
                      退出登录
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="absolute right-2 top-[calc(100%+0.75rem)] z-50 w-[min(22rem,calc(100vw-1rem))] overflow-hidden rounded-2xl border border-border/60 bg-background/92 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 lg:hidden">
            <div className="border-b border-border/40 px-4 py-3">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                Navigation
              </p>
            </div>
            <div className="p-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/85 hover:bg-muted/60"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
            {!isLoggedIn && (
              <div className="border-t border-border/40 p-2">
                <Link
                  className="flex items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground/85 transition-colors hover:bg-muted/60"
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  登录
                </Link>
                <Link
                  className="mt-1 flex items-center rounded-xl bg-primary px-3 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  注册
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
