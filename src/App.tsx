import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./styles/App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, ScrollRestoration } from "react-router-dom";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </QueryClientProvider>
    </>
  );
};

export default App;
