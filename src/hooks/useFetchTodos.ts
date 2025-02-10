import { fetchTodos } from "@/lib/fetch/fetchTodos";
import { Todo } from "@/types/todos";
import { useQuery } from "@tanstack/react-query";

export const useFetchTodos = () => {
  return useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};
