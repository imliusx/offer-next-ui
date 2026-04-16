import {cn} from "@/lib/utils";

type BrandWordmarkProps = {
  className?: string;
};

export function BrandWordmark({className}: BrandWordmarkProps) {
  return (
    <span
      className={cn(
        "font-brand-wordmark inline-block font-bold leading-[0.9] tracking-[0.12em] antialiased text-foreground/80",
        className
      )}
    >
      伴职猫
    </span>
  );
}
