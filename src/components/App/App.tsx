import { Outlet } from "react-router";
import type { ReactElement } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function App(): ReactElement {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <nav className="side-nav"></nav>
        <main className="main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
