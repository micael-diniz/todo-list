import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface FlagProps extends HTMLAttributes<HTMLSpanElement> {}

export function Flag({ className, children, ...props }: FlagProps) {
  return (
    <span className={twMerge("rounded-full bg-gray-400 px-2 py-[2px] min-w-[1,5625rem]", className)} {...props}>
      {children}
    </span>
  );
}
