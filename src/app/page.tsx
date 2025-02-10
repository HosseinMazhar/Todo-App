"use client";

import { useFetchTodos } from "@/hooks/useFetchTodos";

export default function Home() {
  const { data: todos, isLoading, error } = useFetchTodos();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {todos?.map((todo) => (
        <li key={todo.id}>
          {todo.title} {todo.completed ? "✅" : "❌"}
        </li>
      ))}
    </div>
  );
}
