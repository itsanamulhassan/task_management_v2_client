import Home from "@/pages/public/home";
import SignIn from "@/pages/public/signin";
import SignUp from "@/pages/public/signup";
import type { RouteData } from "@/types";
import React from "react";

export const publicRoutes: Partial<RouteData>[] = [
  {
    path: "/",
    element: React.createElement(Home),
  },
  {
    path: "home",
    element: React.createElement(Home),
  },
  {
    path: "signin",
    element: React.createElement(SignIn),
  },
  {
    path: "signup",
    element: React.createElement(SignUp),
  },
];
