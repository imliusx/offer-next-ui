import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { BrandWordmark } from "@/components/brand-wordmark";
import { buttonVariants, Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

      <Card className="w-full max-w-md bg-card/50 backdrop-blur-xl border-border/60 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardHeader className="text-center space-y-4">
          <BrandMark className="mx-auto h-20 w-20 rounded-2xl" priority />
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold tracking-tight">开启面试加速</CardTitle>
            <CardDescription>
              创建一个 <BrandWordmark className="text-[1.05em] text-foreground/70" /> 账号
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="full-name">全名</Label>
              <Input id="full-name" placeholder="张三" className="bg-background/50" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">邮箱地址</Label>
              <Input id="email" type="email" placeholder="name@example.com" className="bg-background/50" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">设置密码</Label>
              <Input id="password" type="password" placeholder="••••••••" className="bg-background/50" />
            </div>
            <Button className="w-full h-11 text-base font-semibold shadow-sm mt-2">
              注册
            </Button>
          </form>
          <div className="text-center text-sm text-muted-foreground mt-6">
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
