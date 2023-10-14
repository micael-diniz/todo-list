import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface FlagProps extends HTMLAttributes<HTMLSpanElement> {}

export function Flag({ className, children, ...props }: FlagProps) {
  return (
    <span
      className={twMerge(
        "min-w-[1,5625rem] rounded-full px-2 py-[2px] text-xs leading-normal",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
