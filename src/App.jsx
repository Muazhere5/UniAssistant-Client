import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundVideo from "./pages/public/BackgroundVideo";

const App = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/register");

  return (
    <>
      {/* Global Background Video */}
      <BackgroundVideo />

      {/* Navbar */}
      {!hideLayout && <Navbar />}

      {/* Main Content */}
      <main className="relative z-10 min-h-screen pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
