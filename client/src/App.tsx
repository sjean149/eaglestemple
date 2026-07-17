import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Giving from "./pages/Giving";
import Sermons from "./pages/SearchSermons";
import About from "./pages/About";
import Login from "./pages/Login"; 
import NavBar from "./components/NavBar";


function App() {
  return (

    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;