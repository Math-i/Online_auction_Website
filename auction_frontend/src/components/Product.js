

import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { useEffect,useState } from 'react';

const products = [
  {
  source: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5020.jpg?w=360',
  title: "MENS WEAR",
  route:"/mens"
},
{
  source: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww&w=1000&q=80',
  title: "WOMENS WEAR",
  route:"/womens"
},
{
  source: 'https://images.unsplash.com/photo-1518893883800-45cd0954574b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW50aXF1ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
  title: "ANTIQUES",
  route:"/ant"
},
{
  source: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  title: "ARTS",
  route:"/arts"
},
{
  source: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-best-luxury-cars-2023-bmw-i7-lead.jpg',
  title: "CARS",
  route:"/cars"
}
];

const images = [
  {
    src: 'https://trueso.in/wp-content/uploads/2018/12/antique-jewellery-2.jpg',
    text: 'Antique jewellery',
    auction: 'AUCTION ACTIVE',
    route:"/clk"
  },
  {
    src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-mens-shoe-dTVTCk.png',
    text: 'SHOES',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyM5ahXqYgRbCcFH1fr10JBuLH2yFReTV7zw&usqp=CAU',
    text: 'DRESS',
  },
  {
    src: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21857350/2023/2/7/80faeb4b-e8fe-494a-932b-6105ed61e71f1675751032671eCraftIndiaCopper-TonedWhiteTexturedContemporaryWallClock1.jpg',
    text: 'VINTAGE CLOCK',
  },
  {
    src: 'https://m.media-amazon.com/images/I/71jKhQsY8XL.jpg',
    text: 'VINTAGE CUTLERY',
  },
  {
    src: 'https://5.imimg.com/data5/SELLER/Default/2022/4/JD/IA/BI/20937698/ktc-v-08-kids-wooden-toys.jpg',
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

const Products = ({cart, addToCart ,setproduct}) => {
  const [quantity, setQuantity] = React.useState(1);
  const[data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:8080/getauction`)
    .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    },[]);
    console.log(data);
  
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity); // Dispatch the addToCart action with product and quantity
  };

  return (
    <div>
      <Navbar />
      <div className='whole'>
        <div className="product-images">
          {products.map((product, index) => (
            <div key={index} className='aligns'>
              <Link to={product.route}>
                <img src={product.source} alt={product.title} className="product-image" style={{ width: '100px', height: '100px', borderRadius: '60%' }} />
              </Link>
              <h3>{product.title}</h3>
            </div>
          ))}
        </div>
        <h1 className='fimi'>FEATURED PRODUCTS</h1>

        <div className="departments">
          <div className="departmentcontainer">
            {data.map((image, index) => (
              <div key={index} className="grid-item">
                
                 <Link to="/clk"><img src={image.img} width={'200px'} height={'200px'} alt={image.text} onClick ={()=>setproduct(image.proname)} /></Link> 
                
                <h3>{image.proname}</h3>
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
                <button className="product-page__add-to-cart-button" onClick={() => handleAddToCart(image, quantity)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart, // Assuming you have a cart array in the Redux store
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
