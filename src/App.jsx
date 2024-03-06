import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Login/LoginPage'
import Navbar from './components/Navbar/Navbar';
import StudyMaterial from './Pages/Studymaterials/StudyMaterials'
import Json from './Pages/JsonUpload/Json';
import Dashboard from './Pages/Dashboard/Dashboard';



function App() {
  return (
    <div>
    
     
      <Router>
      <Navbar />
      
        <Routes>
          <Route path="/studymaterial" element={<StudyMaterial/> } />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/test" element={<Json />} /> 
          <Route path="/home" element={<Home />} />

          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
