import {cn} from "@/lib/utils";

type SectionWordmarkProps = {
  children: string;
  className?: string;
};

export function SectionWordmark({
  children,
  className,
}: SectionWordmarkProps) {
  return (
    <span
      className={cn(
        "font-brand-wordmark inline-block font-light leading-[0.9] tracking-[0.12em] antialiased",
        className
      )}
    >
      {children}
    </span>
  );
}
