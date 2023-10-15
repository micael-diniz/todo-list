import { create, StateCreator } from 'zustand'
import { Todo } from '../typings/todo'

interface ToDoListSlice {
  toDosList: Todo[]
}


const createToDoListSlice: StateCreator<
ToDoListSlice,
  [],
  [],
  ToDoListSlice
> = (set) => ({
  toDosList: [],
})

export const useBoundStore = create<ToDoListSlice>()((...a) => ({
  ...createToDoListSlice(...a),
}))
