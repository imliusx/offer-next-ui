import { ArrowRight, Target, Zap, Clock, Repeat, Activity } from "lucide-react";
import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { buttonVariants } from "@/components/ui/button";

const features = [
  {
    title: "一站式",
    description: "把简历、刷题、项目、HR 面统一管理，无需在多个工具间来回切换。",
    icon: Target,
  },
  {
    title: "高效率",
    description: "减少准备内容分散带来的切换成本，专注提升核心面试能力。",
    icon: Zap,
  },
  {
    title: "可复盘",
    description: "支持围绕具体面试做总结和后续行动，持续迭代优化面试表现。",
    icon: Repeat,
  },
  {
    title: "可持续",
    description: "通过进度与节奏展示保持长期准备状态，告别考前突击焦虑。",
    icon: Clock,
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen w-full px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-12 lg:py-14 lg:pt-32">
      <Navbar />

      {/* Hero Header - Restored Original Layout */}
      <header className="relative z-10 mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between" id="overview">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
              <Activity className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Offer Next
            </span>
            <div className="h-4 w-px bg-border/80" />
            <span className="text-xs text-muted-foreground">
              超级大脑，面试必备
            </span>
          </div>

          <h1 className="grid gap-2 text-4xl font-extrabold tracking-tight sm:gap-3 sm:text-6xl">
            <span>你的面试准备</span>
            <span className="text-muted-foreground uppercase text-3xl sm:text-5xl">
              Interview Prep
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            本项目是聚合了面试准备中最常用的几个模块，把零散的准备内容集中到一个平台里，方便统一规划、复习和复盘。
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider">
              Ready to help
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link className={buttonVariants({ variant: "outline", className: "rounded-full" })} href="/register">
              免费注册
            </Link>
            <Link className={buttonVariants({ className: "rounded-full" })} href="/workspace">
              立即开始
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4" id="features">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group relative flex flex-col items-start justify-between rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/10 hover:shadow-xl"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
