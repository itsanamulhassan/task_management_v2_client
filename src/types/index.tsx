import type { ReactNode } from "react";

export interface IRoute {
  path: string;
  element: ReactNode;
}

export type Theme = "dark" | "light" | "system";
