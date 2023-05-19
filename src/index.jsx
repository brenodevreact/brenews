import { NewsProvider } from "./context/NewsContext";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Home from "./routes/Home";
import Technews from "./routes/Technews";
import Esportenews from "./routes/Esportenews";
import Politicanews from "./routes/Politicanews";
import Entretenimentonews from "./routes/Entretenimentonews";
import Worldnews from "./routes/Worldnews";
import Cienciasnews from "./routes/Cienciasnews";

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
        path: "/technews",
        element: <Technews />,
      },
      {
        path: "/esportenews",
        element: <Esportenews />,
      },
      {
        path: "/politicanews",
        element: <Politicanews />,
      },
      {
        path: "/entretenimentonews",
        element: <Entretenimentonews />,
      },
      {
        path: "/worldnews",
        element: <Worldnews />,
      },
      {
        path: "/cienciasnews",
        element: <Cienciasnews />,
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
