import { Fragment } from "react";
import { ToDoListHeader } from "./components/molecules/ToDoListHeader";
import { ToDoListForm } from "./components/molecules/ToDoListForm";
import { Text } from "./components/atoms/Text";
import { ToDoListSummary } from "./components/molecules/ToDoListSummary";
import { ToDoListEmptyList } from "./components/molecules/ToDoListEmptyList";

export function App() {
  return (
    <Fragment>
      <ToDoListHeader.Root>
        <ToDoListHeader.Logo />
      </ToDoListHeader.Root>

      <main className="mx-auto -mt-[1.6875rem] max-w-[47rem] px-4">
        <ToDoListForm.Root>
          <ToDoListForm.TextInput />
          <ToDoListForm.Submit>
            <Text className="text-[0.85rem] leading-[140%]">Create</Text>
            <ToDoListForm.SubmitIcon />
          </ToDoListForm.Submit>
        </ToDoListForm.Root>

        <ToDoListSummary.Root>
          <ToDoListSummary.CreatedTasksSummary />
          <ToDoListSummary.CompletedSummary />
        </ToDoListSummary.Root>

        <ToDoListEmptyList.Root>
          <ToDoListEmptyList.Icon />
          <ToDoListEmptyList.Message />
        </ToDoListEmptyList.Root>

      </main>
    </Fragment>
  );
}
