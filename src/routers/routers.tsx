import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/main";
import Homepage from "../pages/home/Index";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
