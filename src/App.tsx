import { Outlet, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
