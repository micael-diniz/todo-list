import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Image } from "./Image";
import logoIcon from "../../assets/logo.svg";

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <Image
      className={twMerge(className)}
      src={logoIcon}
      alt="ToDo List Logo"
      {...props}
    />
  );
}
