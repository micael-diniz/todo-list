import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

export function Text({ className, children, ...props }: TextProps) {
  return (
    <p className={twMerge(className)} {...props}>
      {children}
    </p>
  );
}
