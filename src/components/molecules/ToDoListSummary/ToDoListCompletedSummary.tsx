import { Flag } from "../../atoms/Flag";
import { Text } from "../../atoms/Text";

interface ToDoListCompletedSummaryProps {
  toDosCreated: number;
  toDosCompleted: number;
}

export function ToDoListCompletedSummary({toDosCompleted , toDosCreated}: ToDoListCompletedSummaryProps ) {
  return (
    <Text className="text-purple flex items-center gap-x-2 text-[0.85rem] font-bold leading-normal">
      Completed
      <Flag className="bg-gray-400 text-gray-200">
        {toDosCompleted && <span>{toDosCompleted} of {toDosCreated}</span>}
      </Flag>
    </Text>
  );
}
