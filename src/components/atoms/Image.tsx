import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function Image({ className, ...props }: ImageProps) {
  return <img className={twMerge(className)} {...props} />;
}
