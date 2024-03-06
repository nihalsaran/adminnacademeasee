import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Login/LoginPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
    
     
      <Router>
      <Navbar />
      
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
