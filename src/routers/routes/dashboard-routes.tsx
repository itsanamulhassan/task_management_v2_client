import Analytic from "@/pages/dashboard/analytic";
import Task from "@/pages/dashboard/task";
import User from "@/pages/dashboard/user";
import type { RouteData } from "@/types";
import React from "react";

const dashboardRoutes: Partial<RouteData>[] = [
  { path: "", element: React.createElement(Task) },
  { path: "tasks", element: React.createElement(Task) },
  { path: "users", element: React.createElement(User) },
  { path: "analytics", element: React.createElement(Analytic) },
];

export default dashboardRoutes;
