import HeroSection from '../components/HeroSection';
import First_Section from '../components/First_Section';
import SermonServices from '../components/SermonSeries'
import Footer from '../components/Footer';
import BackgroundAudio from '../components/BackgroundAudio'; // Import the music player
import NavBar  from '../components/NavBar';

function Home () {
  return (
    <div className="App">
      <BackgroundAudio />
      <NavBar />
      <HeroSection />
      <First_Section />
      <SermonServices />
      {/* Other sections... */}
      <Footer />
    </div>
  );
}

export default Home;