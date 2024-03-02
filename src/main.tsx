import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/home/Home.tsx";
import { Donations } from "./pages/donations/Donations.tsx";
import { Partners } from "./pages/partners/Partners.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "donaciones",
        element: <Donations />,
      },
      // {
      //   path: "nosotros",
      //   element: <NosotrosSection />,
      // },
      // {
      //   path: "nuestrosvasquitos",
      //   element: <NuestrosVasquitos />,
      // },
      {
        path: "socios",
        element: <Partners />,
      },
      // {
      //   path: "padrinos",
      //   element: <Padrinos />,
      // },
      // {
      //   path: "contacto",
      //   element: <Contacto />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
