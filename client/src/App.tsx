import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Doctrinal & Core Feature Pages
import Home from './pages/Home'; 
import WaterBaptism from './components/WaterBaptism';
import SabbathTruth from './components/SabbathTruth'; 
import OriginalSin from './components/OriginalSin';
import Leadership from './components/Leadership';

const App: React.FC = () => {
  return (
    <Router>
      {/* Global Layout Components (like a premium <Navbar /> or <Header />) 
        can be rendered right here to persist across all views.
      */}
      
      <Routes>
        {/* Core Home Navigation Grid Route */}
        <Route path="/" element={<Home />} />

        {/* 3D Fluid Simulation Water Baptism Study */}
        <Route path="/water-baptism" element={<WaterBaptism />} />
        <Route path="/original-sin" element={<OriginalSin />} />
         <Route path="/leadership" element={<Leadership />} />
        {/* Interactive 24-Point Accordion Sabbath Expositions */}
        <Route path="/sabbath-truth" element={<SabbathTruth />} />
        
        {/* Robust 404/Fallback Catch-All:
          Gracefully handles typos or broken URLs by sending traffic back to Home.
        */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Global Footer Elements (like copyright notices or contact signatures) 
        can be cleanly rendered here underneath your page routes.
      */}
    </Router>
  );
};

export default App;