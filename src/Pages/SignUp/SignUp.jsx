import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { getFirestore } from "firebase/firestore";
import './SignUp.css'; // Import CSS file

const auth = getAuth(); // Initialize Firebase Authentication

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [faculty, setFaculty] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Save additional user data to Firestore
      const adminsCollectionRef = collection(getFirestore(), "admins"); // Get Firestore collection reference
      await addDoc(adminsCollectionRef, { // Add document to the collection
        name,
        email,
        faculty,
        role,
      });
      // Navigate to "/home" upon successful signup
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };  


  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Faculty:</label>
          <select
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            required
          >
            <option value="">Select Faculty</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="Commerce">Commerce</option>
          </select>
        </div>
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SignUp;
