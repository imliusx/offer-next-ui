import { FileText } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function ResumesPage() {
  return (
    <main className="relative min-h-screen w-full px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-12 lg:py-14 lg:pt-32">
      <Navbar />
      <header className="relative z-10 mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
              <FileText className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Resumes
            </span>
            <div className="h-4 w-px bg-border/80" />
            <span className="text-xs text-muted-foreground">
              专业简历模板库
            </span>
          </div>

          <h1 className="grid gap-2 text-4xl font-extrabold tracking-tight sm:gap-3 sm:text-6xl">
            <span>简历库</span>
            <span className="text-muted-foreground uppercase text-3xl sm:text-5xl">
              Resumes
            </span>
          </h1>
        </div>
      </header>

      <div className="relative z-10 rounded-2xl border border-dashed border-border/60 bg-card/50 p-20 text-center backdrop-blur-xl">
        <p className="text-muted-foreground">简历库模块开发中...</p>
      </div>
    </main>
  );
}
