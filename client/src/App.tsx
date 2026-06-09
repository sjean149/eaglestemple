import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import First_Section from './components/First_Section';
import SermonServices from './components/SermonSeries'
import Footer from './components/Footer';
//import BackgroundAudioa from './components/BackgroundAudio'; // Import the music player

function App() {
  return (
    <div className="App">
    
      <NavBar />
      <HeroSection />
      <First_Section />
      <SermonServices />
      {/* Other sections... */}
      <Footer />
    </div>
  );
}

export default App;