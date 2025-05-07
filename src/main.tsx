import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors position="top-right" />
    <RouterProvider router={router} />
  </StrictMode>
);
