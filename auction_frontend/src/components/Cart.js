import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { removeFromCart } from './actions';


// const Cart = ({ cart }) => {
//     return (
//       <div>
//         <Navbar />
//         <h2>Shopping Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div>
//             {cart.map((item, index) => (
//               <div key={index}>
//                 <img src={item.product.src} alt={item.product.text} style={{ width: '50px', height: '50px' }} />
//                 <p>Title: {item.product.text}</p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };
const Cart = ({ cart, removeFromCart }) => {
    return (
      <div>
        <Navbar />
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index}>
                <img src="https://trueso.in/wp-content/uploads/2018/12/antique-jewellery-2.jpg" alt={item.product.text} style={{ width: '50px', height: '50px' }} />
                <p>Title: bmw</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};


const mapDispatchToProps = {
    removeFromCart,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);
  