"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="light" forcedTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  );
}
