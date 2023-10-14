import { ReactNode } from "react";
interface ToDoListEmptyListRootProps {
  children?: ReactNode;
}

export function ToDoListEmptyListRoot({
  children,
}: ToDoListEmptyListRootProps) {
  return <section className="gap-y-4 rounded-[8px] border-t border-top border-gray-400 py-16 px-6 flex flex-col items-center justify-center">{children}</section>;
}
