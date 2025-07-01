import PublicLayout from "@/layouts/public-layout";
import Error from "@/pages/public/error";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { publicRoutes } from "./routes/public-routes";
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
]);

export default routers;
