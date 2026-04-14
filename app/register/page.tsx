import { Briefcase, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center px-4">
      <Link 
        href="/" 
        className={buttonVariants({ variant: "ghost", className: "fixed top-8 left-8 gap-2" })}
      >
        <ArrowLeft className="h-4 w-4" />
        返回首页
      </Link>

      <Card className="w-full max-w-md bg-card/50 backdrop-blur-xl border-border/60 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <Briefcase className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight">开启面试加速</CardTitle>
            <CardDescription>创建一个 Offer Next 账号</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="h-10 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm text-muted-foreground">
              全名 (演示)
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-10 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm text-muted-foreground">
              邮箱地址 (演示)
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-10 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm text-muted-foreground">
              设置密码 (演示)
            </div>
          </div>
          <button className={buttonVariants({ className: "w-full h-11" })}>
            注册
          </button>
          <div className="text-center text-sm text-muted-foreground">
            已有账号？{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              立即登录
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
