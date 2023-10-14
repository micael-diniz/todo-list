import { Form, FormProps } from "../../atoms/Form";

interface TodoListFormRootProps extends FormProps {}

export function ToDoListFormRoot({ children }: TodoListFormRootProps) {
  return <Form className="max-h-[3.375rem] flex gap-x-2 mb-16">{children}</Form>;
}
