import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main/main";
import AboutPage from "../pages/about/Index";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AboutPage />,
      },
    ],
  },
]);
