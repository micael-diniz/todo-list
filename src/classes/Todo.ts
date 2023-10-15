import { v4 as uuid } from 'uuid';

interface TodoProps {
  toDoContent: string;
  isChecked: boolean;
  id?: string;
}

export class Todo {
  public toDoContent: string;
  public isChecked: boolean;
  public id?: string;
  
  constructor({ toDoContent, isChecked, id }: TodoProps) {
    this.toDoContent = toDoContent;
    this.isChecked = isChecked;
    this.id = id ?? uuid();
  }
}