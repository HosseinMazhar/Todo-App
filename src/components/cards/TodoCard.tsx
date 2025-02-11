"use client";

import { Checkbox } from "../ui/checkbox";

interface TodoCardProps {
  title: string;
  isCompleted: boolean;
}

const TodoCard: React.FC<TodoCardProps> = ({ title, isCompleted }) => {
  return (
    <article className="w-full flex justify-start items-center gap-3">
      <Checkbox checked={isCompleted} />
      <h2 className={`font-semibold tracking-tighter ${isCompleted && "line-through"}`}>{title}</h2>
    </article>
  );
};

export default TodoCard;
