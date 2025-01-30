import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Homecontent from './Components/Homecontent';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import Help from './Components/Help';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project1 from './Components/Project1';
import Loader from './Components/Loader';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from './Components/Education'

function App() {
  const [showContent, setShowContent] = useState(false);

  // Function to show main content when Start button is clicked
  const handleStart = () => {
    setShowContent(true);
  };

  return (
    <Router>
      {!showContent ? (
        <Loader onStart={handleStart} />
      ) : (
        <div className='website' style={{ overflowX: 'hidden' }}>
           <Navbar />
          <Homecontent />
          <About/>
          <Education/>
          <Technologies/>
          <Project1/>
          <Help />
          <Contact/>
          
        
          <Footer /> 
          
        </div>
      )}
    </Router>
  );
}

export default App;
