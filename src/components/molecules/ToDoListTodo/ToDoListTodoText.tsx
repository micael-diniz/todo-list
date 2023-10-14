import { ReactNode } from "react"
import { Text } from "../../atoms/Text"

interface ToDoListTodoTextProps {
  children: ReactNode
}

export function ToDoListTodoText({children}: ToDoListTodoTextProps) {
  return (
    <Text className="text-gray-100 text-sm">{children}</Text>
  )
}
