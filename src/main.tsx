import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Main from "./components/Main.tsx";
import ErrorPage from "./components/Error/ErrorPage.tsx";

import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main",
    element: <Main />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh" }}>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
