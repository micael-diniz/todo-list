import { FormHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export function Form({ className, children, ...props }: FormProps) {
  return (
    <form className={twMerge(className)} {...props}>
      {children}
    </form>
  );
}
