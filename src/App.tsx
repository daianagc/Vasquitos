import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      </QueryClientProvider>
    </>
  );
};

export default App;
