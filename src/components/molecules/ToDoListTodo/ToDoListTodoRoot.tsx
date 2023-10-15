import { Checkbox, CheckboxProps } from "@nextui-org/react"
import styles from "./ToDoListTodoRoot.module.css"
import { TodoProps } from "../../../classes/Todo"
import { useState } from "react";
import { useBoundStore } from "../../../store";
import { useShallow } from "zustand/react/shallow";

interface ToDoListTodoRootProps extends CheckboxProps{
  isChecked: TodoProps["isChecked"]
  toDoId: TodoProps["id"]
}

export function ToDoListTodoRoot({isChecked, toDoId, children}: ToDoListTodoRootProps) {
  const [isSelected, setIsSelected] = useState(isChecked);
  const updateTodoStatus = useBoundStore(useShallow((state) => state.updateTodoStatus))

  function handleSelectTodo() {
    setIsSelected((prev) => {
      updateTodoStatus({toDoId, isChecked: !prev})
      return !prev
    })
  }

  return (
    <Checkbox 
      isSelected={isSelected} 
      onValueChange={handleSelectTodo}
      color="primary" 
      radius="full" 
      className={`${styles.checkbox} group`} 
      classNames={{
        base: "inline-flex w-full max-w-none max-h-none min-h-18 p-4 rounded-[8px] border border-gray-400 bg-gray-500 m-0 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.4)]",
        wrapper: `transition duration-150 before:border-blue checkbox group-hover:bg-default-100 z-[10000] after:group-data-[selected=true]:hover:bg-purple after:group-data-[selected=true]:hover:transition-colors`,
        label: "w-full",
      }}>
        <div 
          className="flex items-center justify-between pl-[0.75rem]">
            {children}
        </div>
    </Checkbox>
  )
} 