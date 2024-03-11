// LoginPage.js

import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css'; // Import CSS file
import Navbar from './../../components/Navbar/Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Redirect to home page after successful login
        navigate('/home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="container1">
      <Navbar />
    <div className="container">
       
     
      <h2>Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="error">{error}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default LoginPage;
