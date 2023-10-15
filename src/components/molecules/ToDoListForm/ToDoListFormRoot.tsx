import { useForm } from "react-hook-form";
import { ToDoListForm } from ".";
import { Form } from "../../atoms/Form";
import { Text } from "../../atoms/Text";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const newTodoSchema = z.object({
  toDoContent: z.string().min(1, {"message": "Don't forget to add your To-do content!"})
})
export type NewTodoSchema = z.infer<typeof newTodoSchema>;

export function ToDoListFormRoot() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTodoSchema>({resolver: zodResolver(newTodoSchema)})
  function handleFormSubmit(data: NewTodoSchema ) {
    console.log({data})
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
