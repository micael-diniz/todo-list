import {ReactNode} from "react";

interface ToDoListItemListRootProps {
  children: ReactNode
}

export function ToDoListItemListRoot({children}: ToDoListItemListRootProps) {
  return (
    <section className="flex flex-col gap-y-[0.75rem]">
      {children}
    </section>
  )
}
