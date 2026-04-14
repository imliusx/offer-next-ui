import { cn } from "@/lib/utils";

interface CornerPlusProps {
  className?: string;
  size?: number;
}

export function CornerPlus({ className, size = 12 }: CornerPlusProps) {
  return (
    <div 
      className={cn("pointer-events-none absolute text-border/40 select-none", className)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    </div>
  );
}
