import PublicLayout from "@/layouts/public-layout";
import Error from "@/pages/public/error";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { publicRoutes } from "./routes/public-routes";
import DashboardLayout from "@/layouts/dashboard-layout";
import dashboardRoutes from "./routes/dashboard-routes";
const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <Suspense fallback="fallback --------------">
        <PublicLayout />
      </Suspense>
    ),
    children: [...publicRoutes],
  },
  {
    path: "/dashboard",
    errorElement: <Error />,
    element: (
      <Suspense fallback="fallback --------------">
        <DashboardLayout />
      </Suspense>
    ),
    children: [...dashboardRoutes],
  },
]);

export default routers;
