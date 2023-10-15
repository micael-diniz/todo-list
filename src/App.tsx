import { Fragment } from "react";
import { ToDoListHeader } from "./components/molecules/ToDoListHeader";
import { ToDoListForm } from "./components/molecules/ToDoListForm";
import { ToDoListSummary } from "./components/molecules/ToDoListSummary";
import { ToDoListItemsList } from "./components/organisms/ToDoListItemsList";
import { ToDoListTodo } from "./components/molecules/ToDoListTodo";
import { useBoundStore } from "./store";
import { ToDoListEmptyList } from "./components/molecules/ToDoListEmptyList";
import { useShallow } from "zustand/react/shallow";

export function App() {
  const toDosList = useBoundStore(useShallow((state) => state.toDosList))

  const toDosListQuantity = toDosList.length
  const isToDoListEmpty = !toDosListQuantity

  const toDosCompleted = toDosList.filter(todo => todo.isChecked)
  const toDosListCompletedQuantity = toDosCompleted.length

  return (
    <Fragment>
      <ToDoListHeader.Root>
        <ToDoListHeader.Logo />
      </ToDoListHeader.Root>

      <main className="mx-auto -mt-[1.6875rem] max-w-[47rem] px-4 pb-18">
        <ToDoListForm.Root />

        <ToDoListSummary.Root>
          <ToDoListSummary.CreatedToDosSummary toDosCreated={toDosListQuantity}/>
          <ToDoListSummary.CompletedSummary 
            toDosCompleted={toDosListCompletedQuantity} 
            toDosCreated={toDosListQuantity}
          />
        </ToDoListSummary.Root>

        { isToDoListEmpty ? 
          (
            <ToDoListEmptyList.Root>
              <ToDoListEmptyList.Icon />
              <ToDoListEmptyList.Message />
            </ToDoListEmptyList.Root>
          ) : 
          (
            <ToDoListItemsList.Root>
              {toDosList.map(todo => 
                (
                  <ToDoListTodo.Root 
                    key={todo.id} 
                    isChecked={todo.isChecked} 
                    todoId={todo.id}
                  >
                    <ToDoListTodo.Text>
                      {todo.toDoContent}
                    </ToDoListTodo.Text>
                    <ToDoListTodo.Delete todoId={todo.id}/>
                  </ToDoListTodo.Root> 
                )
              )}
            </ToDoListItemsList.Root>
          ) 
        }
      </main>
    </Fragment>
  );
}
