import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Giving from "./pages/Giving";
import Sermons from "./pages/SearchSermons";
import About from "./pages/About";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import LastMessenger from "./components/LastMessenger";
import First_Section from "./components/First_Section";
import SermonSeries from "./components/SermonSeries";
import LocationMap from "./components/LocationMap"; // <-- Imported LocationMap component
import OriginalSin from "./components/OriginalSin";
import WaterBaptism from "./components/WaterBaptism";
import SabbathTruth from "./components/SabbathTruth";
import Communion from "./components/Communion";
import Rapture from "./components/Rapture";
import Godhead from "./components/Godhead";
import SpokenWord from "./components/SpokenWord";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <main className="flex-grow-1">
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <LastMessenger />
                <First_Section />
              
              </>
            }
          />

          {/* Existing pages */}
          <Route path="/giving" element={<Giving />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/location" element={<LocationMap />} /> {/* <-- Dedicated route for /location */}

          {/* Inner sub-pages */}
          <Route path="/original-sin" element={<OriginalSin />} />
          <Route path="/water-baptism" element={<WaterBaptism />} />
          <Route path="/sabbath-truth" element={<SabbathTruth />} />
          <Route path="/communion" element={<Communion />} />
          <Route path="/rapture" element={<Rapture />} />
          <Route path="/godhead" element={<Godhead />} />
          <Route path="/spoken-word" element={<SpokenWord />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;