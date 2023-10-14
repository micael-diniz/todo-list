import { Button, ButtonProps } from "../../atoms/Button";

interface SubmitButtonProps extends ButtonProps {}

export function ToDoListFormSubmit({ children }: SubmitButtonProps) {
  return (
    <Button
      className="hover:bg-blue bg-blueDark text-gray-100 flex flex-row items-center gap-x-2 rounded-[8px] p-4 font-bold transition-colors duration-100"
      type="submit"
    >
      {children}
    </Button>
  );
}
