import { Header, HeaderProps } from "../../atoms/Header";

interface ToDoListHeaderRootProps extends HeaderProps {}

export function ToDoListHeaderRoot({ children }: ToDoListHeaderRootProps) {
  return <Header className="h-[12.5rem]">{children}</Header>;
}
