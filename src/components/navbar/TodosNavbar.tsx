"use client";

import { ArrowDownAZ, CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const TodosNavbar = () => {
  return (
    <nav className="w-full flex justify-between">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a group" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tasks</SelectLabel>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="notStarted">Not Started</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <CirclePlus />
        </Button>
        <Button variant="outline" size="icon">
          <ArrowDownAZ />
        </Button>
      </div>
    </nav>
  );
};

export default TodosNavbar;
