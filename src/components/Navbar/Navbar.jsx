// src/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        
       
        <li className="nav-item">
          <Link to="/" className="nav-link">Login</Link>
        </li>
        {/* Add more nav items here as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
