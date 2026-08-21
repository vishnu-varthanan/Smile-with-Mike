import { Navigate, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/config/nav";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import MikeUniverse from "@/pages/MikeUniverse";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.home, element: <Home /> },
      { path: ROUTES.shop, element: <MikeUniverse /> },
      { path: ROUTES.shopLegacy, element: <Navigate to={ROUTES.shop} replace /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
