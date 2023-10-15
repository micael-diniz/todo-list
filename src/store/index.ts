import { create, StateCreator } from 'zustand'
import { Todo, TodoProps } from '../classes/Todo'

interface UpdateTodoStatusActionProps {
  todoId: TodoProps["id"];
  isChecked: TodoProps["isChecked"];
}

interface ToDoListSlice {
  toDosList: Todo[]
  addNewTodo: (todo: Todo) => void
  updateTodoStatus: (updateTodoSchema: UpdateTodoStatusActionProps) => void
}

const createToDoListSlice: StateCreator<
ToDoListSlice,
  [],
  [],
  ToDoListSlice
> = (set) => ({
  toDosList: [],
  addNewTodo: (todo: Todo) => set((state) => ({toDosList: [...state.toDosList, todo]})),
  updateTodoStatus: ({todoId, isChecked}: UpdateTodoStatusActionProps) =>  set((state) => {
    const updatedTodos = state.toDosList.map((todo) =>
      todo.id === todoId ? { ...todo, isChecked } : todo
    );
    return { toDosList: updatedTodos };
  })
})

export const useBoundStore = create<ToDoListSlice>()((...a) => ({
  ...createToDoListSlice(...a),
}))
