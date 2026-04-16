import type { Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import type {ReactNode} from "react";

import {ThemeProvider} from "@/components/theme-provider";
import "@chinese-fonts/jhlst/dist/京華老宋体v2_002/result.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Offer Next - 你的面试准备超级大脑",
  description: "聚合面试准备中最常用的几个模块，把零散的准备内容集中到一个平台里。",
  icons: {
    icon: "/brand/offer-next-logo.png",
    apple: "/brand/offer-next-logo.png",
    shortcut: "/brand/offer-next-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
