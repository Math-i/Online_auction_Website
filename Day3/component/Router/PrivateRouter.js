import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Heros from "../../pages/Heros";
import ProductList from "../../pages/ProductList";
import MyAccount from "../../pages/MyAccount";
import WinningList from "../../pages/WinningList";
import ContactUs from "../../pages/ContactUs";
import About from "../../pages/About";
import NavbarComp from "../Navbar/NavbarComp";
import Footer from "../Footer/Footer";
import MyOrder from "../../pages/Myorder";
import ProductSell from "../../pages/ProductSell";

function PrivateRouter() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Heros />} />
        <Route path="/buy" element={<ProductList />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/winninglist" element={<WinningList />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<MyOrder />} />
        <Route path="/buy/product" element={<ProductSell />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default PrivateRouter;
