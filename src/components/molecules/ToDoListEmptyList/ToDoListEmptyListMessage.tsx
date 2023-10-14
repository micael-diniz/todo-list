import { Text } from "../../atoms/Text";

export function ToDoListEmptyListMessage() {
  return (
    <div>
      <Text className="font-bold text-gray-300">
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text className="font-normal text-gray-300">Crie tarefas e organize seus itens a fazer</Text>
    </div>
  );
}
