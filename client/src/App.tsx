import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import WaterBaptism from './components/WaterBaptism'; 
import OriginalSin from './components/OriginalSin';
import HeroSection from './components/HeroSection';
import First_Section from './components/First_Section';
import SermonSeries from './components/SermonSeries'; 
import Footer from './components/Footer';
import BackgroundAudio from './components/BackgroundAudio';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Persistent Components that stay playing/active on all pages */}
        <BackgroundAudio /> 
        <NavBar />
        
        <Routes>
          {/* Main Landing/Home Page Layout Elements */}
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <First_Section />
                <SermonSeries /> 
              </>
            } 
          />
          <Route path="/doctrine/water-baptism" element={<WaterBaptism />} />
          
          {/* Clean, standard lowercase slug */}
          <Route path="/doctrine/original-sin" element={<OriginalSin />} />
          
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;