import { useForm } from "react-hook-form";
import { ToDoListForm } from ".";
import { Form } from "../../atoms/Form";
import { Text } from "../../atoms/Text";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Todo } from "../../../classes/Todo";
import { useBoundStore } from "../../../store";
import { useShallow } from "zustand/react/shallow";

const newTodoFormSchema = z.object({
  toDoContent: z.string().min(1, {"message": "Don't forget to add your To-do content!"})
})
export type NewTodoFormSchema = z.infer<typeof newTodoFormSchema>;

export function ToDoListFormRoot() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewTodoFormSchema>({resolver: zodResolver(newTodoFormSchema)})
  const addNewTodo = useBoundStore(useShallow((state) => state.addNewTodo))

  function handleFormSubmit(data: NewTodoFormSchema ) {
    const todo = new Todo({ toDoContent: data.toDoContent, isChecked: false });
    addNewTodo(todo)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)} className="max-h-[3.375rem] flex gap-x-2 mb-16">
      <ToDoListForm.TextInput register={register} name="toDoContent" errors={errors}/>
      <ToDoListForm.Submit>
        <Text className="text-[0.85rem] leading-[140%]">Create</Text>
        <ToDoListForm.SubmitIcon />
      </ToDoListForm.Submit>
    </Form>
  );
}
