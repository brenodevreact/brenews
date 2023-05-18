import { NewsProvider } from "./context/NewsContext";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Contact from "./routes/Contact";
import App from "./App";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NewsProvider>
      <RouterProvider router={router} />
    </NewsProvider>
  </React.StrictMode>
);
