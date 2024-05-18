import { Outlet } from "react-router";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Header/Navbar";



export const Layout = () => {
  return (
      <>
        <header> ----------- HEADER -----------
          <Navbar />
        </header>
        <main> ----------- MAIN -----------
          <Outlet />
        </main>
        <footer> ----------- FOOTER -----------
          <Footer />
        </footer>
      </>
  );
};
