import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "../Navbar/NavbarComp";
import Heros from "../../pages/Heros";
import ContactUs from "../../pages/ContactUs";
import About from "../../pages/About";
import Footer from "../Footer/Footer";
function PublicRouter() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Heros />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default PublicRouter;
