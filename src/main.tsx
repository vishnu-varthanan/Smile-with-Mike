import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/app/router";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/global.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element #root was not found");
}

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
