// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import About from './About';
// // import Gallery from './gallery';
// import Footer from './Footer';
// function Homepage() {
//     // Create state variables for the index and image array
//     const [index, setIndex] = useState(0);
//     const images = ['https://images.pexels.com/photos/285857/pexels-photo-285857.jpeg?cs=srgb&dl=pexels-gashif-rheza-285857.jpg&fm=jpg','https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?cs=srgb&dl=pexels-mike-bird-977003.jpg&fm=jpg','https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?cs=srgb&dl=pexels-%E9%9A%94%E5%A3%81%E5%85%89%E5%A4%B4%E8%80%81%E7%8E%8B-wangming%27photo-354939.jpg&fm=jpg'];
    
    
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setIndex(prevIndex => (prevIndex + 1) % images.length);
//         }, 2000);

//         return () => clearInterval(intervalId);
//     }, []);
    
//     // Render the current image
//     return (
//         <><><Navbar />
        
//         <img src={images[index]} alt='Slide' style={{ width: '1600px', height: '700px', top: '50%', position: 'top 120px' }} />
//         </>
        
//         <div id="about">
//         <About />
//         </div>
//         <div id="cont"><Footer/></div>
      
//         </>
//         );
// }

// export default Homepage;





// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import About from './About';
// // import Gallery from './gallery';
// import Footer from './Footer';

// function Homepage() {
//   // Create state variables for the index and image array
//   const [index, setIndex] = useState(0);
//   const images = [
//     'https://images.pexels.com/photos/285857/pexels-photo-285857.jpeg?cs=srgb&dl=pexels-gashif-rheza-285857.jpg&fm=jpg',
//     'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?cs=srgb&dl=pexels-mike-bird-977003.jpg&fm=jpg',
//     'https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?cs=srgb&dl=pexels-%E9%9A%94%E5%A3%81%E5%85%89%E5%A4%B4%E8%80%81%E7%8E%8B-wangming%27photo-354939.jpg&fm=jpg'
//   ];
  
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // State variable for the search bar value
//   const [searchValue, setSearchValue] = useState('');

//   // Function to handle search bar value change
//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   // Filtered images based on search bar value
//   const filteredImages = images.filter(image =>
//     image.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   // Render the current image
//   return (
//     <>
//       <Navbar />
//       <div style={{ position: 'relative' }}>
//         <img
//           src={filteredImages[index]}
//           alt='Slide'
//           style={{ width: '1600px', height: '700px', top: '50%', position: 'top 120px' }}
//         />
//         <input
//           type="text"
//           value={searchValue}
//           onChange={handleSearchChange}
//           placeholder="Search"
//           style={{
//             position: 'absolute',
//             top: '10px',
//             left: '10px',
//             padding: '5px',
//             fontSize: '16px',
//           }}
//         />
//       </div>
//       <div id="about">
//         <About />
//       </div>
//       <div id="cont">
//         <Footer/>
//       </div>
//     </>
//   );
// }

// export default Homepage;



import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';

function Homepage() {
  const [index, setIndex] = useState(0);
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
      <Navbar />
      <div style={{ position: "relative" }}></div><img src={images[index]} alt='Slide' style={{ width: '1800px', height: '700px', top: '50%', position: 'top 120px' }} /><div
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgb(0, 0, 0)',
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '4px',
            width: '70%',
            color: 'white'
          }}
        >
          <center> 
            <h1>Hi Mathi</h1>
           
            {/* <Link to="/org"><button className='product-page__add-to-cart-button'>REGISTER</button></Link> */}
          </center>

        </div>

      <div style={{ position: 'relative' }}>
        {/* <img
          src={images[index]}
          alt='Slide'
          style={{ width: '1600px', height: '700px' }}
        /> */}

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

export default Homepage;




// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import About from './About';
// import Footer from './Footer';

// function Homepage() {
//   const [index, setIndex] = useState(0);
//   const images = [
//     'https://images.pexels.com/photos/285857/pexels-photo-285857.jpeg?cs=srgb&dl=pexels-gashif-rheza-285857.jpg&fm=jpg',
//     'https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?cs=srgb&dl=pexels-mike-bird-977003.jpg&fm=jpg',
//     'https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?cs=srgb&dl=pexels-%E9%9A%94%E5%A3%81%E5%85%89%E5%A4%B4%E8%80%81%E7%8E%8B-wangming%27photo-354939.jpg&fm=jpg'
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div style={{ position: 'relative' }}>
//         <img
//           src={images[index]}
//           alt='Slide'
//           style={{ width: '1600px', height: '700px' }}
//         />

//         <div
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)'
//           }}
//         >
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type='text'
//               placeholder='Search...'
//               style={{
//                 width: '600px',
//                 height: '50px',
//                 padding: '5px',
//                 fontSize: '16px'
//               }}
//             />
//             <img
//               src="" // Replace with the actual path to your search icon image or SVG
//               alt="Search Icon"
//               style={{
//                 marginLeft: '10px',
//                 width: '20px',
//                 height: '20px',
//                 cursor: 'pointer'
//               }}
//             />
//           </div>
//           {/* Add any additional search functionality here */}
//         </div>
//       </div>

//       <div id='about'>
//         <About />
//       </div>
//       <div id='cont'>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Homepage;
