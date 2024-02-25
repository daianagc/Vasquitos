import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/home/Home.tsx";
import { Donations } from "./pages/donations/Donations.tsx";
import NosotrosSection from "./pages/navbarSections/NosotrosSection.tsx";
import NuestrosVasquitos from "./pages/navbarSections/NuestrosVasquitos.tsx";
import Socios from "./pages/navbarSections/Socios.tsx";
import Padrinos from "./pages/navbarSections/Padrinos.tsx";
import Contacto from "./pages/navbarSections/Contacto.tsx";

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
        path: "donations",
        element: <Donations />,
      },
      {
        path: "nosotros",
        element: <NosotrosSection />,
      },
      {
        path: "nuestrosvasquitos",
        element: <NuestrosVasquitos />,
      },
      {
        path: "socios",
        element: <Socios />,
      },
      {
        path: "padrinos",
        element: <Padrinos />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
