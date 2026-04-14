"use client";

import * as React from "react";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        aria-label="Toggle theme"
        className="rounded-full border-border/70 bg-background/50 backdrop-blur-sm"
        size="icon"
        type="button"
        variant="outline"
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      aria-label="Toggle theme"
      className="rounded-full border-border/70 bg-background/50 backdrop-blur-sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      size="icon"
      type="button"
      variant="outline"
    >
      <Sun
        className={cn(
          "absolute h-4 w-4 transition-all",
          isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 transition-all",
          isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
