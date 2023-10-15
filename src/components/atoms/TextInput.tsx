import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps >(({ className, ...props }: TextInputProps, ref) =>  {
  return <input ref={ref} className={twMerge(className)} {...props} />;
})
