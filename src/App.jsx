import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/Login/LoginPage'

import StudyMaterial from './Pages/Studymaterials/StudyMaterials'
import Json from './Pages/JsonUpload/Json';
import Dashboard from './Pages/Dashboard/Dashboard';
import APL from './Pages/APL/APL';
import SignUp from './Pages/SignUp/SignUp';


function App() {
  return (
    <div>

     
      <Router>
      
      
        <Routes>

        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apl" element={<APL />} />
          <Route path="/signup" element={<SignUp />} />

          

          <Route path="/jsonupload" element={<Json />} /> 
          <Route path="/home" element={<Home />} />
            <Route path="/" element={<LoginPage />} />
          
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
<Route path="/studymaterial" element={<StudyMaterial/> } />
          
*/