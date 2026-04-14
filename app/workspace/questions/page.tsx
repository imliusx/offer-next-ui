import { Library } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-10">
      <header className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
              <Library className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Questions
            </span>
            <div className="h-4 w-px bg-border/80" />
            <span className="text-xs text-muted-foreground">
              在题库中选择的要学习的题目库，进行题目复习浏览刷题
            </span>
          </div>

          <h1 className="grid gap-2 text-3xl font-extrabold tracking-tight sm:gap-3 sm:text-5xl">
            <span>刷题进度</span>
            <span className="text-muted-foreground uppercase text-2xl sm:text-4xl">
              Questions
            </span>
          </h1>
        </div>
      </header>

      <div className="relative z-10 rounded-2xl border border-dashed border-border/60 bg-card/50 p-20 text-center backdrop-blur-xl">
        <p className="text-muted-foreground">刷题进度功能开发中...</p>
      </div>
    </div>
  );
}
