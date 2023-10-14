import { Fragment } from "react";
import { ToDoListHeader } from "./components/molecules/ToDoListHeader";
import { ToDoListForm } from "./components/molecules/ToDoListForm";
import { Text } from "./components/atoms/Text";

export function App() {
  return (
    <Fragment>
      <ToDoListHeader.Root>
        <ToDoListHeader.Logo />
      </ToDoListHeader.Root>

      <main className="max-w-[47rem] mx-auto -mt-[1.6875rem]">
        <ToDoListForm.Root>
          <ToDoListForm.TextInput />
          <ToDoListForm.Submit>
            <Text>Create</Text>
            <ToDoListForm.SubmitIcon />
          </ToDoListForm.Submit>
        </ToDoListForm.Root>
      </main>
    </Fragment>
  );
}
