import { Todo } from "@/types/todos";
import axios from "axios";

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
};