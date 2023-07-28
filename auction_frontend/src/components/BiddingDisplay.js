import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerNavbar from './SellerNavbar';
import './BiddingDisplay.css'

export default function BiddingDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getbid')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <SellerNavbar />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Bid Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((bid, index) => (
              <tr key={index}>
                <td>{bid.name}</td>
                <td>{bid.dob}</td>
                <td>{bid.contact}</td>
                <td>{bid.email}</td>
                <td>{bid.bidvalue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
