import React from "react";
import type { IRoute } from "@/types";
import Home from "@/pages/public/home";
import { Login } from "@/pages/public/login";

export const publicRoutes: Partial<IRoute>[] = [
  {
    path: "/",
    element: React.createElement(Home),
  },
  {
    path: "home",
    element: React.createElement(Home),
  },
  {
    path: "login",
    element: React.createElement(Login),
  },
];
