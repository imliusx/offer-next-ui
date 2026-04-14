import type { ReactNode } from "react";
import { Sidebar } from "@/components/workspace-sidebar";
import { Navbar } from "@/components/navbar";
import { CornerPlus } from "@/components/ui/corner-plus";

export default function WorkspaceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden relative">
      {/* Background Corner Plus decorations for the whole layout */}
      <CornerPlus className="left-4 top-20 opacity-10" />
      <CornerPlus className="right-4 top-20 opacity-10" />
      <CornerPlus className="left-4 bottom-4 opacity-10" />
      <CornerPlus className="right-4 bottom-4 opacity-10" />

      {/* 
        Navbar is now fixed globally. 
        In this workspace layout, we let it hover over the flex container.
      */}
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar and Main now both have pt-16 to avoid being covered by Navbar, but Main scrolls behind it */}
        <Sidebar className="pt-16" />
        <main className="flex-1 overflow-y-auto relative pt-16">
          {/* Internal content corner decorations */}
          <CornerPlus className="left-2 top-2 opacity-20" />
          <CornerPlus className="right-2 top-2 opacity-20" />
          
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
