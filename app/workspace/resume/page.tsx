import { FileText } from "lucide-react";

import { SectionWordmark } from "@/components/section-wordmark";

export default function Page() {
  return (
    <div className="space-y-10">
      <header className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
              <FileText className="h-4 w-4" />
            </div>
            <SectionWordmark className="text-xs text-muted-foreground">
              Resume
            </SectionWordmark>
            <div className="h-4 w-px bg-border/80" />
            <span className="text-xs text-muted-foreground">
              个人简历的编写和制作，围绕项目亮点和关键词完善表达
            </span>
          </div>

          <h1 className="grid gap-2 text-3xl font-extrabold tracking-tight sm:gap-3 sm:text-5xl">
            <span>简历优化</span>
            <SectionWordmark className="text-2xl text-muted-foreground sm:text-4xl">
              Resume
            </SectionWordmark>
          </h1>
        </div>
      </header>

      <div className="relative z-10 rounded-2xl border border-dashed border-border/60 bg-card/50 p-20 text-center backdrop-blur-xl">
        <p className="text-muted-foreground">简历优化功能开发中...</p>
      </div>
    </div>
  );
}
