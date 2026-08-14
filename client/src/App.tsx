import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Giving from "./pages/Giving";
import Sermons from "./pages/SearchSermons";
import About from "./pages/About";
import Login from "./pages/Login";

import NavBar from "./components/NavBar";
import OriginalSin from "./components/OriginalSin";
import WaterBaptism from "./components/WaterBaptism";
import SabbathTruth from "./components/SabbathTruth";
import HeroSection from "./components/HeroSection";
import First_Section from "./components/First_Section";
import Communion from "./components/Communion";
import Rapture from "./components/Rapture";
import SermonSeries from "./components/SermonSeries";
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
                <First_Section />
                <SermonSeries />
              </>
            }
          />

          {/* Existing pages */}
          <Route path="/giving" element={<Giving />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Inner sub-pages */}
          <Route path="/original-sin" element={<OriginalSin />} />
          <Route path="/water-baptism" element={<WaterBaptism />} />
          <Route path="/sabbath-truth" element={<SabbathTruth />} />
          <Route path="/communion" element={<Communion />} />
          <Route path="/rapture" element={<Rapture />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
