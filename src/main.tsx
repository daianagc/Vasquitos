import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/home/Home.tsx";
import { Donations } from "./pages/donations/Donations.tsx";
import { Partners } from "./pages/partners/Partners.tsx";
import { Contact } from "./pages/contact/Contact.tsx";
import { AboutUs } from "./pages/about-us/AboutUs.tsx";
import { OurDogs } from "./pages/our-dogs/OurDogs.tsx";
import Sponsors from "./pages/sponsors/Sponsors";

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
      {
        path: "nosotros",
        element: <AboutUs />,
      },
      {
        path: "nuestros-vasquitos",
        element: <OurDogs />,
      },
      {
        path: "socios",
        element: <Partners />,
      },
      {
        path: "contacto",
        element: <Contact />,
      },
      {
        path: "patrocinadores",
        element: <Sponsors />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
