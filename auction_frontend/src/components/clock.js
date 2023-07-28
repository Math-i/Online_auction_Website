
import React, { useEffect, useState } from 'react';
import './clock.css'; // Import the CSS file
import axios from 'axios';
import Navbar from './Navbar';

const ProductDetailPage = ({ product }) => {
  const [data, setData] = useState([]);
  const [showBidInput, setShowBidInput] = useState(false); // State to control input field visibility
  const [bidValue, setBidValue] = useState('');
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  // New state variable to track form completion status
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getauction/${product}`)
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  const submitAd = (e) => {
    e.preventDefault()
    console.log("asdfghjkl")
    axios.post("http://localhost:8080/postbid",{
      name:name,
      dob:dob, 
      bidvalue:bidValue,
      contact:contact,
      email:email
    }
    )
    .then((response)=>{
        console.log(response);
        
      })
      .catch((error)=>{
        console.error(error);
      });

  };

  // console.log(product);

  const handleBidButtonClick = () => {
    setShowBidInput(true);
    setShowForm(true); // Show the form when "BID" button is clicked
  };

  const handleBidInputChange = (event) => {
    setBidValue(event.target.value);
  };

  const handleSubmit = () => {
    if (formCompleted) {
      console.log('Form submitted');
      // Handle form submission logic here

      if (bidValue) {
        // Convert the bidValue and minamt to numbers for comparison
        const bidAmount = parseFloat(bidValue);
        const minAmount = parseFloat(data[0]?.minamt || 0);

        if (bidAmount > minAmount) {
          // Display the alert box
          window.alert(`You have submitted a bid of $${bidValue}`);
        } else {
          // Bid amount is not greater than the minimum amount, show an error message
          window.alert('Bid amount must be greater than the minimum amount.');
        }
      }
    } else {
      window.alert('Please fill out all form fields.');
    }
  };

  // Update the bidamt when bidValue changes
  // useEffect(() => {
  //   if (data[0]) {
  //     const bidAmount = parseFloat(bidValue);
  //     const bidAmtPercentage = 0.9; // 90% of the bidValue, adjust as needed
  //     const bidAmountPercentageOfMinAmt = bidAmount * bidAmtPercentage;
  //     const minAmount = parseFloat(data[0]?.minamt || 0);
  //     const bidamt = Math.max(minAmount, bidAmountPercentageOfMinAmt);
  //     setData((prevData) => [{ ...prevData[0], bidamt }]);
  //   }
  // }, [bidValue, data]);

  // Update the bidamt when bidValue changes
useEffect(() => {
  if (data[0]) {
    const bidAmount = parseFloat(bidValue);
    const bidAmtPercentage = 0.9; // 90% of the bidValue, adjust as needed
    const bidAmountPercentageOfMinAmt = bidAmount * bidAmtPercentage;
    const minAmount = parseFloat(data[0]?.minamt || 0);
    const bidamt = Math.max(minAmount, bidAmountPercentageOfMinAmt);
    setData((prevData) => [{ ...prevData[0], bidamt }]);
  }
}, [bidValue]);

  // Update the form completion status based on the form field values
  useEffect(() => {
    setFormCompleted(name && dob && contact && email);
  }, [name, dob, contact, email]);

  return (
    <>
      <Navbar />
      <div className="product-detail-container">
        <div className="product-image">
          <img src="https://trueso.in/wp-content/uploads/2018/12/antique-jewellery-2.jpg" alt="Product" />
        </div>
        <div className="product-specs">
          <h1 className="product-name">{data[0]?.proname}</h1>
          <ul className="spec-list">
            <li>
              <div>Bidding Minimum Amount: {data[0]?.minamt}</div>
              <div>Bidding Start Date: {data[0]?.startdate}</div>
              <div>Bidding End Date: {data[0]?.enddate}</div>
              <button onClick={handleBidButtonClick}>BID</button>

              {/* Conditionally render the form */}
              {showForm && (
                <form onSubmit={submitAd}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* Render the bid input field */}
                  {showBidInput && (
                    <div>
                      <input
                        type="text"
                        value={bidValue}
                        onChange={handleBidInputChange}
                        placeholder="Enter your bid amount"
                        style={{
                          padding: '10px',
                          fontSize: '16px',
                          border: '1px solid #ccc',
                          borderRadius: '5px',
                          outline: 'none',
                          marginBottom: '10px', // Add some space between the bid input field and the Submit button
                        }}
                      />

                      {/* Render the "Submit" button */}
                      <button onClick={handleSubmit}>Submit</button>
                    </div>
                  )}
                </form>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
