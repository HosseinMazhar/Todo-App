"use client"

import { Skeleton } from "../ui/skeleton";

export function TodoSkeletonCard() {
  return (
    <div className="w-full flex justify-start items-start gap-3">
      <Skeleton className="h-14 w-full" />
    </div>
  );
}
