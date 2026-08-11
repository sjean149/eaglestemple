import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import OriginalSin from "./components/OriginalSin";
import WaterBaptism from "./components/WaterBaptism";
import SabbathTruth from "./components/SabbathTruth";
import HeroSection from "./components/HeroSection";
import First_Section from "./components/First_Section";
import SermonSeries from "./components/SermonSeries";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-black text-light min-vh-screen d-flex flex-column selection-gold">
        {/* Persistent top navigation bar across all pages */}
        <NavBar /> 

        <main className="flex-grow-1">
          <Routes>
            {/* 
              HOMEPAGE ROUTE
              Removed the <Home /> component to clear out the duplicate 
              slideshow banner, message series, and text transcript sections.
            */}
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

            {/* Inner Sub-pages */}
            <Route path="/original-sin" element={<OriginalSin />} />
            <Route path="/water-baptism" element={<WaterBaptism />} />
            <Route path="/sabbath-truth" element={<SabbathTruth />} />
          </Routes>
        </main>
        
        {/* Persistent footer across all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;