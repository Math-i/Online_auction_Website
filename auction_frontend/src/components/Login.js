// import React from 'react'
// import { Button,TextField,Box } from '@mui/material'
//  import { Link } from 'react-router-dom'

// import './Login.css'

// export default function Loginpage() {
  
//   return (
//   <div>
// <div class="split left">
//   <div class="centered">
//   <div>
//       <Box
//         component="form"
//         noValidate
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: { sm: '1fr 1fr' },
//           gap: 2,
//         }}
//       ></Box>

//       <form className='login' action='http://localhost:3000/home'>
//         <center>
//           <h1>Login</h1><br></br>
//           <label>Email</label><br></br>
//           <br></br>
//           <TextField
//             id="outlined-basic"
//             label="email"
//             variant="outlined"
//             type="email"
//             required
//           /><br />
//           <br></br>
//           <label>Password</label><br></br>
//           <br></br>
//           <TextField
//             id="outlined-basic"
//             label="password"
//             variant="outlined"
//             type="password"
//             pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
//             title="Must contain at least one number, one uppercase and lowercase letter, and be at least 8 characters long"
//             required
//           /><br />
//           <br></br>
//           <br></br>
//         </center>
//         <Box textAlign="center">
//           <Button variant="contained" color="secondary" type='submit' >LOGIN</Button>
//         </Box>
//         <br></br>

//         <p><center>Don't have an Account? <Link to="/signup">Signup</Link></center></p>
//       </form>
//     </div>
//         </div>
//         </div>
// <div class="split right">
//   <div class="centered">
//     <img src="https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg"/>
   
    
//   </div>
// </div>

//     </div>
//   )
// }



import React from 'react'
import { Button,TextField,Box } from '@mui/material'
 import { Link } from 'react-router-dom'

import './Login.css'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
export default function Loginpage() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const user=[username,];
  console.log(user);  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleLogin = () => {
  //   // Your login logic here...

  //   // After successful login, navigate to the homepage with the username as state
  //   navigate('/home', { state: { username: username } });
  //   setname(username);
   
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/authenticate', 
      { name:username,
        email:email,
      password:password ,
    }
      );
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      
      dispatch({ type: "LOGIN", payload: user });
      alert("Succcess!");
      navigate("/home");
      
    } catch (error) {
      console.error('Login failed:', error);
      alert("Invalid Credentials:"+error.message);
    }
  };
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

      <form className='login' onSubmit={handleSubmit} >
        <center>
          <h1>Login</h1><br></br>
          <label>Username</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            type="text"
            onChange={(e)=>setusername(e.target.value)}
            required
          /><br />
          <label>Email</label><br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="email"
            onChange={(e)=>setemail(e.target.value)}
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
            onChange={(e)=>setpassword(e.target.value)}
            required
          /><br />
          <br></br>
          <br></br>
        </center>
        <Box textAlign="center">
          <Button variant="contained" color="secondary" type='submit' style={{width:'100px'}}>LOGIN</Button>
        </Box>
        <br></br>

        <p><center>Don't have an Account? <Link to="/signup">Signup</Link></center></p>
      </form>
    </div>
        </div>
        </div>
<div class="split right">
  <div class="centered">
    <img src="https://img.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg?size=626&ext=jpg&ga=GA1.1.283105248.1688981036&semt=sph"/>
   
    
  </div>
</div>

    </div>
  )
}