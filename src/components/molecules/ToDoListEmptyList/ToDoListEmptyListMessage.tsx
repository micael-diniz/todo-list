import { Text } from "../../atoms/Text";

export function ToDoListEmptyListMessage() {
  return (
    <div>
      <Text className="font-bold text-gray-300 text-center">
        You don't have tasks registered yet
      </Text>
      <Text className="font-normal text-gray-300">Create tasks and organize your to-do items</Text>
    </div>
  );
}
