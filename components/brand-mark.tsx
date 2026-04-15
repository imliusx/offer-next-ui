import Image from "next/image";

import {cn} from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandMark({
  className,
  imageClassName,
  priority = false,
}: BrandMarkProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-xl bg-transparent shadow-none",
        className
      )}
    >
      <Image
        alt="Offer Next logo"
        className={cn("h-full w-full object-contain", imageClassName)}
        height={40}
        priority={priority}
        src="/brand/offer-next-logo.png"
        width={40}
      />
    </div>
  );
}
