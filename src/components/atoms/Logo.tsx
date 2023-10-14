import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return <img className={twMerge(className)} {...props} />;
}
