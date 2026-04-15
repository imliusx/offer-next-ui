import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Target, 
  TrendingUp, 
  Activity, 
  Zap, 
  AlertCircle, 
  ArrowUpRight 
} from "lucide-react";
import Link from "next/link";

import { SectionWordmark } from "@/components/section-wordmark";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const preparations = [
  {
    name: "刷题题库",
    model: "LeetCode 核心 100 题",
    status: "进行中",
    tone: "success" as const,
    progress: "65%",
    metric: "128 / 450",
    lastUpdated: "10 分钟前",
  },
  {
    name: "项目复盘",
    model: "低延迟网关重构",
    status: "待完善",
    tone: "warning" as const,
    progress: "40%",
    metric: "2 / 5 亮点",
    lastUpdated: "昨天",
  },
  {
    name: "HR 面准备",
    model: "常见沟通题 20 问",
    status: "关键缺失",
    tone: "danger" as const,
    progress: "15%",
    metric: "3 / 20 题",
    lastUpdated: "3 天前",
  },
];

export default function OverviewPage() {
  return (
    <div className="space-y-10">
      <header className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
              <Activity className="h-4 w-4" />
            </div>
            <SectionWordmark className="text-xs text-muted-foreground">
              Dashboard
            </SectionWordmark>
            <div className="h-4 w-px bg-border/80" />
            <span className="text-xs text-muted-foreground">
              Preparation health monitoring
            </span>
          </div>

          <h1 className="grid gap-2 text-3xl font-extrabold tracking-tight sm:gap-3 sm:text-5xl">
            <span>准备状态概览</span>
            <SectionWordmark className="text-2xl text-muted-foreground sm:text-4xl">
              Overview
            </SectionWordmark>
          </h1>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              System Ready
            </span>
          </div>
          <div className="text-xs text-muted-foreground">更新于 2026/04/14 23:58:12</div>
        </div>
      </header>

      {/* Preparatory Health Grid - Inspired by the Monitor Dashboard */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {preparations.map((item) => (
          <Card key={item.name} className="group relative overflow-hidden bg-card/50 backdrop-blur-xl border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:shadow-xl">
            <CardHeader className="p-5 sm:p-6 pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted border border-border/50 group-hover:border-primary/20 transition-colors">
                    {item.tone === 'success' ? <Zap className="h-5 w-5 text-green-500" /> : 
                     item.tone === 'warning' ? <Clock className="h-5 w-5 text-amber-500" /> : 
                     <AlertCircle className="h-5 w-5 text-red-500" />}
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="truncate text-lg font-bold">{item.name}</CardTitle>
                    <CardDescription className="truncate font-mono text-[11px]">{item.model}</CardDescription>
                  </div>
                </div>
                <Badge variant={item.tone} className="rounded-md px-2 py-0 text-[10px] uppercase font-bold tracking-wider">
                  {item.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-5 sm:p-6 pt-0 space-y-4">
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-muted/30 rounded-xl p-3 border border-border/40">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mb-1">完成进度</p>
                  <p className={cn(
                    "text-xl font-bold tracking-tight",
                    item.tone === 'success' ? "text-green-500" : 
                    item.tone === 'warning' ? "text-amber-500" : "text-red-500"
                  )}>{item.progress}</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-3 border border-border/40">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mb-1">关键指标</p>
                  <p className="text-xl font-bold tracking-tight">{item.metric}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2">
                <span>上次更新: {item.lastUpdated}</span>
                <Link href="#" className="flex items-center gap-1 hover:text-foreground transition-colors font-medium">
                  详情 <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-card/50 backdrop-blur-xl border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              最近 7 天活跃度
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-end gap-2 px-2 pt-4">
              {[40, 60, 45, 90, 75, 50, 85].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className={cn(
                      "w-full rounded-t-lg transition-all relative group",
                      h > 80 ? "bg-green-500/20 hover:bg-green-500/40" : 
                      h > 50 ? "bg-primary/20 hover:bg-primary/40" : "bg-amber-500/20 hover:bg-amber-500/40"
                    )}
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover px-2 py-1 rounded-md text-[10px] hidden group-hover:block border border-border shadow-md">
                      {h} 题
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground">周{['一', '二', '三', '四', '五', '六', '日'][i]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-card/50 backdrop-blur-xl border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              即将到来的面试
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { company: "字节跳动", type: "二面", time: "明天 14:00", tone: "warning" as const },
                { company: "阿里巴巴", type: "一面", time: "周四 10:30", tone: "success" as const },
                { company: "腾讯", type: "HR 面", time: "下周一 15:00", tone: "default" as const },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">{item.company}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="rounded-md text-[10px] px-1.5 py-0 font-medium bg-muted">
                        {item.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                    </div>
                  </div>
                  <Badge variant={item.tone === 'default' ? 'outline' : item.tone} className="rounded-md text-[10px] font-bold">
                    {item.tone === 'success' ? '确认' : item.tone === 'warning' ? '准备中' : '待办'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
