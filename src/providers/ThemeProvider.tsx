"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactQueryProvider } from "./ReactQueryProvider";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextThemesProvider>
  );
}
