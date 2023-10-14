import { TextInput } from "../../atoms/TextInput";

export function ToDoListFormTextInput() {
  return (
    <TextInput
      className="transition-border duration-100 text-gray-100 placeholder:text-gray-300	focus:border-purpleDark h-full w-full max-w-[39.875rem] rounded-[8px] border border-gray-700 bg-gray-500 p-4 outline-none"
      placeholder="Add a new to-do"
    />
  );
}
