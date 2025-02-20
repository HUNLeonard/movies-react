import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="bg-primary fixed top-0 left-0 right-0 h-16 z-50 shadow-md">
        <Navbar />
      </header>

      <Outlet />
      <footer className="bg-primary text-secondary-200 mt-auto z-[51] absolute w-full [box-shadow:_0_5px_16px_0px_rgba(0,0,0,1)]">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
