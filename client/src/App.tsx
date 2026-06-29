import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Giving from "./pages/Giving";
import Sermons from "./pages/Sermons";
import About from "./pages/About";
import Login from "./pages/Login"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;