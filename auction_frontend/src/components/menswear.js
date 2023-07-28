import React from 'react';
import './Product.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
const images = [
    {
      src: 'https://4.imimg.com/data4/DM/RM/MY-16551252/mens-blazer.jpg',
      text: 'Blazer',
      auction: 'AUCTION ACTIVE'
    },
    {
      src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-mens-shoe-dTVTCk.png',
      text: 'SHOES',
    },
    {
      src: 'https://4.imimg.com/data4/RU/VC/MY-11853389/men-s-jackets.jpg',
      text: 'Jackets',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXmj6wGywnEOyOhwUDd38ULPf2zQfmENrHw&usqp=CAU',
      text: 'Shirt',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgjeXfZTbs494PErlP9ZlY49gbeDLY_49rw&usqp=CAU',
      text: 'VINTAGE CUTLERY',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3Ek1XPxcCH9ogA7thgY6aU2V0tcoL-FaHg&usqp=CAU',
      text: 'WOODEN TOY',
    },
    {
      src: 'https://c4.wallpaperflare.com/wallpaper/919/843/709/tesla-black-coupe-wallpaper-preview.jpg',
      text: 'VINTAGE TESLA',
    },
    {
      src: 'https://static.toiimg.com/thumb/imgsize-23456,msid-82160523,width-600,resizemode-4/82160523.jpg',
      text: 'JEWELLERY',
    }
  ];
  const Menswear = () => {
    const [quantity, setQuantity] = useState(1);
  
    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };
  
    const handleAddToCart = () => {
      // Logic to add the product to the cart
    };
  return (
    <div>
      <Navbar/>
      <div className="departments">
        <div className="departmentcontainer">
          {images.map((image, index) => (
            <div key={index} className="grid-item">
              <img src={image.src} width={'200px'} height={'200px'}></img>
              <h3>{image.text}</h3>
              {image.auction && (
                <div>
                  <h3>{image.auction}</h3>
                </div>
              )}
              <br />
              <label className="product-page__quantity-label">
                Quantity:
                <input
                  className="product-page__quantity-input"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </label>
              <button className="product-page__add-to-cart-button" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
      );
};

export default Menswear;