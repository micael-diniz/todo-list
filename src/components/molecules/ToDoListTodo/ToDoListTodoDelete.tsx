import { Button } from "../../atoms/Button"
import deleteStyles from "./ToDoListTodoDelete.module.css"

import { TrashIcon } from "../../atoms/TrashIcon"

export function ToDoListTodoDelete() {
  return (
    <Button 
      className={`transition w-6 h-6 hover:bg-gray-400 rounded-[4px] flex items-center justify-center ${deleteStyles.deleteButton}`}>
      <TrashIcon />
    </Button>
  )
} 
