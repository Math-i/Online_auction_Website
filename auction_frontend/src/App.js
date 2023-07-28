import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admission from './components/sellproduct';
import Navbar from './components/Navbar';
import Menswear from './components/menswear';
import Womenswear from './components/womenswear';
import Arts from './components/arts';
import Antique from './components/antiques';
import Homepage from './components/Home';
import Loginpage from './components/Login';
import Signpage from './components/SignPage';
import Products from './components/Product';
import ProductDetailPage from './components/clock';
import Cart from './components/Cart';
import {useState} from 'react';
import SellerLoginpage from './components/SellerLogin';
import First from './components/First';
import SellerHomepage from './components/sellerhome';
import SellerProducts from './components/ProductSeller';
import BiddingDisplay from './components/BiddingDisplay';
import FeedBack from './components/feedback';
function App() {
  const[product,setproduct]=useState("");
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<First/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/signup" element={<Signpage />}/>
      <Route path="/bar" element={<Navbar/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/sell" element={<Admission/>}/>
      <Route path="/sellerlogin" element={<SellerLoginpage/>}/>
      <Route path="/sellerhome" element={<SellerHomepage/>}/>
      <Route path="/sellerproducts" element={<SellerProducts/>}/>
      <Route path="/biddingdisplay" element={<BiddingDisplay/>}/>
      <Route path="/mens" element={<Menswear/>}/>
      <Route path="/womens" element={<Womenswear/>}/>
      <Route path="/arts" element={<Arts/>}/>
      <Route path="/ant" element={<Antique/>}/>
      <Route path="/pro" element={<Products setproduct={setproduct}/>}/>
      <Route path="/clk" element={<ProductDetailPage product={product}/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/feed" element={<FeedBack/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
