import React, { useState } from 'react';
import './login.css';

function LoginPage() {

 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (
    
    <div>

      <form onSubmit={handleLogin}>
      <h1>Auction Login</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        

        <button type="submit">Login</button>
        <br></br>
        <br></br>
        <p>Dont have an account?Sign up!!</p>
        

        
        <button type="submit">Sign Up</button>
   
      </form>
    </div>
  );
}

export default LoginPage;
