// import React from 'react'
// import { Button,TextField,Box } from '@mui/material'
//  import { Link,useNavigate } from 'react-router-dom'
// import  { useState } from 'react'

// import './Signpage.css';
// export default function Signpage() {
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [passwordError, setPasswordError] = useState('')
//   const navigate=useNavigate();
  
  
  

//   const validatePassword = () => {
//     if (password !== confirmPassword) {
//       setPasswordError('Passwords do not match')
//     } else if (password.length < 6) {
//       setPasswordError('Password should be at least 6 characters long')
//     } else {
//       setPasswordError('password correct')
//     }
//   }

//   const handleSignUp = (e) => {
//     e.preventDefault()
//     validatePassword();
//     // Perform signup logic here if all fields are valid
//     if (passwordError==='password correct') {
//       // Perform signup logic
//       // console.log("hii");
//       navigate('/');
     
     
//     }else{
//       console.log("error")
//     }
//   }

//   return (
//     <div>
//          <div class="split right">
//   <div class="centered">
//   <form className='signup' onSubmit={handleSignUp}>
//         <center>
//           <h1>SignUp</h1>
//           <br />
//           <label>Name</label>
//           <br />
//           <br />
//           <TextField id="outlined-basic" label="name" variant="outlined" type="text" required />
//           <br />
//           <br />
//           <label>Email</label>
//           <br />
//           <br />
//           <TextField id="outlined-basic" label="email" variant="outlined" type="email" required />
//           <br />
//           <br />
//           <label>Password</label>
//           <br />
//           <br />
//           <TextField
//             id="outlined-basic"
//             label="password"
//             variant="outlined"
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <br />
//           <label>Confirm Password</label>
//           <br />
//           <br />
//           <TextField
//             id="outlined-basic"
//             label="confirm"
//             variant="outlined"
//             type="password"
//             required
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           {passwordError && <p className="error">{passwordError}</p>}
//         </center>
//         <br/>
//         <Box textAlign="center">
//           <Button variant="contained" color="secondary" type="submit" >
//             SIGNUP
//           </Button>
//         </Box>
//         <p>
//           <center>
//             Have an Account? <Link to="/">Login</Link>
//           </center>
//         </p>
//       </form>
//         </div>
//         </div>

  
      
    
//     <div class="split left">
//     <div class="centered">
//       <img src="https://thumbs.dreamstime.com/z/auction-stamp-auction-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123963400.jpg"/>
//       </div>
//       </div>
//       </div>
     
//   )
// }




// import React, { useState } from 'react';
// import axios from 'axios';

// import { Link, useNavigate } from 'react-router-dom';

// const Signpage = () => {
//   const styles = {
//     container: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       fontFamily: 'Arial, sans-serif',
//     },
//     title: {
//       textAlign: 'center',
//       marginBottom: '20px',
//       fontSize: '24px',
//       fontWeight: 'bold',
//       color: '#333',
//       textTransform: 'uppercase',
//       fontFamily: 'Verdana, sans-serif',
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//       width: '600px',
//       padding: '20px',
//       border: '2px solid black',
//       borderRadius: '4px',
//     },
//     inputContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       marginBottom: '20px',
//     },
//     label: {
//       marginBottom: '5px',
//       fontSize: '16px',
//     },
//     input: {
//       padding: '10px',
//       fontSize: '16px',
//     },
//     button: {
//       padding: '10px',
//       fontSize: '16px',
//       backgroundColor: '#33bbff',
//       color: 'white',
//       border: 'none',
//       cursor: 'pointer',
//       width: '90px',
//       marginLeft: '30px',
//     },
//     error: {
//       color: 'red',
//       marginBottom: '10px',
//       fontSize: '14px',
//       textAlign: 'center',
//       fontStyle: 'italic',
//       fontWeight: 'bold',
//       backgroundColor: '#FBE3E4',
//       padding: '8px',
//       borderRadius: '4px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//     },
//   };

//   const [name, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const [error, setError] = useState('');
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate('/');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     setIsSubmit(true);

//     // Check if the passwords match
//     if (password !== confirmPassword) {
//       window.alert('Passwords do not match');
//       setIsSubmit(false);
//       return;
//     }

//     // Validate the email format using a regular expression
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.match(emailRegex)) {
//       setError('Invalid email address');
//       setIsSubmit(false);
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
//         name: name,
//         email: email,
//         password: password,
//       });

//       console.log(response.status);
//       if (response.status === 200) {
//         setUsername('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//         setError(''); // Clear any previous error messages
//         navigate('/');
//       }
//     } catch (error) {
//       alert(error);
//       setIsSubmit(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form style={styles.form} onSubmit={handleSubmit}>
//         <h2 style={styles.title}>Signup</h2>
//         {error && <div style={styles.error}>{error}</div>}
//         <div style={styles.inputContainer}>
//           <label style={styles.label}>First Name:</label>
//           <input
//             style={styles.input}
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>

//         <div style={styles.inputContainer}>
//           <label style={styles.label}>Email:</label>
//           <input
//             style={styles.input}
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div style={styles.inputContainer}>
//           <label style={styles.label}>Password:</label>
//           <input
//             style={styles.input}
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div style={styles.inputContainer}>
//           <label style={styles.label}>Confirm Password:</label>
//           <input
//             style={styles.input}
//             type="password"
//             placeholder="Confirm your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <button style={styles.button} type="submit">
//             Sign Up
//           </button>
//         </div>
//         <p>
//           Already have an account? <Link to="/">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signpage;


import React, { useState } from 'react';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      textTransform: 'uppercase',
      fontFamily: 'Verdana, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '600px',
      padding: '20px',
      border: '2px solid black',
      borderRadius: '4px',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    label: {
      marginBottom: '5px',
      fontSize: '16px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#33bbff',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      width: '90px',
      marginLeft: '30px',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
      fontSize: '14px',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      backgroundColor: '#FBE3E4',
      padding: '8px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  };

  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmit(true);

    // Check if the passwords match
    if (password !== confirmPassword) {
      window.alert('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', {
        name: name,
        email: email,
        password: password,
      });

      console.log(response.status);
      if (response.status === 200) {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(''); // Clear any previous error messages
        navigate('/login');
      }
    } catch (error) {
      alert(error);
      setIsSubmit(false);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Signup</h2>
        {error && <div style={styles.error}>{error}</div>}
        <div style={styles.inputContainer}>
          <label style={styles.label}>First Name:</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email:</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={styles.button} type="submit">
            Sign Up
          </button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;