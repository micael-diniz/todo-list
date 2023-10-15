import { create, StateCreator } from 'zustand'
import { Todo, TodoProps } from '../classes/Todo'

interface UpdateTodoStatusActionProps {
  toDoId: TodoProps["id"];
  isChecked: TodoProps["isChecked"];
}

interface ToDoListSlice {
  toDosList: Todo[]
  addNewTodo: (todo: Todo) => void
  updateTodoStatus: (updateTodoSchema: UpdateTodoStatusActionProps) => void
  deleteToDo: (toDoId: TodoProps["id"]) => void;
}

const createToDoListSlice: StateCreator<
ToDoListSlice,
  [],
  [],
  ToDoListSlice
> = (set) => ({
  toDosList: [],
  addNewTodo: (todo: Todo) => set((state) => ({toDosList: [...state.toDosList, todo]})),
  updateTodoStatus: ({toDoId, isChecked}: UpdateTodoStatusActionProps) =>  set((state) => {
    const updatedTodos = state.toDosList.map((todo) =>
      todo.id === toDoId ? { ...todo, isChecked } : todo
    );
    return { toDosList: updatedTodos };
  }),
  deleteToDo: (toDoId) => set((state) => {
    const updatedTodos = state.toDosList.filter((todo) => todo.id !== toDoId);
    return { toDosList: updatedTodos };
  })
})

export const useBoundStore = create<ToDoListSlice>()((...a) => ({
  ...createToDoListSlice(...a),
}))
