import { ErrorMessage } from "@hookform/error-message";
import { TextInput, TextInputProps } from "../../atoms/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { NewTodoFormSchema } from "./ToDoListFormRoot";
import { Text } from "../../atoms/Text";

interface ToDoListFormTextInputProps extends TextInputProps {
  errors: FieldErrors,
  name: keyof NewTodoFormSchema
  register: UseFormRegister<NewTodoFormSchema>
}

export function ToDoListFormTextInput({ errors, name, register, ...props }: ToDoListFormTextInputProps) {
  return (
    <label className="w-full">    
      <TextInput
        className="transition-border duration-100 text-gray-100 placeholder:text-gray-300	focus:border-purpleDark h-full w-full max-w-[39.875rem] rounded-[8px] border border-gray-700 bg-gray-500 p-4 outline-none"
        placeholder="Add a new to-do"
        {...props}
        {...register(name)}
    />
      <Text className="text-danger text-sm text-center mt-[0.25rem]"><ErrorMessage errors={errors} name={name} /></Text> 
    </label>
  );
}
