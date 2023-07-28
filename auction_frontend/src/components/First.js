import React from 'react'
import './First.css'
import { Button, TextField, Box } from '@mui/material'
import { Link } from 'react-router-dom'

export default function First() {
  return (
    <div>
    <div className='first'>
    <h1 className='hi'><center>WELCOME TO MN AUCTIONS</center></h1>
         <h3 className='hello'><center>Seller Login</center></h3>
         <Box textAlign="center">
          <Link to="/sellerlogin"><Button variant="contained" color="primary" type="submit" style={{width:"200px"}}>
            SELLER
          </Button>
          </Link>
        </Box>
       
        <h3 className='hello'><center>Cuustomer Login</center></h3>
         <Box textAlign="center">
         <Link to="/login"><Button variant="contained" color="primary" type="submit" style={{width:"200px"}}>
            CUSTOMER
          </Button>
          </Link>
        </Box>
        </div>
    </div>
  )
}