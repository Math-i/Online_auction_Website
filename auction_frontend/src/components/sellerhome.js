import React, { useState, useEffect } from 'react';
import SellerNavbar from './SellerNavbar';
import About from './About';
import Footer from './Footer';

function SellerHomepage() {
  const [index,setIndex]=useState(0);
  const images = [
    'https://images.pexels.com/photos/285857/pexels-photo-285857.jpeg?cs=srgb&dl=pexels-gashif-rheza-285857.jpg&fm=jpg',
    'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?cs=srgb&dl=pexels-mike-bird-977003.jpg&fm=jpg',
    'https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?cs=srgb&dl=pexels-%E9%9A%94%E5%A3%81%E5%85%89%E5%A4%B4%E8%80%81%E7%8E%8B-wangming%27photo-354939.jpg&fm=jpg'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <SellerNavbar />

      <div style={{ position: 'relative' }}>
        <img
          src={images[index]}
          alt='Slide'
          style={{ width: '1600px', height: '700px' }}
        />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* <input
            type='text'
            placeholder='Search...'
            style={{
              width: '600px',
              height: '50px',
              padding: '5px',
              fontSize: '16px'
            }}
          /> */}
          {/* Add any additional search functionality here */}
        </div>
      </div>

      <div id='about'>
        <About />
      </div>
      <div id='cont'>
        <Footer />
      </div>
    </>
  );
}

export default SellerHomepage;