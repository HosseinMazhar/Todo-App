"use client";

import TodoCard from "@/components/cards/TodoCard";
import { TodoSkeletonCard } from "@/components/cards/TodoSkeletonCard";
import TodosNavbar from "@/components/navbar/TodosNavbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useFetchTodos } from "@/hooks/useFetchTodos";

export default function Home() {
  const { data: todos, isLoading, error } = useFetchTodos();

  if (isLoading) {
    const skeletonCount = 5;
    return (
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[700px] flex flex-col justify-center items-center gap-3 px-4 py-6">
          {[...Array(skeletonCount)].map((_, index) => (
            <TodoSkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="w-full flex justify-center items-center">error</div>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <nav className="w-11/12 max-w-[700px] flex flex-col justify-center items-center gap-3">
        <TodosNavbar />
      </nav>
      <ScrollArea className="w-11/12 h-[400px] max-w-[700px] flex flex-col justify-start items-center gap-3 px-4 py-2 border dark:border-neutral-800 border-neutral-200 rounded-md">
        {todos?.map((todo) => (
          <div
            className="w-full flex flex-col justify-center items-center"
            key={todo.id}
          >
            <TodoCard
              title={todo.title}
              isCompleted={todo.completed}
            ></TodoCard>
            <Separator className="my-2" />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
