import { create, StateCreator } from 'zustand'
import { Todo } from '../classes/Todo'

interface ToDoListSlice {
  toDosList: Todo[]
  addNewTodo: (todo: Todo) => void
}

const createToDoListSlice: StateCreator<
ToDoListSlice,
  [],
  [],
  ToDoListSlice
> = (set) => ({
  toDosList: [],
  addNewTodo: (todo: Todo) => set((state) => ({toDosList: [...state.toDosList, todo]})) 
})

export const useBoundStore = create<ToDoListSlice>()((...a) => ({
  ...createToDoListSlice(...a),
}))
