import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {}

export function Header({ className, children, ...props }: HeaderProps) {
  return <header {...props} className={twMerge("flex items-center justify-center bg-gray-700", className)} >{children}</header>;
}
