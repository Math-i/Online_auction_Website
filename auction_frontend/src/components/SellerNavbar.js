import React from "react";
 import {Link} from 'react-scroll';
import "./SellerNavbar.css";
import {Link as Treee} from "react-router-dom";

// import Admission from "./Admission";


export default function SellerNavbar(){
    
    return(
       
    <div className="nav">
    <a href="/" className="site-title">AUCTION</a>
    <div className="navcontact">
  
   <Treee to="/">HOME</Treee> 
   
    <Treee to="/sellerproducts">PRODUCTS</Treee>
    <Treee to="/sell">ADD PRODUCTS</Treee>
    <Link to="about" smooth={true} offset={200} duration={500}>ABOUT US</Link>
    <Link to="cont" smooth={true} offset={200} duration={500}>CONTACT US</Link>
     {/* <Treee to="/cart">CART</Treee>  */}
    <div class="dropdown">
    <button class="dropbtn">
    <div className="menuicon"></div>
    <div className="menuicon2"></div>
    <div className="menuicon3"></div>
    </button>
    <div class="dropdown-content">
      
     <Treee to="/login">LOGIN</Treee>
     <Treee to="/signup">REGISTER</Treee>  
      
     
      </div>
      </div>
    </div>
    </div>

  

      
        
      
    )
    
}