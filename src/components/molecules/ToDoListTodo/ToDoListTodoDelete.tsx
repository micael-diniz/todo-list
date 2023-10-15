import { Button } from "../../atoms/Button"
import deleteStyles from "./ToDoListTodoDelete.module.css"

import { TrashIcon } from "../../atoms/TrashIcon"
import { TodoProps } from "../../../classes/Todo"
import { useBoundStore } from "../../../store"
import { useShallow } from "zustand/react/shallow"

interface ToDoListTodoDeleteProps {
  toDoId: TodoProps["id"]
}

export function ToDoListTodoDelete({ toDoId }: ToDoListTodoDeleteProps) {
  const deleteToDo = useBoundStore(useShallow((state) => state.deleteToDo))

  function handleDeleteToDo() {
    deleteToDo(toDoId)
  }
  
  return (
    <Button 
      onClick={handleDeleteToDo}
      className={`transition w-6 h-6 hover:bg-gray-400 rounded-[4px] flex items-center justify-center ${deleteStyles.deleteButton}`}>
      <TrashIcon />
    </Button>
  )
} 
