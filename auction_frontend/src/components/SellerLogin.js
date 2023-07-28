import React from 'react'
import { Button,TextField,Box } from '@mui/material'
 import { Link } from 'react-router-dom'

import './Login.css'

export default function SellerLoginpage() {
  
  return (
  <div>
        <div class="split left">
  <div class="centered">
  <div>
      <Box
        component="form"
        noValidate
        sx={{
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          gap: 2,
        }}
      ></Box>

      <form className='login' action='http://localhost:3000/sellerhome'>
        <center>
          <h1>Login</h1><br></br>
          <label>Email</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="email"
            required
          /><br />
          <br></br>
          <label>Password</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long"
            required
          /><br />
          <br></br>
          <br></br>
        </center>
        <Box textAlign="center">
          <Button variant="contained" color="secondary" type='submit' >LOGIN</Button>
        </Box>
        <br></br>

        <p><center>Don't have an Account? <Link to="/signup">Signup</Link></center></p>
      </form>
    </div>
        </div>
        </div>
<div class="split right">
  <div class="centered">
    <img src="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"/>
   
    
  </div>
</div>
</div>
  )
}