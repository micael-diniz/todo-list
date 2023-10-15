import { Fragment } from "react";
import { ToDoListHeader } from "./components/molecules/ToDoListHeader";
import { ToDoListForm } from "./components/molecules/ToDoListForm";
import { ToDoListSummary } from "./components/molecules/ToDoListSummary";
import { ToDoListItemsList } from "./components/organisms/ToDoListItemsList";
import { ToDoListTodo } from "./components/molecules/ToDoListTodo";
import { useBoundStore } from "./store";

export function App() {
  const toDosList = useBoundStore((state) => state.toDosList)
  console.log({toDosList})
  return (
    <Fragment>
      <ToDoListHeader.Root>
        <ToDoListHeader.Logo />
      </ToDoListHeader.Root>

      <main className="mx-auto -mt-[1.6875rem] max-w-[47rem] px-4">
        <ToDoListForm.Root />

        <ToDoListSummary.Root>
          <ToDoListSummary.CreatedTasksSummary />
          <ToDoListSummary.CompletedSummary />
        </ToDoListSummary.Root>

        {/* <ToDoListEmptyList.Root>
          <ToDoListEmptyList.Icon />
          <ToDoListEmptyList.Message />
        </ToDoListEmptyList.Root> */}
        <ToDoListItemsList.Root>
          <ToDoListTodo.Root>
            <ToDoListTodo.Text>
              First task
            </ToDoListTodo.Text>
            <ToDoListTodo.Delete />
          </ToDoListTodo.Root>
          <ToDoListTodo.Root>
            <ToDoListTodo.Text>
              First task
            </ToDoListTodo.Text>
            <ToDoListTodo.Delete />
          </ToDoListTodo.Root>    
        </ToDoListItemsList.Root>
      </main>
    </Fragment>
  );
}
