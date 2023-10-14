import { Flag } from "../../atoms/Flag";
import { Text } from "../../atoms/Text";

export function ToDoListCompletedSummary() {
  return (
    <Text className="text-purple flex items-center gap-x-2 text-[0.85rem] font-bold leading-normal">
      Completed<Flag className="bg-gray-400 text-gray-200">0</Flag>
    </Text>
  );
}
