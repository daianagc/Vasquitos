import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/home/Home.tsx";
import PresentationSection from "./pages/home/components/PresentationSection.tsx";
import OurDogsSection from "./pages/home/components/OurDogsSection.tsx";
import SponsorsSection from "./pages/home/components/SponsorsSection.tsx";
import DonationsSection from "./pages/home/components/DonationsSection.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "nosotros",
        element: <PresentationSection />,
      },
      {
        path: "nuestrosvasquitos",
        element: <OurDogsSection />,
      },
      {
        path: "socios",
        element: <SponsorsSection />,
      },
      {
        path: "padrinos",
        element: <DonationsSection />,
      },
      {
        path: "contacto",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
