import { v4 as uuid } from 'uuid';

console.log({id: uuid()})
export interface Todo {
  id: string
}