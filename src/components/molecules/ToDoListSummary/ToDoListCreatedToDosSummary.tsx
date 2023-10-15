import { Flag } from "../../atoms/Flag";
import { Text } from "../../atoms/Text";

interface ToDoListCreatedToDosSummaryProps {
  toDosCreated: number;
}

export function ToDoListCreatedToDosSummary({toDosCreated}: ToDoListCreatedToDosSummaryProps) {
  return (
    <Text className="text-blue flex items-center gap-x-2 text-[0.85rem] font-bold leading-normal">
      Created tasks<Flag className="bg-gray-400 text-gray-200">{toDosCreated}</Flag>
    </Text>
  );
}
