import React from 'react';
import NavBar from './components/NavBar'; // Assumes your NavBar component location
import HeroSection from './components/HeroSection'; // Assumes your HeroSection component location
import First_Section from './components/First_Section'; // Assumes your First_Section component location
import SermonSeries from './components/SermonSeries';
import Footer from './components/Footer'; // 1. IMPORT THE NEW FOOTER

function App() {
  return (
    <div className="app-container">
      {/* Navigation Layer */}
      <NavBar />

      {/* Main Page Layout Content */}
      <main>
        <HeroSection />
        <First_Section />
        <SermonSeries />
      </main>

      {/* 2. RENDER THE FOOTER AT THE VERY BOTTOM */}
      <Footer />
    </div>
  );
}

export default App;