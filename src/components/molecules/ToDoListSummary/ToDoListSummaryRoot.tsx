import { ReactNode } from "react";

interface ToDoListSummaryRootProps {
  children?: ReactNode;
}

export function ToDoListSummaryRoot({ children }: ToDoListSummaryRootProps) {
  return <section className="flex justify-between mb-6">{children}</section>;
}
